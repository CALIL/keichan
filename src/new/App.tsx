import React, { useState, useEffect } from 'react'

import { Button, Intent, Spinner, Card, Elevation, Tag, Icon, InputGroup, FormGroup } from "@blueprintjs/core";

import isbn_utils from 'isbn-utils'

import api from '../api'
import normalize_isbn from '../normalize_isbn.js'

const REGION = 'recipe'


let keyBuffer = ''
let keyTimer = null

// Window全体でのキー入力を拾う
const onKeyDown = (e: any, callback: (keyBuffer: string) => {}): void => {
    const ev = e || window.event
    const key = ev.keyCode || ev.which || ev.charCode
    // console.log(keyBuffer)
    // console.log(e.key)
    // バーコードリーダーの入力終わり、Enterが押された時の処理
    if (e.key === 'Enter' || key === 13) {
        callback(keyBuffer)
        if (keyTimer) clearTimeout(keyTimer)
        keyBuffer = ''
        // 入力された文字を拾う
    } else {
        if (e.key.length === 1) {
            keyBuffer += e.key
        // codabarの制御コードが入った時
        } else if (e.key === 'Shift') {
        } else {
            keyBuffer = ''
        }
        if (keyTimer) clearTimeout(keyTimer)
        keyTimer = setTimeout(() => {
            // console.log('clear')
            callback(keyBuffer)
            keyBuffer = ''
        }, 300)
    }
}


// const bookDataList = [
//     {
//         id: '10001' or '9784774142230',
//         items: [
//             {
//                 type: 'book',
//                 title: 'タイトル',
//                 author: '著者',
//                 publisher: '出版社',
//                 isbn: '9784774142230',
//                 tags: ['ほにゃらら文庫']
//             }
//         ]
//     }
// ]



