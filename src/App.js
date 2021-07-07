"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("react");
var react_spreadsheet_1 = require("react-spreadsheet");
var normalize_isbn_js_1 = require("./normalize_isbn.js");
var xlsx_1 = require("xlsx");
var file_saver_1 = require("file-saver");
var Suggest_1 = require("./Suggest");
var Speech_1 = require("./Speech");
var api_js_1 = require("./api.js");
var REGION = 'recipe';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            books: [],
            invalidISBN: false,
            scanner: false,
            notFound: false,
            query: '',
            showSuggest: false
        };
        _this.textInput = null;
        _this.setTextInputRef = function (element) {
            _this.textInput = element;
        };
        _this.setTextInput = function (value) {
            if (_this.textInput)
                _this.textInput.value = value;
        };
        _this.timer = null;
        _this.str = '';
        _this.prevISBN = null;
        return _this;
    }
    App.prototype.load = function () {
        var data = localStorage.getItem('spreadsheet');
        if (data) {
            var books = JSON.parse(data);
            this.setState({ books: books });
        }
    };
    App.prototype.save = function () {
        localStorage.setItem('spreadsheet', JSON.stringify(this.state.books));
    };
    App.prototype.speak = function (text) {
        if ('speechSynthesis' in window) {
            var speechText = new SpeechSynthesisUtterance(text);
            // 速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5)
            speechText.rate = 1.5;
            speechSynthesis.speak(speechText);
        }
    };
    App.prototype.speech = function (str) {
        var _a;
        if (str) {
            this.setTextInput(str);
            (_a = this.textInput) === null || _a === void 0 ? void 0 : _a.focus();
            this.setState({ query: str, invalidISBN: false, showSuggest: true });
        }
    };
    App.prototype.pushBook = function (title, isbn) {
        var _a;
        if (this.prevISBN !== isbn) {
            this.state.books.unshift([{ value: title }, { value: isbn }, {}, {}]);
            this.setState({ notFound: false });
            this.save();
            this.speak(title);
            if (isbn)
                this.prevISBN = isbn;
            (_a = this.textInput) === null || _a === void 0 ? void 0 : _a.focus();
        }
    };
    App.prototype.addBook = function (isbn) {
        var _this = this;
        new api_js_1.api({ isbn: isbn, region: REGION }, function (data) {
            if (data.count >= 1) {
                var book = data.books[0];
                _this.pushBook(book.title, book.isbn);
            }
            else {
                console.log('not found');
                _this.setState({ notFound: true });
            }
        });
    };
    App.prototype.selectBook = function (book) {
        this.setState({ showSuggest: false });
        this.pushBook(book.title, book.isbn);
    };
    App.prototype.submit = function (e) {
        var _a;
        e.preventDefault();
        var str = (_a = this.textInput) === null || _a === void 0 ? void 0 : _a.value;
        if (str && str.length >= 10) {
            if (normalize_isbn_js_1["default"](str)) {
                this.setState({ invalidISBN: false, showSuggest: false });
                this.setTextInput(str);
                this.addBook(str);
            }
            else {
                this.setState({ invalidISBN: true, showSuggest: false });
            }
        }
        else {
            this.setState({ query: str, invalidISBN: false, showSuggest: true });
        }
    };
    App.prototype["delete"] = function (index) {
        var _a;
        var books = this.state.books.filter(function (book, i) { return i !== index; });
        this.setState({ books: books }, this.save);
        (_a = this.textInput) === null || _a === void 0 ? void 0 : _a.focus();
    };
    // Window全体でのキー入力を拾う
    App.prototype.onKeyDown = function (e) {
        var _this = this;
        // スプレッドシート内の入力の場合は無視する
        if (e.target.parentNode.className === 'Spreadsheet__data-editor')
            return;
        var ev = e || window.event;
        var key = ev.keyCode || ev.which || ev.charCode;
        // バーコードリーダーの入力終わり、Enterが押された時の処理
        if (e.key === 'Enter' || key === 13) {
            if (this.str.length >= 10) {
                if (normalize_isbn_js_1["default"](this.str)) {
                    this.setState({ invalidISBN: false, scanner: true });
                    this.setTextInput(this.str);
                    this.addBook(this.str);
                    console.log('scanned:', this.str);
                }
                else {
                    this.setState({ invalidISBN: true });
                }
            }
            if (this.timer)
                clearTimeout(this.timer);
            this.str = '';
            // 入力された文字を拾う
        }
        else {
            if (e.key.length === 1) {
                this.str += e.key;
            }
            else {
                this.str = '';
            }
            if (this.timer)
                clearTimeout(this.timer);
            this.timer = setTimeout(function () {
                console.log('clear');
                // 10文字以上になったらISBNとして正しいかチェックする
                if (_this.str.length >= 10) {
                    if (normalize_isbn_js_1["default"](_this.str)) {
                        _this.setState({ invalidISBN: false });
                        _this.setTextInput(_this.str);
                        _this.addBook(_this.str);
                    }
                    else {
                        _this.setState({ invalidISBN: true });
                    }
                }
                _this.str = '';
            }, 300);
        }
    };
    App.prototype.componentDidMount = function () {
        var _this = this;
        var _a;
        this.load();
        (_a = this.textInput) === null || _a === void 0 ? void 0 : _a.focus();
        window.document.addEventListener('keydown', this.onKeyDown.bind(this));
        document.body.addEventListener('click', function (e) {
            // console.log(e.target)
            // console.log(closest(e.target, '#ui'))
            if (!e.target.closest('.inputForm')) {
                _this.setState({ showSuggest: false });
            }
        });
    };
    // スプレッドシートの内容が変更された時
    App.prototype.onCellCommit = function (prev, update, cell) {
        var _a, _b, _c;
        // バグ対応
        // https://github.com/iddan/react-spreadsheet/issues/83
        var row = (_c = (_b = (_a = this.spreadsheet_ref) === null || _a === void 0 ? void 0 : _a.prevState) === null || _b === void 0 ? void 0 : _b.lastChanged) === null || _c === void 0 ? void 0 : _c.row;
        if (cell) {
            // console.log(cell)
            this.state.books.map(function (book, index) {
                if (index === row && book[cell.column].value === prev.value) {
                    book[cell.column].value = update.value;
                }
            });
            this.setState({});
            this.save();
        }
    };
    App.prototype.downloadXSLX = function () {
        var wb = xlsx_1["default"].utils.book_new();
        wb.Props = {
            Title: "",
            Subject: "",
            Author: "",
            CreatedDate: new Date()
        };
        wb.SheetNames.push("Test Sheet"); // これ以外の名前にするとデータがないEXCELファイルになる？
        // const ws_data = [['hello' , 'world']];
        var ws_data = [];
        this.state.books.map(function (book) {
            ws_data.push([book[0].value, book[1].value, book[2].value, book[3].value]);
        });
        var ws = xlsx_1["default"].utils.aoa_to_sheet(ws_data);
        wb.Sheets["Test Sheet"] = ws;
        var wbout = xlsx_1["default"].write(wb, { bookType: 'xlsx', type: 'binary' });
        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i = 0; i < s.length; i++)
                view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }
        file_saver_1.saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), 'test.xlsx');
    };
    App.prototype.render = function () {
        var _this = this;
        return (<react_1["default"].Fragment>
            <div className={this.state.showSuggest ? 'show_suggest' : 'hide_suggest'}>
                <Suggest_1["default"] region={REGION} open={this.selectBook.bind(this)} query={this.state.query}/>
            </div>
            <header>
                <form className="inputForm" onSubmit={this.submit.bind(this)}>
                    <input type="text" placeholder="キーワード or ISBN..." ref={this.setTextInputRef} inputMode="url" autoFocus={true}/>
                    <button onClick={this.submit.bind(this)}>検索</button>
                    <Speech_1["default"] onEnd={this.speech.bind(this)}/>
                </form>
                {(function () {
                if (_this.state.books.length > 0) {
                    return (<div className="right">
                            <div className="count">{_this.state.books.length}冊</div>
                            <button onClick={_this.downloadXSLX.bind(_this)}>Excelをダウンロード</button>
                        </div>);
                }
            })()}
            </header>
            {(function () {
                if (_this.state.invalidISBN) {
                    return (<div className="warning">
                            <h3>ISBNが正しくありません</h3>
                        </div>);
                }
            })()}
            {(function () {
                if (_this.state.notFound) {
                    return (<div className="warning">
                            <h3>該当する本が見つかりませんでした</h3>
                        </div>);
                }
            })()}
            {(function () {
                if (_this.state.scanner) {
                    return (<div className="connected">
                            <h3>バーコードリーダーが接続されました</h3>
                        </div>);
                }
            })()}
            {(function () {
                if (_this.state.books.length === 0) {
                    return (<div className="description" onClick={function () { var _a; return (_a = _this.textInput) === null || _a === void 0 ? void 0 : _a.focus(); }}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"/></svg>
                                ISBNを入力するか、バーコードをスキャンしてください
                            </div>
                        </div>);
                }
                else {
                    return (<react_spreadsheet_1["default"] data={_this.state.books} onCellCommit={_this.onCellCommit.bind(_this)} ref={function (s) { _this.spreadsheet_ref = s; }}/>);
                }
            })()}
            <div className="books">
                {this.state.books.map(function (book, index) {
                return (<div className="book" key={book[1].value + index}>
                        <div className="bib">
                            <a href={"https://calil.jp/book/" + book[1].value} target="_blank">
                                <img src={'https://calil.jp/cover/' + book[1].value} alt=""/>
                            </a>
                            <span className="title">{book[0].value}</span>
                            <span className="isbn">{book[1].value}</span>
                        </div>
                        <button onClick={_this["delete"].bind(_this, index)}>削除</button>
                    </div>);
            })}
            </div>
        </react_1["default"].Fragment>);
    };
    return App;
}(react_2.Component));
exports["default"] = App;
