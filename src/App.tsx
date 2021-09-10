import React, { useState, useEffect, useRef } from 'react'

import { Button, Intent, Spinner, Card, Elevation, Tag, Icon, InputGroup, FormGroup, Overlay, Switch } from "@blueprintjs/core";

// @ts-ignore
import { Howl } from 'howler'

import XLSX from 'xlsx'
import { saveAs } from 'file-saver'

import SuggestBook from './SuggestBook'

import { getBook, getBooks } from './getBooks'

import normalize_isbn from './normalize_isbn.js'
import isbn_utils from 'isbn-utils'
// import Row from 'react-spreadsheet/dist/Row';

let safetyUrl = './audio/safety.mp3'

let safetyUrlAudio = new Howl({
    src: [safetyUrl],
    autoplay: false,
    loop: false,
    volume: 1,
    onend: function () {
        console.log('Finished!')
    }
})

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
let lastKeyInputTime = null

// Window全体でのキー入力を拾う
const onKeyDown = (e: any, callback: (keyBuffer: string) => {}): void => {
    console.log('onKeyDown')
    const nowTime = new Date().getTime()
    const keyInterval = nowTime - lastKeyInputTime
    lastKeyInputTime = nowTime
    const ev = e || window.event
    const key = ev.keyCode || ev.which || ev.charCode
    // console.log(keyBuffer)
    // console.log(e.key)
    // バーコードリーダーの入力終わり、Enterが押された時の処理
    if (e.key === 'Enter' || key === 13) {
        if (keyInterval < 100) callback(keyBuffer)
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
            // console.log(keyInterval)
            if (keyInterval < 100) callback(keyBuffer)
            keyBuffer = ''
        }, 300)
    }
}


const speak = (text: string): void => {
    if ('speechSynthesis' in window) {
        const speechText = new SpeechSynthesisUtterance(text)
        // 速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5)
        speechText.rate = 1.5
        speechSynthesis.speak(speechText)
    }
}

