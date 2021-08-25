var t=Object.defineProperty,e=(e,s,n)=>(((e,s,n)=>{s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n})(e,"symbol"!=typeof s?s+"":s,n),n);import("data:text/javascript;base64,Cg==");/* empty css              */import{u as s,l as n,r as i,R as o,a,I as l,X as r,F as h,S as c,b as u}from"./vendor.a67e6054.js";function p(t){t=s.nfkc(t).toUpperCase().replace(/[^0-9X]/g,"");let e=n.parse(t);if(e){if(e.isIsbn10())return e.asIsbn10();if(e.isIsbn13()){return e.asIsbn13().startsWith("978")?e.asIsbn10():e.asIsbn13()}}else{let e=n.parse("978"+t);if(e&&e.isIsbn13())return e.asIsbn10()}return!1}class d extends i.exports.Component{constructor(){super(),this.state={}}render(){return o.createElement("div",{className:"book",onClick:()=>this.props.open(this.props.book)},this.props.book.isbn&&(this.props.count<10*this.props.updateCount||this.props.completed)?o.createElement("img",{src:`https://calil.jp/cover/${this.props.book.isbn}`}):null,o.createElement("div",null,o.createElement("div",{className:"title"},this.props.book.title),o.createElement("div",{className:"author"},this.props.book.author)))}}const m=["free","title","author","publisher","isbn","ndc","year_start","year_end","region"];function v(t){return a.get("https://unitrad.calil.jp/v1/"+t)}class g{constructor(t,s){e(this,"callback"),e(this,"killed"),e(this,"data"),this.callback=s,this.killed=!1,this.search(t)}kill(){this.killed=!0}search(t){this.killed||v("search").query(function(t){let e={};for(let s of m)t.hasOwnProperty(s)&&""!==t[s]&&(e[s]=t[s]);return e}(t)).end(((e,s)=>{e?setTimeout((()=>this.search(t)),1e3):this.receive(s.body)}))}polling(){this.killed||v("polling").query({uuid:this.data.uuid,version:this.data.version,diff:1,timeout:10}).end(((t,e)=>{null===e.body?setTimeout((()=>this.polling()),100):this.receive(e.body)}))}receive(t){if(!this.killed){if(t.books_diff){Array.prototype.push.apply(this.data.books,t.books_diff.insert);for(let e in t)t.hasOwnProperty(e)&&"books_diff"!==e&&(this.data[e]=t[e]);for(let e of t.books_diff.update)for(let t in e)if(e.hasOwnProperty(t)&&"_idx"!==t)if(!0===Array.isArray(e[t]))Array.prototype.push.apply(this.data.books[e._idx][t],e[t]);else if(e[t]instanceof Object)for(let s in e[t])e[t].hasOwnProperty(s)&&(this.data.books[e._idx][t][s]=e[t][s]);else this.data.books[e._idx][t]=e[t]}else this.data=t;this.callback(this.data),!0===t.running?(console.log("[Unitrad] continue..."),1===t.version&&0===this.data.books.length?setTimeout((()=>this.polling()),20):setTimeout((()=>this.polling()),500)):console.log("[Unitrad] complete.")}}}class b extends i.exports.Component{constructor(t){super(t),this.api=null,this.prevQuery="",this.state={loading:!1,running:!1,books:[],message:"",hint:"",updateCount:0}}kill(){this.api&&(this.api.kill(),this.setState({updateCount:0,running:!1}))}componentDidMount(){this.props.query===this.prevQuery&&(this.state.showResult=!0),""!=this.props.query&&this.props.query!=this.prevQuery&&(this.kill(),this.prevQuery=this.props.query,this.api=new g({free:this.props.query,region:this.props.region},(t=>{let e=[];t.books.slice(0,300).map((t=>{if(t.isbn&&t.isbn.length>=10){const s=l.parse(t.isbn);t.isbn=s?s.asIsbn13():t.isbn.replace(/-/g,""),e.push(t)}else t.isbn=void 0,e.push(t)}));let s=t.running;e.length>20&&(s=!1,this.kill()),this.setState({books:e,loading:s&&e.length<10,running:s,notFound:!1===s&&0===e.length,updateCount:this.state.updateCount+1,showResult:!0})})))}componentDidUpdate(){this.componentDidMount()}componentWillUnmount(){this.kill()}render(){let t=0;return o.createElement("div",{className:"suggest"},this.state.books.length>0?o.createElement("div",{className:"results"},this.state.books.map((e=>(t+=1,o.createElement(d,{book:e,key:e.id,count:t,updateCount:this.state.updateCount,completed:!this.state.running,open:t=>{this.props.open(t)}}))))):this.state.running?o.createElement("div",{className:"message"},"検索中..."):null,this.state.notFound?o.createElement("div",{className:"message"},"見つかりませんでした"):null)}}class k extends i.exports.Component{constructor(t){super(t),this.state={isRecognition:!1}}start(){const t=new webkitSpeechRecognition;t.lang="ja-JP",this.setState({isRecognition:!0}),t.onend=()=>{console.log("on end"),t.stop(),this.setState({isRecognition:!1})},t.onresult=t=>{t.results.length>0&&this.props.onEnd(t.results[0][0].transcript)},t.onstart=()=>{console.log("on start")},t.onspeechstart=()=>{console.log("on speech start")},t.onspeechend=()=>{console.log("on speech end")},t.onsoundend=()=>{console.log("on sound end")},t.onaudiostart=()=>{console.log("on audio start")},t.onaudioend=()=>{console.log("on audio end")},t.start()}render(){return"webkitSpeechRecognition"in window?o.createElement("span",{className:"speech",onClick:this.start.bind(this)},this.state.isRecognition?"認識中…":o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"},o.createElement("path",{d:"M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"}))):null}}class f extends i.exports.Component{constructor(t){super(t),this.state={books:[],invalidISBN:!1,scanner:!1,notFound:!1,query:"",showSuggest:!1},this.textInput=null,this.setTextInputRef=t=>{this.textInput=t},this.setTextInput=t=>{this.textInput&&(this.textInput.value=t)},this.timer=null,this.str="",this.prevISBN=null}load(){const t=localStorage.getItem("spreadsheet");if(t){const e=JSON.parse(t);this.setState({books:e})}}save(){localStorage.setItem("spreadsheet",JSON.stringify(this.state.books))}speak(t){if("speechSynthesis"in window){const e=new SpeechSynthesisUtterance(t);e.rate=1.5,speechSynthesis.speak(e)}}speech(t){var e;t&&(this.setTextInput(t),null==(e=this.textInput)||e.focus(),this.setState({query:t,invalidISBN:!1,showSuggest:!0}))}pushBook(t,e){var s;this.prevISBN!==e&&(this.state.books.unshift([{value:t},{value:e},{value:""},{value:""}]),this.setState({notFound:!1}),this.save(),this.speak(t),e&&(this.prevISBN=e),null==(s=this.textInput)||s.focus())}addBook(t){new g({isbn:t,region:"recipe"},(t=>{if(t.count>=1){const e=t.books[0];this.pushBook(e.title,e.isbn)}else console.log("not found"),this.setState({notFound:!0})}))}selectBook(t){this.setState({showSuggest:!1}),this.pushBook(t.title,t.isbn)}submit(t){var e;t.preventDefault();const s=null==(e=this.textInput)?void 0:e.value;s&&s.length>=10?p(s)?(this.setState({invalidISBN:!1,showSuggest:!1}),this.setTextInput(s),this.addBook(s)):this.setState({invalidISBN:!0,showSuggest:!1}):this.setState({query:s,invalidISBN:!1,showSuggest:!0})}delete(t){var e;const s=this.state.books.filter(((e,s)=>s!==t));this.setState({books:s},this.save),null==(e=this.textInput)||e.focus()}onKeyDown(t){if("Spreadsheet__data-editor"===t.target.parentNode.className)return;const e=t||window.event,s=e.keyCode||e.which||e.charCode;"Enter"===t.key||13===s?(this.str.length>=10&&(p(this.str)?(this.setState({invalidISBN:!1,scanner:!0}),this.setTextInput(this.str),this.addBook(this.str),console.log("scanned:",this.str)):this.setState({invalidISBN:!0})),this.timer&&clearTimeout(this.timer),this.str=""):(1===t.key.length?this.str+=t.key:this.str="",this.timer&&clearTimeout(this.timer),this.timer=setTimeout((()=>{console.log("clear"),this.str.length>=10&&(p(this.str)?(this.setState({invalidISBN:!1}),this.setTextInput(this.str),this.addBook(this.str)):this.setState({invalidISBN:!0})),this.str=""}),300))}componentDidMount(){var t;this.load(),null==(t=this.textInput)||t.focus(),window.document.addEventListener("keydown",this.onKeyDown.bind(this)),document.body.addEventListener("click",(t=>{t.target.closest(".inputForm")||this.setState({showSuggest:!1})}))}onCellCommit(t,e,s){var n,i,o;const a=null==(o=null==(i=null==(n=this.spreadsheet_ref)?void 0:n.prevState)?void 0:i.lastChanged)?void 0:o.row;s&&(this.state.books.map(((n,i)=>{i===a&&n[s.column].value===t.value&&(n[s.column].value=e.value)})),this.setState({}),this.save())}downloadXSLX(){const t=r.utils.book_new();t.Props={Title:"",Subject:"",Author:"",CreatedDate:new Date},t.SheetNames.push("Test Sheet");const e=[];this.state.books.map((t=>{e.push([t[0].value,t[1].value,t[2].value,t[3].value])}));const s=r.utils.aoa_to_sheet(e);t.Sheets["Test Sheet"]=s;const n=r.write(t,{bookType:"xlsx",type:"binary"});h.exports.saveAs(new Blob([function(t){const e=new ArrayBuffer(t.length),s=new Uint8Array(e);for(let n=0;n<t.length;n++)s[n]=255&t.charCodeAt(n);return e}(n)],{type:"application/octet-stream"}),"test.xlsx")}render(){return o.createElement(o.Fragment,null,o.createElement("div",{className:this.state.showSuggest?"show_suggest":"hide_suggest"},o.createElement(b,{region:"recipe",open:this.selectBook.bind(this),query:this.state.query})),o.createElement("header",null,o.createElement("form",{className:"inputForm",onSubmit:this.submit.bind(this)},o.createElement("input",{type:"text",placeholder:"キーワード or ISBN...",ref:this.setTextInputRef,inputMode:"url",autoFocus:!0}),o.createElement("button",{onClick:this.submit.bind(this)},"検索"),o.createElement(k,{onEnd:this.speech.bind(this)})),(()=>{if(this.state.books.length>0)return o.createElement("div",{className:"right"},o.createElement("div",{className:"count"},this.state.books.length,"冊"),o.createElement("button",{onClick:this.downloadXSLX.bind(this)},"Excelをダウンロード"))})()),(()=>{if(this.state.invalidISBN)return o.createElement("div",{className:"warning"},o.createElement("h3",null,"ISBNが正しくありません"))})(),(()=>{if(this.state.notFound)return o.createElement("div",{className:"warning"},o.createElement("h3",null,"該当する本が見つかりませんでした"))})(),(()=>{if(this.state.scanner)return o.createElement("div",{className:"connected"},o.createElement("h3",null,"バーコードリーダーが接続されました"))})(),(()=>0===this.state.books.length?o.createElement("div",{className:"description",onClick:()=>{var t;return null==(t=this.textInput)?void 0:t.focus()}},o.createElement("div",null,o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o.createElement("path",{d:"M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"})),"ISBNを入力するか、バーコードをスキャンしてください")):o.createElement(c,{data:this.state.books,onCellCommit:this.onCellCommit.bind(this),ref:t=>{this.spreadsheet_ref=t}}))(),o.createElement("div",{className:"books"},this.state.books.map(((t,e)=>o.createElement("div",{className:"book",key:t[1].value+e},o.createElement("div",{className:"bib"},o.createElement("a",{href:`https://calil.jp/book/${t[1].value}`,target:"_blank"},o.createElement("img",{src:"https://calil.jp/cover/"+t[1].value,alt:""})),o.createElement("span",{className:"title"},t[0].value),o.createElement("span",{className:"isbn"},t[1].value)),o.createElement("button",{onClick:this.delete.bind(this,e)},"削除"))))))}}u.render(o.createElement(f,null),document.getElementById("app"));