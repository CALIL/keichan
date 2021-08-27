import React, { useState, useEffect } from 'react'

import { Button, Intent, Spinner, Card, Elevation, Tag, Icon, InputGroup, FormGroup } from "@blueprintjs/core";

import normalize_isbn from '../normalize_isbn.js'

// import data from './search.json'

// console.log(data.result)

// const books = data.result.reverse().filter((book) => !book.isbn.includes('9784088820118'))

const REGION = 'recipe'

const App = (props) => {

    let str = ''
    let timer = null
    
    const [targetBook, setTargetBook] = useState(null as any)
    const [suggestBooks, setSuggestBooks] = useState([])

    useEffect(() => {
        window.document.addEventListener('keydown', onKeyDown)
    }, [])

    useEffect(() => {
        window.document.addEventListener('keydown', onKeyDown)
    }, [])

    // Window全体でのキー入力を拾う
    const onKeyDown = (e: any): void => {
        const ev = e || window.event
        const key = ev.keyCode || ev.which || ev.charCode
        // console.log(str)
        // console.log(e.key)
        // バーコードリーダーの入力終わり、Enterが押された時の処理
        if (e.key === 'Enter' || key === 13) {
            checkStr()
            if (timer) clearTimeout(timer)
            str = ''
        // 入力された文字を拾う
        } else {
            if (e.key.length === 1) {
                str += e.key
            // codabarの制御コードが入った時
            } else if (e.key === 'Shift') {
            } else {
                str = ''
            }
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                console.log('clear')
                checkStr()
                str = ''
            }, 300)
        }
    }

    const checkStr = async () => {
        const isbn = normalize_isbn(str)
        if (isbn) {
            await getBook(isbn)
            getBooks()
        }
    }

    const getBook = async (isbn) => {
        setTargetBook(null)
        const data = await fetch(`https://unitrad.calil.jp/v1/search?isbn=${isbn}&region=${REGION}`).then(r => r.json())
        if (data.count >= 1) {
            setTargetBook(data.books[0])
        } else {
            console.log('not found')
        }
    }

    const getBooks = async () => {
        console.log(targetBook)
        if (!targetBook) return
        const seriesTitle = targetBook.title.split(/\s/)[0]

        const author = encodeURIComponent(targetBook.author.split(',')[0])
        const publisher = encodeURIComponent(targetBook.publisher)
        const pubdate = encodeURIComponent(targetBook.pubdate)
    
        const url = `https://unitrad.calil.jp/v1/search?author=${author}&publisher=${publisher}&year_start=${pubdate}&region=recipe`
        const data = await fetch(url).then(r => r.json())
        if (data.count >= 1) {
            const books = data.books.filter(book => book.isbn!==targetBook.isbn)
            setSuggestBooks(books)
        }
    }

    return (
        <div id="suggests">
            <header>
                <h1>カーリルtoolbox: keichan</h1>
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
                            <img className="thumbnail" src="https://cover.openbd.jp/9784088820118.jpg" alt="" />
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
                    {targetBook ? (
                        <div className="nextBook">
                            <h2>もしかして<span>({targetBook.title + '' + targetBook.volume}より推定)</span></h2>
                            {suggestBooks.map((book) => {
                                return (
                                    <Card key={book.isbn} className="card" interactive={true} elevation={Elevation.TWO}>
                                        <div className="card-header">
                                            <h3>{book.title}</h3>
                                            <p className="author">{book.author}</p>
                                        </div>
                                        <Icon icon="add" size={25} color={'#ffffff'} />
                                    </Card>
                                )
                            })}
                        </div>
                    ) : null}
                </div>
            </main>
        </div>
    )
}

export default App