const App = (props) => {


    const [bookDataList, setBookDataList] = useState([])

    const [targetBook, setTargetBook] = useState(null as any)
    const [suggestBooks, setSuggestBooks] = useState([])
 
    const [licenseKey, setLicenseKey] = useState('gk-xxxxxxxxxxxxxxx')
    const [mode, setMode] = useState('isbn')

    useEffect(() => {
        window.document.addEventListener('keydown', (e) => onKeyDown(e, checkStr))
    }, [])

    const checkStr = async (str) => {
        const isbn = normalize_isbn(str)
        if (isbn) {
            const book: any = await getBook(isbn)
            if (book) {
                if (mode === 'isbn') {
                    book.id = book.isbn
                    setBookDataList([...bookDataList, book])
                }
                // setTargetBook(book)
                // const books = await getBooks(book)
                // setSuggestBooks(books as any)
            }
        } else {
            if (str.match(/^192/) !== null) return
            setMode('management')
            setBookDataList([...bookDataList, {
                id: str,
            }])
        }
    }

    const getBook = async (isbn) => {
        setTargetBook(null)
        setSuggestBooks([])
        return new Promise(async (resolve, reject) => {
            const apiInstance = new api({ isbn: isbn, region: REGION }, async (data) => {
                // console.log(data)
                if (data.count >= 1) {
                    apiInstance.kill()
                    const b = data.books[0]
                    const book = {
                        id: b.id,
                        title: b.title,
                        author: b.author,
                        publisher: b.publisher,
                        pubdate: b.pubdate,
                        isbn: b.isbn,
                        tags: []
                    }
                    let i = isbn_utils.parse(normalize_isbn(book.isbn))
                    book.isbn = i.asIsbn13()
                    const openBDBooks = await getOpenBD(book.isbn)
                    if (openBDBooks[0] !== null) {
                        resolve(openBDBooks[0])
                    } else {
                        resolve(book)
                    }
                } else if (data.running === false && data.count === 0) {
                    reject()
                }
            })
        })
    }

    const getBooks = async (targetBook) => {
        // console.log(book)

        const author = targetBook.author.split(',')[0]
        const publisher = targetBook.publisher
        const pubdate = targetBook.pubdate

        return new Promise(async (resolve, reject) => {

            let apiInstance = new api({ author: author, publisher: publisher, year_start: pubdate, region: REGION }, async (data) => {
                if (apiInstance.killed) return
                if (data.count > 5) apiInstance.kill()
                console.log(data)
                if (data.count >= 1) {
                    const books = []
                    data.books.forEach((book => {
                        if (book.isbn === null) return
                        let pubdate = 0
                        if (book.pubdate) {
                            if (typeof (book['pubdate']) !== 'string') {
                                pubdate = book.pubdate
                            } else {
                                pubdate = Number(book.pubdate.split('/')[0].split('.')[0])
                            }
                        }
                        let i = isbn_utils.parse(normalize_isbn(book.isbn))
                        let isbn = null
                        try {
                            isbn = i.asIsbn13()
                        } catch {
                        }
                        if (isbn) {
                            books.push({
                                'title': book.title + ' ' + book.volume,
                                'author': book.author.split(',')[0],
                                'publisher': book.publisher,
                                'isbn': isbn,
                                'pubdate': pubdate
                            })
                        }
                    }))


                    books.sort(function (a, b) {
                        if (a.isbn < b.isbn) return -1
                        if (a.isbn > b.isbn) return 1
                        return 0
                    })
                    let newBooks = []
                    const excludeBooks = []
                    let excludeTargetBook = false
                    books.forEach((book) => {
                        if (book.isbn !== targetBook.isbn) {
                            if (excludeTargetBook) {
                                newBooks.push(book)
                            } else {
                                excludeBooks.push(book)
                            }
                        }
                        if (book.isbn === targetBook.isbn) excludeTargetBook = true
                    })
                    newBooks = newBooks.concat(excludeBooks)

                    const isbns = []
                    newBooks.forEach((book) => {
                        isbns.push(book.isbn)
                    })
                    const openBDBooks = await getOpenBD(isbns)
                    resolve(openBDBooks)
                }
            })
        })
    }

    const getOpenBD = async (isbns) => {
        return new Promise(async (resolve, reject) => {

            const openBDData = await fetch('https://api.openBD.jp/v1/get?isbn=' + isbns.join(',')).then(r => r.json())
            console.log(openBDData)

            const openBDBooks = []
            openBDData.forEach((book) => {
                if (book) {
                    const tags = []
                    try {
                        book.onix.DescriptiveDetail.Collection.TitleDetail.TitleElement.forEach((title, i) => {
                            // console.log(title)
                            // console.log(title.TitleText.content)
                            if (!tags.includes(title.TitleText.content)) {
                                tags.push(title.TitleText.content)
                            }
                        })
                    } catch {}
                    let volume = book.summary.volume
                    try {
                        // console.log(book.onix.DescriptiveDetail.TitleDetail.TitleElement.PartNumber)
                        if (volume === '') {
                            volume = book.onix.DescriptiveDetail.TitleDetail.TitleElement.PartNumber
                        }
                    } catch {}

                    const openBDBook = {
                        'title': [book.summary.title, volume].join(' '),
                        'author': book.summary.author,
                        'publisher': book.summary.publisher,
                        'isbn': book.summary.isbn,
                        'pubdate': book.summary.pubdate,
                        'cover': book.summary.cover,
                        'tags': tags
                    }
                    openBDBooks.push(openBDBook)
                }
            })
            resolve(openBDBooks)
        })
    }

    return (
        <div id="new">
            <header>
                <h1>
                    カーリルtoolbox: keichan
                    {mode==='management' ? (<span className="mode">資料コード</span>) : null}
                </h1>
            </header>
            <main>
                <div className="left">
                    <div className="barcode active">
                        <Tag large className="tag">100014</Tag>
                    </div>
                    <div className="barcode">
                        <Tag large className="tag">100013</Tag>
                        <p>SPY×FAMILY 1</p>
                    </div>
                    <div className="barcode">
                        <Tag large className="tag">100012</Tag>
                        <p>1Q84 Book2</p>
                    </div>
                </div>
                <div className="main">
                    <Card className="card active" interactive={true} elevation={Elevation.TWO}>
                        <div>
                            <Tag className="tag" large>100014</Tag>
                            <Tag className="tag">管理バーコード</Tag>
                        </div>
                        <Icon icon="delete" size={25} color={'#ffffff'} />
                    </Card>
                    {/* <h3>本を追加</h3> */}
                    {/* <Card className="card indent" interactive={true} elevation={Elevation.TWO}>
                        <div>
                            <Tag className="tag">9784088820118</Tag>
                            <Tag className="tag">ISBN</Tag>
                            <h3>SPY×FAMILY 1</h3>
                            <img className="thumbnail" src="https://cover.openBD.jp/9784088820118.jpg" alt="" />
                        </div>
                        <Icon icon="delete" size={25} color={'#ffffff'} />
                    </Card> */}
                    {/* <form action="">
                        <div className="bp3-input-group modifier">
                            <span className="bp3-icon bp3-icon-search"></span>
                            <input className="bp3-input" type="search" placeholder="キーワード or ISBN..." dir="auto" />
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"/></svg>
                    </form>
                    <div className="addMore">
                        
                        <FormGroup
                            helperText=""
                            label="タイトル著者名を自分で入力"
                            labelFor="text-input"
                            labelInfo=""
                        >
                            <InputGroup small placeholder="タイトル" />
                            <InputGroup small placeholder="著者名" />
                            <InputGroup small placeholder="出版社" />
                            <InputGroup small placeholder="出版日" />
                            <InputGroup small placeholder="メモを追加" />
                            <Button icon="plus">追加</Button>
                        </FormGroup>
                    </div> */}
                    {targetBook && suggestBooks.length > 0 ? (
                        <div className="nextBook">
                            <h2>もしかして<span>({targetBook.title + '' + targetBook.volume}より推定)</span></h2>
                            <div className="cards">
                            {suggestBooks.map((book) => {
                                return (
                                    <Card key={book.isbn} className="card" interactive={true} elevation={Elevation.TWO}>
                                        <div className="card-header">
                                            {book.cover ? (
                                                <img src={book.cover} alt={book.title} />
                                            ) : null}
                                            <div>
                                                <h3>{[book.title, book.volume].join(' ')}</h3>
                                                <p className="author">{book.author}</p>
                                                {/* <p>{book.pubdate}</p>
                                                <p>{book.publisher}</p> */}
                                                {book.tags.map((tag) => (
                                                    <Tag>{tag}</Tag>
                                                ))}
                                                <p>{book.isbn}</p>
                                            </div>
                                        </div>
                                        <Icon icon="add" size={25} color={'#ffffff'} />
                                    </Card>
                                )
                            })}
                            </div>
                        </div>
                    ) : null}
                </div>
            </main>
        </div>
    )
}

export default App