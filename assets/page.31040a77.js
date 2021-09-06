import("data:text/javascript;base64,Cg==");import{n as e,a as t}from"./api.7c92b4a2.js";import{r as s,R as n,O as a,c as l,C as i,E as r,T as c,l as o,a as m}from"./vendor.4ba88960.js";let h="",u=null;const p=()=>{const[m,p]=s.exports.useState([]),[v,b]=s.exports.useState(null),[d,E]=s.exports.useState([]),[g,f]=s.exports.useState(null),[x,z]=s.exports.useState([]);s.exports.useState("gk-xxxxxxxxxxxxxxx");const[w,y]=s.exports.useState("isbn"),[V,k]=s.exports.useState(!0),[N,T]=s.exports.useState({show:!1,message:""}),H=e=>((e,t)=>{const s=e||window.event,n=s.keyCode||s.which||s.charCode;"Enter"===e.key||13===n?(t(h),u&&clearTimeout(u),h=""):(1===e.key.length?h+=e.key:"Shift"===e.key||(h=""),u&&clearTimeout(u),u=setTimeout((()=>{t(h),h=""}),300))})(e,B);s.exports.useEffect((()=>(window.addEventListener("keydown",H),()=>{window.removeEventListener("keydown",H)})),[w,m,V,d]),s.exports.useEffect((()=>{const e=m[m.length-1];b(e)}),[m]);const S=s.exports.useRef(null);s.exports.useEffect((()=>{if(S.current){const e=S.current;console.log(e),e.scrollTop=e.scrollHeight}}),[d]),s.exports.useEffect((()=>{setTimeout((()=>{T({show:!1,message:""})}),5e3)}),[N]);const B=async t=>{const s=[];if(!1===V)return;const n=e(t);if(n){s.push("本のバーコードが読まれました。"),s.push(t);const e=await C(n);if(e)if(s.push("本が見つかりました！"),"isbn"===w){e.id=e.isbn,p([...m,e]);const t=m[m.length-1];if(t&&t.title){s.push(`一つ前の本、「${t.title}」から次の本の候補を探します。`),f(t);const e=await $(t);z(e),e.length>0&&s.push(`候補の本が${e.length}冊みつかりました。`)}}else if("management"===w){const t=[...m],n=t[t.length-1];n&&!n.title?(n.title=e.title,n.author=e.author,n.publisher=e.publisher,n.isbn=e.isbn,n.cover=e.cover,n.tags=e.tags,n.bibHash=e.bibHash,p(t)):(T({show:!0,message:"次は資料コードのバーコードを読んでください。"}),s.push("!! 資料コードのバーコードを読んでください。"))}}else{if(null!==t.match(/^192/))return s.push("192で始まるバーコードのため、書籍JANコード(下段)と判断して、処理しません。"),void E([...d,...s]);if(null===t.match(/[a-zA-Z0-9]+/))return s.push("英数字以外のキーが入力されました。処理しません。"),void E([...d,...s]);t.match(/^[a-zA-Z](\d+)[a-zA-Z]$/)&&(t=RegExp.$1,s.push("codabarの制御コードを検出しました。")),"isbn"===w&&(y("management"),s.push("資料コードが読み込まれたため、資料コード用のモードに切り替えます。")),s.push(t);const e=m[m.length-1];if(e&&!e.title)return e.id=t,p([...m]),s.push("! 別の資料コードが読み込まれたので、新しい資料コードに変更しました。"),void E([...d,...s]);if(m.filter((e=>e.id===t)).length>0)return T({show:!0,message:"すでに登録済みの資料コードです"}),s.push("!! すでに登録済みの資料コードです"),void E([...d,...s]);if(p([...m,{id:t}]),e&&e.title){s.push(`一つ前の本、「${e.title}」から次の本の候補を探します。`),f(e);const t=await $(e);z(t),t.length>0&&s.push(`候補の本が${t.length}冊みつかりました。`)}}E([...d,...s]),k(!1),setTimeout((()=>k(!0)),100)},j=e=>e.isbn,C=async s=>(f(null),z([]),new Promise((async(n,a)=>{const l=new t({isbn:s,region:"recipe"},(async t=>{if(t.count>=1){l.kill();const s=t.books[0],a={id:s.id,title:s.title,author:s.author,publisher:s.publisher,pubdate:s.pubdate,isbn:s.isbn,tags:[]};a.bibHash=j(a);let i=o.parse(e(a.isbn));a.isbn=i.asIsbn13();const r=await D([a.isbn]);null!==r[0]?n(r[0]):n(a)}else!1===t.running&&0===t.count&&a()}))}))),$=async s=>{const n=s.author.split(",")[0],a=s.publisher,l=s.pubdate;return new Promise((async(i,r)=>{let c=new t({author:n,publisher:a,year_start:l,region:"recipe"},(async t=>{if(!c.killed&&(t.count>5&&c.kill(),console.log(t),t.count>=1)){const n=[];t.books.forEach((t=>{if(null===t.isbn)return;let s=0;t.pubdate&&(s="string"!=typeof t.pubdate?t.pubdate:Number(t.pubdate.split("/")[0].split(".")[0]));let a=o.parse(e(t.isbn)),l=null;try{l=a.asIsbn13()}catch{}l&&n.push({title:t.title+" "+t.volume,author:t.author.split(",")[0],publisher:t.publisher,isbn:l,pubdate:s})})),n.sort((function(e,t){return e.isbn<t.isbn?-1:e.isbn>t.isbn?1:0}));let a=[];const l=[];let r=!1;n.forEach((e=>{e.isbn!==s.isbn&&(r?a.push(e):l.push(e)),e.isbn===s.isbn&&(r=!0)})),a=a.concat(l);const c=[];a.forEach((e=>{c.push(e.isbn)}));const m=await D(c);i(m)}}))}))},D=async e=>new Promise((async(t,s)=>{const n=await fetch("https://api.openBD.jp/v1/get?isbn="+e.join(",")).then((e=>e.json())),a=[];n.forEach((e=>{if(e){const t=[];try{e.onix.DescriptiveDetail.Collection.TitleDetail.TitleElement.forEach(((e,s)=>{t.includes(e.TitleText.content)||t.push(e.TitleText.content)}))}catch{}let s=e.summary.volume;try{""===s&&(s=e.onix.DescriptiveDetail.TitleDetail.TitleElement.PartNumber)}catch{}const n={title:[e.summary.title,s].join(" "),author:e.summary.author,publisher:e.summary.publisher,isbn:e.summary.isbn,pubdate:e.summary.pubdate,cover:e.summary.cover,tags:t};n.bibHash=j(n),a.push(n)}})),t(a)}));return n.createElement("div",{id:"debug"},n.createElement(a,{isOpen:N.show,onClose:()=>T({show:!1,message:""}),hasBackdrop:!1},n.createElement("div",{className:"bp3-card bp3-elevation-4 bp3-overlay-content"},n.createElement(l,{icon:"tick",size:25,color:"#000000"}),N.message)),n.createElement("header",null,n.createElement("h1",null,"カーリルtoolbox: keichan","management"===w?n.createElement("span",{className:"mode"},"資料コード"):null)),n.createElement("main",null,n.createElement("div",{className:"main"},0===m.length||m.length<=1&&m[m.length-1].title?n.createElement("div",{className:"description"},n.createElement("div",null,n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},n.createElement("path",{d:"M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"})),"バーコードをスキャンしてください")):null,m.slice().reverse().map(((e,t)=>n.createElement(n.Fragment,null,"management"===w?n.createElement(i,{key:"managementCode",className:"card active",interactive:!0,elevation:r.TWO},n.createElement("img",{src:`https://img.shields.io/badge/%E8%B3%87%E6%96%99%E3%82%B3%E3%83%BC%E3%83%89-${e.id}-blue`,alt:""}),n.createElement(l,{icon:"delete",size:25,color:"#ffffff"})):null,e.title?n.createElement(i,{key:e.bibHash,className:"card indent",interactive:!0,elevation:r.TWO},n.createElement("div",null,e.cover?n.createElement("img",{className:"thumbnail",src:e.cover,alt:""}):null,n.createElement("div",null,n.createElement("img",{src:`https://img.shields.io/badge/book-${e.isbn}-brightgreen`,alt:""}),n.createElement("h3",null,e.title))),n.createElement(l,{icon:"delete",size:25,color:"#ffffff"})):n.createElement("div",{className:"description"},n.createElement("div",null,n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},n.createElement("path",{d:"M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"})),"紐つけるバーコードをスキャンしてください"))))),g&&x.length>0?n.createElement("div",{className:"nextBook"},n.createElement("h2",null,"もしかして",n.createElement("span",null,"(",g.title,"より推定)")),n.createElement("div",{className:"cards"},x.map((e=>n.createElement(i,{key:e.isbn,className:"card",interactive:!0,elevation:r.TWO},n.createElement("div",{className:"card-header"},e.cover?n.createElement("img",{src:e.cover,alt:e.title}):null,n.createElement("div",null,n.createElement("h3",null,[e.title,e.volume].join(" ")),n.createElement("p",{className:"author"},e.author),e.tags.map((e=>n.createElement(c,null,e))),n.createElement("p",null,e.isbn))),n.createElement(l,{icon:"add",size:25,color:"#ffffff"})))))):null),n.createElement("div",{className:"debug"},n.createElement("div",{className:"logs",ref:S},d.map(((e,t)=>n.createElement("div",{key:"log"+t},e)))))))};m.render(n.createElement(p,null),document.getElementById("app"));
