var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,i=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,r=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&i(e,a,t[a]);if(s)for(var a of s(t))l.call(t,a)&&i(e,a,t[a]);return e},o=(e,s)=>t(e,a(s)),c=(e,t,a)=>(i(e,"symbol"!=typeof t?t+"":t,a),a);import("data:text/javascript;base64,Cg==");import{r as u,J as p,R as h,C as m,E as d,T as b,a as v,u as g,l as f,s as E,I as y,h as w,O as k,b as x,S as N,B as C,F as S,c as z,X as O,d as T,e as V}from"./vendor.9cd849c1.js";const I=e=>{const t=e.book,a=u.exports.useRef(null);return u.exports.useEffect((()=>{p(a.current,t.isbn,{format:"codabar",width:1.25,height:26,margin:10,fontSize:12})}),[]),h.createElement(m,{key:t.isbn,className:"card",interactive:!0,elevation:d.TWO},h.createElement("div",{className:"card-header"},t.cover?h.createElement("img",{src:t.cover,alt:t.title}):null,h.createElement("div",null,h.createElement("h3",null,[t.title,t.volume].join(" ")),h.createElement("p",{className:"author"},t.author),t.tags.map((e=>h.createElement(b,{key:e},e))))),h.createElement("svg",{ref:a,xmlns:"http://www.w3.org/2000/svg",version:"1.1"}))};class j extends u.exports.Component{constructor(){super(),this.state={}}render(){return h.createElement("div",{className:"book",onClick:()=>this.props.open(this.props.book)},this.props.book.isbn&&(this.props.count<10*this.props.updateCount||this.props.completed)?h.createElement("img",{src:`https://calil.jp/cover/${this.props.book.isbn}`}):h.createElement("div",{className:"no_book_cover"}),h.createElement("div",null,h.createElement("div",{className:"title"},this.props.book.title),h.createElement("div",{className:"author"},this.props.book.author)))}}const D=["free","title","author","publisher","isbn","ndc","year_start","year_end","region"];function B(e){return v.get("https://unitrad.calil.jp/v1/"+e)}class _{constructor(e,t){c(this,"callback"),c(this,"killed"),c(this,"data"),this.callback=t,this.killed=!1,this.search(e)}kill(){this.killed=!0}search(e){this.killed||B("search").query(function(e){let t={};for(let a of D)e.hasOwnProperty(a)&&""!==e[a]&&(t[a]=e[a]);return t}(e)).end(((t,a)=>{t?setTimeout((()=>this.search(e)),1e3):this.receive(a.body)}))}polling(){this.killed||B("polling").query({uuid:this.data.uuid,version:this.data.version,diff:1,timeout:10}).end(((e,t)=>{null===t.body?setTimeout((()=>this.polling()),100):this.receive(t.body)}))}receive(e){if(!this.killed){if(e.books_diff){Array.prototype.push.apply(this.data.books,e.books_diff.insert);for(let t in e)e.hasOwnProperty(t)&&"books_diff"!==t&&(this.data[t]=e[t]);for(let t of e.books_diff.update)for(let e in t)if(t.hasOwnProperty(e)&&"_idx"!==e)if(!0===Array.isArray(t[e]))Array.prototype.push.apply(this.data.books[t._idx][e],t[e]);else if(t[e]instanceof Object)for(let a in t[e])t[e].hasOwnProperty(a)&&(this.data.books[t._idx][e][a]=t[e][a]);else this.data.books[t._idx][e]=t[e]}else this.data=e;this.callback(this.data),!0===e.running?(console.log("[Unitrad] continue..."),1===e.version&&0===this.data.books.length?setTimeout((()=>this.polling()),20):setTimeout((()=>this.polling()),500)):console.log("[Unitrad] complete.")}}}function H(e){e=g.nfkc(e).toUpperCase().replace(/[^0-9X]/g,"");let t=f.parse(e);if(t){if(t.isIsbn10())return t.asIsbn10();if(t.isIsbn13()){return t.asIsbn13().startsWith("978")?t.asIsbn10():t.asIsbn13()}}else{let t=f.parse("978"+e);if(t&&t.isIsbn13())return t.asIsbn10()}return!1}const $=async e=>{const t=e.author.split(",")[0],a=e.publisher,s=e.pubdate;return new Promise((async(n,l)=>{let i=new _({author:t,publisher:a,year_start:s,region:"recipe"},(async t=>{if(!i.killed&&(t.count>5&&i.kill(),console.log(t),t.count>=1)){const a=[];t.books.forEach((e=>{if(null===e.isbn)return;let t=0;e.pubdate&&(t="string"!=typeof e.pubdate?e.pubdate:Number(e.pubdate.split("/")[0].split(".")[0]));let s=f.parse(H(e.isbn)),n=null;s&&(n=s.asIsbn13()),n&&a.push({title:e.title+" "+e.volume,author:e.author.split(",")[0],publisher:e.publisher,isbn:n,pubdate:t,source:"unitrad"})})),a.sort((function(e,t){return e.isbn<t.isbn?-1:e.isbn>t.isbn?1:0}));let s=[];const l=[];let i=!1;a.forEach((t=>{t.isbn!==e.isbn&&(i?s.push(t):l.push(t)),t.isbn===e.isbn&&(i=!0)})),s=s.concat(l);const r=[];s.forEach((e=>{r.push(e.isbn)}));const o=await A(r);n(o)}}))}))},A=async e=>new Promise((async(t,a)=>{const s=await fetch("https://api.openBD.jp/v1/get?isbn="+e.join(",")).then((e=>e.json())),n=[];s.forEach((e=>{if(e){const t=[];try{e.onix.DescriptiveDetail.Collection.TitleDetail.TitleElement.forEach(((e,a)=>{t.includes(e.TitleText.content)||t.push(e.TitleText.content)}))}catch{}let a=e.summary.volume;try{""===a&&(a=e.onix.DescriptiveDetail.TitleDetail.TitleElement.PartNumber.split(";")[0],e.summary.title.match(a)&&(a=""))}catch{}let s="";try{e.onix.ProductSupply.SupplyDetail.Price.some((e=>{"JPY"===e.CurrencyCode&&(s=e.PriceAmount)}))}catch{}let l="";try{e.onix.DescriptiveDetail.Subject.some((e=>{"78"===e.SubjectSchemeIdentifier&&(l=e.SubjectCode)}))}catch{}const i={title:[e.summary.title,a].join(" "),author:e.summary.author,publisher:e.summary.publisher,isbn:e.summary.isbn,pubdate:e.summary.pubdate,cover:e.summary.cover,tags:t,price:s,cCode:l,source:"opendBD"};i.bibHash=P(i),n.push(i)}})),t(n)})),P=e=>E(e.id+e.title+e.author+e.publisher+e.isbn);class R extends u.exports.Component{constructor(e){super(e),this.api=null,this.prevQuery="",this.state={loading:!1,running:!1,books:[],message:"",hint:"",updateCount:0}}kill(){this.api&&(this.api.kill(),this.setState({updateCount:0,running:!1}))}componentDidMount(){this.props.query===this.prevQuery&&(this.state.showResult=!0),""!=this.props.query&&this.props.query!=this.prevQuery&&(this.kill(),this.prevQuery=this.props.query,this.api=new _({free:this.props.query,region:this.props.region},(async e=>{let t=[];e.books.slice(0,30).map((e=>{if(e.isbn&&e.isbn.length>=10){e.isbn=e.isbn.replace(/-/g,"");let a=y.parse(e.isbn);a?e.isbn=a.asIsbn13():(a=y.parse(e.id),a&&(e.isbn=a.asIsbn13())),t.push(e)}else e.isbn=void 0,t.push(e)}));let a=e.running;t.length>20&&(a=!1,this.kill());const s=[];t.forEach((e=>{s.push(e.isbn)}));const n=await A(s);console.log(t);const l=t.map((e=>{const t=n.find((t=>t.isbn===e.isbn));return t||e}));this.setState({books:l,loading:a&&t.length<10,running:a,notFound:!1===a&&0===t.length,updateCount:this.state.updateCount+1,showResult:!0})})))}componentDidUpdate(){this.componentDidMount()}componentWillUnmount(){this.kill()}render(){let e=0;return h.createElement("div",{className:"suggest"},this.state.books.length>0?h.createElement("div",{className:"results"},this.state.books.map((t=>(e+=1,h.createElement(j,{book:t,key:t.id,count:e,updateCount:this.state.updateCount,completed:!this.state.running,open:e=>{this.props.open(e)}}))))):this.state.running?h.createElement("div",{className:"message"},"検索中..."):null,this.state.notFound?h.createElement("div",{className:"message"},"見つかりませんでした"):null)}}let F=new w.Howl({src:["./audio/safety.mp3"],autoplay:!1,loop:!1,volume:1,onend:function(){console.log("Finished!")}}),L=new w.Howl({src:["./audio/error.mp3"],autoplay:!1,loop:!1,volume:.7,onend:function(){console.log("Finished!")}});let q="",U=null,J=null;const M=e=>{if("speechSynthesis"in window){const t=new SpeechSynthesisUtterance(e);t.rate=1.5,speechSynthesis.speak(t)}},W=()=>{const[e,t]=u.exports.useState("gk-xxxxxxxxxxxxxxx");let a=[],s="isbn";const n=localStorage.getItem("keichanData_"+e);if(n){const e=JSON.parse(n);e.rowList.map((e=>{void 0===e.pubdate&&(e.pubdate=""),void 0===e.source&&(e.source="openBD")})),a=e.rowList,s=e.mode}const[l,i]=u.exports.useState(a),[c,p]=u.exports.useState(s),v=[];0===l.length||l[l.length-1].title?"isbn"===c?v.push("バーコードをスキャンしてください"):v.push("資料コードのバーコードをスキャンしてください"):v.push("紐つけるバーコードをスキャンしてください");const[g,E]=u.exports.useState(v),[y,w]=u.exports.useState([]),[V,j]=u.exports.useState(""),[D,B]=u.exports.useState({title:"",author:"",publisher:"",pubdate:"",isbn:""}),[W,Z]=u.exports.useState({id:"",title:"",author:"",publisher:"",pubdate:"",isbn:""}),[Q,X]=u.exports.useState(!0),[Y,K]=u.exports.useState(!0),[G,ee]=u.exports.useState(!1),[te,ae]=u.exports.useState(!1),[se,ne]=u.exports.useState(!1),[le,ie]=u.exports.useState({show:!1,message:""});u.exports.useEffect((()=>{localStorage.setItem("keichanData_"+e,JSON.stringify({mode:c,rowList:l}))}),[l,c]);const re=e=>((e,t)=>{if(console.log("onKeyDown"),e.target.closest(".addMore"))return;const a=(new Date).getTime(),s=a-J;J=a;const n=e||window.event,l=n.keyCode||n.which||n.charCode;"Enter"===e.key||13===l?(s<100&&t(q),U&&clearTimeout(U),q=""):(1===e.key.length?q+=e.key:"Shift"===e.key||(q=""),U&&clearTimeout(U),U=setTimeout((()=>{s<100&&t(q),q=""}),300))})(e,pe);u.exports.useEffect((()=>(window.addEventListener("keydown",re),()=>{window.removeEventListener("keydown",re)})),[c,l,Q,g,Y]),u.exports.useEffect((()=>{document.body.addEventListener("click",(e=>{ne(!1)}))}),[!0]);const oe=(e,t=null)=>{ie({show:!0,message:e.replace("!! ","")}),E([...g,h.createElement(h.Fragment,null,t?h.createElement("div",null,h.createElement("span",{style:{fontFamily:'"Conv_OCRB", Sans-Serif'}},t)):null,h.createElement("div",null,e.match(/!!/)?h.createElement("span",{style:{color:"red"}},"!! "):null,h.createElement("span",null,e.replace("!! ",""))))])},ce=async(e,t)=>{const a=[];if(a.push("ISBNのバーコードが読まれました"),a.push(h.createElement("span",{style:{fontFamily:'"Conv_OCRB", Sans-Serif'}},e)),w([]),e.match(/^[a-zA-Z](\d+)[a-zA-Z]$/)&&(e=RegExp.$1,a.push("codabarの制御コードを検出しました")),"management"===c&&0===l.length)return oe("!! 資料コードを読んでください"),void L.play();if("isbn"===c&&l.filter((t=>t.id===e)).length>0)return oe("!! すでに登録済みの資料です"),void L.play();if("management"===c&&l.length>0){const e=[...l],a=e[e.length-1];if(!a||a.isbn)return oe("次は資料コードのバーコードを読んでください"),void L.play();{let s=f.parse(t);s&&(a.isbn=s.asIsbn13()),i(e)}}F.play(),ae(!0);const s=await(async e=>new Promise((async(t,a)=>{const s=new _({isbn:e,region:"recipe"},(async e=>{if(e.count>=1){s.kill();const a=e.books[0],n={id:a.id,title:a.title,author:a.author,publisher:a.publisher,pubdate:a.pubdate,isbn:a.isbn,tags:[],price:"",cCode:"",source:"unitrad"};n.bibHash=P(n);let l=f.parse(H(n.isbn));l&&(n.isbn=l.asIsbn13());const i=await A([n.isbn]);i.length>0?(i[0].id=n.id,t(i[0])):t(n)}else!1===e.running&&0===e.count&&a()}))})))(t).catch((()=>(e=>{const t=[...l];t.forEach(((t,a)=>{H(t.isbn)===e&&(t.title="",t.author="",t.publisher="",t.pubdate="",t.isbn="",t.cover="",t.tags=[],t.bibHash="",t.price="",t.cCode="",t.source="")})),i(t),L.play(),oe("!! 本が見つかりませんでした。書誌データは追加されません")})(t)));if(ae(!1),s)if(a.push("本が見つかりました！"),"isbn"===c){s.id=s.isbn,i([...l,s]),Y?M(`${s.title}を追加`):a.push(`「${s.title}」を追加`);const e=l[l.length-1];if(e&&e.title){a.push(`一つ前の本、「${e.title}」から次の本の候補を探します`);const t=await $(e);w(t),t.length>0&&a.push(`候補の本が${t.length}冊みつかりました`)}}else if("management"===c){const e=[...l];e.forEach(((e,a)=>{H(e.isbn)===t&&(e.title=s.title,e.author=s.author,e.publisher=s.publisher,e.pubdate=s.pubdate,e.cover=s.cover,e.isbn=s.isbn,e.tags=s.tags,e.bibHash=s.bibHash,e.price=s.price,e.cCode=s.cCode,e.source=s.source)})),i(e),Y&&M(`${s.title}を追加`)}E([...g,...a])},ue=async e=>{if(!1===(e=>e.length>20?(oe("資料コードが長すぎます。バーコードの連続読み取りと判断して、処理しません",e),L.play(),!1):null!==e.match(/^192/)?(oe("192で始まるバーコードのため、書籍JANコード(下段)と判断して、処理しません",e),L.play(),!1):null!==e.match(/^491/)?(oe("491で始まるバーコードのため、雑誌コードと判断して、処理しません",e),L.play(),!1):null===e.match(/[a-zA-Z0-9]+/)?(v.push("英数字以外のキーが入力されました。処理しません"),E([...g,...v]),!1):!e.match(/^[a-zA-Z]*$/)||(v.push("英字のみが入力されました。処理しません"),E([...g,...v]),!1))(e))return;e.match(/^[a-zA-Z](\d+)[a-zA-Z]$/)&&(e=RegExp.$1,v.push("codabarの制御コードを検出しました")),"isbn"===c&&(p("management"),v.push("資料コードが読み込まれたため、資料コード用のモードに切り替えます")),v.push(h.createElement("span",{style:{fontFamily:'"Conv_OCRB", Sans-Serif'}},e));const t=l[l.length-1];if(l.filter((t=>t.id===e)).length>0)return oe("!! すでに登録済みの資料コードです"),void L.play();if(F.play(),i([...l,{id:e}]),t&&t.title){v.push(`一つ前の本、「${t.title}」から次の本の候補を探します`);const e=await $(t);w(e),e.length>0&&v.push(`候補の本が${e.length}冊みつかりました`)}E([...g,...v])},pe=async e=>{if(!1===Q)return;const t=H(e);t?ce(e,t):ue(e),X(!1),setTimeout((()=>X(!0)),100)},he=e=>{e.preventDefault();const t=e.target.querySelector("input");j(t.value),ne(!0);var a=t.getBoundingClientRect();a.top,window.pageYOffset;var s=a.left+window.pageXOffset,n=a.bottom+window.pageYOffset;a.right,window.pageXOffset;const l=document.querySelector(".suggest");l.style.top=`${n}px`,l.style.left=`${s}px`,l.style.width=a.right-a.left+"px"},me=e=>{let t="";e.pubdate&&(t="string"!=typeof e.pubdate?e.pubdate:e.pubdate.replace(/[^0-9０-９]+/,"")),de({title:e.title,author:e.author,publisher:e.publisher,pubdate:t.toString(),isbn:e.isbn,source:e.source})},de=(e,t=!1)=>{if(""===e.title)return oe("タイトルは必須です"),L.play(),!1;const a=[...l],s=a[a.length-1];s.title=e.title,s.author=e.author,s.publisher=e.publisher,s.pubdate=e.pubdate,s.cover=""!==e.isbn?"https://calil.jp/cover/"+e.isbn:"",s.isbn=e.isbn,s.tags=[],s.bibHash=P(r(r({},s),e)),s.price="",s.cCode="",s.source=t?"user":e.source,i(a),B({title:"",author:"",publisher:"",pubdate:"",isbn:""}),Y&&M(`${e.title}を追加`),v.push(`「${e.title}」を追加`),E([...g,...v])},be=u.exports.useRef(null);let ve;u.exports.useEffect((()=>{if(be.current){const e=be.current;e.scrollTop=e.scrollHeight}}),[g]),u.exports.useEffect((()=>{ve&&clearTimeout(ve),ve=setTimeout((()=>{ie({show:!1,message:""})}),6e3)}),[le]);const ge=u.exports.useRef(null);return u.exports.useEffect((()=>{const e=setInterval((()=>{ge.current&&(ge.current.style.display="none",setTimeout((()=>{ge.current.style.display="inline"}),500))}),1e3);return()=>{clearInterval(e)}}),[!0]),h.createElement("div",{id:"index"},h.createElement(k,{isOpen:le.show,onClose:()=>ie({show:!1,message:""}),hasBackdrop:!1},h.createElement("div",{className:"bp3-card bp3-elevation-4 bp3-overlay-content alert-message"},h.createElement(x,{icon:"tick",size:25,color:"#000000"}),le.message)),h.createElement(k,{isOpen:G,onClose:()=>ee(!1),hasBackdrop:!0},h.createElement("div",{className:"bp3-card bp3-elevation-4 bp3-overlay-content settings-overlay"},h.createElement("div",{className:"settings"},h.createElement("h3",null,"設定"),"speechSynthesis"in window?h.createElement(N,{checked:Y,label:"読み上げ",onChange:()=>K(!Y)}):null,h.createElement("br",null),h.createElement("hr",null),h.createElement("br",null),l.length>0?h.createElement(C,{icon:"download",onClick:()=>((e,t)=>{const a=new Date;t+=`_${a.getFullYear()}${a.getMonth()+1}${a.getDate()}.json`;const s=new Blob([JSON.stringify(e,null,"  ")],{type:"application/json"}),n=URL.createObjectURL(s),l=document.createElement("a");l.href=n,l.download=t,l.click(),URL.revokeObjectURL(n)})({mode:c,rowList:l},"keichanData_"+e),style:{marginRight:"0.5rem"}},"JSONで保存"):null,h.createElement(C,{icon:"upload",onClick:()=>{document.querySelector('input[type="file"]').click()}},"JSONを読み込み"),h.createElement("input",{type:"file",accept:"application/json",onChange:e=>{for(var t,a=e.target.files,s=0;t=a[s];s++){if(!t.type.match("application/json"))continue;const e=new FileReader;e.onload=e=>{const t=JSON.parse(e.target.result);if(void 0===t.rowList||void 0===t.mode)return oe("JSONファイルの形式が異なっています"),void L.play();t.rowList.map((e=>{void 0===e.pubdate&&(e.pubdate=""),void 0===e.source&&(e.source="openBD")})),i(t.rowList),p(t.mode)},e.readAsText(t)}},style:{display:"none"}}),h.createElement("br",null),h.createElement("br",null),h.createElement(C,{icon:"cross",onClick:()=>ee(!1)},"閉じる")))),h.createElement("header",null,h.createElement("div",null),h.createElement("h1",null,"カーリルtoolbox: keichan"),h.createElement("div",null,h.createElement("label",{htmlFor:""},"モード:"),h.createElement("span",{className:"modes"},h.createElement("span",{className:"mode isbn"+("isbn"===c?" active":""),onClick:()=>{p("isbn"),E([...g,"モードをISBNに変更しました","バーコードをスキャンしてください"])}},"ISBN"),h.createElement("span",{className:"mode management"+("management"===c?" active":""),onClick:()=>{p("management"),E([...g,"モードを資料コードに変更しました","資料コードのバーコードをスキャンしてください"])}},"資料コード")),l.length>0?h.createElement(C,{icon:"download",onClick:()=>((e,t)=>{const a=O.utils.book_new();a.Props={Title:"",Subject:"",Author:"",CreatedDate:new Date},a.SheetNames.push("蔵書データ");const s=[];s.push(["id","タイトル","著者","出版社","発売日","ISBN","タグ","価格","Cコード"]),e.map((e=>{e.isbn&&s.push([e.id,e.title,e.author,e.publisher,e.pubdate,e.isbn,e.tags.join(","),e.price,e.cCode])}));const n=O.utils.aoa_to_sheet(s);a.Sheets["蔵書データ"]=n;const l=O.write(a,{bookType:"xlsx",type:"binary"});T.exports.saveAs(new Blob([function(e){const t=new ArrayBuffer(e.length),a=new Uint8Array(t);for(let s=0;s<e.length;s++)a[s]=255&e.charCodeAt(s);return t}(l)],{type:"application/octet-stream"}),t+".xlsx")})(l,e)},"Excelで保存"):null,h.createElement(C,{className:"settingsButton",icon:"cog",onClick:()=>ee(!0)},"設定"))),h.createElement("main",null,h.createElement("div",{className:"main"},0===l.length?h.createElement("div",{className:"description"},h.createElement("div",null,h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},h.createElement("path",{d:"M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"})),"isbn"===c?"バーコードをスキャンしてください":"資料コードのバーコードをスキャンしてください")):null,l.slice().reverse().map(((e,t)=>h.createElement("div",{key:"row"+t},h.createElement(m,{key:"managementCode",className:"card active",interactive:!1,elevation:d.TWO},h.createElement("span",{className:"document"},h.createElement("span",{className:"documentHeader"},"資料コード"),h.createElement("span",{className:"documentCode"},e.id)),h.createElement(x,{icon:"delete",size:25,color:"#ffffff",onClick:()=>{return t=e.id,void i(l.filter((e=>e.id!==t)));var t}})),h.createElement("div",{className:"linkedData"},e.isbn?h.createElement(m,{key:e.bibHash+e.isbn,className:"card indent",interactive:!1,elevation:d.TWO},h.createElement("div",{className:"flex"},h.createElement("span",{className:"isbn"},h.createElement("span",{className:"isbnHeader"},"ISBN"),h.createElement("span",{className:"isbnCode"},e.isbn)))):null,e.title?h.createElement(m,{key:e.bibHash,className:"card indent",interactive:!1,elevation:d.TWO},h.createElement("div",{className:"flex"},e.cover?h.createElement("img",{className:"thumbnail",src:e.cover,alt:""}):null,h.createElement("div",null,h.createElement("h3",null,e.title),h.createElement("p",{className:"author"},e.author),e.tags.map((e=>h.createElement(b,{key:e},e))))),e.id!==W.id?h.createElement(x,{icon:"edit",size:25,color:"#ffffff",onClick:()=>Z({id:e.id,title:e.title,author:e.author,publisher:e.publisher,pubdate:e.pubdate,isbn:e.isbn})}):h.createElement(S,{helperText:"",label:"書誌情報を編集",labelFor:"text-input",labelInfo:""},h.createElement(z,{className:"title",small:!0,placeholder:"タイトル",value:W.title,onChange:e=>Z(o(r({},W),{title:e.target.value}))}),h.createElement(z,{className:"author",small:!0,placeholder:"著者名",value:W.author,onChange:e=>Z(o(r({},W),{author:e.target.value}))}),h.createElement(z,{className:"publisher",small:!0,placeholder:"出版社",value:W.publisher,onChange:e=>Z(o(r({},W),{publisher:e.target.value}))}),h.createElement(z,{className:"pubdate",small:!0,placeholder:"出版日(20211010)",value:W.pubdate,onChange:e=>Z(o(r({},W),{pubdate:e.target.value}))}),h.createElement(z,{className:"isbn",small:!0,placeholder:"ISBN",value:W.isbn,onChange:e=>Z(o(r({},W),{isbn:e.target.value}))}),h.createElement(C,{icon:"edit",onClick:()=>(e=>{if(""===e.title)return oe("タイトルは必須です"),L.play(),!1;const t=[...l],a=t.find((t=>t.id===e.id));a&&(a.title=e.title,a.author=e.author,a.publisher=e.publisher,a.pubdate=e.pubdate,a.cover=""!==e.isbn?"https://calil.jp/cover/"+e.isbn:"",a.isbn=e.isbn,a.tags=[],a.bibHash=P(r(r({},a),e)),a.price="",a.cCode="",a.source="user",i(t),Z({id:"",title:"",author:"",publisher:"",pubdate:"",isbn:""}),Y&&M(`${e.title}を編集`),v.push(`「${e.title}」を編集`),E([...g,...v]))})(W)},"編集"))):null,void 0===e.title&&te?h.createElement(m,{className:"card indent",style:{height:"120px"},interactive:!1,elevation:d.TWO},h.createElement("div",{className:"placeholder"},h.createElement("div",{className:"placeholder-line title"}),h.createElement("div",{className:"placeholder-line"}),h.createElement("div",{className:"placeholder-line"}),h.createElement("div",{className:"placeholder-line"}),h.createElement("div",{className:"placeholder-line"}))):null),"management"===c&&void 0===e.isbn?h.createElement(h.Fragment,null,h.createElement("div",{className:"description"},h.createElement("div",null,h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},h.createElement("path",{d:"M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"})),"紐つけるバーコードをスキャンしてください")),l.length>1&&y.length>0?h.createElement("div",{className:"nextBook"},h.createElement("h2",null,"もしかして",h.createElement("span",null,"(",l[l.length-2].title,"より推定)")),h.createElement("div",{className:"cards"},y.slice(0,4).map((e=>h.createElement(I,{book:e,key:e.isbn}))))):null,h.createElement("div",{className:"addMore"},h.createElement("h3",null,"バーコードのない本を追加"),h.createElement("form",{action:"",onSubmit:he},h.createElement("div",{className:"bp3-input-group modifier"},h.createElement("span",{className:"bp3-icon bp3-icon-search"}),h.createElement("input",{className:"bp3-input",type:"search",placeholder:"キーワード or ISBNで探す",dir:"auto"}))),h.createElement("div",{className:se?"show_suggest":"hide_suggest"},h.createElement(R,{region:"recipe",open:me,query:V})),h.createElement(S,{helperText:"",label:"書誌情報を自分で入力",labelFor:"text-input",labelInfo:""},h.createElement(z,{className:"title",small:!0,placeholder:"タイトル",value:D.title,onChange:e=>B(o(r({},D),{title:e.target.value}))}),h.createElement(z,{className:"author",small:!0,placeholder:"著者名",value:D.author,onChange:e=>B(o(r({},D),{author:e.target.value}))}),h.createElement(z,{className:"publisher",small:!0,placeholder:"出版社",value:D.publisher,onChange:e=>B(o(r({},D),{publisher:e.target.value}))}),h.createElement(z,{className:"pubdate",small:!0,placeholder:"出版日(20211010)",value:D.pubdate,onChange:e=>B(o(r({},D),{pubdate:e.target.value}))}),h.createElement(z,{className:"isbn",small:!0,placeholder:"ISBN",value:D.isbn,onChange:e=>B(o(r({},D),{isbn:e.target.value}))}),h.createElement(C,{icon:"plus",onClick:()=>de(D,!0)},"追加")))):null)))),h.createElement("div",{className:"debug"},h.createElement("div",{className:"logs",ref:be},g.map(((e,t)=>h.createElement("div",{key:"log"+t},e)))),h.createElement("div",{className:"cmd"},"> ",h.createElement("span",{ref:ge},"_")))))};V.render(h.createElement(W,null),document.getElementById("app"));
