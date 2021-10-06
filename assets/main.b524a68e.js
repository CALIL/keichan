var e=Object.defineProperty,t=(t,n,s)=>(((t,n,s)=>{n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s})(t,"symbol"!=typeof n?n+"":n,s),s);import("data:text/javascript;base64,Cg==");import{r as n,J as s,R as a,C as l,E as i,T as r,a as o,u as c,l as m,s as u,h,O as p,I as d,S as b,B as f,X as v,F as y,b as g}from"./vendor.6409ed4e.js";const E=e=>{const t=e.book,o=n.exports.useRef(null);return n.exports.useEffect((()=>{s(o.current,t.isbn,{format:"codabar",width:1.25,height:26,margin:10,fontSize:12})}),[]),a.createElement(l,{key:t.isbn,className:"card",interactive:!0,elevation:i.TWO},a.createElement("div",{className:"card-header"},t.cover?a.createElement("img",{src:t.cover,alt:t.title}):null,a.createElement("div",null,a.createElement("h3",null,[t.title,t.volume].join(" ")),a.createElement("p",{className:"author"},t.author),t.tags.map((e=>a.createElement(r,{key:e},e))))),a.createElement("svg",{ref:o,xmlns:"http://www.w3.org/2000/svg",version:"1.1"}))},w=["free","title","author","publisher","isbn","ndc","year_start","year_end","region"];function k(e){return o.get("https://unitrad.calil.jp/v1/"+e)}class x{constructor(e,n){t(this,"callback"),t(this,"killed"),t(this,"data"),this.callback=n,this.killed=!1,this.search(e)}kill(){this.killed=!0}search(e){this.killed||k("search").query(function(e){let t={};for(let n of w)e.hasOwnProperty(n)&&""!==e[n]&&(t[n]=e[n]);return t}(e)).end(((t,n)=>{t?setTimeout((()=>this.search(e)),1e3):this.receive(n.body)}))}polling(){this.killed||k("polling").query({uuid:this.data.uuid,version:this.data.version,diff:1,timeout:10}).end(((e,t)=>{null===t.body?setTimeout((()=>this.polling()),100):this.receive(t.body)}))}receive(e){if(!this.killed){if(e.books_diff){Array.prototype.push.apply(this.data.books,e.books_diff.insert);for(let t in e)e.hasOwnProperty(t)&&"books_diff"!==t&&(this.data[t]=e[t]);for(let t of e.books_diff.update)for(let e in t)if(t.hasOwnProperty(e)&&"_idx"!==e)if(!0===Array.isArray(t[e]))Array.prototype.push.apply(this.data.books[t._idx][e],t[e]);else if(t[e]instanceof Object)for(let n in t[e])t[e].hasOwnProperty(n)&&(this.data.books[t._idx][e][n]=t[e][n]);else this.data.books[t._idx][e]=t[e]}else this.data=e;this.callback(this.data),!0===e.running?(console.log("[Unitrad] continue..."),1===e.version&&0===this.data.books.length?setTimeout((()=>this.polling()),20):setTimeout((()=>this.polling()),500)):console.log("[Unitrad] complete.")}}}function S(e){e=c.nfkc(e).toUpperCase().replace(/[^0-9X]/g,"");let t=m.parse(e);if(t){if(t.isIsbn10())return t.asIsbn10();if(t.isIsbn13()){return t.asIsbn13().startsWith("978")?t.asIsbn10():t.asIsbn13()}}else{let t=m.parse("978"+e);if(t&&t.isIsbn13())return t.asIsbn10()}return!1}const z=async e=>{const t=e.author.split(",")[0],n=e.publisher,s=e.pubdate;return new Promise((async(a,l)=>{let i=new x({author:t,publisher:n,year_start:s,region:"recipe"},(async t=>{if(!i.killed&&(t.count>5&&i.kill(),console.log(t),t.count>=1)){const n=[];t.books.forEach((e=>{if(null===e.isbn)return;let t=0;e.pubdate&&(t="string"!=typeof e.pubdate?e.pubdate:Number(e.pubdate.split("/")[0].split(".")[0]));let s=m.parse(S(e.isbn)),a=null;s&&(a=s.asIsbn13()),a&&n.push({title:e.title+" "+e.volume,author:e.author.split(",")[0],publisher:e.publisher,isbn:a,pubdate:t,source:"unitrad"})})),n.sort((function(e,t){return e.isbn<t.isbn?-1:e.isbn>t.isbn?1:0}));let s=[];const l=[];let i=!1;n.forEach((t=>{t.isbn!==e.isbn&&(i?s.push(t):l.push(t)),t.isbn===e.isbn&&(i=!0)})),s=s.concat(l);const r=[];s.forEach((e=>{r.push(e.isbn)}));const o=await N(r);a(o)}}))}))},N=async e=>new Promise((async(t,n)=>{const s=await fetch("https://api.openBD.jp/v1/get?isbn="+e.join(",")).then((e=>e.json())),a=[];s.forEach((e=>{if(e){const t=[];try{e.onix.DescriptiveDetail.Collection.TitleDetail.TitleElement.forEach(((e,n)=>{t.includes(e.TitleText.content)||t.push(e.TitleText.content)}))}catch{}let n=e.summary.volume;try{""===n&&(n=e.onix.DescriptiveDetail.TitleDetail.TitleElement.PartNumber.split(";")[0],e.summary.title.match(n)&&(n=""))}catch{}let s="";try{e.onix.ProductSupply.SupplyDetail.Price.some((e=>{"JPY"===e.CurrencyCode&&(s=e.PriceAmount)}))}catch{}let l="";try{e.onix.DescriptiveDetail.Subject.some((e=>{"78"===e.SubjectSchemeIdentifier&&(l=e.SubjectCode)}))}catch{}const i={title:[e.summary.title,n].join(" "),author:e.summary.author,publisher:e.summary.publisher,isbn:e.summary.isbn,pubdate:e.summary.pubdate,cover:e.summary.cover,tags:t,price:s,cCode:l,source:"opendBD"};i.bibHash=C(i),a.push(i)}})),t(a)})),C=e=>u(e.id+e.title+e.author+e.publisher+e.isbn);let V=new h.Howl({src:["./audio/safety.mp3"],autoplay:!1,loop:!1,volume:1,onend:function(){console.log("Finished!")}}),T=new h.Howl({src:["./audio/error.mp3"],autoplay:!1,loop:!1,volume:.7,onend:function(){console.log("Finished!")}}),O="",D=null,_=null;const j=e=>{if("speechSynthesis"in window){const t=new SpeechSynthesisUtterance(e);t.rate=1.5,speechSynthesis.speak(t)}},B=()=>{const[e,t]=n.exports.useState("gk-xxxxxxxxxxxxxxx");let s=[],o="isbn";const c=localStorage.getItem("keichanData_"+e);if(c){const e=JSON.parse(c);e.rowList.map((e=>{void 0===e.source&&(e.source="openBD")})),s=e.rowList,s.length>0&&(o=e.mode)}const[u,h]=n.exports.useState(s),[g,w]=n.exports.useState(o),k=[];0===u.length?k.push("バーコードをスキャンしてください"):u[u.length-1].title?k.push("資料コードをスキャンしてください"):k.push("紐つけるバーコードをスキャンしてください");const[B,I]=n.exports.useState(k),[H,A]=n.exports.useState([]),[R,$]=n.exports.useState(!0),[P,L]=n.exports.useState(!0),[F,J]=n.exports.useState(!1),[U,Z]=n.exports.useState({show:!1,message:""});n.exports.useEffect((()=>{localStorage.setItem("keichanData_"+e,JSON.stringify({mode:g,rowList:u}))}),[u,g]);const W=e=>((e,t)=>{console.log("onKeyDown");const n=(new Date).getTime(),s=n-_;_=n;const a=e||window.event,l=a.keyCode||a.which||a.charCode;"Enter"===e.key||13===l?(s<100&&t(O),D&&clearTimeout(D),O=""):(1===e.key.length?O+=e.key:"Shift"===e.key||(O=""),D&&clearTimeout(D),D=setTimeout((()=>{s<100&&t(O),O=""}),300))})(e,M);n.exports.useEffect((()=>(window.addEventListener("keydown",W),()=>{window.removeEventListener("keydown",W)})),[g,u,R,B,P]);const q=(e,t=null)=>{Z({show:!0,message:e.replace("!! ","")}),I([...B,a.createElement(a.Fragment,null,t?a.createElement(a.Fragment,null,a.createElement("span",{style:{fontFamily:'"Conv_OCRB", Sans-Serif'}},t),a.createElement("br",null)):null,e.match(/!!/)?a.createElement("span",{style:{color:"red"}},"!! "):null,a.createElement("span",null,e.replace("!! ","")))])},M=async e=>{const t=[];if(!1===R)return;const n=S(e);if(n){if(t.push("ISBNのバーコードが読まれました"),t.push(a.createElement("span",{style:{fontFamily:'"Conv_OCRB", Sans-Serif'}},e)),A([]),e.match(/^[a-zA-Z](\d+)[a-zA-Z]$/)&&(e=RegExp.$1,t.push("codabarの制御コードを検出しました")),"management"===g&&u.length>0){const e=[...u],t=e[e.length-1];if(!t||t.isbn)return q("次は資料コードのバーコードを読んでください"),void T.play();{let s=m.parse(n);s&&(t.isbn=s.asIsbn13()),h(e)}}V.play();const s=await(async e=>new Promise((async(t,n)=>{const s=new x({isbn:e,region:"recipe"},(async e=>{if(e.count>=1){s.kill();const n=e.books[0],a={id:n.id,title:n.title,author:n.author,publisher:n.publisher,pubdate:n.pubdate,isbn:n.isbn,tags:[],price:"",cCode:"",source:"unitrad"};a.bibHash=C(a);let l=m.parse(S(a.isbn));l&&(a.isbn=l.asIsbn13());const i=await N([a.isbn]);i.length>0?(i[0].id=a.id,t(i[0])):t(a)}else!1===e.running&&0===e.count&&n()}))})))(n).catch((()=>(e=>{const t=[...u];t.forEach(((t,n)=>{S(t.isbn)===e&&(t.title="",t.author="",t.publisher="",t.cover="",t.tags=[],t.bibHash="",t.price="",t.cCode="",t.source="")})),h(t),T.play(),q("!! 本が見つかりませんでした。書誌データは追加されません")})(n)));if(s)if(t.push("本が見つかりました！"),"isbn"===g){s.id=s.isbn,h([...u,s]),P?j(`${s.title}を追加`):t.push(`「${s.title}」を追加`);const e=u[u.length-1];if(e&&e.title){t.push(`一つ前の本、「${e.title}」から次の本の候補を探します`);const n=await z(e);A(n),n.length>0&&t.push(`候補の本が${n.length}冊みつかりました`)}}else if("management"===g){const e=[...u];e.forEach(((e,t)=>{S(e.isbn)===n&&(e.title=s.title,e.author=s.author,e.publisher=s.publisher,e.cover=s.cover,e.isbn=s.isbn,e.tags=s.tags,e.bibHash=s.bibHash,e.price=s.price,e.cCode=s.cCode,e.source=s.source)})),h(e),P&&j(`${s.title}を追加`)}}else{if(!1===(e=>e.length>20?(q("資料コードが長すぎます。バーコードの連続読み取りと判断して、処理しません",e),T.play(),!1):null!==e.match(/^192/)?(q("192で始まるバーコードのため、書籍JANコード(下段)と判断して、処理しません",e),T.play(),!1):null!==e.match(/^491/)?(q("491で始まるバーコードのため、雑誌コードと判断して、処理しません",e),T.play(),!1):null===e.match(/[a-zA-Z0-9]+/)?(k.push("英数字以外のキーが入力されました。処理しません"),I([...B,...k]),!1):!e.match(/^[a-zA-Z]*$/)||(k.push("英字のみが入力されました。処理しません"),I([...B,...k]),!1))(e))return;e.match(/^[a-zA-Z](\d+)[a-zA-Z]$/)&&(e=RegExp.$1,t.push("codabarの制御コードを検出しました")),"isbn"===g&&(w("management"),t.push("資料コードが読み込まれたため、資料コード用のモードに切り替えます")),t.push(a.createElement("span",{style:{fontFamily:'"Conv_OCRB", Sans-Serif'}},e));const n=u[u.length-1];if(u.filter((t=>t.id===e)).length>0)return q("!! すでに登録済みの資料コードです"),void T.play();if(V.play(),h([...u,{id:e}]),n&&n.title){t.push(`一つ前の本、「${n.title}」から次の本の候補を探します`);const e=await z(n);A(e),e.length>0&&t.push(`候補の本が${e.length}冊みつかりました`)}}I([...B,...t]),$(!1),setTimeout((()=>$(!0)),100)},X=e=>{if("isbn"===g&&h([...u.filter((t=>t.id!==e))]),"management"===g){const t=[];u.forEach((n=>{n.id===e?t.push({id:n.id}):t.push(n)})),h([...t])}},Y=n.exports.useRef(null);let K;n.exports.useEffect((()=>{if(Y.current){const e=Y.current;e.scrollTop=e.scrollHeight}}),[B]),n.exports.useEffect((()=>{K&&clearTimeout(K),K=setTimeout((()=>{Z({show:!1,message:""})}),6e3)}),[U]);const G=n.exports.useRef(null);return n.exports.useEffect((()=>{const e=setInterval((()=>{G.current&&(G.current.style.display="none",setTimeout((()=>{G.current.style.display="inline"}),500))}),1e3);return()=>{clearInterval(e)}}),[!0]),a.createElement("div",{id:"index"},a.createElement(p,{isOpen:U.show,onClose:()=>Z({show:!1,message:""}),hasBackdrop:!1},a.createElement("div",{className:"bp3-card bp3-elevation-4 bp3-overlay-content alert-message"},a.createElement(d,{icon:"tick",size:25,color:"#000000"}),U.message)),a.createElement(p,{isOpen:F,onClose:()=>J(!1),hasBackdrop:!0},a.createElement("div",{className:"bp3-card bp3-elevation-4 bp3-overlay-content settings-overlay"},a.createElement("div",{className:"settings"},a.createElement("h3",null,"設定"),"speechSynthesis"in window?a.createElement(b,{checked:P,label:"読み上げ",onChange:()=>L(!P)}):null,a.createElement("br",null),a.createElement("br",null),u.length>0?a.createElement(f,{icon:"download",onClick:()=>((e,t)=>{const n=new Date;t+=`_${n.getFullYear()}${n.getMonth()+1}${n.getDate()}.json`;const s=new Blob([JSON.stringify(e,null,"  ")],{type:"application/json"}),a=URL.createObjectURL(s),l=document.createElement("a");l.href=a,l.download=t,l.click(),URL.revokeObjectURL(a)})({mode:g,rowList:u},"keichanData_"+e),style:{marginRight:"0.5rem"}},"JSONで保存"):null,a.createElement(f,{icon:"upload",onClick:()=>{document.querySelector('input[type="file"]').click()}},"JSONを読み込み"),a.createElement("input",{type:"file",accept:"application/json",onChange:e=>{for(var t,n=e.target.files,s=0;t=n[s];s++){if(!t.type.match("application/json"))continue;const e=new FileReader;e.onload=e=>{const t=JSON.parse(e.target.result);if(void 0===t.rowList||void 0===t.mode)return q("JSONファイルの形式が異なっています"),void T.play();t.rowList.map((e=>{void 0===e.source&&(e.source="openBD")})),h(t.rowList),w(t.mode)},e.readAsText(t)}},style:{display:"none"}}),a.createElement("br",null),a.createElement("br",null),a.createElement(f,{icon:"cross",onClick:()=>J(!1)},"閉じる")))),a.createElement("header",null,a.createElement("div",null),a.createElement("h1",null,"カーリルtoolbox: keichan","management"===g?a.createElement("span",{className:"mode"},"資料コード"):null),a.createElement("div",null,u.length>0?a.createElement(f,{icon:"download",onClick:()=>((e,t)=>{const n=v.utils.book_new();n.Props={Title:"",Subject:"",Author:"",CreatedDate:new Date},n.SheetNames.push("蔵書データ");const s=[];s.push(["id","タイトル","著者","出版社","ISBN","タグ","価格","Cコード"]),e.map((e=>{e.isbn&&s.push([e.id,e.title,e.author,e.publisher,e.isbn,e.tags.join(","),e.price,e.cCode])}));const a=v.utils.aoa_to_sheet(s);n.Sheets["蔵書データ"]=a;const l=v.write(n,{bookType:"xlsx",type:"binary"});y.exports.saveAs(new Blob([function(e){const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let s=0;s<e.length;s++)n[s]=255&e.charCodeAt(s);return t}(l)],{type:"application/octet-stream"}),t+".xlsx")})(u,e)},"Excelで保存"):null,a.createElement(f,{className:"settingsButton",icon:"cog",onClick:()=>J(!0)},"設定"))),a.createElement("main",null,a.createElement("div",{className:"main"},0===u.length?a.createElement("div",{className:"description"},a.createElement("div",null,a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a.createElement("path",{d:"M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"})),"バーコードをスキャンしてください")):null,u.slice().reverse().map(((e,t)=>a.createElement("div",{key:"row"+t},"management"===g?a.createElement(l,{key:"managementCode",className:"card active",interactive:!1,elevation:i.TWO},a.createElement("span",{className:"document"},a.createElement("span",{className:"documentHeader"},"資料コード"),a.createElement("span",{className:"documentCode"},e.id)),a.createElement(d,{icon:"delete",size:25,color:"#ffffff",onClick:()=>{return t=e.id,void h(u.filter((e=>e.id!==t)));var t}})):null,a.createElement("div",{className:"linkedData"},e.isbn?a.createElement(l,{key:e.bibHash+e.isbn,className:"card indent",interactive:!1,elevation:i.TWO},a.createElement("div",null,a.createElement("span",{className:"isbn"},a.createElement("span",{className:"isbnHeader"},"ISBN"),a.createElement("span",{className:"isbnCode"},e.isbn))),a.createElement(d,{icon:"delete",size:25,color:"#ffffff",onClick:()=>X(e.id)})):null,e.title?a.createElement(l,{key:e.bibHash,className:"card indent",interactive:!1,elevation:i.TWO},a.createElement("div",null,e.cover?a.createElement("img",{className:"thumbnail",src:e.cover,alt:""}):null,a.createElement("div",null,a.createElement("h3",null,e.title),a.createElement("p",{className:"author"},e.author),e.tags.map((e=>a.createElement(r,{key:e},e))))),a.createElement(d,{icon:"delete",size:25,color:"#ffffff",onClick:()=>X(e.id)})):null),"management"===g&&void 0===e.isbn?a.createElement(a.Fragment,null,a.createElement("div",{className:"description"},a.createElement("div",null,a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a.createElement("path",{d:"M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"})),"紐つけるバーコードをスキャンしてください")),u.length>1&&H.length>0?a.createElement("div",{className:"nextBook"},a.createElement("h2",null,"もしかして",a.createElement("span",null,"(",u[u.length-2].title,"より推定)")),a.createElement("div",{className:"cards"},H.slice(0,5).map((e=>a.createElement(E,{book:e,key:e.isbn}))))):null):null)))),a.createElement("div",{className:"debug"},a.createElement("div",{className:"logs",ref:Y},B.map(((e,t)=>a.createElement("div",{key:"log"+t},e)))),a.createElement("div",{className:"cmd"},"> ",a.createElement("span",{ref:G},"_")))))};g.render(a.createElement(B,null),document.getElementById("app"));
