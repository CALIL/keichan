var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,i=(t,s,n)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,o=(e,t)=>{for(var s in t||(t={}))a.call(t,s)&&i(e,s,t[s]);if(n)for(var s of n(t))l.call(t,s)&&i(e,s,t[s]);return e},r=(e,n)=>t(e,s(n)),c=(e,t,s)=>(i(e,"symbol"!=typeof t?t+"":t,s),s);import("data:text/javascript;base64,Cg==");import{r as u,J as p,R as h,C as m,E as d,T as b,a as v,u as g,l as E,s as f,I as y,h as k,b as w,O as N,S as x,B as C,F as S,c as z,X as I,d as O,e as V}from"./vendor.9cd849c1.js";const j=e=>{const t=e.book,s=u.exports.useRef(null);return u.exports.useEffect((()=>{p(s.current,t.isbn,{format:"codabar",width:1.25,height:26,margin:10,fontSize:12})}),[]),h.createElement(m,{key:t.isbn,className:"card",interactive:!0,elevation:d.TWO,onClick:()=>e.onClick({title:t.title,author:t.author,publisher:t.publisher,pubdate:t.pubdate,isbn:t.isbn,source:t.source})},h.createElement("div",{className:"card-header"},t.cover?h.createElement("img",{src:t.cover,alt:t.title}):null,h.createElement("div",null,h.createElement("h3",null,[t.title,t.volume].join(" ")),h.createElement("p",{className:"author"},t.author),t.tags.map((e=>h.createElement(b,{key:e},e))))),h.createElement("svg",{ref:s,xmlns:"http://www.w3.org/2000/svg",version:"1.1"}))};class T extends u.exports.Component{constructor(){super(),this.state={}}render(){return h.createElement("div",{className:"book",onClick:()=>this.props.open(this.props.book)},this.props.book.isbn&&(this.props.count<10*this.props.updateCount||this.props.completed)?h.createElement("img",{src:`https://calil.jp/cover/${this.props.book.isbn}`}):h.createElement("div",{className:"no_book_cover"}),h.createElement("div",null,h.createElement("div",{className:"title"},this.props.book.title),h.createElement("div",{className:"author"},this.props.book.author)))}}const B=["free","title","author","publisher","isbn","ndc","year_start","year_end","region"];function D(e){return v.get("https://unitrad.calil.jp/v1/"+e)}class R{constructor(e,t){c(this,"callback"),c(this,"killed"),c(this,"data"),this.callback=t,this.killed=!1,this.search(e)}kill(){this.killed=!0}search(e){this.killed||D("search").query(function(e){let t={};for(let s of B)e.hasOwnProperty(s)&&""!==e[s]&&(t[s]=e[s]);return t}(e)).end(((t,s)=>{t?setTimeout((()=>this.search(e)),1e3):this.receive(s.body)}))}polling(){this.killed||D("polling").query({uuid:this.data.uuid,version:this.data.version,diff:1,timeout:10}).end(((e,t)=>{null===t.body?setTimeout((()=>this.polling()),100):this.receive(t.body)}))}receive(e){if(!this.killed){if(e.books_diff){Array.prototype.push.apply(this.data.books,e.books_diff.insert);for(let t in e)e.hasOwnProperty(t)&&"books_diff"!==t&&(this.data[t]=e[t]);for(let t of e.books_diff.update)for(let e in t)if(t.hasOwnProperty(e)&&"_idx"!==e)if(!0===Array.isArray(t[e]))Array.prototype.push.apply(this.data.books[t._idx][e],t[e]);else if(t[e]instanceof Object)for(let s in t[e])t[e].hasOwnProperty(s)&&(this.data.books[t._idx][e][s]=t[e][s]);else this.data.books[t._idx][e]=t[e]}else this.data=e;this.callback(this.data),!0===e.running?(console.log("[Unitrad] continue..."),1===e.version&&0===this.data.books.length?setTimeout((()=>this.polling()),20):setTimeout((()=>this.polling()),500)):console.log("[Unitrad] complete.")}}}function H(e){e=g.nfkc(e).toUpperCase().replace(/[^0-9X]/g,"");let t=E.parse(e);if(t){if(t.isIsbn10())return t.asIsbn10();if(t.isIsbn13()){return t.asIsbn13().startsWith("978")?t.asIsbn10():t.asIsbn13()}}else{let t=E.parse("978"+e);if(t&&t.isIsbn13())return t.asIsbn10()}return!1}const _=async e=>{const t=e.author.split(",")[0],s=e.publisher,n=e.pubdate;return new Promise((async(a,l)=>{let i=new R({author:t,publisher:s,year_start:n,region:"recipe"},(async t=>{if(!i.killed&&(t.count>5&&i.kill(),console.log(t),t.count>=1)){const s=[];t.books.forEach((e=>{if(null===e.isbn)return;let t=0;e.pubdate&&(t="string"!=typeof e.pubdate?e.pubdate:Number(e.pubdate.split("/")[0].split(".")[0]));let n=E.parse(H(e.isbn)),a=null;n&&(a=n.asIsbn13()),a&&s.push({title:e.title+" "+e.volume,author:e.author.split(",")[0],publisher:e.publisher,isbn:a,pubdate:t,source:"unitrad"})})),s.sort((function(e,t){return e.isbn<t.isbn?-1:e.isbn>t.isbn?1:0}));let n=[];const l=[];let i=!1;s.forEach((t=>{t.isbn!==e.isbn&&(i?n.push(t):l.push(t)),t.isbn===e.isbn&&(i=!0)})),n=n.concat(l);const o=[];n.forEach((e=>{o.push(e.isbn)}));const r=await $(o);a(r)}}))}))},$=async e=>new Promise((async(t,s)=>{const n=await fetch("https://api.openBD.jp/v1/get?isbn="+e.join(",")).then((e=>e.json())),a=[];n.forEach((e=>{if(e){const t=[];try{e.onix.DescriptiveDetail.Collection.TitleDetail.TitleElement.forEach(((e,s)=>{var n,a,l;t.includes(e.TitleText.content)||t.push((n=e.TitleText.content,a={"ｶﾞ":"ガ","ｷﾞ":"ギ","ｸﾞ":"グ","ｹﾞ":"ゲ","ｺﾞ":"ゴ","ｻﾞ":"ザ","ｼﾞ":"ジ","ｽﾞ":"ズ","ｾﾞ":"ゼ","ｿﾞ":"ゾ","ﾀﾞ":"ダ","ﾁﾞ":"ヂ","ﾂﾞ":"ヅ","ﾃﾞ":"デ","ﾄﾞ":"ド","ﾊﾞ":"バ","ﾋﾞ":"ビ","ﾌﾞ":"ブ","ﾍﾞ":"ベ","ﾎﾞ":"ボ","ﾊﾟ":"パ","ﾋﾟ":"ピ","ﾌﾟ":"プ","ﾍﾟ":"ペ","ﾎﾟ":"ポ","ｳﾞ":"ヴ","ﾜﾞ":"ヷ","ｦﾞ":"ヺ","ｱ":"ア","ｲ":"イ","ｳ":"ウ","ｴ":"エ","ｵ":"オ","ｶ":"カ","ｷ":"キ","ｸ":"ク","ｹ":"ケ","ｺ":"コ","ｻ":"サ","ｼ":"シ","ｽ":"ス","ｾ":"セ","ｿ":"ソ","ﾀ":"タ","ﾁ":"チ","ﾂ":"ツ","ﾃ":"テ","ﾄ":"ト","ﾅ":"ナ","ﾆ":"ニ","ﾇ":"ヌ","ﾈ":"ネ","ﾉ":"ノ","ﾊ":"ハ","ﾋ":"ヒ","ﾌ":"フ","ﾍ":"ヘ","ﾎ":"ホ","ﾏ":"マ","ﾐ":"ミ","ﾑ":"ム","ﾒ":"メ","ﾓ":"モ","ﾔ":"ヤ","ﾕ":"ユ","ﾖ":"ヨ","ﾗ":"ラ","ﾘ":"リ","ﾙ":"ル","ﾚ":"レ","ﾛ":"ロ","ﾜ":"ワ","ｦ":"ヲ","ﾝ":"ン","ｧ":"ァ","ｨ":"ィ","ｩ":"ゥ","ｪ":"ェ","ｫ":"ォ","ｯ":"ッ","ｬ":"ャ","ｭ":"ュ","ｮ":"ョ","｡":"。","､":"、","ｰ":"ー","｢":"「","｣":"」","･":"・"},l=new RegExp("("+Object.keys(a).join("|")+")","g"),n.replace(l,(function(e){return a[e]})).replace(/ﾞ/g,"゛").replace(/ﾟ/g,"゜")))}))}catch{}let s=e.summary.volume;try{""===s&&(s=e.onix.DescriptiveDetail.TitleDetail.TitleElement.PartNumber.split(";")[0],e.summary.title.match(s)&&(s=""))}catch{}let n="";try{e.onix.ProductSupply.SupplyDetail.Price.some((e=>{"JPY"===e.CurrencyCode&&(n=e.PriceAmount)}))}catch{}let l="";try{e.onix.DescriptiveDetail.Subject.some((e=>{"78"===e.SubjectSchemeIdentifier&&(l=e.SubjectCode)}))}catch{}const i={title:[e.summary.title,s].join(" "),author:e.summary.author,publisher:e.summary.publisher,isbn:e.summary.isbn,pubdate:e.summary.pubdate,cover:e.summary.cover,tags:t,price:n,cCode:l,source:"opendBD"};i.bibHash=P(i),a.push(i)}})),t(a)})),P=e=>f(e.id+e.title+e.author+e.publisher+e.isbn);class A extends u.exports.Component{constructor(e){super(e),this.api=null,this.prevQuery="",this.state={loading:!1,running:!1,books:[],message:"",hint:"",updateCount:0}}kill(){this.api&&(this.api.kill(),this.setState({updateCount:0,running:!1}))}componentDidMount(){const e=this.refs.suggest;if(e&&this.props.queryInput){var t=this.props.queryInput.getBoundingClientRect();e.style.width=t.right-t.left+"px"}this.props.query===this.prevQuery&&(this.state.showResult=!0),""!=this.props.query&&this.props.query!=this.prevQuery&&(this.kill(),this.prevQuery=this.props.query,this.api=new R({free:this.props.query,region:this.props.region},(async e=>{let t=[];e.books.slice(0,30).map((e=>{if(e.isbn&&e.isbn.length>=10){e.isbn=e.isbn.replace(/-/g,"");let s=y.parse(e.isbn);s?e.isbn=s.asIsbn13():(s=y.parse(e.id),s&&(e.isbn=s.asIsbn13())),t.push(e)}else e.isbn=void 0,t.push(e)}));let s=e.running;t.length>20&&(s=!1,this.kill());const n=[];t.forEach((e=>{n.push(e.isbn)}));const a=await $(n);console.log(t);const l=t.map((e=>{const t=a.find((t=>t.isbn===e.isbn));return t||e}));this.setState({books:l,loading:s&&t.length<10,running:s,notFound:!1===s&&0===t.length,updateCount:this.state.updateCount+1,showResult:!0})})))}componentDidUpdate(){this.componentDidMount()}componentWillUnmount(){this.kill()}render(){let e=0;return h.createElement("div",{className:"suggest",ref:"suggest"},this.state.books.length>0?h.createElement("div",{className:"results"},this.state.books.map((t=>(e+=1,h.createElement(T,{book:t,key:t.id,count:e,updateCount:this.state.updateCount,completed:!this.state.running,open:e=>{this.props.open(e)}}))))):this.state.running?h.createElement("div",{className:"message"},"検索中..."):null,this.state.notFound?h.createElement("div",{className:"message"},"見つかりませんでした"):null)}}let F=new k.Howl({src:["./audio/healing.ogg"],autoplay:!1,loop:!1,volume:1,rate:.5,onend:function(){console.log("Finished!")}}),L=new k.Howl({src:["./audio/healed.ogg"],autoplay:!1,loop:!1,volume:1,onend:function(){console.log("Finished!")}});class q extends u.exports.Component{constructor(e){super(e),this.state={isRecognition:!1}}start(){if(this.state.isRecognition)return;const e=new webkitSpeechRecognition;e.lang="ja-JP",this.setState({isRecognition:!0}),e.onend=()=>{console.log("on end"),e.stop(),this.setState({isRecognition:!1})},e.onresult=e=>{e.results.length>0&&(L.play(),this.props.onEnd(e.results[0][0].transcript))},e.onstart=()=>{console.log("on start"),F.play()},e.onspeechstart=()=>{console.log("on speech start")},e.onspeechend=()=>{console.log("on speech end")},e.onsoundend=()=>{console.log("on sound end")},e.onaudiostart=()=>{console.log("on audio start")},e.onaudioend=()=>{console.log("on audio end")},e.start()}render(){return"webkitSpeechRecognition"in window?h.createElement("span",{className:"speech",onClick:this.start.bind(this)},this.state.isRecognition?h.createElement(w,{icon:"chat"}):h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"},h.createElement("path",{d:"M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"}))):null}}let J=new k.Howl({src:["./audio/safety.mp3"],autoplay:!1,loop:!1,volume:1,onend:function(){console.log("Finished!")}}),U=new k.Howl({src:["./audio/error.mp3"],autoplay:!1,loop:!1,volume:.7,onend:function(){console.log("Finished!")}});let M="",W=null,Z=null;const Q=e=>{if("speechSynthesis"in window){const t=new SpeechSynthesisUtterance(e);t.rate=1.5,speechSynthesis.speak(t)}},X=()=>{const[e,t]=u.exports.useState("gk-xxxxxxxxxxxxxxx");let s=[],n="isbn";const a=localStorage.getItem("keichanData_"+e);if(a){const e=JSON.parse(a);e.rowList.map((e=>{void 0===e.pubdate&&(e.pubdate=""),void 0===e.source&&(e.source="openBD")})),s=e.rowList,n=e.mode}const[l,i]=u.exports.useState(s),[c,p]=u.exports.useState(n),v=[];0===l.length||l[l.length-1].title?"isbn"===c?v.push("バーコードをスキャンしてください"):v.push("資料コードのバーコードをスキャンしてください"):v.push("紐つけるバーコードをスキャンしてください");const[g,f]=u.exports.useState(v),[y,k]=u.exports.useState([]),[V,T]=u.exports.useState(""),[B,D]=u.exports.useState({title:"",author:"",publisher:"",pubdate:"",isbn:""}),[F,L]=u.exports.useState({id:"",title:"",author:"",publisher:"",pubdate:"",isbn:""}),[X,Y]=u.exports.useState(!0),[K,G]=u.exports.useState(!0),[ee,te]=u.exports.useState(!1),[se,ne]=u.exports.useState(!1),[ae,le]=u.exports.useState(!1),ie=u.exports.useRef(null),[oe,re]=u.exports.useState({show:!1,message:""});u.exports.useEffect((()=>{localStorage.setItem("keichanData_"+e,JSON.stringify({mode:c,rowList:l}))}),[l,c]);const ce=e=>((e,t)=>{if(console.log("onKeyDown"),e.target.closest(".addMore"))return;const s=(new Date).getTime(),n=s-Z;Z=s;const a=e||window.event,l=a.keyCode||a.which||a.charCode;"Enter"===e.key||13===l?(n<100&&t(M),W&&clearTimeout(W),M=""):(1===e.key.length?M+=e.key:"Shift"===e.key||(M=""),W&&clearTimeout(W),W=setTimeout((()=>{n<100&&t(M),M=""}),300))})(e,me);u.exports.useEffect((()=>(window.addEventListener("keydown",ce),()=>{window.removeEventListener("keydown",ce)})),[c,l,X,g,K]),u.exports.useEffect((()=>{document.body.addEventListener("click",(e=>{le(!1)}))}),[!0]);const ue=(e,t=null)=>{re({show:!0,message:e.replace("!! ","")}),f([...g,h.createElement(h.Fragment,null,t?h.createElement("div",null,h.createElement("span",{style:{fontFamily:'"Conv_OCRB", Sans-Serif'}},t)):null,h.createElement("div",null,e.match(/!!/)?h.createElement("span",{style:{color:"red"}},"!! "):null,h.createElement("span",null,e.replace("!! ",""))))])},pe=async(e,t)=>{const s=[];if(s.push("ISBNのバーコードが読まれました"),s.push(h.createElement("span",{style:{fontFamily:'"Conv_OCRB", Sans-Serif'}},e)),k([]),e.match(/^[a-zA-Z](\d+)[a-zA-Z]$/)&&(e=RegExp.$1,s.push("codabarの制御コードを検出しました")),"management"===c&&0===l.length)return ue("!! 資料コードを読んでください"),void U.play();if("isbn"===c&&l.filter((t=>t.id===e)).length>0)return ue("!! すでに登録済みの資料です"),void U.play();if("management"===c&&l.length>0){const e=[...l],s=e[e.length-1];if(!s||s.isbn)return ue("次は資料コードのバーコードを読んでください"),void U.play();{let n=E.parse(t);n&&(s.isbn=n.asIsbn13()),i(e)}}J.play(),ne(!0);const n=await(async e=>new Promise((async(t,s)=>{const n=new R({isbn:e,region:"recipe"},(async e=>{if(e.count>=1){n.kill();const s=e.books[0],a={id:s.id,title:s.title,author:s.author,publisher:s.publisher,pubdate:s.pubdate,isbn:s.isbn,tags:[],price:"",cCode:"",source:"unitrad"};a.bibHash=P(a);let l=E.parse(H(a.isbn));l&&(a.isbn=l.asIsbn13());const i=await $([a.isbn]);i.length>0?(i[0].id=a.id,t(i[0])):t(a)}else!1===e.running&&0===e.count&&s()}))})))(t).catch((()=>(e=>{const t=[...l];t.forEach(((t,s)=>{H(t.isbn)===e&&(t.title="",t.author="",t.publisher="",t.pubdate="",t.isbn="",t.cover="",t.tags=[],t.bibHash="",t.price="",t.cCode="",t.source="")})),i(t),U.play(),ue("!! 本が見つかりませんでした。書誌データは追加されません")})(t)));if(ne(!1),n)if(s.push("本が見つかりました！"),"isbn"===c){n.id=n.isbn,i([...l,n]),K?Q(`${n.title}を追加`):s.push(`「${n.title}」を追加`);const e=l[l.length-1];if(e&&e.title){s.push(`一つ前の本、「${e.title}」から次の本の候補を探します`);const t=await _(e);k(t),t.length>0&&s.push(`候補の本が${t.length}冊みつかりました`)}}else if("management"===c){const e=[...l];e.forEach(((e,s)=>{H(e.isbn)===t&&(e.title=n.title,e.author=n.author,e.publisher=n.publisher,e.pubdate=n.pubdate,e.cover=n.cover,e.isbn=n.isbn,e.tags=n.tags,e.bibHash=n.bibHash,e.price=n.price,e.cCode=n.cCode,e.source=n.source)})),i(e),K&&Q(`${n.title}を追加`)}f([...g,...s])},he=async e=>{if(!1===(e=>e.length>20?(ue("資料コードが長すぎます。バーコードの連続読み取りと判断して、処理しません",e),U.play(),!1):null!==e.match(/^192/)?(ue("192で始まるバーコードのため、書籍JANコード(下段)と判断して、処理しません",e),U.play(),!1):null!==e.match(/^491/)?(ue("491で始まるバーコードのため、雑誌コードと判断して、処理しません",e),U.play(),!1):null===e.match(/[a-zA-Z0-9]+/)?(v.push("英数字以外のキーが入力されました。処理しません"),f([...g,...v]),!1):!e.match(/^[a-zA-Z]*$/)||(v.push("英字のみが入力されました。処理しません"),f([...g,...v]),!1))(e))return;e.match(/^[a-zA-Z](\d+)[a-zA-Z]$/)&&(e=RegExp.$1,v.push("codabarの制御コードを検出しました")),"isbn"===c&&(p("management"),v.push("資料コードが読み込まれたため、資料コード用のモードに切り替えます")),v.push(h.createElement("span",{style:{fontFamily:'"Conv_OCRB", Sans-Serif'}},e));const t=l[l.length-1];if(l.filter((t=>t.id===e)).length>0)return ue("!! すでに登録済みの資料コードです"),void U.play();if(J.play(),i([...l,{id:e}]),t&&t.title){v.push(`一つ前の本、「${t.title}」から次の本の候補を探します`);const e=await _(t);k(e),e.length>0&&v.push(`候補の本が${e.length}冊みつかりました`)}f([...g,...v])},me=async e=>{if(!1===X)return;const t=H(e);t?pe(e,t):he(e),Y(!1),setTimeout((()=>Y(!0)),100)},de=e=>{T(e),le(!0)},be=e=>{T(e),le(!0)},ve=e=>{let t="";e.pubdate&&(t="string"!=typeof e.pubdate?e.pubdate:e.pubdate.replace(/[^0-9０-９]+/,"")),ge({title:e.title,author:e.author,publisher:e.publisher,pubdate:t.toString(),isbn:e.isbn,source:e.source})},ge=(e,t=!1)=>{if(""===e.title)return ue("タイトルは必須です"),U.play(),!1;const s=[...l],n=s[s.length-1];n.title=e.title,n.author=e.author,n.publisher=e.publisher,n.pubdate=e.pubdate,n.cover=""!==e.isbn?"https://calil.jp/cover/"+e.isbn:"",n.isbn=e.isbn,n.tags=[],n.bibHash=P(o(o({},n),e)),n.price="",n.cCode="",n.source=t?"user":e.source,i(s),D({title:"",author:"",publisher:"",pubdate:"",isbn:""}),K&&Q(`${e.title}を追加`),v.push(`「${e.title}」を追加`),f([...g,...v])},Ee=e=>{L({id:"",title:"",author:"",publisher:"",pubdate:"",isbn:""})},fe=u.exports.useRef(null);let ye;u.exports.useEffect((()=>{if(fe.current){const e=fe.current;e.scrollTop=e.scrollHeight}}),[g]),u.exports.useEffect((()=>{ye&&clearTimeout(ye),ye=setTimeout((()=>{re({show:!1,message:""})}),6e3)}),[oe]);const ke=u.exports.useRef(null);return u.exports.useEffect((()=>{const e=setInterval((()=>{ke.current&&(ke.current.style.display="none",setTimeout((()=>{ke.current.style.display="inline"}),500))}),1e3);return()=>{clearInterval(e)}}),[!0]),h.createElement("div",{id:"index"},h.createElement(N,{isOpen:oe.show,onClose:()=>re({show:!1,message:""}),hasBackdrop:!1},h.createElement("div",{className:"bp3-card bp3-elevation-4 bp3-overlay-content alert-message"},h.createElement(w,{icon:"tick",size:25,color:"#000000"}),oe.message)),h.createElement(N,{isOpen:ee,onClose:()=>te(!1),hasBackdrop:!0},h.createElement("div",{className:"bp3-card bp3-elevation-4 bp3-overlay-content settings-overlay"},h.createElement("div",{className:"settings"},h.createElement("h3",null,"設定"),"speechSynthesis"in window?h.createElement(x,{checked:K,label:"読み上げ",onChange:()=>G(!K)}):null,h.createElement("br",null),h.createElement("hr",null),h.createElement("br",null),l.length>0?h.createElement(C,{icon:"download",onClick:()=>((e,t)=>{const s=new Date;t+=`_${s.getFullYear()}${s.getMonth()+1}${s.getDate()}.json`;const n=new Blob([JSON.stringify(e,null,"  ")],{type:"application/json"}),a=URL.createObjectURL(n),l=document.createElement("a");l.href=a,l.download=t,l.click(),URL.revokeObjectURL(a)})({mode:c,rowList:l},"keichanData_"+e),style:{marginRight:"0.5rem"}},"JSONで保存"):null,h.createElement(C,{icon:"upload",onClick:()=>{document.querySelector('input[type="file"]').click()}},"JSONを読み込み"),h.createElement("input",{type:"file",accept:"application/json",onChange:e=>{for(var t,s=e.target.files,n=0;t=s[n];n++){if(!t.type.match("application/json"))continue;const e=new FileReader;e.onload=e=>{const t=JSON.parse(e.target.result);if(void 0===t.rowList||void 0===t.mode)return ue("JSONファイルの形式が異なっています"),void U.play();t.rowList.map((e=>{void 0===e.pubdate&&(e.pubdate=""),void 0===e.source&&(e.source="openBD")})),i(t.rowList),p(t.mode)},e.readAsText(t)}},style:{display:"none"}}),h.createElement("br",null),h.createElement("br",null),h.createElement(C,{icon:"cross",onClick:()=>te(!1)},"閉じる")))),h.createElement("header",null,h.createElement("div",null),h.createElement("h1",null,"カーリルtoolbox: keichan"),h.createElement("div",null,h.createElement("label",{htmlFor:""},"モード:"),h.createElement("span",{className:"modes"},h.createElement("span",{className:"mode isbn"+("isbn"===c?" active":""),onClick:()=>{p("isbn"),f([...g,"モードをISBNに変更しました","バーコードをスキャンしてください"])}},"ISBN"),h.createElement("span",{className:"mode management"+("management"===c?" active":""),onClick:()=>{p("management"),f([...g,"モードを資料コードに変更しました","資料コードのバーコードをスキャンしてください"])}},"資料コード")),l.length>0?h.createElement(C,{icon:"download",onClick:()=>((e,t)=>{const s=I.utils.book_new();s.Props={Title:"",Subject:"",Author:"",CreatedDate:new Date},s.SheetNames.push("蔵書データ");const n=[];n.push(["id","タイトル","著者","出版社","発売日","ISBN","タグ","価格","Cコード"]),e.map((e=>{e.isbn&&n.push([e.id,e.title,e.author,e.publisher,e.pubdate,e.isbn,e.tags.join(","),e.price,e.cCode])}));const a=I.utils.aoa_to_sheet(n);s.Sheets["蔵書データ"]=a;const l=I.write(s,{bookType:"xlsx",type:"binary"});O.exports.saveAs(new Blob([function(e){const t=new ArrayBuffer(e.length),s=new Uint8Array(t);for(let n=0;n<e.length;n++)s[n]=255&e.charCodeAt(n);return t}(l)],{type:"application/octet-stream"}),t+".xlsx")})(l,e)},"Excelで保存"):null,h.createElement(C,{className:"settingsButton",icon:"cog",onClick:()=>te(!0)},"設定"))),h.createElement("main",null,h.createElement("div",{className:"main"},0===l.length?h.createElement("div",{className:"description"},h.createElement("div",null,h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},h.createElement("path",{d:"M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"})),"isbn"===c?"バーコードをスキャンしてください":"資料コードのバーコードをスキャンしてください")):null,l.slice().reverse().map(((e,t)=>h.createElement("div",{key:"row"+t},h.createElement(m,{key:"managementCode",className:"card active",interactive:!1,elevation:d.TWO},h.createElement("span",{className:"document"},h.createElement("span",{className:"documentHeader"},"資料コード"),h.createElement("span",{className:"documentCode"},e.id)),h.createElement(w,{icon:"delete",size:25,color:"#ffffff",onClick:()=>{return t=e.id,void i(l.filter((e=>e.id!==t)));var t}})),"management"===c&&void 0===e.isbn?h.createElement(h.Fragment,null,h.createElement("div",{className:"actions"},h.createElement("div",{className:"description"},h.createElement("div",null,h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},h.createElement("path",{d:"M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"})),"紐つけるバーコードをスキャンしてください")),h.createElement("div",{className:"addMore"},h.createElement("h3",null,"バーコードのない本を追加"),h.createElement("form",{action:"",onSubmit:e=>{e.preventDefault(),de(V)}},h.createElement("div",{className:"bp3-input-group modifier"},h.createElement("span",{className:"bp3-icon bp3-icon-search"}),h.createElement("input",{ref:ie,className:"bp3-input",type:"search",value:V,placeholder:"キーワード or ISBNで探す",dir:"auto",onChange:e=>de(e.target.value)})),h.createElement(q,{onEnd:be})),h.createElement("div",{className:ae?"show_suggest":"hide_suggest"},h.createElement(A,{region:"recipe",open:ve,query:V,queryInput:ie.current})),h.createElement(S,{helperText:"",label:"書誌情報を自分で入力",labelFor:"text-input",labelInfo:""},h.createElement(z,{className:"title",placeholder:"タイトル",value:B.title,onChange:e=>D(r(o({},B),{title:e.target.value}))}),h.createElement(z,{className:"author",placeholder:"著者名",value:B.author,onChange:e=>D(r(o({},B),{author:e.target.value}))}),h.createElement(z,{className:"publisher",placeholder:"出版社",value:B.publisher,onChange:e=>D(r(o({},B),{publisher:e.target.value}))}),h.createElement(z,{className:"pubdate",placeholder:"出版日(20211010)",value:B.pubdate,onChange:e=>D(r(o({},B),{pubdate:e.target.value}))}),h.createElement(z,{className:"isbn",placeholder:"ISBN",value:B.isbn,onChange:e=>D(r(o({},B),{isbn:e.target.value}))}),h.createElement(C,{className:"bp3-intent-primary",icon:"plus",large:!0,onClick:()=>ge(B,!0)},"追加")))),l.length>1&&y.length>0?h.createElement("div",{className:"nextBook"},h.createElement("h2",null,"もしかして",h.createElement("span",null,"(",l[l.length-2].title,"より推定)")),h.createElement("div",{className:"cards"},y.slice(0,5).map((e=>h.createElement(j,{book:e,key:e.isbn,onClick:ge}))))):null):null,h.createElement("div",{className:"linkedData"},e.isbn?h.createElement(m,{key:e.bibHash+e.isbn,className:"card indent",interactive:!1,elevation:d.TWO},h.createElement("div",{className:"flex"},h.createElement("span",{className:"isbn"},h.createElement("span",{className:"isbnHeader"},"ISBN"),h.createElement("span",{className:"isbnCode"},e.isbn)))):null,e.title?h.createElement(m,{key:e.bibHash,className:"card indent",interactive:!1,elevation:d.TWO},h.createElement("div",null,e.cover?h.createElement("img",{className:"thumbnail",src:e.cover,alt:""}):null,h.createElement("div",null,h.createElement("h3",null,e.title),h.createElement("p",{className:"author"},e.author),e.tags.map((e=>h.createElement(b,{key:e},e))))),e.id!==F.id?h.createElement(w,{className:"edit",icon:"edit",size:25,color:"#ffffff",onClick:()=>L({id:e.id,title:e.title,author:e.author,publisher:e.publisher,pubdate:e.pubdate,isbn:e.isbn})}):h.createElement(S,{className:"edit-form",helperText:"",label:"書誌情報を編集",labelFor:"text-input",labelInfo:""},h.createElement(z,{className:"title",placeholder:"タイトル",value:F.title,onChange:e=>L(r(o({},F),{title:e.target.value}))}),h.createElement(z,{className:"author",placeholder:"著者名",value:F.author,onChange:e=>L(r(o({},F),{author:e.target.value}))}),h.createElement(z,{className:"publisher",placeholder:"出版社",value:F.publisher,onChange:e=>L(r(o({},F),{publisher:e.target.value}))}),h.createElement(z,{className:"pubdate",placeholder:"出版日(20211010)",value:F.pubdate,onChange:e=>L(r(o({},F),{pubdate:e.target.value}))}),h.createElement(z,{className:"isbn",placeholder:"ISBN",value:F.isbn,onChange:e=>L(r(o({},F),{isbn:e.target.value}))}),h.createElement("div",{className:"buttons"},h.createElement(C,{className:"bp3-intent-primary",large:!0,icon:"edit",onClick:()=>(e=>{if(""===e.title)return ue("タイトルは必須です"),U.play(),!1;if(""!==e.isbn&&null===E.parse(e.isbn))return ue("ISBNが不正です"),U.play(),!1;const t=[...l],s=t.find((t=>t.id===e.id));s&&(s.title=e.title,s.author=e.author,s.publisher=e.publisher,s.pubdate=e.pubdate,s.cover=""!==e.isbn?"https://calil.jp/cover/"+e.isbn:"",s.isbn=e.isbn,s.tags=[],s.bibHash=P(o(o({},s),e)),s.price="",s.cCode="",s.source="user",i(t),L({id:"",title:"",author:"",publisher:"",pubdate:"",isbn:""}),K&&Q(`${e.title}を編集`),v.push(`「${e.title}」を編集`),f([...g,...v]))})(F)},"編集"),h.createElement(C,{large:!0,onClick:Ee},"キャンセル")))):null,void 0===e.title&&se?h.createElement(m,{className:"card indent",style:{height:"120px"},interactive:!1,elevation:d.TWO},h.createElement("div",{className:"placeholder"},h.createElement("div",{className:"placeholder-line title"}),h.createElement("div",{className:"placeholder-line"}),h.createElement("div",{className:"placeholder-line"}),h.createElement("div",{className:"placeholder-line"}),h.createElement("div",{className:"placeholder-line"}))):null))))),h.createElement("div",{className:"debug"},h.createElement("div",{className:"logs",ref:fe},g.map(((e,t)=>h.createElement("div",{key:"log"+t},e)))),h.createElement("div",{className:"cmd"},"> ",h.createElement("span",{ref:ke},"_")))))};V.render(h.createElement(X,null),document.getElementById("app"));
