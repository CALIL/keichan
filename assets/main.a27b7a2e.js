/* empty css                */import { u as unorm, l as lib, r as react, R as React, S as SpreadsheetStateProvider, a as ReactDOM } from "./vendor.01094ba0.js";
function normalize_isbn(isbn) {
  isbn = unorm.nfkc(isbn).toUpperCase().replace(/[^0-9X]/g, "");
  let i = lib.parse(isbn);
  if (i) {
    if (i.isIsbn10()) {
      return i.asIsbn10();
    } else if (i.isIsbn13()) {
      let s = i.asIsbn13();
      if (s.startsWith("978")) {
        return i.asIsbn10();
      } else {
        return i.asIsbn13();
      }
    }
  } else {
    let i2 = lib.parse("978" + isbn);
    if (i2 && i2.isIsbn13()) {
      return i2.asIsbn10();
    }
  }
  return false;
}
const REGION = "recipe";
class App extends react.exports.Component {
  constructor(props) {
    super(props);
    this.state = {
      invalidISBN: false,
      books: []
    };
    this.timer = null;
    this.str = "";
    this.prevISBN = null;
    this.documentCode = null;
  }
  onKeyDown(e) {
    if (e.target.parentNode.className === "Spreadsheet__data-editor")
      return;
    const ev = e || window.event;
    const key = ev.keyCode || ev.which || ev.charCode;
    console.log(this.str);
    console.log(e.key);
    if (e.key === "Enter" || key === 13) {
      this.checkStr();
      if (this.timer)
        clearTimeout(this.timer);
      this.str = "";
    } else {
      if (e.key.length === 1) {
        this.str += e.key;
      } else if (e.key === "Shift")
        ;
      else {
        this.str = "";
      }
      if (this.timer)
        clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        console.log("clear");
        this.checkStr();
        this.str = "";
      }, 300);
    }
  }
  checkStr() {
    if (normalize_isbn(this.str)) {
      this.setState({ invalidISBN: false });
      this.addBook(this.str);
    } else {
      this.setState({ invalidISBN: true });
      if (this.str.match(/^[A-D][0-9]+[A-D]$/)) {
        this.pushTempBook(this.str.replace(/[A-D]/g, ""));
      } else {
        this.pushTempBook(this.str);
      }
    }
  }
  componentDidMount() {
    window.document.addEventListener("keydown", this.onKeyDown.bind(this));
  }
  async addBook(isbn) {
    const data = await fetch(`https://unitrad.calil.jp/v1/search?isbn=${isbn}&region=${REGION}`).then((r) => r.json());
    if (data.count >= 1) {
      const book = data.books[0];
      this.pushBook(book);
    } else {
      console.log("not found");
    }
  }
  pushBook(book) {
    const { isbn, title, author, publisher, pubdate } = book;
    if (this.prevISBN !== isbn) {
      if (this.documentCode) {
        this.state.books.shift();
        this.state.books.unshift([{ value: this.documentCode }, { value: isbn }, { value: title }, { value: author }, { value: publisher }, { value: pubdate }]);
        this.documentCode = null;
      } else {
        this.state.books.unshift([{ value: isbn }, { value: isbn }, { value: title }, { value: author }, { value: publisher }, { value: pubdate }]);
      }
      this.setState({});
      this.prevISBN = isbn;
    }
  }
  pushTempBook(documentCode) {
    if (documentCode.startsWith("192"))
      return;
    if (this.documentCode !== documentCode) {
      this.state.books.unshift([{ value: documentCode }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }]);
      this.setState({});
      this.documentCode = documentCode;
    }
  }
  render() {
    if (this.state.books.length === 0) {
      return /* @__PURE__ */ React.createElement("div", {
        className: "description"
      }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512"
      }, /* @__PURE__ */ React.createElement("path", {
        d: "M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"
      })), "\u30D0\u30FC\u30B3\u30FC\u30C9\u3092\u30B9\u30AD\u30E3\u30F3\u3057\u3066\u304F\u3060\u3055\u3044"));
    } else {
      return /* @__PURE__ */ React.createElement(SpreadsheetStateProvider, {
        data: this.state.books,
        columnLabels: ["id", "isbn", "\u30BF\u30A4\u30C8\u30EB", "\u8457\u8005", "\u51FA\u7248\u793E", "\u51FA\u7248\u5E74"]
      });
    }
  }
}
ReactDOM.render(/* @__PURE__ */ React.createElement(App, null), document.getElementById("app"));
