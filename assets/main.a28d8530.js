var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,i=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,r=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&i(e,n,t[n]);if(a)for(var n of a(t))l.call(t,n)&&i(e,n,t[n]);return e},o=(e,a)=>t(e,n(a)),c=(e,t,n)=>(i(e,"symbol"!=typeof t?t+"":t,n),n);import("data:text/javascript;base64,Cg==");import{r as u,J as p,R as h,C as m,E as d,T as b,h as v,I as g,a as E,u as f,l as y,s as w,b as k,O as N,S as x,B as C,F as S,c as z,X as I,d as O,e as V}from"./vendor.db46e9a4.js";const j=e=>{const t=e.book,n=u.exports.useRef(null);return u.exports.useEffect((()=>{p(n.current,t.isbn,{format:"codabar",width:1.25,height:26,margin:10,fontSize:12})}),[]),h.createElement(m,{key:t.isbn,className:"card",interactive:!0,elevation:d.TWO,onClick:()=>e.onClick({title:t.title,author:t.author,publisher:t.publisher,pubdate:t.pubdate,isbn:t.isbn,source:t.source})},h.createElement("div",{className:"card-header"},t.cover?h.createElement("img",{src:t.cover,alt:t.title}):null,h.createElement("div",null,h.createElement("h3",null,[t.title,t.volume].join(" ")),h.createElement("p",{className:"author"},t.author),t.tags.map((e=>h.createElement(b,{key:e},e))))),h.createElement("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",version:"1.1"}))};let T=new v.Howl({src:["./audio/healing.ogg"],autoplay:!1,loop:!1,volume:1,rate:.5,onend:function(){console.log("Finished!")}}),B=new v.Howl({src:["./audio/healed.ogg"],autoplay:!1,loop:!1,volume:1,onend:function(){console.log("Finished!")}});class R extends u.exports.Component{constructor(e){super(e),this.state={isRecognition:!1}}start(){if(this.state.isRecognition)return;const e=new webkitSpeechRecognition;e.lang="ja-JP",this.setState({isRecognition:!0}),e.onend=()=>{console.log("on end"),e.stop(),this.setState({isRecognition:!1})},e.onresult=e=>{e.results.length>0&&(B.play(),this.props.onEnd(e.results[0][0].transcript))},e.onstart=()=>{console.log("on start"),T.play()},e.onspeechstart=()=>{console.log("on speech start")},e.onspeechend=()=>{console.log("on speech end")},e.onsoundend=()=>{console.log("on sound end")},e.onaudiostart=()=>{console.log("on audio start")},e.onaudioend=()=>{console.log("on audio end")},e.start()}render(){return"webkitSpeechRecognition"in window?h.createElement("span",{className:"speech",onClick:this.start.bind(this)},this.state.isRecognition?h.createElement(g,{icon:"chat"}):h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"},h.createElement("path",{d:"M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"}))):null}}const D=["free","title","author","publisher","isbn","ndc","year_start","year_end","region"];function H(e){return E.get("https://unitrad.calil.jp/v1/"+e)}class _{constructor(e,t){c(this,"callback"),c(this,"killed"),c(this,"data"),this.callback=t,this.killed=!1,this.search(e)}kill(){this.killed=!0}search(e){this.killed||H("search").query(function(e){let t={};for(let n of D)e.hasOwnProperty(n)&&""!==e[n]&&(t[n]=e[n]);return t}(e)).end(((t,n)=>{t?setTimeout((()=>this.search(e)),1e3):this.receive(n.body)}))}polling(){this.killed||H("polling").query({uuid:this.data.uuid,version:this.data.version,diff:1,timeout:10}).end(((e,t)=>{null===t.body?setTimeout((()=>this.polling()),100):this.receive(t.body)}))}receive(e){if(!this.killed){if(e.books_diff){Array.prototype.push.apply(this.data.books,e.books_diff.insert);for(let t in e)e.hasOwnProperty(t)&&"books_diff"!==t&&(this.data[t]=e[t]);for(let t of e.books_diff.update)for(let e in t)if(t.hasOwnProperty(e)&&"_idx"!==e)if(!0===Array.isArray(t[e]))Array.prototype.push.apply(this.data.books[t._idx][e],t[e]);else if(t[e]instanceof Object)for(let n in t[e])t[e].hasOwnProperty(n)&&(this.data.books[t._idx][e][n]=t[e][n]);else this.data.books[t._idx][e]=t[e]}else this.data=e;this.callback(this.data),!0===e.running?(console.log("[Unitrad] continue..."),1===e.version&&0===this.data.books.length?setTimeout((()=>this.polling()),20):setTimeout((()=>this.polling()),500)):console.log("[Unitrad] complete.")}}}function $(e){e=f.nfkc(e).toUpperCase().replace(/[^0-9X]/g,"");let t=y.parse(e);if(t){if(t.isIsbn10())return t.asIsbn10();if(t.isIsbn13()){return t.asIsbn13().startsWith("978")?t.asIsbn10():t.asIsbn13()}}else{let t=y.parse("978"+e);if(t&&t.isIsbn13())return t.asIsbn10()}return!1}const P=async(e,t)=>{const n=e.author.split(",")[0],a=e.publisher,s=e.pubdate;return new Promise((async(l,i)=>{let r=new _({author:n,publisher:a,year_start:s,region:t},(async t=>{if(!r.killed&&(t.count>5&&r.kill(),console.log(t),t.count>=1)){const n=[];t.books.forEach((e=>{if(null===e.isbn)return;let t=0;e.pubdate&&(t="string"!=typeof e.pubdate?e.pubdate:Number(e.pubdate.split("/")[0].split(".")[0]));let a=y.parse($(e.isbn)),s=null;a&&(s=a.asIsbn13()),s&&n.push({title:e.title+" "+e.volume,author:e.author.split(",")[0],publisher:e.publisher,isbn:s,pubdate:t,source:"unitrad"})})),n.sort((function(e,t){return e.isbn<t.isbn?-1:e.isbn>t.isbn?1:0}));let a=[];const s=[];let i=!1;n.forEach((t=>{t.isbn!==e.isbn&&(i?a.push(t):s.push(t)),t.isbn===e.isbn&&(i=!0)})),a=a.concat(s);const r=[];a.forEach((e=>{r.push(e.isbn)}));const o=await A(r);l(o)}}))}))},A=async e=>new Promise((async(t,n)=>{const a=await fetch("https://api.openBD.jp/v1/get?isbn="+e.join(",")).then((e=>e.json())),s=[];a.forEach((e=>{if(e){const t=[];try{e.onix.DescriptiveDetail.Collection.TitleDetail.TitleElement.forEach(((e,n)=>{var a,s,l;t.includes(e.TitleText.content)||t.push((a=e.TitleText.content,s={"ｶﾞ":"ガ","ｷﾞ":"ギ","ｸﾞ":"グ","ｹﾞ":"ゲ","ｺﾞ":"ゴ","ｻﾞ":"ザ","ｼﾞ":"ジ","ｽﾞ":"ズ","ｾﾞ":"ゼ","ｿﾞ":"ゾ","ﾀﾞ":"ダ","ﾁﾞ":"ヂ","ﾂﾞ":"ヅ","ﾃﾞ":"デ","ﾄﾞ":"ド","ﾊﾞ":"バ","ﾋﾞ":"ビ","ﾌﾞ":"ブ","ﾍﾞ":"ベ","ﾎﾞ":"ボ","ﾊﾟ":"パ","ﾋﾟ":"ピ","ﾌﾟ":"プ","ﾍﾟ":"ペ","ﾎﾟ":"ポ","ｳﾞ":"ヴ","ﾜﾞ":"ヷ","ｦﾞ":"ヺ","ｱ":"ア","ｲ":"イ","ｳ":"ウ","ｴ":"エ","ｵ":"オ","ｶ":"カ","ｷ":"キ","ｸ":"ク","ｹ":"ケ","ｺ":"コ","ｻ":"サ","ｼ":"シ","ｽ":"ス","ｾ":"セ","ｿ":"ソ","ﾀ":"タ","ﾁ":"チ","ﾂ":"ツ","ﾃ":"テ","ﾄ":"ト","ﾅ":"ナ","ﾆ":"ニ","ﾇ":"ヌ","ﾈ":"ネ","ﾉ":"ノ","ﾊ":"ハ","ﾋ":"ヒ","ﾌ":"フ","ﾍ":"ヘ","ﾎ":"ホ","ﾏ":"マ","ﾐ":"ミ","ﾑ":"ム","ﾒ":"メ","ﾓ":"モ","ﾔ":"ヤ","ﾕ":"ユ","ﾖ":"ヨ","ﾗ":"ラ","ﾘ":"リ","ﾙ":"ル","ﾚ":"レ","ﾛ":"ロ","ﾜ":"ワ","ｦ":"ヲ","ﾝ":"ン","ｧ":"ァ","ｨ":"ィ","ｩ":"ゥ","ｪ":"ェ","ｫ":"ォ","ｯ":"ッ","ｬ":"ャ","ｭ":"ュ","ｮ":"ョ","｡":"。","､":"、","ｰ":"ー","｢":"「","｣":"」","･":"・"},l=new RegExp("("+Object.keys(s).join("|")+")","g"),a.replace(l,(function(e){return s[e]})).replace(/ﾞ/g,"゛").replace(/ﾟ/g,"゜")))}))}catch{}let n=e.summary.volume;try{""===n&&(n=e.onix.DescriptiveDetail.TitleDetail.TitleElement.PartNumber.split(";")[0],e.summary.title.match(n)&&(n=""))}catch{}let a="";try{e.onix.ProductSupply.SupplyDetail.Price.some((e=>{"JPY"===e.CurrencyCode&&(a=e.PriceAmount)}))}catch{}let l="";try{e.onix.DescriptiveDetail.Subject.some((e=>{"78"===e.SubjectSchemeIdentifier&&(l=e.SubjectCode)}))}catch{}const i={title:[e.summary.title,n].join(" "),author:e.summary.author,publisher:e.summary.publisher,isbn:e.summary.isbn,pubdate:e.summary.pubdate,cover:e.summary.cover,tags:t,price:a,cCode:l,source:"opendBD"};i.bibHash=F(i),s.push(i)}})),t(s)})),F=e=>w(e.id+e.title+e.author+e.publisher+e.isbn),L=({book:e,open:t})=>h.createElement("div",{className:"book",onClick:()=>t(e)},h.createElement("img",{src:`https://calil.jp/cover/${e.isbn}`}),h.createElement("div",null,h.createElement("div",{className:"title"},e.title),h.createElement("div",{className:"author"},e.author)));class q extends u.exports.Component{constructor(e){super(e),this.api=null,this.prevQuery="",this.state={loading:!1,running:!1,books:[],message:"",hint:"",updateCount:0}}kill(){this.api&&(this.api.kill(),this.setState({updateCount:0,running:!1}))}componentDidMount(){const e=this.refs.suggest;if(e&&this.props.queryInput){var t=this.props.queryInput.getBoundingClientRect();e.style.width=t.right-t.left+"px"}this.props.query===this.prevQuery&&(this.state.showResult=!0),""!=this.props.query&&this.props.query!=this.prevQuery&&(this.kill(),this.prevQuery=this.props.query,this.api=new _({free:this.props.query,region:this.props.region},(async e=>{let t=[];e.books.slice(0,30).map((e=>{if(e.isbn&&e.isbn.length>=10){e.isbn=e.isbn.replace(/-/g,"");let n=k.parse(e.isbn);n?e.isbn=n.asIsbn13():(n=k.parse(e.id),n&&(e.isbn=n.asIsbn13())),t.push(e)}else e.isbn=void 0,t.push(e)}));let n=e.running;t.length>20&&(n=!1,this.kill());const a=[];t.forEach((e=>{a.push(e.isbn)}));const s=await A(a);console.log(t);const l=t.map((e=>{const t=s.find((t=>t.isbn===e.isbn));return t||e}));this.setState({books:l,loading:n&&t.length<10,running:n,notFound:!1===n&&0===t.length,updateCount:this.state.updateCount+1,showResult:!0})})))}componentDidUpdate(){this.componentDidMount()}componentWillUnmount(){this.kill()}render(){return h.createElement("div",{className:"suggest",ref:"suggest"},this.state.books.length>0?h.createElement("div",{className:"results"},this.state.books.map(((e,t)=>h.createElement(L,{book:e,key:t,open:e=>{this.props.open(e)}})))):this.state.running?h.createElement("div",{className:"message"},"検索中..."):null,this.state.notFound?h.createElement("div",{className:"message"},"見つかりませんでした"):null)}}const J=({REGION:e,selectBook:t})=>{const n=u.exports.useRef(null),[a,s]=u.exports.useState(""),[l,i]=u.exports.useState(!1);return u.exports.useEffect((()=>(document.body.addEventListener("click",(e=>{i(!1)})),()=>{document.body.removeEventListener("click",(e=>{i(!1)}))})),[]),h.createElement(h.Fragment,null,h.createElement("form",{action:"",onSubmit:e=>{e.preventDefault(),i(!0)}},h.createElement("div",{className:"bp3-input-group modifier"},h.createElement("span",{className:"bp3-icon bp3-icon-search"}),h.createElement("input",{ref:n,className:"bp3-input",type:"search",value:a,placeholder:"キーワード or ISBNで探す",dir:"auto",onChange:()=>{s(n.current.value),i(!0)}})),h.createElement(R,{onEnd:e=>{s(e),i(!0)}})),h.createElement("div",{className:l?"show_suggest":"hide_suggest"},h.createElement(q,{region:e,open:t,query:a,queryInput:n.current})))};let U=new v.Howl({src:["./audio/safety.mp3"],autoplay:!1,loop:!1,volume:1,onend:function(){console.log("Finished!")}}),M=new v.Howl({src:["./audio/error.mp3"],autoplay:!1,loop:!1,volume:.7,onend:function(){console.log("Finished!")}});let W="",Z=null,Q=null;const G=e=>{if("speechSynthesis"in window){const t=new SpeechSynthesisUtterance(e);t.rate=1.5,speechSynthesis.speak(t)}},X=()=>{const[e,t]=u.exports.useState("gk-xxxxxxxxxxxxxxx");let n=[],a="isbn";const s=localStorage.getItem("keichanData_"+e);if(s){const e=JSON.parse(s);e.rowList.map((e=>{void 0===e.pubdate&&(e.pubdate=""),void 0===e.source&&(e.source="openBD")})),n=e.rowList,a=e.mode}const[l,i]=u.exports.useState(n),[c,p]=u.exports.useState(a),v=[];0===l.length||l[l.length-1].title?"isbn"===c?v.push("バーコードをスキャンしてください"):v.push("資料コードのバーコードをスキャンしてください"):v.push("紐つけるバーコードをスキャンしてください");const[E,f]=u.exports.useState(v),[w,k]=u.exports.useState([]),[V,T]=u.exports.useState({title:"",author:"",publisher:"",pubdate:"",isbn:""}),[B,R]=u.exports.useState({id:"",title:"",author:"",publisher:"",pubdate:"",isbn:""}),[D,H]=u.exports.useState(!0),[L,q]=u.exports.useState(!0),[X,Y]=u.exports.useState(!1),[K,ee]=u.exports.useState(!1),[te,ne]=u.exports.useState({show:!1,message:""});u.exports.useEffect((()=>{localStorage.setItem("keichanData_"+e,JSON.stringify({mode:c,rowList:l}))}),[l,c]);const ae=e=>((e,t)=>{if(console.log("onKeyDown"),e.target.closest(".addMore"))return;const n=(new Date).getTime(),a=n-Q;Q=n;const s=e||window.event,l=s.keyCode||s.which||s.charCode;"Enter"===e.key||13===l?(a<100&&t(W),Z&&clearTimeout(Z),W=""):(1===e.key.length?W+=e.key:"Shift"===e.key||(W=""),Z&&clearTimeout(Z),Z=setTimeout((()=>{a<100&&t(W),W=""}),300))})(e,re);u.exports.useEffect((()=>(window.addEventListener("keydown",ae),()=>{window.removeEventListener("keydown",ae)})),[c,l,D,E,L]);const se=(e,t=null)=>{ne({show:!0,message:e.replace("!! ","")}),f([...E,h.createElement(h.Fragment,null,t?h.createElement("div",null,h.createElement("span",{style:{fontFamily:'"Conv_OCRB", Sans-Serif'}},t)):null,h.createElement("div",null,e.match(/!!/)?h.createElement("span",{style:{color:"red"}},"!! "):null,h.createElement("span",null,e.replace("!! ",""))))])},le=async(e,t)=>{const n=[];if(n.push("ISBNのバーコードが読まれました"),n.push(h.createElement("span",{style:{fontFamily:'"Conv_OCRB", Sans-Serif'}},e)),k([]),e.match(/^[a-zA-Z](\d+)[a-zA-Z]$/)&&(e=RegExp.$1,n.push("codabarの制御コードを検出しました")),"management"===c&&0===l.length)return se("!! 資料コードを読んでください"),void M.play();if("isbn"===c&&l.filter((t=>t.id===e)).length>0)return se("!! すでに登録済みの資料です"),void M.play();if("management"===c&&l.length>0){const e=[...l],n=e[e.length-1];if(!n||n.isbn)return se("次は資料コードのバーコードを読んでください"),void M.play();{let a=y.parse(t);a&&(n.isbn=a.asIsbn13()),i(e)}}U.play(),ee(!0);const a=await(async(e,t)=>new Promise((async(n,a)=>{const s=new _({isbn:e,region:t},(async e=>{if(e.count>=1){s.kill();const t=e.books[0],a={id:t.id,title:t.title,author:t.author,publisher:t.publisher,pubdate:t.pubdate,isbn:t.isbn,tags:[],price:"",cCode:"",source:"unitrad"};a.bibHash=F(a);let l=y.parse($(a.isbn));l&&(a.isbn=l.asIsbn13());const i=await A([a.isbn]);i.length>0?(i[0].id=a.id,n(i[0])):n(a)}else!1===e.running&&0===e.count&&a()}))})))(t,"recipe").catch((()=>(e=>{const t=[...l];t.forEach(((t,n)=>{$(t.isbn)===e&&(t.title="",t.author="",t.publisher="",t.pubdate="",t.isbn="",t.cover="",t.tags=[],t.bibHash="",t.price="",t.cCode="",t.source="")})),i(t),M.play(),se("!! 本が見つかりませんでした。書誌データは追加されません")})(t)));if(ee(!1),a)if(n.push("本が見つかりました！"),"isbn"===c){a.id=a.isbn,i([...l,a]),L?G(`${a.title}を追加`):n.push(`「${a.title}」を追加`);const e=l[l.length-1];if(e&&e.title){n.push(`一つ前の本、「${e.title}」から次の本の候補を探します`);const t=await P(e,"recipe");k(t),t.length>0&&n.push(`候補の本が${t.length}冊みつかりました`)}}else if("management"===c){const e=[...l];e.forEach(((e,n)=>{$(e.isbn)===t&&(e.title=a.title,e.author=a.author,e.publisher=a.publisher,e.pubdate=a.pubdate,e.cover=a.cover,e.isbn=a.isbn,e.tags=a.tags,e.bibHash=a.bibHash,e.price=a.price,e.cCode=a.cCode,e.source=a.source)})),i(e),L&&G(`${a.title}を追加`)}f([...E,...n])},ie=async e=>{if(!1===(e=>e.length>20?(se("資料コードが長すぎます。バーコードの連続読み取りと判断して、処理しません",e),M.play(),!1):null!==e.match(/^192/)?(se("192で始まるバーコードのため、書籍JANコード(下段)と判断して、処理しません",e),M.play(),!1):null!==e.match(/^491/)?(se("491で始まるバーコードのため、雑誌コードと判断して、処理しません",e),M.play(),!1):null===e.match(/[a-zA-Z0-9]+/)?(v.push("英数字以外のキーが入力されました。処理しません"),f([...E,...v]),!1):!e.match(/^[a-zA-Z]*$/)||(v.push("英字のみが入力されました。処理しません"),f([...E,...v]),!1))(e))return;e.match(/^[a-zA-Z](\d+)[a-zA-Z]$/)&&(e=RegExp.$1,v.push("codabarの制御コードを検出しました")),"isbn"===c&&(p("management"),v.push("資料コードが読み込まれたため、資料コード用のモードに切り替えます")),v.push(h.createElement("span",{style:{fontFamily:'"Conv_OCRB", Sans-Serif'}},e));const t=l[l.length-1];if(l.filter((t=>t.id===e)).length>0)return se("!! すでに登録済みの資料コードです"),void M.play();if(U.play(),i([...l,{id:e}]),t&&t.title){v.push(`一つ前の本、「${t.title}」から次の本の候補を探します`);const e=await P(t,"recipe");k(e),e.length>0&&v.push(`候補の本が${e.length}冊みつかりました`)}f([...E,...v])},re=async e=>{if(!1===D)return;const t=$(e);t?le(e,t):ie(e),H(!1),setTimeout((()=>H(!0)),100)},oe=e=>{let t="";e.pubdate&&(t="string"!=typeof e.pubdate?e.pubdate:e.pubdate.replace(/[^0-9０-９]+/,"")),ce({title:e.title||"",author:e.author||"",publisher:e.publisher||"",pubdate:t?t.toString():"",isbn:e.isbn||"",source:e.source})},ce=(e,t=!1)=>{if(""===e.title)return se("タイトルは必須です"),M.play(),!1;const n=[...l],a=n[n.length-1];a.title=e.title,a.author=e.author||"",a.publisher=e.publisher||"",a.pubdate=e.pubdate||"",a.cover=""!==e.isbn?"https://calil.jp/cover/"+e.isbn:"",a.isbn=e.isbn||"",a.tags=[],a.bibHash=F(r(r({},a),e)),a.price="",a.cCode="",a.source=t?"user":e.source,i(n),T({title:"",author:"",publisher:"",pubdate:"",isbn:""}),L&&G(`${e.title}を追加`),v.push(`「${e.title}」を追加`),f([...E,...v])},ue=e=>{R({id:"",title:"",author:"",publisher:"",pubdate:"",isbn:""})},pe=u.exports.useRef(null);let he;u.exports.useEffect((()=>{if(pe.current){const e=pe.current;e.scrollTop=e.scrollHeight}}),[E]),u.exports.useEffect((()=>{he&&clearTimeout(he),he=setTimeout((()=>{ne({show:!1,message:""})}),6e3)}),[te]);const me=u.exports.useRef(null);return u.exports.useEffect((()=>{const e=setInterval((()=>{me.current&&(me.current.style.display="none",setTimeout((()=>{me.current.style.display="inline"}),500))}),1e3);return()=>{clearInterval(e)}}),[!0]),h.createElement("div",{id:"index"},h.createElement(N,{isOpen:te.show,onClose:()=>ne({show:!1,message:""}),hasBackdrop:!1},h.createElement("div",{className:"bp3-card bp3-elevation-4 bp3-overlay-content alert-message"},h.createElement(g,{icon:"tick",size:25,color:"#000000"}),te.message)),h.createElement(N,{isOpen:X,onClose:()=>Y(!1),hasBackdrop:!0},h.createElement("div",{className:"bp3-card bp3-elevation-4 bp3-overlay-content settings-overlay"},h.createElement("div",{className:"settings"},h.createElement("h3",null,"設定"),"speechSynthesis"in window?h.createElement(x,{checked:L,label:"読み上げ",onChange:()=>q(!L)}):null,h.createElement("br",null),h.createElement("hr",null),h.createElement("br",null),l.length>0?h.createElement(C,{icon:"download",onClick:()=>((e,t)=>{const n=new Date;t+=`_${n.getFullYear()}${n.getMonth()+1}${n.getDate()}.json`;const a=new Blob([JSON.stringify(e,null,"  ")],{type:"application/json"}),s=URL.createObjectURL(a),l=document.createElement("a");l.href=s,l.download=t,l.click(),URL.revokeObjectURL(s)})({mode:c,rowList:l},"keichanData_"+e),style:{marginRight:"0.5rem"}},"JSONで保存"):null,h.createElement(C,{icon:"upload",onClick:()=>{document.querySelector('input[type="file"]').click()}},"JSONを読み込み"),h.createElement("input",{type:"file",accept:"application/json",onChange:e=>{for(var t,n=e.target.files,a=0;t=n[a];a++){if(!t.type.match("application/json"))continue;const e=new FileReader;e.onload=e=>{const t=JSON.parse(e.target.result);if(void 0===t.rowList||void 0===t.mode)return se("JSONファイルの形式が異なっています"),void M.play();t.rowList.map((e=>{void 0===e.pubdate&&(e.pubdate=""),void 0===e.source&&(e.source="openBD")})),i(t.rowList),p(t.mode)},e.readAsText(t)}},style:{display:"none"}}),h.createElement("br",null),h.createElement("br",null),h.createElement(C,{icon:"cross",onClick:()=>Y(!1)},"閉じる")))),h.createElement("header",null,h.createElement("div",null),h.createElement("h1",null,"カーリルtoolbox: keichan"),h.createElement("div",null,h.createElement("label",{htmlFor:""},"モード:"),h.createElement("span",{className:"modes"},h.createElement("span",{className:"mode isbn"+("isbn"===c?" active":""),onClick:()=>{p("isbn"),f([...E,"モードをISBNに変更しました","バーコードをスキャンしてください"])}},"ISBN"),h.createElement("span",{className:"mode management"+("management"===c?" active":""),onClick:()=>{p("management"),f([...E,"モードを資料コードに変更しました","資料コードのバーコードをスキャンしてください"])}},"資料コード")),l.length>0?h.createElement(C,{icon:"download",onClick:()=>((e,t)=>{const n=I.utils.book_new();n.Props={Title:"",Subject:"",Author:"",CreatedDate:new Date},n.SheetNames.push("蔵書データ");const a=[];a.push(["id","タイトル","著者","出版社","発売日","ISBN","タグ","価格","Cコード"]),e.map((e=>{e.isbn&&a.push([e.id,e.title,e.author,e.publisher,e.pubdate,e.isbn,e.tags.join(","),e.price,e.cCode])}));const s=I.utils.aoa_to_sheet(a);n.Sheets["蔵書データ"]=s;const l=I.write(n,{bookType:"xlsx",type:"binary"});O.exports.saveAs(new Blob([function(e){const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let a=0;a<e.length;a++)n[a]=255&e.charCodeAt(a);return t}(l)],{type:"application/octet-stream"}),t+".xlsx")})(l,e)},"Excelで保存"):null,h.createElement(C,{className:"settingsButton",icon:"cog",onClick:()=>Y(!0)},"設定"))),h.createElement("main",null,h.createElement("div",{className:"main"},0===l.length?h.createElement("div",{className:"description"},h.createElement("div",null,h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},h.createElement("path",{d:"M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"})),"isbn"===c?"バーコードをスキャンしてください":"資料コードのバーコードをスキャンしてください")):null,l.slice().reverse().map(((e,t)=>h.createElement("div",{key:"row"+t},h.createElement(m,{key:"managementCode",className:"card active",interactive:!1,elevation:d.TWO},h.createElement("span",{className:"document"},h.createElement("span",{className:"documentHeader"},"資料コード"),h.createElement("span",{className:"documentCode"},e.id)),h.createElement(g,{icon:"delete",size:25,color:"#ffffff",onClick:()=>{return t=e.id,void i(l.filter((e=>e.id!==t)));var t}})),"management"===c&&void 0===e.isbn?h.createElement(h.Fragment,null,h.createElement("div",{className:"actions"},h.createElement("div",{className:"description"},h.createElement("div",null,h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},h.createElement("path",{d:"M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"})),"紐つけるバーコードをスキャンしてください")),h.createElement("div",{className:"addMore"},h.createElement("h3",null,"バーコードのない本を追加"),h.createElement(J,{REGION:"recipe",selectBook:oe}),h.createElement(S,{helperText:"",label:"書誌情報を自分で入力",labelFor:"text-input",labelInfo:""},h.createElement(z,{className:"title",placeholder:"タイトル",value:V.title,onChange:e=>T(o(r({},V),{title:e.target.value}))}),h.createElement(z,{className:"author",placeholder:"著者名",value:V.author,onChange:e=>T(o(r({},V),{author:e.target.value}))}),h.createElement(z,{className:"publisher",placeholder:"出版社",value:V.publisher,onChange:e=>T(o(r({},V),{publisher:e.target.value}))}),h.createElement(z,{className:"pubdate",placeholder:"出版日(20211010)",value:V.pubdate,onChange:e=>T(o(r({},V),{pubdate:e.target.value}))}),h.createElement(z,{className:"isbn",placeholder:"ISBN",value:V.isbn,onChange:e=>T(o(r({},V),{isbn:e.target.value}))}),h.createElement(C,{className:"bp3-intent-primary",icon:"plus",large:!0,onClick:()=>ce(V,!0)},"追加")))),l.length>1&&w.length>0?h.createElement("div",{className:"nextBook"},h.createElement("h2",null,"もしかして",h.createElement("span",null,"(",l[l.length-2].title,"より推定)")),h.createElement("div",{className:"cards"},w.slice(0,5).map((e=>h.createElement(j,{book:e,key:e.isbn,onClick:ce}))))):null):null,h.createElement("div",{className:"linkedData"},e.isbn?h.createElement(m,{key:e.bibHash+e.isbn,className:"card indent",interactive:!1,elevation:d.TWO},h.createElement("div",{className:"flex"},h.createElement("span",{className:"isbn"},h.createElement("span",{className:"isbnHeader"},"ISBN"),h.createElement("span",{className:"isbnCode"},e.isbn)))):null,e.title?h.createElement(m,{key:e.bibHash,className:"card indent",interactive:!1,elevation:d.TWO},h.createElement("div",null,e.cover?h.createElement("img",{className:"thumbnail",src:e.cover,alt:""}):null,h.createElement("div",null,h.createElement("h3",null,e.title),h.createElement("p",{className:"author"},e.author),e.tags.map((e=>h.createElement(b,{key:e},e))))),e.id!==B.id?h.createElement(g,{className:"edit",icon:"edit",size:25,color:"#ffffff",onClick:()=>R({id:e.id,title:e.title,author:e.author,publisher:e.publisher,pubdate:e.pubdate,isbn:e.isbn})}):h.createElement(S,{className:"edit-form",helperText:"",label:"書誌情報を編集",labelFor:"text-input",labelInfo:""},h.createElement(z,{className:"title",placeholder:"タイトル",value:B.title,onChange:e=>R(o(r({},B),{title:e.target.value}))}),h.createElement(z,{className:"author",placeholder:"著者名",value:B.author,onChange:e=>R(o(r({},B),{author:e.target.value}))}),h.createElement(z,{className:"publisher",placeholder:"出版社",value:B.publisher,onChange:e=>R(o(r({},B),{publisher:e.target.value}))}),h.createElement(z,{className:"pubdate",placeholder:"出版日(20211010)",value:B.pubdate,onChange:e=>R(o(r({},B),{pubdate:e.target.value}))}),h.createElement(z,{className:"isbn",placeholder:"ISBN",value:B.isbn,onChange:e=>R(o(r({},B),{isbn:e.target.value}))}),h.createElement("div",{className:"buttons"},h.createElement(C,{className:"bp3-intent-primary",large:!0,icon:"edit",onClick:()=>(e=>{if(""===e.title)return se("タイトルは必須です"),M.play(),!1;if(""!==e.isbn&&null===y.parse(e.isbn))return se("ISBNが不正です"),M.play(),!1;const t=[...l],n=t.find((t=>t.id===e.id));n&&(n.title=e.title,n.author=e.author,n.publisher=e.publisher,n.pubdate=e.pubdate,n.cover=""!==e.isbn?"https://calil.jp/cover/"+e.isbn:"",n.isbn=e.isbn,n.tags=[],n.bibHash=F(r(r({},n),e)),n.price="",n.cCode="",n.source="user",i(t),R({id:"",title:"",author:"",publisher:"",pubdate:"",isbn:""}),L&&G(`${e.title}を編集`),v.push(`「${e.title}」を編集`),f([...E,...v]))})(B)},"編集"),h.createElement(C,{large:!0,onClick:ue},"キャンセル")))):null,void 0===e.title&&K?h.createElement(m,{className:"card indent",style:{height:"120px"},interactive:!1,elevation:d.TWO},h.createElement("div",{className:"placeholder"},h.createElement("div",{className:"placeholder-line title"}),h.createElement("div",{className:"placeholder-line"}),h.createElement("div",{className:"placeholder-line"}),h.createElement("div",{className:"placeholder-line"}),h.createElement("div",{className:"placeholder-line"}))):null))))),h.createElement("div",{className:"debug"},h.createElement("div",{className:"logs",ref:pe},E.map(((e,t)=>h.createElement("div",{key:"log"+t},e)))),h.createElement("div",{className:"cmd"},"> ",h.createElement("span",{ref:me},"_")))))};V.render(h.createElement(X,null),document.getElementById("app"));