const downloadXSLX = (rows, fileName): void => {
    const wb = XLSX.utils.book_new();
    wb.Props = {
        Title: "",
        Subject: "",
        Author: "",
        CreatedDate: new Date()
    };
    wb.SheetNames.push('蔵書データ');
    const ws_data: [string, string, string, string, string, string, string, string][] = [];
    ws_data.push(['id', 'タイトル', '著者', '出版社', 'ISBN', 'タグ', '価格', 'Cコード'])
    rows.map((row) => {
        if (row.title) {
            ws_data.push([row.id, row.title, row.author, row.publisher, row.isbn, row.tags.join(','), row.price, row.cCode])
        // 本が見つからなかったケース
        } else if (row.isbn) {
            ws_data.push([row.id, '', '', '', row.isbn, '', '', ''])
        }
    })
    const ws = XLSX.utils.aoa_to_sheet(ws_data);
    wb.Sheets['蔵書データ'] = ws;
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
    function s2ab(s) {
        const buf = new ArrayBuffer(s.length);
        const view = new Uint8Array(buf);
        for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }
    saveAs(new Blob([s2ab(wbout)], { type: 'application/octet-stream' }), fileName + '.xlsx');
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

    const [licenseKey, setLicenseKey] = useState('gk-xxxxxxxxxxxxxxx')

    let rowListData = []
    let tempMode = 'isbn'
    const localStorageData = localStorage.getItem('keichanData_' + licenseKey)
    if (localStorageData) {
        const tempData = JSON.parse(localStorageData)
        rowListData = tempData['rowList']
        if (rowListData.length > 0) tempMode = tempData['mode']
    }

    const [rowList, setRowList] = useState(rowListData)
    const [mode, setMode] = useState(tempMode)

    const logs = []
    if (rowList.length === 0) {
        logs.push('バーコードをスキャンしてください')
    } else {
        if (rowList[rowList.length - 1].title) {
            logs.push('資料コードをスキャンしてください')
        } else {
            logs.push('紐つけるバーコードをスキャンしてください')
        }
    }
    const [debugLogs, setDebugLogs] = useState(logs)

    const [targetBook, setTargetBook] = useState(null as any)
    const [suggestBooks, setSuggestBooks] = useState([])


    const [checkEnable, setCheckEnable] = useState(true)
    const [enableSpeak, setEnableSpeak] = useState(true)
    const [showSettings, setShowSettings] = useState(false)

    const [alertMessage, setAlertMessage] = useState({
        // show: true,
        // message: '資料コードを読んでください'
        show: false,
        message: ''
    })

    useEffect(() => {
        localStorage.setItem('keichanData_' + licenseKey, JSON.stringify({ mode: mode, rowList: rowList }))
    }, [rowList, mode])


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

    let timer
    useEffect(() => {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            setAlertMessage({
                show: false,
                message: ''
            })
        }, 6000)
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
        const isbn10 = normalize_isbn(str)
        if (isbn10) {
            safetyUrlAudio.play()
            logs.push('ISBNのバーコードが読まれました')
            logs.push(<span style={{ fontFamily: '"Conv_OCRB", Sans-Serif' }}>{str}</span>)
            setTargetBook(null)
            setSuggestBooks([])

            // codabarの制御コードが入った時、数字のみにする
            if (str.match(/^[a-zA-Z](\d+)[a-zA-Z]$/)) {
                str = RegExp.$1
                logs.push('codabarの制御コードを検出しました')
            }

            if (mode === 'management' && rowList.length > 0) {
                const tempList = [...rowList]
                const lastRow = tempList[tempList.length - 1]
                if (lastRow && !lastRow.isbn) {
                    let i = isbn_utils.parse(isbn10)
                    if (i) {
                        lastRow.isbn = i.asIsbn13()
                    }
                    // console.log(tempList)
                    setRowList(tempList)
                } else {
                    setAlertMessage({
                        show: true,
                        message: '次は資料コードのバーコードを読んでください'
                    })
                    logs.push(<>
                        <span style={{ color: 'red' }}>!!</span>
                        <span> 資料コードのバーコードを読んでください</span>
                    </>)
                    warningAudio.play()
                    return
                }
            }
            const book: any = await getBook(isbn10).catch(e => {
                setAlertMessage({
                    show: true,
                    message: '!! 本が見つかりませんでした'
                })
                logs.push(<>
                    <span style={{ color: 'red' }}>!!</span>
                    <span> 本が見つかりませんでした</span>
                </>)
            })
            if (book) {
                // console.log(book)
                logs.push('本が見つかりました！')
                if (mode === 'isbn') {
                    book.id = book.isbn
                    setRowList([...rowList, book])
                    if (enableSpeak) {
                        speak(`${book.title}を追加`)
                    } else {
                        logs.push(`「${book.title}」を追加`)
                    }
                    const prevRow = rowList[rowList.length - 1]
                    if (prevRow && prevRow.title) {
                        logs.push(`一つ前の本、「${prevRow.title}」から次の本の候補を探します`)
                        setTargetBook(prevRow)
                        const books: any = await getBooks(prevRow)
                        setSuggestBooks(books as any)
                        if (books.length > 0) {
                            logs.push(`候補の本が${books.length}冊みつかりました`)
                        }
                    }
                } else if (mode === 'management') {
                    const tempList = [...rowList]
                    tempList.forEach((row, i) => {
                        if (normalize_isbn(row.isbn) === isbn10) {
                            row.title = book.title
                            row.author = book.author
                            row.publisher = book.publisher
                            row.cover = book.cover
                            row.isbn = book.isbn
                            row.tags = book.tags
                            row.bibHash = book.bibHash
                            row.price = book.price
                            row.cCode = book.cCode
                        }
                    })
                    setRowList(tempList)
                    if (enableSpeak) speak(`${book.title}を追加`)
                }
            }
        } else {
            if (str.length > 20) {
                setAlertMessage({
                    show: true,
                    message: '資料コードが長すぎます。バーコードの連続読み取りと判断して、処理しません'
                })
                logs.push(<span style={{ fontFamily: '"Conv_OCRB", Sans-Serif' }}>{str}</span>)
                logs.push(<>
                    <span style={{ color: 'red' }}>!!</span>
                    <span> 資料コードが長すぎます。バーコードの連続読み取りと判断して、処理しません</span>
                </>)
                setDebugLogs([...debugLogs, ...logs])
                warningAudio.play()
                return
            }
            if (str.match(/^192/) !== null) {
                setAlertMessage({
                    show: true,
                    message: '192で始まるバーコードのため、書籍JANコード(下段)と判断して、処理しません'
                })
                logs.push(<span style={{ fontFamily: '"Conv_OCRB", Sans-Serif' }}>{str}</span>)
                logs.push('192で始まるバーコードのため、書籍JANコード(下段)と判断して、処理しません')
                setDebugLogs([...debugLogs, ...logs])
                warningAudio.play()
                return
            }
            if (str.match(/^491/) !== null) {
                setAlertMessage({
                    show: true,
                    message: '491で始まるバーコードのため、雑誌コードと判断して、処理しません'
                })
                logs.push(<span style={{ fontFamily: '"Conv_OCRB", Sans-Serif' }}>{str}</span>)
                logs.push('491で始まるバーコードのため、雑誌コードと判断して、処理しません')
                setDebugLogs([...debugLogs, ...logs])
                warningAudio.play()
                return
            }
            if (str.match(/[a-zA-Z0-9]+/) === null) {
                logs.push('英数字以外のキーが入力されました。処理しません')
                setDebugLogs([...debugLogs, ...logs])
                return
            }
            if (str.match(/^[a-zA-Z]*$/)) {
                logs.push('英字のみが入力されました。処理しません')
                setDebugLogs([...debugLogs, ...logs])
                return
            }
            // codabarの制御コードが入った時、数字のみにする
            if (str.match(/^[a-zA-Z](\d+)[a-zA-Z]$/)) {
                str = RegExp.$1
                logs.push('codabarの制御コードを検出しました')
            }
            if (mode === 'isbn') {
                setMode('management')
                logs.push('資料コードが読み込まれたため、資料コード用のモードに切り替えます')
            }

            logs.push(<span style={{ fontFamily: '"Conv_OCRB", Sans-Serif' }}>{str}</span>)

            const prevRow = rowList[rowList.length - 1]
            // console.log(prevRow)

            // // まだ本が紐つけられていない時は資料コードを変更する
            // if (prevRow && !prevRow.title) {
            //     prevRow.id = str
            //     setRowList([...rowList])
            //     logs.push(<>
            //         <span style={{ color: 'lightgreen' }}>!</span>
            //         <span> 別の資料コードが読み込まれたので、新しい資料コードに変更しました</span>
            //     </>)
            //     setDebugLogs([...debugLogs, ...logs])
            //     return
            // }

            // すでに同じ資料コードが登録されていないか？
            if (rowList.filter((row) => row.id === str).length > 0) {
                setAlertMessage({
                    show: true,
                    message: 'すでに登録済みの資料コードです'
                })
                logs.push(<>
                    <span style={{ color: 'red' }}>!!</span>
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
                logs.push(`一つ前の本、「${prevRow.title}」から次の本の候補を探します`)
                setTargetBook(prevRow)
                const books: any = await getBooks(prevRow)
                setSuggestBooks(books as any)
                if (books.length > 0) {
                    logs.push(`候補の本が${books.length}冊みつかりました`)
                }
            }
        }

        setDebugLogs([...debugLogs, ...logs])
        setCheckEnable(false)
        setTimeout(() => setCheckEnable(true), 100)
    }

    const removeRow = (id: string) => {
        setRowList(rowList.filter((row) => row.id !== id))
    }

    const removeBook = (id: string) => {
        if (mode === 'isbn') {
            setRowList([...rowList.filter((row) => row.id !== id)])
        }
        if (mode === 'management') {
            const tempRowList = []
            rowList.forEach((row) => {
                if (row.id === id) {
                    tempRowList.push({ id: row.id })
                } else {
                    tempRowList.push(row)
                }
            })
            setRowList([...tempRowList])
        }
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
                <div>
                    {rowList.length > 0 ? (
                        <Button icon="download" onClick={() => downloadXSLX(rowList, licenseKey)}>Excelで保存</Button>
                    ) : null}
                    <Button className="settingsButton" icon="cog" onClick={() => setShowSettings(true)}>設定</Button>
                </div>
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
                    {/* {rowList.length >= 1 && rowList[rowList.length - 1].title ? (
                        <div className="description">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z" /></svg>
                                資料コードをスキャンしてください
                            </div>
                        </div>
                    ) : null} */}
                    {rowList.slice().reverse().map((row, i) => {
                        {
                            return (
                                <div key={'row' + i}>
                                    {mode === 'management' ? (
                                        <Card key="managementCode" className="card active" interactive={false} elevation={Elevation.TWO}>
                                            {/* <div>
                                            <Tag className="tag" large>{row.id}</Tag>
                                            <Tag className="tag">資料コード</Tag>
                                        </div> */}
                                            {/* <img src={`https://img.shields.io/badge/%E8%B3%87%E6%96%99%E3%82%B3%E3%83%BC%E3%83%89-${row.id}-blue`} alt="" /> */}
                                            <span className="document">
                                                <span className="documentHeader">資料コード</span>
                                                <span className="documentCode">{row.id}</span>
                                            </span>
                                            <Icon icon="delete" size={25} color={'#ffffff'} onClick={() => removeRow(row.id)} />
                                        </Card>
                                    ) : null}
                                    <div className="linkedData">
                                        {row.isbn ? (
                                            <Card key={row.bibHash + row.isbn} className="card indent" interactive={false} elevation={Elevation.TWO}>
                                                <div>
                                                    {/* <img src={`https://img.shields.io/badge/ISBN-${row.isbn}-brightgreen`} alt="" /> */}
                                                    <span className="isbn">
                                                        <span className="isbnHeader">ISBN</span>
                                                        <span className="isbnCode">{row.isbn}</span>
                                                    </span>
                                                </div>
                                                {/* {row.id === rowList[rowList.length - 1].id ? ( */}
                                                <Icon icon="delete" size={25} color={'#ffffff'} onClick={() => removeBook(row.id)} />
                                                {/* ) : null} */}
                                            </Card>
                                        ) : null}
                                        {row.title ? (
                                            <Card key={row.bibHash} className="card indent" interactive={false} elevation={Elevation.TWO}>
                                                <div>
                                                    {row.cover ? (
                                                        <img className="thumbnail" src={row.cover} alt="" />
                                                    ) : null}
                                                    <div>
                                                        {/* <Tag className="tag">{row.isbn}</Tag> */}
                                                        <h3>{row.title}</h3>
                                                        <p className="author">{row.author}</p>
                                                        {row.tags.map((tag) => (
                                                            <Tag key={tag}>{tag}</Tag>
                                                        ))}
                                                    </div>
                                                </div>
                                                {/* {row.id === rowList[rowList.length - 1].id ? ( */}
                                                <Icon icon="delete" size={25} color={'#ffffff'} onClick={() => removeBook(row.id)} />
                                                {/* ) : null} */}
                                            </Card>
                                        ) : null}
                                    </div>
                                    {mode === 'management' && typeof row.title === 'undefined' ? (
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
                                    ) : null}
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