import React, { EventHandler, ReactElement, RefObject } from 'react'
import {Component} from 'react'

import Spreadsheet from 'react-spreadsheet'
  
import normalize_isbn from './normalize_isbn.js'

import XLSX from 'xlsx'
import { saveAs } from 'file-saver'

import Suggest from './Suggest'
import Speech from './Speech'

import { api } from './api';


const REGION = 'recipe'

interface App {
    textInput: HTMLInputElement | null
    setTextInputRef: any
    setTextInput: (value: string) => void
    scanner: boolean
    timer: any
    str: string
    prevISBN: string | null
    spreadsheet_ref: any
}

interface Props {
}

interface State {
    books: [Cell, Cell, Cell, Cell][]
    invalidISBN: boolean
    scanner: boolean
    notFound: boolean
    query: string
    showSuggest: boolean
}

interface Cell {
    value?: string
}

class App extends Component<Props, State> {
    constructor(props:Props) {
        super(props)

        this.state = {
            books: [],
            invalidISBN: false,
            scanner: false,
            notFound: false,
            query: '',
            showSuggest: false
        }

        this.textInput = null

        this.setTextInputRef = (element: HTMLInputElement) => {
          this.textInput = element
        }

        this.setTextInput = (value: string) => {
            if (this.textInput) this.textInput.value = value
        }

        this.timer = null
        this.str = ''
        this.prevISBN = null
    }
    load(): void {
        const data = localStorage.getItem('spreadsheet')
        if (data) {
            const books = JSON.parse(data)
            this.setState({books})
        }
    }
    save(): void {
        localStorage.setItem('spreadsheet', JSON.stringify(this.state.books))
    }

    speak(text: string):void {
        if ('speechSynthesis' in window) {
            const speechText = new SpeechSynthesisUtterance(text)
            // 速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5)
            speechText.rate = 1.5
            speechSynthesis.speak(speechText)
        }
    }
    
    speech(str: string) {
        if (str) {
            this.setTextInput(str)
            this.textInput?.focus()
            this.setState({query: str, invalidISBN: false, showSuggest: true})
        }
    }

    pushBook(title: string, isbn: stging) {
        if(this.prevISBN !== isbn) {
            this.state.books.unshift([{value: title}, {value: isbn}, {}, {}])
            this.setState({notFound: false})
            this.save()
            this.speak(title)
            if (isbn) this.prevISBN = isbn
            this.textInput?.focus()
        }
    }

    addBook(isbn: string): void {
        new api({ isbn: isbn, region: REGION }, (data) => {
            if (data.count >= 1) {
                const book = data.books[0]
                this.pushBook(book.title, book.isbn)
            } else {
                console.log('not found')
                this.setState({notFound: true})
            }
        })
    }

    selectBook(book) {
        this.setState({showSuggest: false})
        this.pushBook(book.title, book.isbn)
    }

    submit(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault()
        const str = this.textInput?.value
        if (str && str.length >= 10) {
            if(normalize_isbn(str)) {
                this.setState({invalidISBN: false, showSuggest: false})
                this.setTextInput(str)
                this.addBook(str)
            } else {
                this.setState({invalidISBN: true, showSuggest: false})
            }
        } else {
            this.setState({query: str, invalidISBN: false, showSuggest: true})
        }
    }

    delete(index: number): void {
        const books = this.state.books.filter((book, i) => i !== index)
        this.setState({books}, this.save)
        this.textInput?.focus()
    }

