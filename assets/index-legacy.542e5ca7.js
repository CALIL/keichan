!function(){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n(e,t)}(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,l=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return a=e.done,e},e:function(e){l=!0,s=e},f:function(){try{a||null==o.return||o.return()}finally{if(l)throw s}}}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return c(this,n)}}function c(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t):n}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=document.createElement("style");h.innerHTML='@charset "UTF-8";*{box-sizing:border-box;margin:0;padding:0}body,html{width:100%;height:100%;font-family:"Hiragino Kaku Gothic Pro","ヒラギノ角ゴ Pro W3","Noto Sans JP","ＭＳ Ｐゴシック","Helvetica Neue",Helvetica,Arial,sans-serif}#app{width:98%;margin:0 auto;padding-top:3rem}#app header{display:flex;justify-content:space-between;align-items:center;margin-bottom:.5rem}#app header form input{width:300px;height:3rem;padding:.5rem 1rem;border:1px solid #cccCCCCC;border-top-left-radius:5px;border-bottom-left-radius:5px}#app header form button{height:3rem;padding:.3rem 1rem;border-top:1px solid #cccCCCCC;border-right:1px solid #cccCCCCC;border-bottom:1px solid #cccCCCCC;border-left:none;border-top-right-radius:5px;border-bottom-right-radius:5px;cursor:pointer}#app header form button:hover{border-color:#999}#app header .right{display:flex}#app header .right .count{font-size:2rem;font-weight:700;margin-right:1rem}#app header .right button{padding:0 1rem;border:1px solid #cccCCCCC;border-radius:5px;cursor:pointer}#app header .right button:hover{border:1px solid #999}#app .warning{border:1px solid #cccCCCCC;border-radius:10px;padding:1rem;margin-bottom:.5rem}#app .connected{border:1px solid #cccCCCCC;border-radius:10px;padding:1rem;margin-bottom:.5rem}#app .description{text-align:center;background-color:#eee;border:1px solid #cccCCCCC;border-radius:10px;padding:5rem}#app .description svg{display:block;width:75px;margin:0 auto}#app .Spreadsheet__table{width:100%}#app .Spreadsheet__table tr td:first-child,#app .Spreadsheet__table tr th:first-child{width:2rem}#app .Spreadsheet__table tr td:nth-child(2),#app .Spreadsheet__table tr th:nth-child(2){width:16rem!important}#app .Spreadsheet__table tr td:nth-child(3),#app .Spreadsheet__table tr th:nth-child(3){width:3rem!important}#app .Spreadsheet__table tr td:nth-child(4),#app .Spreadsheet__table tr th:nth-child(4){width:5rem!important}#app .Spreadsheet__table tr td:nth-child(5),#app .Spreadsheet__table tr th:nth-child(5){width:5rem!important}#app .books{border-top:1px solid #ccc}#app .books .book{display:flex;justify-content:space-between;align-items:center;padding:1rem 0;border-bottom:1px solid #ccc}#app .books .book .bib{display:flex;align-items:center}#app .books .book .bib img{width:50px;margin-right:1rem}#app .books .book .bib .title{margin-right:1rem}#app .books .book .bib .isbn{font-size:.8rem}#app .books .book button{padding:0 .5rem;border:1px solid #ccc;border-radius:5px;cursor:pointer}#app .books .book button:hover{border:1px solid #999}@keyframes spinner{to{transform:rotate(360deg)}}@keyframes waiting{0%,100%,40%{background-size:32px}20%{background-size:40px}}.suggest{position:absolute;top:95px;z-index:100000;width:90%;background-color:#fff;box-shadow:0 2px 4px #ccc}.suggest .message{font-size:1rem;font-weight:600;color:#999;margin:0;background-color:#fff;padding:5px;border:1px solid #ccc;transition:opacity .6s}.suggest .results{border-bottom:1px solid #ccc;max-height:350px;overflow-y:scroll}.suggest .results .book{display:flex;justify-content:flex-start;align-items:flex-start;background-color:#fff;padding:0;border-top:1px solid #ccc;transition:opacity .6s;height:70px;overflow:hidden}.suggest .results .book:hover{background-color:#c6e5f2;border-bottom:1px solid #08a2e8}.suggest .results .book:hover{background-color:#c6e5f2}.suggest .results .book:hover>.next{color:#08a2e8}.suggest .results .book img{width:60px;margin-right:.5rem;background-color:#fff;background-image:url("https://calil.jp/public/img/no-image/noimage.png");background-size:100%}.suggest .results .book>div{padding:.5rem}.suggest .results .book>div .title{font-size:1rem;line-height:1.2em;font-weight:600;color:#444;text-decoration:none;max-height:2.4em;text-align:left;margin-bottom:.25rem}.suggest .results .book>div .author{font-size:.8rem;font-weight:400}.suggest .loading{top:-5px!important}.suggest .loading svg{display:none}.suggest .loading:before{content:"読み込み中";position:absolute;top:50%;left:50%;width:16px;height:16px;margin-top:-5px;margin-left:-10px}.suggest .loading:not(:required):before{content:"";border-radius:50%;border:2px solid rgba(0,0,0,.3);border-top-color:rgba(0,0,0,.6);animation:spinner .6s linear infinite;-webkit-animation:spinner .6s linear infinite}.hide_suggest .results{display:none}.speech{padding:1rem}.speech svg{width:1rem;height:1rem}',document.head.appendChild(h),System.register(["./vendor-legacy.e5769b2f.js"],(function(){"use strict";var e,n,i,l,c,p,h,d,f,m;return{setters:[function(t){e=t.u,n=t.l,i=t.r,l=t.R,c=t.a,p=t.I,h=t.X,d=t.F,f=t.S,m=t.b}],execute:function(){function b(t){t=e.nfkc(t).toUpperCase().replace(/[^0-9X]/g,"");var o=n.parse(t);if(o){if(o.isIsbn10())return o.asIsbn10();if(o.isIsbn13())return o.asIsbn13().startsWith("978")?o.asIsbn10():o.asIsbn13()}else{var r=n.parse("978"+t);if(r&&r.isIsbn13())return r.asIsbn10()}return!1}var g=function(e){a(n,e);var t=u(n);function n(){var e;return r(this,n),(e=t.call(this)).state={},e}return s(n,[{key:"render",value:function(){var e=this;return l.createElement("div",{className:"book",onClick:function(){return e.props.open(e.props.book)}},this.props.book.isbn&&(this.props.count<10*this.props.updateCount||this.props.completed)?l.createElement("img",{src:"https://calil.jp/cover/".concat(this.props.book.isbn)}):null,l.createElement("div",null,l.createElement("div",{className:"title"},this.props.book.title),l.createElement("div",{className:"author"},this.props.book.author)))}}]),n}(i.exports.Component),v=["free","title","author","publisher","isbn","ndc","year_start","year_end","region"];function y(e){return c.get("https://unitrad.calil.jp/v1/"+e)}var k=function(){function e(t,n){r(this,e),o(this,"callback",void 0),o(this,"killed",void 0),o(this,"data",void 0),this.callback=n,this.killed=!1,this.search(t)}return s(e,[{key:"kill",value:function(){this.killed=!0}},{key:"search",value:function(e){var n=this;this.killed||y("search").query(function(e){var n,o={},r=t(v);try{for(r.s();!(n=r.n()).done;){var i=n.value;e.hasOwnProperty(i)&&""!==e[i]&&(o[i]=e[i])}}catch(s){r.e(s)}finally{r.f()}return o}(e)).end((function(t,o){t?setTimeout((function(){return n.search(e)}),1e3):n.receive(o.body)}))}},{key:"polling",value:function(){var e=this;this.killed||y("polling").query({uuid:this.data.uuid,version:this.data.version,diff:1,timeout:10}).end((function(t,n){null===n.body?setTimeout((function(){return e.polling()}),100):e.receive(n.body)}))}},{key:"receive",value:function(e){var n=this;if(!this.killed){if(e.books_diff){for(var o in Array.prototype.push.apply(this.data.books,e.books_diff.insert),e)e.hasOwnProperty(o)&&"books_diff"!==o&&(this.data[o]=e[o]);var r,i=t(e.books_diff.update);try{for(i.s();!(r=i.n()).done;){var s=r.value;for(var a in s)if(s.hasOwnProperty(a)&&"_idx"!==a)if(!0===Array.isArray(s[a]))Array.prototype.push.apply(this.data.books[s._idx][a],s[a]);else if(s[a]instanceof Object)for(var l in s[a])s[a].hasOwnProperty(l)&&(this.data.books[s._idx][a][l]=s[a][l]);else this.data.books[s._idx][a]=s[a]}}catch(u){i.e(u)}finally{i.f()}}else this.data=e;this.callback(this.data),!0===e.running?(console.log("[Unitrad] continue..."),1===e.version&&0===this.data.books.length?setTimeout((function(){return n.polling()}),20):setTimeout((function(){return n.polling()}),500)):console.log("[Unitrad] complete.")}}}]),e}();var x=function(e){a(n,e);var t=u(n);function n(e){var o;return r(this,n),(o=t.call(this,e)).api=null,o.prevQuery="",o.state={loading:!1,running:!1,books:[],message:"",hint:"",updateCount:0},o}return s(n,[{key:"kill",value:function(){this.api&&(this.api.kill(),this.setState({updateCount:0,running:!1}))}},{key:"componentDidMount",value:function(){var e=this;this.props.query===this.prevQuery&&(this.state.showResult=!0),""!=this.props.query&&this.props.query!=this.prevQuery&&(this.kill(),this.prevQuery=this.props.query,this.api=new k({free:this.props.query,region:this.props.region},(function(t){var n=[];t.books.slice(0,300).map((function(e){if(e.isbn&&e.isbn.length>=10){var t=p.parse(e.isbn);e.isbn=t?t.asIsbn13():e.isbn.replace(/-/g,""),n.push(e)}else e.isbn=void 0,n.push(e)}));var o=t.running;n.length>20&&(o=!1,e.kill()),e.setState({books:n,loading:o&&n.length<10,running:o,notFound:!1===o&&0===n.length,updateCount:e.state.updateCount+1,showResult:!0})})))}},{key:"componentDidUpdate",value:function(){this.componentDidMount()}},{key:"componentWillUnmount",value:function(){this.kill()}},{key:"render",value:function(){var e=this,t=0;return l.createElement("div",{className:"suggest"},this.state.books.length>0?l.createElement("div",{className:"results"},this.state.books.map((function(n){return t+=1,l.createElement(g,{book:n,key:n.id,count:t,updateCount:e.state.updateCount,completed:!e.state.running,open:function(t){e.props.open(t)}})}))):this.state.running?l.createElement("div",{className:"message"},"検索中..."):null,this.state.notFound?l.createElement("div",{className:"message"},"見つかりませんでした"):null)}}]),n}(i.exports.Component),w=function(e){a(n,e);var t=u(n);function n(e){var o;return r(this,n),(o=t.call(this,e)).state={isRecognition:!1},o}return s(n,[{key:"start",value:function(){var e=this,t=new webkitSpeechRecognition;t.lang="ja-JP",this.setState({isRecognition:!0}),t.onend=function(){console.log("on end"),t.stop(),e.setState({isRecognition:!1})},t.onresult=function(t){t.results.length>0&&e.props.onEnd(t.results[0][0].transcript)},t.onstart=function(){console.log("on start")},t.onspeechstart=function(){console.log("on speech start")},t.onspeechend=function(){console.log("on speech end")},t.onsoundend=function(){console.log("on sound end")},t.onaudiostart=function(){console.log("on audio start")},t.onaudioend=function(){console.log("on audio end")},t.start()}},{key:"render",value:function(){return"webkitSpeechRecognition"in window?l.createElement("span",{className:"speech",onClick:this.start.bind(this)},this.state.isRecognition?"認識中…":l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"},l.createElement("path",{d:"M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"}))):null}}]),n}(i.exports.Component),S="recipe",C=function(e){a(n,e);var t=u(n);function n(e){var o;return r(this,n),(o=t.call(this,e)).state={books:[],invalidISBN:!1,scanner:!1,notFound:!1,query:"",showSuggest:!1},o.textInput=null,o.setTextInputRef=function(e){o.textInput=e},o.setTextInput=function(e){o.textInput&&(o.textInput.value=e)},o.timer=null,o.str="",o.prevISBN=null,o}return s(n,[{key:"load",value:function(){var e=localStorage.getItem("spreadsheet");if(e){var t=JSON.parse(e);this.setState({books:t})}}},{key:"save",value:function(){localStorage.setItem("spreadsheet",JSON.stringify(this.state.books))}},{key:"speak",value:function(e){if("speechSynthesis"in window){var t=new SpeechSynthesisUtterance(e);t.rate=1.5,speechSynthesis.speak(t)}}},{key:"speech",value:function(e){var t;e&&(this.setTextInput(e),null===(t=this.textInput)||void 0===t||t.focus(),this.setState({query:e,invalidISBN:!1,showSuggest:!0}))}},{key:"pushBook",value:function(e,t){var n;this.prevISBN!==t&&(this.state.books.unshift([{value:e},{value:t},{value:""},{value:""}]),this.setState({notFound:!1}),this.save(),this.speak(e),t&&(this.prevISBN=t),null===(n=this.textInput)||void 0===n||n.focus())}},{key:"addBook",value:function(e){var t=this;new k({isbn:e,region:S},(function(e){if(e.count>=1){var n=e.books[0];t.pushBook(n.title,n.isbn)}else console.log("not found"),t.setState({notFound:!0})}))}},{key:"selectBook",value:function(e){this.setState({showSuggest:!1}),this.pushBook(e.title,e.isbn)}},{key:"submit",value:function(e){var t;e.preventDefault();var n=null===(t=this.textInput)||void 0===t?void 0:t.value;n&&n.length>=10?b(n)?(this.setState({invalidISBN:!1,showSuggest:!1}),this.setTextInput(n),this.addBook(n)):this.setState({invalidISBN:!0,showSuggest:!1}):this.setState({query:n,invalidISBN:!1,showSuggest:!0})}},{key:"delete",value:function(e){var t,n=this.state.books.filter((function(t,n){return n!==e}));this.setState({books:n},this.save),null===(t=this.textInput)||void 0===t||t.focus()}},{key:"onKeyDown",value:function(e){var t=this;if("Spreadsheet__data-editor"!==e.target.parentNode.className){var n=e||window.event,o=n.keyCode||n.which||n.charCode;"Enter"===e.key||13===o?(this.str.length>=10&&(b(this.str)?(this.setState({invalidISBN:!1,scanner:!0}),this.setTextInput(this.str),this.addBook(this.str),console.log("scanned:",this.str)):this.setState({invalidISBN:!0})),this.timer&&clearTimeout(this.timer),this.str=""):(1===e.key.length?this.str+=e.key:this.str="",this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){console.log("clear"),t.str.length>=10&&(b(t.str)?(t.setState({invalidISBN:!1}),t.setTextInput(t.str),t.addBook(t.str)):t.setState({invalidISBN:!0})),t.str=""}),300))}}},{key:"componentDidMount",value:function(){var e,t=this;this.load(),null===(e=this.textInput)||void 0===e||e.focus(),window.document.addEventListener("keydown",this.onKeyDown.bind(this)),document.body.addEventListener("click",(function(e){e.target.closest(".inputForm")||t.setState({showSuggest:!1})}))}},{key:"onCellCommit",value:function(e,t,n){var o,r,i,s=null===(o=this.spreadsheet_ref)||void 0===o||null===(r=o.prevState)||void 0===r||null===(i=r.lastChanged)||void 0===i?void 0:i.row;n&&(this.state.books.map((function(o,r){r===s&&o[n.column].value===e.value&&(o[n.column].value=t.value)})),this.setState({}),this.save())}},{key:"downloadXSLX",value:function(){var e=h.utils.book_new();e.Props={Title:"",Subject:"",Author:"",CreatedDate:new Date},e.SheetNames.push("Test Sheet");var t=[];this.state.books.map((function(e){t.push([e[0].value,e[1].value,e[2].value,e[3].value])}));var n=h.utils.aoa_to_sheet(t);e.Sheets["Test Sheet"]=n;var o=h.write(e,{bookType:"xlsx",type:"binary"});d.exports.saveAs(new Blob([function(e){for(var t=new ArrayBuffer(e.length),n=new Uint8Array(t),o=0;o<e.length;o++)n[o]=255&e.charCodeAt(o);return t}(o)],{type:"application/octet-stream"}),"test.xlsx")}},{key:"render",value:function(){var e=this;return l.createElement(l.Fragment,null,l.createElement("div",{className:this.state.showSuggest?"show_suggest":"hide_suggest"},l.createElement(x,{region:S,open:this.selectBook.bind(this),query:this.state.query})),l.createElement("header",null,l.createElement("form",{className:"inputForm",onSubmit:this.submit.bind(this)},l.createElement("input",{type:"text",placeholder:"キーワード or ISBN...",ref:this.setTextInputRef,inputMode:"url",autoFocus:!0}),l.createElement("button",{onClick:this.submit.bind(this)},"検索"),l.createElement(w,{onEnd:this.speech.bind(this)})),function(){if(e.state.books.length>0)return l.createElement("div",{className:"right"},l.createElement("div",{className:"count"},e.state.books.length,"冊"),l.createElement("button",{onClick:e.downloadXSLX.bind(e)},"Excelをダウンロード"))}()),function(){if(e.state.invalidISBN)return l.createElement("div",{className:"warning"},l.createElement("h3",null,"ISBNが正しくありません"))}(),function(){if(e.state.notFound)return l.createElement("div",{className:"warning"},l.createElement("h3",null,"該当する本が見つかりませんでした"))}(),function(){if(e.state.scanner)return l.createElement("div",{className:"connected"},l.createElement("h3",null,"バーコードリーダーが接続されました"))}(),0===e.state.books.length?l.createElement("div",{className:"description",onClick:function(){var t;return null===(t=e.textInput)||void 0===t?void 0:t.focus()}},l.createElement("div",null,l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},l.createElement("path",{d:"M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"})),"ISBNを入力するか、バーコードをスキャンしてください")):l.createElement(f,{data:e.state.books,onCellCommit:e.onCellCommit.bind(e),ref:function(t){e.spreadsheet_ref=t}}),l.createElement("div",{className:"books"},this.state.books.map((function(t,n){return l.createElement("div",{className:"book",key:t[1].value+n},l.createElement("div",{className:"bib"},l.createElement("a",{href:"https://calil.jp/book/".concat(t[1].value),target:"_blank"},l.createElement("img",{src:"https://calil.jp/cover/"+t[1].value,alt:""})),l.createElement("span",{className:"title"},t[0].value),l.createElement("span",{className:"isbn"},t[1].value)),l.createElement("button",{onClick:e.delete.bind(e,n)},"削除"))}))))}}]),n}(i.exports.Component);m.render(l.createElement(C,null),document.getElementById("app"))}}}))}();
