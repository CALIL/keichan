!function(){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function o(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=u(t);if(e){var s=u(this).constructor;n=Reflect.construct(o,arguments,s)}else n=o.apply(this,arguments);return a(this,n)}}function a(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e):n}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}System.register(["./api-legacy.823de525.js","./vendor-legacy.454dee28.js"],(function(){"use strict";var t,n,i,a,u,l,c,h,p;return{setters:[function(e){t=e.a,n=e.n},function(t){i=t.r,a=t.R,u=t.I,l=t.X,c=t.F,h=t.S,p=t.a}],execute:function(){var v=function(t){s(i,t);var n=r(i);function i(){var t;return e(this,i),(t=n.call(this)).state={},t}return o(i,[{key:"render",value:function(){var t=this;return a.createElement("div",{className:"book",onClick:function(){return t.props.open(t.props.book)}},this.props.book.isbn&&(this.props.count<10*this.props.updateCount||this.props.completed)?a.createElement("img",{src:"https://calil.jp/cover/".concat(this.props.book.isbn)}):null,a.createElement("div",null,a.createElement("div",{className:"title"},this.props.book.title),a.createElement("div",{className:"author"},this.props.book.author)))}}]),i}(i.exports.Component),d=function(n){s(l,n);var i=r(l);function l(t){var n;return e(this,l),(n=i.call(this,t)).api=null,n.prevQuery="",n.state={loading:!1,running:!1,books:[],message:"",hint:"",updateCount:0},n}return o(l,[{key:"kill",value:function(){this.api&&(this.api.kill(),this.setState({updateCount:0,running:!1}))}},{key:"componentDidMount",value:function(){var e=this;this.props.query===this.prevQuery&&(this.state.showResult=!0),""!=this.props.query&&this.props.query!=this.prevQuery&&(this.kill(),this.prevQuery=this.props.query,this.api=new t({free:this.props.query,region:this.props.region},(function(t){var n=[];t.books.slice(0,300).map((function(t){if(t.isbn&&t.isbn.length>=10){var e=u.parse(t.isbn);t.isbn=e?e.asIsbn13():t.isbn.replace(/-/g,""),n.push(t)}else t.isbn=void 0,n.push(t)}));var o=t.running;n.length>20&&(o=!1,e.kill()),e.setState({books:n,loading:o&&n.length<10,running:o,notFound:!1===o&&0===n.length,updateCount:e.state.updateCount+1,showResult:!0})})))}},{key:"componentDidUpdate",value:function(){this.componentDidMount()}},{key:"componentWillUnmount",value:function(){this.kill()}},{key:"render",value:function(){var t=this,e=0;return a.createElement("div",{className:"suggest"},this.state.books.length>0?a.createElement("div",{className:"results"},this.state.books.map((function(n){return e+=1,a.createElement(v,{book:n,key:n.id,count:e,updateCount:t.state.updateCount,completed:!t.state.running,open:function(e){t.props.open(e)}})}))):this.state.running?a.createElement("div",{className:"message"},"検索中..."):null,this.state.notFound?a.createElement("div",{className:"message"},"見つかりませんでした"):null)}}]),l}(i.exports.Component),f=function(t){s(i,t);var n=r(i);function i(t){var o;return e(this,i),(o=n.call(this,t)).state={isRecognition:!1},o}return o(i,[{key:"start",value:function(){var t=this,e=new webkitSpeechRecognition;e.lang="ja-JP",this.setState({isRecognition:!0}),e.onend=function(){console.log("on end"),e.stop(),t.setState({isRecognition:!1})},e.onresult=function(e){e.results.length>0&&t.props.onEnd(e.results[0][0].transcript)},e.onstart=function(){console.log("on start")},e.onspeechstart=function(){console.log("on speech start")},e.onspeechend=function(){console.log("on speech end")},e.onsoundend=function(){console.log("on sound end")},e.onaudiostart=function(){console.log("on audio start")},e.onaudioend=function(){console.log("on audio end")},e.start()}},{key:"render",value:function(){return"webkitSpeechRecognition"in window?a.createElement("span",{className:"speech",onClick:this.start.bind(this)},this.state.isRecognition?"認識中…":a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"},a.createElement("path",{d:"M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"}))):null}}]),i}(i.exports.Component),m="recipe",g=function(i){s(p,i);var u=r(p);function p(t){var n;return e(this,p),(n=u.call(this,t)).state={books:[],invalidISBN:!1,scanner:!1,notFound:!1,query:"",showSuggest:!1},n.textInput=null,n.setTextInputRef=function(t){n.textInput=t},n.setTextInput=function(t){n.textInput&&(n.textInput.value=t)},n.timer=null,n.str="",n.prevISBN=null,n}return o(p,[{key:"load",value:function(){var t=localStorage.getItem("spreadsheet");if(t){var e=JSON.parse(t);this.setState({books:e})}}},{key:"save",value:function(){localStorage.setItem("spreadsheet",JSON.stringify(this.state.books))}},{key:"speak",value:function(t){if("speechSynthesis"in window){var e=new SpeechSynthesisUtterance(t);e.rate=1.5,speechSynthesis.speak(e)}}},{key:"speech",value:function(t){var e;t&&(this.setTextInput(t),null===(e=this.textInput)||void 0===e||e.focus(),this.setState({query:t,invalidISBN:!1,showSuggest:!0}))}},{key:"pushBook",value:function(t,e){var n;this.prevISBN!==e&&(this.state.books.unshift([{value:t},{value:e},{value:""},{value:""}]),this.setState({notFound:!1}),this.save(),this.speak(t),e&&(this.prevISBN=e),null===(n=this.textInput)||void 0===n||n.focus())}},{key:"addBook",value:function(e){var n=this;new t({isbn:e,region:m},(function(t){if(t.count>=1){var e=t.books[0];n.pushBook(e.title,e.isbn)}else console.log("not found"),n.setState({notFound:!0})}))}},{key:"selectBook",value:function(t){this.setState({showSuggest:!1}),this.pushBook(t.title,t.isbn)}},{key:"submit",value:function(t){var e;t.preventDefault();var o=null===(e=this.textInput)||void 0===e?void 0:e.value;o&&o.length>=10?n(o)?(this.setState({invalidISBN:!1,showSuggest:!1}),this.setTextInput(o),this.addBook(o)):this.setState({invalidISBN:!0,showSuggest:!1}):this.setState({query:o,invalidISBN:!1,showSuggest:!0})}},{key:"delete",value:function(t){var e,n=this.state.books.filter((function(e,n){return n!==t}));this.setState({books:n},this.save),null===(e=this.textInput)||void 0===e||e.focus()}},{key:"onKeyDown",value:function(t){var e=this;if("Spreadsheet__data-editor"!==t.target.parentNode.className){var o=t||window.event,s=o.keyCode||o.which||o.charCode;"Enter"===t.key||13===s?(this.str.length>=10&&(n(this.str)?(this.setState({invalidISBN:!1,scanner:!0}),this.setTextInput(this.str),this.addBook(this.str),console.log("scanned:",this.str)):this.setState({invalidISBN:!0})),this.timer&&clearTimeout(this.timer),this.str=""):(1===t.key.length?this.str+=t.key:this.str="",this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){console.log("clear"),e.str.length>=10&&(n(e.str)?(e.setState({invalidISBN:!1}),e.setTextInput(e.str),e.addBook(e.str)):e.setState({invalidISBN:!0})),e.str=""}),300))}}},{key:"componentDidMount",value:function(){var t,e=this;this.load(),null===(t=this.textInput)||void 0===t||t.focus(),window.document.addEventListener("keydown",this.onKeyDown.bind(this)),document.body.addEventListener("click",(function(t){t.target.closest(".inputForm")||e.setState({showSuggest:!1})}))}},{key:"onCellCommit",value:function(t,e,n){var o,s,i,r=null===(o=this.spreadsheet_ref)||void 0===o||null===(s=o.prevState)||void 0===s||null===(i=s.lastChanged)||void 0===i?void 0:i.row;n&&(this.state.books.map((function(o,s){s===r&&o[n.column].value===t.value&&(o[n.column].value=e.value)})),this.setState({}),this.save())}},{key:"downloadXSLX",value:function(){var t=l.utils.book_new();t.Props={Title:"",Subject:"",Author:"",CreatedDate:new Date},t.SheetNames.push("Test Sheet");var e=[];this.state.books.map((function(t){e.push([t[0].value,t[1].value,t[2].value,t[3].value])}));var n=l.utils.aoa_to_sheet(e);t.Sheets["Test Sheet"]=n;var o=l.write(t,{bookType:"xlsx",type:"binary"});c.exports.saveAs(new Blob([function(t){for(var e=new ArrayBuffer(t.length),n=new Uint8Array(e),o=0;o<t.length;o++)n[o]=255&t.charCodeAt(o);return e}(o)],{type:"application/octet-stream"}),"test.xlsx")}},{key:"render",value:function(){var t=this;return a.createElement(a.Fragment,null,a.createElement("div",{className:this.state.showSuggest?"show_suggest":"hide_suggest"},a.createElement(d,{region:m,open:this.selectBook.bind(this),query:this.state.query})),a.createElement("header",null,a.createElement("form",{className:"inputForm",onSubmit:this.submit.bind(this)},a.createElement("input",{type:"text",placeholder:"キーワード or ISBN...",ref:this.setTextInputRef,inputMode:"url",autoFocus:!0}),a.createElement("button",{onClick:this.submit.bind(this)},"検索"),a.createElement(f,{onEnd:this.speech.bind(this)})),function(){if(t.state.books.length>0)return a.createElement("div",{className:"right"},a.createElement("div",{className:"count"},t.state.books.length,"冊"),a.createElement("button",{onClick:t.downloadXSLX.bind(t)},"Excelをダウンロード"))}()),function(){if(t.state.invalidISBN)return a.createElement("div",{className:"warning"},a.createElement("h3",null,"ISBNが正しくありません"))}(),function(){if(t.state.notFound)return a.createElement("div",{className:"warning"},a.createElement("h3",null,"該当する本が見つかりませんでした"))}(),function(){if(t.state.scanner)return a.createElement("div",{className:"connected"},a.createElement("h3",null,"バーコードリーダーが接続されました"))}(),0===t.state.books.length?a.createElement("div",{className:"description",onClick:function(){var e;return null===(e=t.textInput)||void 0===e?void 0:e.focus()}},a.createElement("div",null,a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a.createElement("path",{d:"M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"})),"ISBNを入力するか、バーコードをスキャンしてください")):a.createElement(h,{data:t.state.books,onCellCommit:t.onCellCommit.bind(t),ref:function(e){t.spreadsheet_ref=e}}),a.createElement("div",{className:"books"},this.state.books.map((function(e,n){return a.createElement("div",{className:"book",key:e[1].value+n},a.createElement("div",{className:"bib"},a.createElement("a",{href:"https://calil.jp/book/".concat(e[1].value),target:"_blank"},a.createElement("img",{src:"https://calil.jp/cover/"+e[1].value,alt:""})),a.createElement("span",{className:"title"},e[0].value),a.createElement("span",{className:"isbn"},e[1].value)),a.createElement("button",{onClick:t.delete.bind(t,n)},"削除"))}))))}}]),p}(i.exports.Component);p.render(a.createElement(g,null),document.getElementById("app"))}}}))}();