    // Window全体でのキー入力を拾う
    onKeyDown(e: any): void {
        // スプレッドシート内の入力の場合は無視する
        if (e.target.parentNode.className === 'Spreadsheet__data-editor') return
        const ev = e || window.event
        const key = ev.keyCode || ev.which || ev.charCode
        // バーコードリーダーの入力終わり、Enterが押された時の処理
        if (e.key === 'Enter' || key === 13) {
            if (this.str.length >= 10) {
                if (normalize_isbn(this.str)) {
                    this.setState({invalidISBN: false, scanner: true})
                    this.setTextInput(this.str)
                    this.addBook(this.str)
                    console.log('scanned:', this.str)
                } else {
                    this.setState({invalidISBN: true})
                }
            }
            if (this.timer) clearTimeout(this.timer)
            this.str = ''
        // 入力された文字を拾う
        } else {
            if (e.key.length === 1) {
                this.str += e.key
            } else {
                this.str = ''
            }
            if (this.timer) clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                console.log('clear')
                // 10文字以上になったらISBNとして正しいかチェックする
                if (this.str.length >= 10) {
                    if(normalize_isbn(this.str)) {
                        this.setState({invalidISBN: false})
                        this.setTextInput(this.str)
                        this.addBook(this.str)
                    } else {
                        this.setState({invalidISBN: true})
                    }
                }
                this.str = ''
            }, 300)
        }
    }

    componentDidMount(): void {
        this.load()
        this.textInput?.focus()
        window.document.addEventListener('keydown', this.onKeyDown.bind(this))
        document.body.addEventListener('click', (e: any) => {
            // console.log(e.target)
            // console.log(closest(e.target, '#ui'))
            if (!e.target.closest('.inputForm')) {
                this.setState({ showSuggest: false });
            }
        });
    }

    // スプレッドシートの内容が変更された時
    onCellCommit(prev: {value: string}, update: {value: string}, cell: {column: number, row: number}): void {
        // バグ対応
        // https://github.com/iddan/react-spreadsheet/issues/83
        const row = this.spreadsheet_ref?.prevState?.lastChanged?.row
        if (cell) {
            // console.log(cell)
            this.state.books.map((book, index) => {
                if (index === row && book[cell.column].value===prev.value) {
                    book[cell.column].value = update.value
                }
            })
            this.setState({})
            this.save()
        }
    }

    downloadXSLX(): void {
        const wb = XLSX.utils.book_new();
        wb.Props = {
                Title: "",
                Subject: "",
                Author: "",
                CreatedDate: new Date()
        };
        wb.SheetNames.push("Test Sheet"); // これ以外の名前にするとデータがないEXCELファイルになる？
        // const ws_data = [['hello' , 'world']];
        const ws_data: [string, string][] = [];
        this.state.books.map((book) => {
            ws_data.push([book[0].value, book[1].value, book[2].value, book[3].value])
        })
        const ws = XLSX.utils.aoa_to_sheet(ws_data);
        wb.Sheets["Test Sheet"] = ws;
        const wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
        function s2ab(s) {
            const buf = new ArrayBuffer(s.length);
            const view = new Uint8Array(buf);
            for (let i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }
        saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'test.xlsx');
    }
    
    render(): ReactElement {

        return (<React.Fragment>
            <div className={this.state.showSuggest ? 'show_suggest' : 'hide_suggest'}>
                <Suggest region={REGION} open={this.selectBook.bind(this)} query={this.state.query} />
            </div>
            <header>
                <form className="inputForm" onSubmit={this.submit.bind(this)}>
                    <input type="text"
                        placeholder="キーワード or ISBN..."
                        ref={this.setTextInputRef}
                        inputMode="url"
                        autoFocus={true}/>
                    <button onClick={this.submit.bind(this)}>検索</button>
                    <Speech onEnd={this.speech.bind(this)} />
                </form>
                {(() => {
                    if (this.state.books.length > 0) {
                        return (<div className="right">
                            <div className="count">{this.state.books.length}冊</div>
                            <button onClick={this.downloadXSLX.bind(this)}>Excelをダウンロード</button>
                        </div>)
                    }
                })()}
            </header>
            {(() => {
                if (this.state.invalidISBN) {
                    return (
                        <div className="warning">
                            <h3>ISBNが正しくありません</h3>
                        </div>
                    )
                }
            })()}
            {(() => {
                if (this.state.notFound) {
                    return (
                        <div className="warning">
                            <h3>該当する本が見つかりませんでした</h3>
                        </div>
                    )
                }
            })()}
            {(() => {
                if (this.state.scanner) {
                    return (
                        <div className="connected">
                            <h3>バーコードリーダーが接続されました</h3>
                        </div>
                    )
                }
            })()}
            {(() => {
                if (this.state.books.length === 0) {
                    return (
                        <div className="description" onClick={() => this.textInput?.focus()}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"/></svg>
                                ISBNを入力するか、バーコードをスキャンしてください
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <Spreadsheet data={this.state.books} onCellCommit={this.onCellCommit.bind(this)} ref={(s:any) => {this.spreadsheet_ref= s}} />
                    )
                }
            })()}
            <div className="books">
                {this.state.books.map((book, index) => {
                    return (<div className="book" key={book[1].value+index}>
                        <div className="bib">
                            <a href={`https://calil.jp/book/${book[1].value}`} target="_blank">
                                <img src={'https://calil.jp/cover/'+book[1].value} alt=""/>
                            </a>
                            <span className="title">{book[0].value}</span>
                            <span className="isbn">{book[1].value}</span>
                        </div>
                        <button onClick={this.delete.bind(this, index)}>削除</button>
                    </div>)
                })}
            </div>
        </React.Fragment>)
    }
}

export default App