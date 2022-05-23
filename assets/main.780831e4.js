var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,l=(t,s,n)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,o=(e,t)=>{for(var s in t||(t={}))i.call(t,s)&&l(e,s,t[s]);if(n)for(var s of n(t))a.call(t,s)&&l(e,s,t[s]);return e},r=(e,n)=>t(e,s(n)),c=(e,t,s)=>(l(e,"symbol"!=typeof t?t+"":t,s),s);import("data:text/javascript;base64,Cg==");import{j as h,r as u,J as d,C as p,E as b,T as m,h as g,I as v,a as f,u as y,l as w,s as k,b as N,O as x,S as C,B as S,F as z,c as I,X as O,d as V,R as j}from"./vendor.c55359c3.js";const E=h.exports.jsx,T=h.exports.jsxs,B=h.exports.Fragment,R=e=>{const t=e.book,s=u.exports.useRef(null);return u.exports.useEffect((()=>{d(s.current,t.isbn,{format:"codabar",width:1.25,height:26,margin:10,fontSize:12})}),[]),T(p,{className:"card",interactive:!0,elevation:b.TWO,onClick:()=>e.onClick({title:t.title,author:t.author,publisher:t.publisher,pubdate:t.pubdate,isbn:t.isbn,source:t.source}),children:[T("div",{className:"card-header",children:[t.cover?E("img",{src:t.cover,alt:t.title}):null,T("div",{children:[E("h3",{children:[t.title,t.volume].join(" ")}),E("p",{className:"author",children:t.author}),t.tags.map((e=>E(m,{children:e},e)))]})]}),E("svg",{ref:s,xmlns:"http://www.w3.org/2000/svg",version:"1.1"})]},t.isbn)};let D=new g.Howl({src:["./audio/healing.ogg"],autoplay:!1,loop:!1,volume:1,rate:.5,onend:function(){console.log("Finished!")}}),H=new g.Howl({src:["./audio/healed.ogg"],autoplay:!1,loop:!1,volume:1,onend:function(){console.log("Finished!")}});class _ extends u.exports.Component{constructor(e){super(e),this.state={isRecognition:!1}}start(){if(this.state.isRecognition)return;const e=new webkitSpeechRecognition;e.lang="ja-JP",this.setState({isRecognition:!0}),e.onend=()=>{console.log("on end"),e.stop(),this.setState({isRecognition:!1})},e.onresult=e=>{e.results.length>0&&(H.play(),this.props.onEnd(e.results[0][0].transcript))},e.onstart=()=>{console.log("on start"),D.play()},e.onspeechstart=()=>{console.log("on speech start")},e.onspeechend=()=>{console.log("on speech end")},e.onsoundend=()=>{console.log("on sound end")},e.onaudiostart=()=>{console.log("on audio start")},e.onaudioend=()=>{console.log("on audio end")},e.start()}render(){return"webkitSpeechRecognition"in window?E("span",{className:"speech",onClick:this.start.bind(this),children:this.state.isRecognition?E(v,{icon:"chat"}):E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512",children:E("path",{d:"M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"})})}):null}}const $=["free","title","author","publisher","isbn","ndc","year_start","year_end","region"];function A(e){return f.get("https://unitrad.calil.jp/v1/"+e)}class P{constructor(e,t){c(this,"callback"),c(this,"killed"),c(this,"data"),this.callback=t,this.killed=!1,this.search(e)}kill(){this.killed=!0}search(e){this.killed||A("search").query(function(e){let t={};for(let s of $)e.hasOwnProperty(s)&&""!==e[s]&&(t[s]=e[s]);return t}(e)).end(((t,s)=>{t?setTimeout((()=>this.search(e)),1e3):this.receive(s.body)}))}polling(){this.killed||A("polling").query({uuid:this.data.uuid,version:this.data.version,diff:1,timeout:10}).end(((e,t)=>{null===t.body?setTimeout((()=>this.polling()),100):this.receive(t.body)}))}receive(e){if(!this.killed){if(e.books_diff){Array.prototype.push.apply(this.data.books,e.books_diff.insert);for(let t in e)e.hasOwnProperty(t)&&"books_diff"!==t&&(this.data[t]=e[t]);for(let t of e.books_diff.update)for(let e in t)if(t.hasOwnProperty(e)&&"_idx"!==e)if(!0===Array.isArray(t[e]))Array.prototype.push.apply(this.data.books[t._idx][e],t[e]);else if(t[e]instanceof Object)for(let s in t[e])t[e].hasOwnProperty(s)&&(this.data.books[t._idx][e][s]=t[e][s]);else this.data.books[t._idx][e]=t[e]}else this.data=e;this.callback(this.data),!0===e.running?(console.log("[Unitrad] continue..."),1===e.version&&0===this.data.books.length?setTimeout((()=>this.polling()),20):setTimeout((()=>this.polling()),500)):console.log("[Unitrad] complete.")}}}function L(e){e=y.nfkc(e).toUpperCase().replace(/[^0-9X]/g,"");let t=w.parse(e);if(t){if(t.isIsbn10())return t.asIsbn10();if(t.isIsbn13()){return t.asIsbn13().startsWith("978")?t.asIsbn10():t.asIsbn13()}}else{let t=w.parse("978"+e);if(t&&t.isIsbn13())return t.asIsbn10()}return!1}const F=e=>{e=y.nfkc(e).toUpperCase().replace(/[^0-9X]/g,"");let t=w.parse(e);if(t){if(t.isIsbn10())return t.asIsbn13();if(t.isIsbn13())return t.asIsbn13()}return!1};const q=async(e,t)=>{const s=e.author.split(",")[0],n=e.publisher,i=e.pubdate;return new Promise((async(a,l)=>{let o=new P({author:s,publisher:n,year_start:i,region:t},(async t=>{if(!o.killed&&(t.count>5&&o.kill(),t.count>=1)){const s=[];t.books.forEach((e=>{if(null===e.isbn)return;let t=0;e.pubdate&&(t="string"!=typeof e.pubdate?e.pubdate:Number(e.pubdate.split("/")[0].split(".")[0]));let n=w.parse(L(e.isbn)),i=null;n&&(i=n.asIsbn13()),i&&s.push({title:e.title+" "+e.volume,author:e.author.split(",")[0],publisher:e.publisher,isbn:i,pubdate:t,source:"unitrad"})})),s.sort((function(e,t){return e.isbn<t.isbn?-1:e.isbn>t.isbn?1:0}));let n=[];const i=[];let l=!1;s.forEach((t=>{t.isbn!==e.isbn&&(l?n.push(t):i.push(t)),t.isbn===e.isbn&&(l=!0)})),n=n.concat(i);const o=[];n.forEach((e=>{o.push(e.isbn)}));const r=await U(o);a(r)}}))}))},U=async e=>new Promise((async(t,s)=>{const n=await fetch("https://api.openBD.jp/v1/get?isbn="+e.join(",")).then((e=>e.json())),i=[];n.forEach((e=>{if(e){const t=[];try{e.onix.DescriptiveDetail.Collection.TitleDetail.TitleElement.forEach(((e,s)=>{var n,i,a;t.includes(e.TitleText.content)||t.push((n=e.TitleText.content,i={"ｶﾞ":"ガ","ｷﾞ":"ギ","ｸﾞ":"グ","ｹﾞ":"ゲ","ｺﾞ":"ゴ","ｻﾞ":"ザ","ｼﾞ":"ジ","ｽﾞ":"ズ","ｾﾞ":"ゼ","ｿﾞ":"ゾ","ﾀﾞ":"ダ","ﾁﾞ":"ヂ","ﾂﾞ":"ヅ","ﾃﾞ":"デ","ﾄﾞ":"ド","ﾊﾞ":"バ","ﾋﾞ":"ビ","ﾌﾞ":"ブ","ﾍﾞ":"ベ","ﾎﾞ":"ボ","ﾊﾟ":"パ","ﾋﾟ":"ピ","ﾌﾟ":"プ","ﾍﾟ":"ペ","ﾎﾟ":"ポ","ｳﾞ":"ヴ","ﾜﾞ":"ヷ","ｦﾞ":"ヺ","ｱ":"ア","ｲ":"イ","ｳ":"ウ","ｴ":"エ","ｵ":"オ","ｶ":"カ","ｷ":"キ","ｸ":"ク","ｹ":"ケ","ｺ":"コ","ｻ":"サ","ｼ":"シ","ｽ":"ス","ｾ":"セ","ｿ":"ソ","ﾀ":"タ","ﾁ":"チ","ﾂ":"ツ","ﾃ":"テ","ﾄ":"ト","ﾅ":"ナ","ﾆ":"ニ","ﾇ":"ヌ","ﾈ":"ネ","ﾉ":"ノ","ﾊ":"ハ","ﾋ":"ヒ","ﾌ":"フ","ﾍ":"ヘ","ﾎ":"ホ","ﾏ":"マ","ﾐ":"ミ","ﾑ":"ム","ﾒ":"メ","ﾓ":"モ","ﾔ":"ヤ","ﾕ":"ユ","ﾖ":"ヨ","ﾗ":"ラ","ﾘ":"リ","ﾙ":"ル","ﾚ":"レ","ﾛ":"ロ","ﾜ":"ワ","ｦ":"ヲ","ﾝ":"ン","ｧ":"ァ","ｨ":"ィ","ｩ":"ゥ","ｪ":"ェ","ｫ":"ォ","ｯ":"ッ","ｬ":"ャ","ｭ":"ュ","ｮ":"ョ","｡":"。","､":"、","ｰ":"ー","｢":"「","｣":"」","･":"・"},a=new RegExp("("+Object.keys(i).join("|")+")","g"),n.replace(a,(function(e){return i[e]})).replace(/ﾞ/g,"゛").replace(/ﾟ/g,"゜")))}))}catch{}let s=e.summary.volume;try{""===s&&(s=e.onix.DescriptiveDetail.TitleDetail.TitleElement.PartNumber.split(";")[0],e.summary.title.match(s)&&(s=""))}catch{}let n="";try{e.onix.ProductSupply.SupplyDetail.Price.some((e=>{"JPY"===e.CurrencyCode&&(n=e.PriceAmount)}))}catch{}let a="";try{e.onix.DescriptiveDetail.Subject.some((e=>{"78"===e.SubjectSchemeIdentifier&&(a=e.SubjectCode)}))}catch{}const l={title:[e.summary.title,s].join(" "),author:e.summary.author,publisher:e.summary.publisher,isbn:e.summary.isbn,pubdate:e.summary.pubdate,cover:e.summary.cover,tags:t,price:n,cCode:a,source:"opendBD"};l.bibHash=J(l),i.push(l)}})),t(i)})),J=e=>k(e.id+e.title+e.author+e.publisher+e.isbn),M=({book:e,open:t})=>T("div",{className:"book",onClick:()=>t(e),children:[E("img",{src:`https://calil.jp/cover/${e.isbn}`}),T("div",{children:[E("div",{className:"title",children:e.title}),E("div",{className:"author",children:e.author})]})]});class W extends u.exports.Component{constructor(e){super(e),this.api=null,this.prevQuery="",this.state={loading:!1,running:!1,books:[],message:"",hint:"",updateCount:0}}kill(){this.api&&(this.api.kill(),this.setState({updateCount:0,running:!1}))}componentDidMount(){const e=this.refs.suggest;if(e&&this.props.queryInput){var t=this.props.queryInput.getBoundingClientRect();e.style.width=t.right-t.left+"px"}this.props.query===this.prevQuery&&(this.state.showResult=!0),""!=this.props.query&&this.props.query!=this.prevQuery&&(this.kill(),this.prevQuery=this.props.query,this.api=new P({free:this.props.query,region:this.props.region},(async e=>{let t=[];e.books.slice(0,30).map((e=>{if(e.isbn&&e.isbn.length>=10){e.isbn=e.isbn.replace(/-/g,"");let s=N.parse(e.isbn);s?e.isbn=s.asIsbn13():(s=N.parse(e.id),s&&(e.isbn=s.asIsbn13())),t.push(e)}else e.isbn=void 0,t.push(e)}));let s=e.running;t.length>20&&(s=!1,this.kill());const n=[];t.forEach((e=>{n.push(e.isbn)}));const i=await U(n);console.log(t);const a=t.map((e=>{const t=i.find((t=>t.isbn===e.isbn));return t||e}));this.setState({books:a,loading:s&&t.length<10,running:s,notFound:!1===s&&0===t.length,updateCount:this.state.updateCount+1,showResult:!0})})))}componentDidUpdate(){this.componentDidMount()}componentWillUnmount(){this.kill()}render(){return T("div",{className:"suggest",ref:"suggest",children:[this.state.books.length>0?E("div",{className:"results",children:this.state.books.map(((e,t)=>E(M,{book:e,open:e=>{this.props.open(e)}},t)))}):this.state.running?E("div",{className:"message",children:"検索中..."}):null,this.state.notFound?E("div",{className:"message",children:"見つかりませんでした"}):null]})}}const Z=({REGION:e,selectBook:t})=>{const s=u.exports.useRef(null),[n,i]=u.exports.useState(""),[a,l]=u.exports.useState(!1);return u.exports.useEffect((()=>(document.body.addEventListener("click",(e=>{l(!1)})),()=>{document.body.removeEventListener("click",(e=>{l(!1)}))})),[]),T(B,{children:[T("form",{action:"",onSubmit:e=>{e.preventDefault(),l(!0)},children:[T("div",{className:"bp3-input-group modifier",children:[E("span",{className:"bp3-icon bp3-icon-search"}),E("input",{ref:s,className:"bp3-input",type:"search",value:n,placeholder:"キーワード or ISBNで探す",dir:"auto",onChange:()=>{i(s.current.value),l(!0)}})]}),E(_,{onEnd:e=>{i(e),l(!0)}})]}),E("div",{className:a?"show_suggest":"hide_suggest",children:E(W,{region:e,open:t,query:n,queryInput:s.current})})]})};let Q=new g.Howl({src:["./audio/safety.mp3"],autoplay:!1,loop:!1,volume:1,onend:function(){console.log("Finished!")}}),G=new g.Howl({src:["./audio/error.mp3"],autoplay:!1,loop:!1,volume:.7,onend:function(){console.log("Finished!")}});const X="openbd-all";let Y="",K=null,ee=null;const te=e=>{if("speechSynthesis"in window){const t=new SpeechSynthesisUtterance(e);t.rate=1.5,speechSynthesis.speak(t)}},se=()=>{const[e,t]=u.exports.useState("gk-xxxxxxxxxxxxxxx");let s=[],n="isbn";const i=localStorage.getItem("keichanData_"+e);if(i){const e=JSON.parse(i);e.rowList.map((e=>{void 0===e.pubdate&&(e.pubdate=""),void 0===e.source&&(e.source="openBD")})),s=e.rowList,n=e.mode}const[a,l]=u.exports.useState(s),[c,h]=u.exports.useState(n),d=[];0===a.length||a[a.length-1].title?"isbn"===c?d.push("バーコードをスキャンしてください"):d.push("資料コードのバーコードをスキャンしてください"):d.push("紐つけるバーコードをスキャンしてください");const[g,f]=u.exports.useState(d),[y,k]=u.exports.useState([]),[N,j]=u.exports.useState({title:"",author:"",publisher:"",pubdate:"",isbn:""}),[D,H]=u.exports.useState({id:"",title:"",author:"",publisher:"",pubdate:"",isbn:""}),[_,$]=u.exports.useState(!0),[A,M]=u.exports.useState(!0),[W,se]=u.exports.useState(!1),[ne,ie]=u.exports.useState(!1),[ae,le]=u.exports.useState({show:!1,message:""});u.exports.useEffect((()=>{localStorage.setItem("keichanData_"+e,JSON.stringify({mode:c,rowList:a}))}),[a,c]);const oe=e=>((e,t)=>{if(console.log("onKeyDown"),e.target.closest(".addMore"))return;const s=(new Date).getTime(),n=s-ee;ee=s;const i=e||window.event,a=i.keyCode||i.which||i.charCode;"Enter"===e.key||13===a?(n<100&&t(Y),K&&clearTimeout(K),Y=""):(1===e.key.length?Y+=e.key:"Shift"===e.key||(Y=""),K&&clearTimeout(K),K=setTimeout((()=>{n<100&&t(Y),Y=""}),300))})(e,ue);u.exports.useEffect((()=>(window.addEventListener("keydown",oe),()=>{window.removeEventListener("keydown",oe)})),[c,a,_,g,A]);const re=(e,t=null)=>{le({show:!0,message:e.replace("!! ","")}),f([...g,T(B,{children:[t?E("div",{children:E("span",{style:{fontFamily:'"Conv_OCRB", Sans-Serif'},children:t})}):null,T("div",{children:[e.match(/!!/)?E("span",{style:{color:"red"},children:"!! "}):null,E("span",{children:e.replace("!! ","")})]})]})])},ce=async(e,t)=>{const s=[];if(s.push("ISBNのバーコードが読まれました"),s.push(E("span",{style:{fontFamily:'"Conv_OCRB", Sans-Serif'},children:e})),k([]),e.match(/^[a-zA-Z](\d+)[a-zA-Z]$/)&&(e=RegExp.$1,s.push("codabarの制御コードを検出しました")),"management"===c&&0===a.length)return re("!! 資料コードを読んでください"),void G.play();if("isbn"===c&&a.filter((t=>t.id===e)).length>0)return re("!! すでに登録済みの資料です"),void G.play();if("management"===c&&a.length>0){const e=[...a],s=e[e.length-1];if(!s||s.isbn)return re("次は資料コードのバーコードを読んでください"),void G.play();{let n=w.parse(t);n&&(s.isbn=n.asIsbn13()),l(e)}}Q.play(),ie(!0);const n=await(async(e,t)=>new Promise((async(s,n)=>{const i=new P({isbn:e,region:t},(async t=>{if(console.log(t),t.count>=1){i.kill();const n=t.books[0],a={id:n.id,title:n.title,author:n.author,publisher:n.publisher,pubdate:n.pubdate,isbn:F(e)||"",tags:[],price:"",cCode:"",source:"unitrad"};a.bibHash=J(a);const l=await U([a.isbn]);l.length>0?(l[0].id=a.id,s(l[0])):s(a)}else!1===t.running&&0===t.count&&n()}))})))(t,X).catch((()=>(e=>{const t=[...a];t.forEach(((t,s)=>{L(t.isbn)===e&&(t.title="",t.author="",t.publisher="",t.pubdate="",t.isbn="",t.cover="",t.tags=[],t.bibHash="",t.price="",t.cCode="",t.source="")})),l(t),G.play(),re("!! 本が見つかりませんでした。書誌データは追加されません")})(t)));if(ie(!1),n)if(s.push("本が見つかりました！"),"isbn"===c){n.id=n.isbn,l([...a,n]),A?te(`${n.title}を追加`):s.push(`「${n.title}」を追加`);const e=a[a.length-1];if(e&&e.title){s.push(`一つ前の本、「${e.title}」から次の本の候補を探します`);const t=await q(e,X);k(t),t.length>0&&s.push(`候補の本が${t.length}冊みつかりました`)}}else if("management"===c){const e=[...a];e.forEach(((e,s)=>{L(e.isbn)===t&&(e.title=n.title,e.author=n.author,e.publisher=n.publisher,e.pubdate=n.pubdate,e.cover=n.cover,e.isbn=n.isbn,e.tags=n.tags||[],e.bibHash=n.bibHash,e.price=n.price,e.cCode=n.cCode,e.source=n.source)})),l(e),A&&te(`${n.title}を追加`)}f([...g,...s])},he=async e=>{if(!1===(e=>e.length>20?(re("資料コードが長すぎます。バーコードの連続読み取りと判断して、処理しません",e),G.play(),!1):null!==e.match(/^192/)?(re("192で始まるバーコードのため、書籍JANコード(下段)と判断して、処理しません",e),G.play(),!1):null!==e.match(/^491/)?(re("491で始まるバーコードのため、雑誌コードと判断して、処理しません",e),G.play(),!1):null===e.match(/[a-zA-Z0-9]+/)?(d.push("英数字以外のキーが入力されました。処理しません"),f([...g,...d]),!1):!e.match(/^[a-zA-Z]*$/)||(d.push("英字のみが入力されました。処理しません"),f([...g,...d]),!1))(e))return;e.match(/^[a-zA-Z](\d+)[a-zA-Z]$/)&&(e=RegExp.$1,d.push("codabarの制御コードを検出しました")),"isbn"===c&&(h("management"),d.push("資料コードが読み込まれたため、資料コード用のモードに切り替えます")),d.push(E("span",{style:{fontFamily:'"Conv_OCRB", Sans-Serif'},children:e}));const t=a[a.length-1];if(a.filter((t=>t.id===e)).length>0)return re("!! すでに登録済みの資料コードです"),void G.play();if(Q.play(),l([...a,{id:e}]),t&&t.title){d.push(`一つ前の本、「${t.title}」から次の本の候補を探します`);const e=await q(t,X);k(e),e.length>0&&d.push(`候補の本が${e.length}冊みつかりました`)}f([...g,...d])},ue=async e=>{if(!1===_)return;const t=L(e);t?ce(e,t):he(e),$(!1),setTimeout((()=>$(!0)),100)},de=e=>{let t="";e.pubdate&&(t="string"!=typeof e.pubdate?e.pubdate:e.pubdate.replace(/[^0-9０-９]+/,"")),pe({title:e.title||"",author:e.author||"",publisher:e.publisher||"",pubdate:t?t.toString():"",isbn:e.isbn||"",source:e.source})},pe=(e,t=!1)=>{if(""===e.title)return re("タイトルは必須です"),G.play(),!1;const s=[...a],n=s[s.length-1];be(n,e),n.source=t?"user":e.source,l(s),me(),A&&te(`${e.title}を追加`),d.push(`「${e.title}」を追加`),f([...g,...d])},be=(e,t)=>{e.title=t.title,e.author=t.author,e.publisher=t.publisher,e.pubdate=t.pubdate,e.cover=""!==t.isbn?"https://calil.jp/cover/"+t.isbn:"",e.isbn=t.isbn,e.tags=[],e.bibHash=J(o(o({},e),t)),e.price="",e.cCode=""},me=()=>{H({id:"",title:"",author:"",publisher:"",pubdate:"",isbn:""})},ge=u.exports.useRef(null);let ve;u.exports.useEffect((()=>{if(ge.current){const e=ge.current;e.scrollTop=e.scrollHeight}}),[g]),u.exports.useEffect((()=>{ve&&clearTimeout(ve),ve=setTimeout((()=>{le({show:!1,message:""})}),6e3)}),[ae]);const fe=u.exports.useRef(null);return u.exports.useEffect((()=>{const e=setInterval((()=>{fe.current&&(fe.current.style.display="none",setTimeout((()=>{fe.current.style.display="inline"}),500))}),1e3);return()=>{clearInterval(e)}}),[!0]),T("div",{id:"index",children:[E(x,{isOpen:ae.show,onClose:()=>le({show:!1,message:""}),hasBackdrop:!1,children:T("div",{className:"bp3-card bp3-elevation-4 bp3-overlay-content alert-message",children:[E(v,{icon:"tick",size:25,color:"#000000"}),ae.message]})}),E(x,{isOpen:W,onClose:()=>se(!1),hasBackdrop:!0,children:E("div",{className:"bp3-card bp3-elevation-4 bp3-overlay-content settings-overlay",children:T("div",{className:"settings",children:[E("h3",{children:"設定"}),E("label",{htmlFor:"",children:"モード:"}),T("span",{className:"modes",children:[E("span",{className:"mode isbn"+("isbn"===c?" active":""),onClick:()=>{h("isbn"),f([...g,"モードをISBNに変更しました","バーコードをスキャンしてください"])},children:"ISBN"}),E("span",{className:"mode management"+("management"===c?" active":""),onClick:()=>{h("management"),f([...g,"モードを資料コードに変更しました","資料コードのバーコードをスキャンしてください"])},children:"資料コード"})]}),"speechSynthesis"in window?E(C,{checked:A,label:"読み上げ",onChange:()=>M(!A)}):null,E("br",{}),E("hr",{}),E("br",{}),a.length>0?E(S,{icon:"download",onClick:()=>((e,t)=>{const s=new Date;t+=`_${s.getFullYear()}${s.getMonth()+1}${s.getDate()}.json`;const n=new Blob([JSON.stringify(e,null,"  ")],{type:"application/json"}),i=URL.createObjectURL(n),a=document.createElement("a");a.href=i,a.download=t,a.click(),URL.revokeObjectURL(i)})({mode:c,rowList:a},"keichanData_"+e),style:{marginRight:"0.5rem"},children:"JSONで保存"}):null,E(S,{icon:"upload",onClick:()=>{document.querySelector('input[type="file"]').click()},children:"JSONを読み込み"}),E("input",{type:"file",accept:"application/json",onChange:e=>{for(var t,s=e.target.files,n=0;t=s[n];n++){if(!t.type.match("application/json"))continue;const e=new FileReader;e.onload=e=>{const t=JSON.parse(e.target.result);if(void 0===t.rowList||void 0===t.mode)return re("JSONファイルの形式が異なっています"),void G.play();t.rowList.map((e=>{void 0===e.pubdate&&(e.pubdate=""),void 0===e.source&&(e.source="openBD")})),l(t.rowList),h(t.mode)},e.readAsText(t)}},style:{display:"none"}}),E("br",{}),E("br",{}),E(S,{icon:"cross",onClick:()=>se(!1),children:"閉じる"})]})})}),T("header",{children:[E("div",{}),E("h1",{children:"カーリルtoolbox: keichan"}),T("div",{children:[a.length>0?E(S,{icon:"download",onClick:()=>((e,t)=>{console.log(e);const s=O.utils.book_new();s.Props={Title:"",Subject:"",Author:"",CreatedDate:new Date},s.SheetNames.push("蔵書データ");const n=[];n.push(["id","タイトル","著者","出版社","発売日","ISBN","タグ","価格","Cコード"]),e.map((e=>{n.push([e.id,e.title,e.author,e.publisher,e.pubdate,e.isbn,e.tags?e.tags.join(","):"",e.price,e.cCode])}));const i=O.utils.aoa_to_sheet(n);s.Sheets["蔵書データ"]=i;const a=O.write(s,{bookType:"xlsx",type:"binary"});V.exports.saveAs(new Blob([function(e){const t=new ArrayBuffer(e.length),s=new Uint8Array(t);for(let n=0;n<e.length;n++)s[n]=255&e.charCodeAt(n);return t}(a)],{type:"application/octet-stream"}),t+".xlsx")})(a,e),children:"Excelで保存"}):null,E(S,{className:"settingsButton",icon:"cog",onClick:()=>se(!0),children:"設定"}),E("a",{className:"github",href:"https://github.com/CALIL/keichan",target:"_blank",children:E(S,{icon:"git-repo",children:"GitHub"})})]})]}),T("main",{children:[T("div",{className:"main",children:[0===a.length?E("div",{className:"description",children:T("div",{children:[E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:E("path",{d:"M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"})}),"isbn"===c?"バーコードをスキャンしてください":"資料コードのバーコードをスキャンしてください"]})}):null,a.slice().reverse().map(((e,t)=>T("div",{children:[T(p,{className:"card active",interactive:!1,elevation:b.TWO,children:[T("span",{className:"document",children:[E("span",{className:"documentHeader",children:"資料コード"}),E("span",{className:"documentCode",children:e.id})]}),E(v,{icon:"delete",size:25,color:"#ffffff",onClick:()=>{return t=e.id,void l(a.filter((e=>e.id!==t)));var t}})]},"managementCode"),"management"===c&&void 0===e.isbn?T(B,{children:[T("div",{className:"actions",children:[E("div",{className:"description",children:T("div",{children:[E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:E("path",{d:"M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"})}),"紐つけるバーコードをスキャンしてください"]})}),T("div",{className:"addMore",children:[E("h3",{children:"バーコードのない本を追加"}),E(Z,{REGION:X,selectBook:de}),T(z,{helperText:"",label:"書誌情報を自分で入力",labelFor:"text-input",labelInfo:"",children:[E(I,{className:"title",placeholder:"タイトル",value:N.title,onChange:e=>j(r(o({},N),{title:e.target.value}))}),E(I,{className:"author",placeholder:"著者名",value:N.author,onChange:e=>j(r(o({},N),{author:e.target.value}))}),E(I,{className:"publisher",placeholder:"出版社",value:N.publisher,onChange:e=>j(r(o({},N),{publisher:e.target.value}))}),E(I,{className:"pubdate",placeholder:"出版日(20211010)",value:N.pubdate,onChange:e=>j(r(o({},N),{pubdate:e.target.value}))}),E(I,{className:"isbn",placeholder:"ISBN",value:N.isbn,onChange:e=>j(r(o({},N),{isbn:e.target.value}))}),E(S,{className:"bp3-intent-primary",icon:"plus",large:!0,onClick:()=>pe(N,!0),children:"追加"})]})]})]}),a.length>1&&y.length>0?T("div",{className:"nextBook",children:[T("h2",{children:["もしかして",T("span",{children:["(",a[a.length-2].title,"より推定)"]})]}),E("div",{className:"cards",children:y.slice(0,5).map((e=>E(R,{book:e,onClick:pe},e.isbn)))})]}):null]}):null,T("div",{className:"linkedData",children:[e.isbn?E(p,{className:"card indent",interactive:!1,elevation:b.TWO,children:E("div",{className:"flex",children:T("span",{className:"isbn",children:[E("span",{className:"isbnHeader",children:"ISBN"}),E("span",{className:"isbnCode",children:e.isbn})]})})},e.bibHash+e.isbn):null,e.title?T(p,{className:"card indent",interactive:!1,elevation:b.TWO,children:[T("div",{children:[e.cover?E("img",{className:"thumbnail",src:e.cover,alt:""}):null,T("div",{children:[E("h3",{children:e.title}),E("p",{className:"author",children:e.author}),e.tags.map((e=>E(m,{children:e},e)))]})]}),e.id!==D.id?E(v,{className:"edit",icon:"edit",size:25,color:"#ffffff",onClick:()=>H({id:e.id,title:e.title,author:e.author,publisher:e.publisher,pubdate:e.pubdate,isbn:e.isbn})}):T(z,{className:"edit-form",helperText:"",label:"書誌情報を編集",labelFor:"text-input",labelInfo:"",children:[E(I,{className:"title",placeholder:"タイトル",value:D.title,onChange:e=>H(r(o({},D),{title:e.target.value}))}),E(I,{className:"author",placeholder:"著者名",value:D.author,onChange:e=>H(r(o({},D),{author:e.target.value}))}),E(I,{className:"publisher",placeholder:"出版社",value:D.publisher,onChange:e=>H(r(o({},D),{publisher:e.target.value}))}),E(I,{className:"pubdate",placeholder:"出版日(20211010)",value:D.pubdate,onChange:e=>H(r(o({},D),{pubdate:e.target.value}))}),E(I,{className:"isbn",placeholder:"ISBN",value:D.isbn,onChange:e=>H(r(o({},D),{isbn:e.target.value}))}),T("div",{className:"buttons",children:[E(S,{className:"bp3-intent-primary",large:!0,icon:"edit",onClick:()=>(e=>{if(""===e.title)return re("タイトルは必須です"),G.play();if(""!==e.isbn&&null===w.parse(e.isbn))return re("ISBNが不正です"),G.play();const t=[...a],s=t.find((t=>t.id===e.id));s&&(be(s,e),s.source="user",l(t),me(),A&&te(`${e.title}を編集`),d.push(`「${e.title}」を編集`),f([...g,...d]))})(D),children:"編集"}),E(S,{large:!0,onClick:me,children:"キャンセル"})]})]})]},e.bibHash):null,void 0===e.title&&ne?E(p,{className:"card indent",style:{height:"120px"},interactive:!1,elevation:b.TWO,children:T("div",{className:"placeholder",children:[E("div",{className:"placeholder-line title"}),E("div",{className:"placeholder-line"}),E("div",{className:"placeholder-line"}),E("div",{className:"placeholder-line"}),E("div",{className:"placeholder-line"})]})}):null]})]},"row"+t)))]}),T("div",{className:"debug",children:[E("div",{className:"logs",ref:ge,children:g.map(((e,t)=>E("div",{children:e},"log"+t)))}),T("div",{className:"cmd",children:["> ",E("span",{ref:fe,children:"_"})]})]})]})]})};j.render(E(se,{}),document.getElementById("app"));
