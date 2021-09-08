import React, { useState, useEffect, useRef } from 'react'

import { Button, Intent, Spinner, Card, Elevation, Tag, Icon, InputGroup, FormGroup, Overlay, Switch } from "@blueprintjs/core";

// @ts-ignore
import {Howl} from 'howler'

import SuggestBook from './SuggestBook'

import {getBook, getBooks} from './getBooks'

import normalize_isbn from './normalize_isbn.js'

let warningUrl = './audio/warning.mp3'

let warningAudio = new Howl({
    src: [warningUrl],
    autoplay: false,
    loop: false,
    volume: 1,
    onend: function () {
        console.log('Finished!')
    }
})


let keyBuffer = ''
let keyTimer = null


// Window全体でのキー入力を拾う
const onKeyDown = (e: any, callback: (keyBuffer: string) => {}): void => {
    // console.log('onKeyDown')
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


const speak = (text: string):void => {
    if ('speechSynthesis' in window) {
        const speechText = new SpeechSynthesisUtterance(text)
        // 速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5)
        speechText.rate = 1.5
        speechSynthesis.speak(speechText)
    }
}


// const rowList = [
//     {
//         id: '10001' or '9784774142230',
//         title: 'タイトル',
//         author: '著者',
//         publisher: '出版社',
//         isbn: '9784774142230',
//         tags: ['ほにゃらら文庫']
//     }
// ]



const App = () => {

    const [rowList, setRowList] = useState([])
    const [debugLogs, setDebugLogs] = useState([])

    const [targetBook, setTargetBook] = useState(null as any)
    const [suggestBooks, setSuggestBooks] = useState([])

    const [licenseKey, setLicenseKey] = useState('gk-xxxxxxxxxxxxxxx')
    const [mode, setMode] = useState('isbn')

    const [checkEnable, setCheckEnable] = useState(true)
    const [enableSpeak, setEnableSpeak] = useState(true)
    const [showSettings, setShowSettings] = useState(false)

    const [alertMessage, setAlertMessage] = useState({
        // show: true,
        // message: '資料コードを読んでください'
        show: false,
        message: ''
    })

    // modeがcheckStrの中で見たときに変更されないため、eventを解除・登録しなおす
    // https://github.com/facebook/react/issues/14092
    const callback = (e) => onKeyDown(e, checkStr)
    useEffect(() => {
        window.addEventListener('keydown', callback)
        // cleanup
        return () => {
            window.removeEventListener('keydown', callback)
        }
    }, [mode, rowList, checkEnable, debugLogs, enableSpeak])
    // ↑内部で使うstateを、ここに追加しないとcheckStrに反映されない

    const debugLogDiv = useRef(null)
    useEffect(() => {
        if (debugLogDiv.current) {
            const element = debugLogDiv.current
            element.scrollTop = element.scrollHeight
        }
    }, [debugLogs])

    useEffect(() => {
        setTimeout(() => {
            setAlertMessage({
                show: false,
                message: ''
            })
        }, 5000)
    }, [alertMessage])


    const cmdCursor = useRef(null)
    useEffect(() => {
        const timer = setInterval(() => {
            if (cmdCursor.current) {
                cmdCursor.current.style.display = 'none'
                setTimeout(() => {
                    cmdCursor.current.style.display = 'inline'
                }, 500)
            }
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [true])


    const checkStr = async (str) => {
        // console.log(str)
        // console.log(mode)
        const logs = []
        if (checkEnable === false) return
        const isbn = normalize_isbn(str)
        if (isbn) {
            logs.push('ISBNのバーコードが読まれました。')
            logs.push(<span style={{fontFamily: '"Conv_OCRB", Sans-Serif'}}>{str}</span>)
            setTargetBook(null)
            setSuggestBooks([])
            const book: any = await getBook(isbn)
            if (book) {
                // console.log(book)
                logs.push('本が見つかりました！')
                if (mode === 'isbn') {
                    book.id = book.isbn
                    setRowList([...rowList, book])
                    if (enableSpeak) speak(`${book.title}を追加しました。`)

                    const prevRow = rowList[rowList.length - 1]
                    if (prevRow && prevRow.title) {
                        logs.push(`一つ前の本、「${prevRow.title}」から次の本の候補を探します。`)
                        setTargetBook(prevRow)
                        const books: any = await getBooks(prevRow)
                        setSuggestBooks(books as any)
                        if (books.length > 0) {
                            logs.push(`候補の本が${books.length}冊みつかりました。`)
                        }
                    }
                } else if (mode === 'management') {
                    const tempList = [...rowList]
                    const lastRow = tempList[tempList.length - 1]
                    if (lastRow && !lastRow.title) {
                        lastRow.title = book.title
                        lastRow.author = book.author
                        lastRow.publisher = book.publisher
                        lastRow.isbn = book.isbn
                        lastRow.cover = book.cover
                        lastRow.tags = book.tags
                        lastRow.bibHash = book.bibHash
                        // console.log(tempList)
                        setRowList(tempList)
                        if (enableSpeak) speak(`${book.title}を追加。`)
                    } else {
                        setAlertMessage({
                            show: true,
                            message: '次は資料コードのバーコードを読んでください。'
                        })
                        logs.push(<>
                            <span style={{color: 'red'}}>!!</span>
                            <span> 資料コードのバーコードを読んでください。</span>
                        </>)
                        warningAudio.play()
                    }
                }
            }
        } else {
            if (str.length > 20) {
                setAlertMessage({
                    show: true,
                    message: '資料コードが長すぎます。バーコードの連続読み取りと判断して、処理しません。'
                })
                logs.push(<span style={{fontFamily: '"Conv_OCRB", Sans-Serif'}}>{str}</span>)
                logs.push(<>
                    <span style={{color: 'red'}}>!!</span>
                    <span> 資料コードが長すぎます。バーコードの連続読み取りと判断して、処理しません。</span>
                </>)
                setDebugLogs([...debugLogs, ...logs])
                warningAudio.play()
                return
            }
            if (str.match(/^192/) !== null) {
                setAlertMessage({
                    show: true,
                    message: '192で始まるバーコードのため、書籍JANコード(下段)と判断して、処理しません。'
                })
                logs.push(<span style={{fontFamily: '"Conv_OCRB", Sans-Serif'}}>{str}</span>)
                logs.push('192で始まるバーコードのため、書籍JANコード(下段)と判断して、処理しません。')
                setDebugLogs([...debugLogs, ...logs])
                warningAudio.play()
                return
            }
            if (str.match(/^491/) !== null) {
                setAlertMessage({
                    show: true,
                    message: '491で始まるバーコードのため、雑誌コードと判断して、処理しません。'
                })
                logs.push(<span style={{fontFamily: '"Conv_OCRB", Sans-Serif'}}>{str}</span>)
                logs.push('491で始まるバーコードのため、雑誌コードと判断して、処理しません。')
                setDebugLogs([...debugLogs, ...logs])
                warningAudio.play()
                return
            }
            if (str.match(/[a-zA-Z0-9]+/) === null) {
                logs.push('英数字以外のキーが入力されました。処理しません。')
                setDebugLogs([...debugLogs, ...logs])
                return
            }
            if (str.match(/^[a-zA-Z]*$/)) {
                logs.push('英字のみが入力されました。処理しません。')
                setDebugLogs([...debugLogs, ...logs])
                return
            }
            // codabarの制御コードが入った時、数字のみにする
            if (str.match(/^[a-zA-Z](\d+)[a-zA-Z]$/)) {
                str = RegExp.$1
                logs.push('codabarの制御コードを検出しました。')
            }
            if (mode === 'isbn') {
                setMode('management')
                logs.push('資料コードが読み込まれたため、資料コード用のモードに切り替えます。')
            }

            logs.push(<span style={{fontFamily: '"Conv_OCRB", Sans-Serif'}}>{str}</span>)

            const prevRow = rowList[rowList.length - 1]
            // console.log(prevRow)

            // まだ本が紐つけられていない時は資料コードを変更する
            if (prevRow && !prevRow.title) {
                prevRow.id = str
                setRowList([...rowList])
                logs.push(<>
                    <span style={{color: 'lightgreen'}}>!</span>
                    <span> 別の資料コードが読み込まれたので、新しい資料コードに変更しました。</span>
                </>)
                setDebugLogs([...debugLogs, ...logs])
                return
            }

            // すでに同じ資料コードが登録されていないか？
            if (rowList.filter((row) => row.id === str).length > 0) {
                setAlertMessage({
                    show: true,
                    message: 'すでに登録済みの資料コードです'
                })
                logs.push(<>
                    <span style={{color: 'red'}}>!!</span>
                    <span> すでに登録済みの資料コードです</span>
                </>)
                setDebugLogs([...debugLogs, ...logs])
                warningAudio.play()
                return
            }

            setRowList([...rowList, {
                id: str,
            }])

            if (prevRow && prevRow.title) {
                logs.push(`一つ前の本、「${prevRow.title}」から次の本の候補を探します。`)
                setTargetBook(prevRow)
                const books: any = await getBooks(prevRow)
                setSuggestBooks(books as any)
                if (books.length > 0) {
                    logs.push(`候補の本が${books.length}冊みつかりました。`)
                }
            }
        }

        setDebugLogs([...debugLogs, ...logs])
        setCheckEnable(false)
        setTimeout(() => setCheckEnable(true), 100)
    }

    return (
        <div id="index">
            <Overlay isOpen={alertMessage.show} onClose={() => setAlertMessage({ show: false, message: '' })} hasBackdrop={false}>
                <div className="bp3-card bp3-elevation-4 bp3-overlay-content alert-message">
                    <Icon icon="tick" size={25} color={'#000000'} />
                    {alertMessage.message}
                </div>
            </Overlay>
            <Overlay isOpen={showSettings} onClose={() => setShowSettings(false)} hasBackdrop={true}>
                <div className="bp3-card bp3-elevation-4 bp3-overlay-content settings-overlay">
                    <div className="settings">
                    <h3>設定</h3>
                    {'speechSynthesis' in window ? (
                            <Switch checked={enableSpeak} label="読み上げ" onChange={() => setEnableSpeak(!enableSpeak)} />
                    ) : null}
                    <br />
                    <br />
                    <Button icon="cross" onClick={() => setShowSettings(false)}>閉じる</Button>
                    </div>
                </div>
            </Overlay>
            <header>
                <div></div>
                <h1>
                    カーリルtoolbox: keichan
                    {mode === 'management' ? (<span className="mode">資料コード</span>) : null}
                </h1>
                <Button icon="cog" onClick={() => setShowSettings(true)}>設定</Button>
            </header>
            <main>
                <div className="main">
                    {rowList.length === 0 ? (
                        <div className="description">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z" /></svg>
                                バーコードをスキャンしてください
                            </div>
                        </div>
                    ) : null}
                    {rowList.length >= 1 && rowList[rowList.length - 1].title ? (
                        <div className="description">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z" /></svg>
                                資料コードをスキャンしてください
                            </div>
                        </div>
                    ) : null}
                    {rowList.slice().reverse().map((row, i) => {
                        {
                            return (
                                <div key={'row'+i}>
                                    {mode === 'management' ? (
                                        <Card key="managementCode" className="card active" interactive={true} elevation={Elevation.TWO}>
                                            {/* <div>
                                            <Tag className="tag" large>{row.id}</Tag>
                                            <Tag className="tag">資料コード</Tag>
                                        </div> */}
                                            <img src={`https://img.shields.io/badge/%E8%B3%87%E6%96%99%E3%82%B3%E3%83%BC%E3%83%89-${row.id}-blue`} alt="" />
                                            {/* <Icon icon="delete" size={25} color={'#ffffff'} /> */}
                                        </Card>
                                    ) : null}
                                    {row.title ? (
                                        <Card key={row.bibHash} className="card indent" interactive={true} elevation={Elevation.TWO}>
                                            <div>
                                                {row.cover ? (
                                                    <img className="thumbnail" src={row.cover} alt="" />
                                                ) : null}
                                                <div>
                                                    {/* <Tag className="tag">{row.isbn}</Tag> */}
                                                    <img src={`https://img.shields.io/badge/book-${row.isbn}-brightgreen`} alt="" />
                                                    <h3>{row.title}</h3>
                                                </div>
                                            </div>
                                            {/* <Icon icon="delete" size={25} color={'#ffffff'} /> */}
                                        </Card>
                                    ) : (
                                        <>
                                            <div className="description">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z" /></svg>
                                                    紐つけるバーコードをスキャンしてください
                                                </div>
                                            </div>
                                            {targetBook && suggestBooks.length > 0 ? (
                                                <div className="nextBook">
                                                    <h2>もしかして<span>({targetBook.title}より推定)</span></h2>
                                                    <div className="cards">
                                                        {suggestBooks.slice(0, 5).map((book) => {
                                                            return <SuggestBook book={book} key={book.isbn} />
                                                        })}
                                                    </div>
                                                </div>
                                            ) : null}
                                        </>
                                    )}
                                </div>
                            )
                        }
                    })}
                    {/* <h3>本を追加</h3> */}
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
                </div>
                <div className="debug">
                    <div className="logs" ref={debugLogDiv}>
                        {debugLogs.map((log, i) => {
                            return (
                                <div key={'log' + i}>{log}</div>
                            )
                        })}
                    </div>
                    <div className="cmd">
                        &gt; <span ref={cmdCursor}>_</span>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App