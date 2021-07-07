import React, {Component} from 'react'
import normalize_isbn from './normalize_isbn.js'

import Spreadsheet, {Matrix, CellBase} from 'react-spreadsheet'

import api from './api';
const REGION = 'recipe'


interface App {
    scanner: boolean
    timer: any
    str: string
    prevISBN: string | null
    documentCode: string | null
}


interface Props {
}

interface State {
    invalidISBN: boolean
    books: any[]
}

// 最初に読まれたのがISBNか？
// ISBNであれば、ISBNをidにして、セット
// ISBNでなければ、資料コードとして判断
// idを資料コードとしてセット
// 次にISBNがくれば、idを資料コードとして、従来の行と置き換える

class App extends Component<Props, State> {
    constructor(props:Props) {
        super(props)

        this.state = {
            invalidISBN: false,
            books: []
        }
        this.timer = null
        this.str = ''
        this.prevISBN = null
        this.documentCode = null
    }
    // Window全体でのキー入力を拾う
    onKeyDown(e: any): void {
        // // スプレッドシート内の入力の場合は無視する
        // if (e.target.parentNode.className === 'Spreadsheet__data-editor') return
        const ev = e || window.event
        const key = ev.keyCode || ev.which || ev.charCode
        // バーコードリーダーの入力終わり、Enterが押された時の処理
        if (e.key === 'Enter' || key === 13) {
            if (this.str.length >= 10) {
                if (normalize_isbn(this.str)) {
                    this.setState({invalidISBN: false})
                    this.addBook(this.str)
                } else {
                    this.setState({invalidISBN: true})
                    this.pushTempBook(this.str)
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
                        this.addBook(this.str)
                    } else {
                        this.setState({invalidISBN: true})
                        this.pushTempBook(this.str)
                    }
                }
                this.str = ''
            }, 300)
        }
    }

    componentDidMount(): void {
        window.document.addEventListener('keydown', this.onKeyDown.bind(this))
    }

    addBook(isbn: string): void {
        new api({ isbn: isbn, region: REGION }, (data) => {
            if (data.count >= 1) {
                const book = data.books[0]
                this.pushBook(book.title, book.isbn)
            } else {
                console.log('not found')
                // this.setState({notFound: true})
            }
        })
    }

    pushBook(title: string, isbn: string) {
        if(this.prevISBN !== isbn) {
            console.log(this.documentCode)
            if (this.documentCode) {
                this.state.books.shift()
                this.state.books.unshift([{value: this.documentCode}, {value: title}, {value: isbn}, {value: ''}])
                this.documentCode = null
            } else {
                this.state.books.unshift([{value: isbn}, {value: title}, {value: isbn}, {value: ''}])
            }
            this.setState({})
            this.prevISBN = isbn
        }
    }

    pushTempBook(documentCode: string) {
        if(this.documentCode !== documentCode) {
            this.state.books.unshift([{value: documentCode}, {value: ''}, {value: ''}, {value: ''}])
            this.setState({})
            this.documentCode = documentCode
        }
    }

    render() {
        if (this.state.books.length === 0) {
            return (
                <div className="description">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"/></svg>
                        バーコードをスキャンしてください
                    </div>
                </div>
            )
        } else {
            return (
                <Spreadsheet data={this.state.books} columnLabels={['id', 'title', 'isbn']} />
            )
        }
        return 'Hello Keichan'
    }
}

export default App