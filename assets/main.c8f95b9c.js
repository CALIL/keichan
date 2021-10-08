var e=Object.defineProperty,t=(t,n,a)=>(((t,n,a)=>{n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a})(t,"symbol"!=typeof n?n+"":n,a),a);import("data:text/javascript;base64,Cg==");import{r as n,J as a,R as s,C as l,E as i,T as r,a as o,u as c,l as m,s as h,h as u,O as p,I as d,S as b,B as v,X as f,F as E,b as y}from"./vendor.6409ed4e.js";const g=e=>{const t=e.book,o=n.exports.useRef(null);return n.exports.useEffect((()=>{a(o.current,t.isbn,{format:"codabar",width:1.25,height:26,margin:10,fontSize:12})}),[]),s.createElement(l,{key:t.isbn,className:"card",interactive:!0,elevation:i.TWO},s.createElement("div",{className:"card-header"},t.cover?s.createElement("img",{src:t.cover,alt:t.title}):null,s.createElement("div",null,s.createElement("h3",null,[t.title,t.volume].join(" ")),s.createElement("p",{className:"author"},t.author),t.tags.map((e=>s.createElement(r,{key:e},e))))),s.createElement("svg",{ref:o,xmlns:"http://www.w3.org/2000/svg",version:"1.1"}))},w=["free","title","author","publisher","isbn","ndc","year_start","year_end","region"];function k(e){return o.get("https://unitrad.calil.jp/v1/"+e)}class x{constructor(e,n){t(this,"callback"),t(this,"killed"),t(this,"data"),this.callback=n,this.killed=!1,this.search(e)}kill(){this.killed=!0}search(e){this.killed||k("search").query(function(e){let t={};for(let n of w)e.hasOwnProperty(n)&&""!==e[n]&&(t[n]=e[n]);return t}(e)).end(((t,n)=>{t?setTimeout((()=>this.search(e)),1e3):this.receive(n.body)}))}polling(){this.killed||k("polling").query({uuid:this.data.uuid,version:this.data.version,diff:1,timeout:10}).end(((e,t)=>{null===t.body?setTimeout((()=>this.polling()),100):this.receive(t.body)}))}receive(e){if(!this.killed){if(e.books_diff){Array.prototype.push.apply(this.data.books,e.books_diff.insert);for(let t in e)e.hasOwnProperty(t)&&"books_diff"!==t&&(this.data[t]=e[t]);for(let t of e.books_diff.update)for(let e in t)if(t.hasOwnProperty(e)&&"_idx"!==e)if(!0===Array.isArray(t[e]))Array.prototype.push.apply(this.data.books[t._idx][e],t[e]);else if(t[e]instanceof Object)for(let n in t[e])t[e].hasOwnProperty(n)&&(this.data.books[t._idx][e][n]=t[e][n]);else this.data.books[t._idx][e]=t[e]}else this.data=e;this.callback(this.data),!0===e.running?(console.log("[Unitrad] continue..."),1===e.version&&0===this.data.books.length?setTimeout((()=>this.polling()),20):setTimeout((()=>this.polling()),500)):console.log("[Unitrad] complete.")}}}function N(e){e=c.nfkc(e).toUpperCase().replace(/[^0-9X]/g,"");let t=m.parse(e);if(t){if(t.isIsbn10())return t.asIsbn10();if(t.isIsbn13()){return t.asIsbn13().startsWith("978")?t.asIsbn10():t.asIsbn13()}}else{let t=m.parse("978"+e);if(t&&t.isIsbn13())return t.asIsbn10()}return!1}const S=async e=>{const t=e.author.split(",")[0],n=e.publisher,a=e.pubdate;return new Promise((async(s,l)=>{let i=new x({author:t,publisher:n,year_start:a,region:"recipe"},(async t=>{if(!i.killed&&(t.count>5&&i.kill(),console.log(t),t.count>=1)){const n=[];t.books.forEach((e=>{if(null===e.isbn)return;let t=0;e.pubdate&&(t="string"!=typeof e.pubdate?e.pubdate:Number(e.pubdate.split("/")[0].split(".")[0]));let a=m.parse(N(e.isbn)),s=null;a&&(s=a.asIsbn13()),s&&n.push({title:e.title+" "+e.volume,author:e.author.split(",")[0],publisher:e.publisher,isbn:s,pubdate:t,source:"unitrad"})})),n.sort((function(e,t){return e.isbn<t.isbn?-1:e.isbn>t.isbn?1:0}));let a=[];const l=[];let i=!1;n.forEach((t=>{t.isbn!==e.isbn&&(i?a.push(t):l.push(t)),t.isbn===e.isbn&&(i=!0)})),a=a.concat(l);const r=[];a.forEach((e=>{r.push(e.isbn)}));const o=await z(r);s(o)}}))}))},z=async e=>new Promise((async(t,n)=>{const a=await fetch("https://api.openBD.jp/v1/get?isbn="+e.join(",")).then((e=>e.json())),s=[];a.forEach((e=>{if(e){const t=[];try{e.onix.DescriptiveDetail.Collection.TitleDetail.TitleElement.forEach(((e,n)=>{t.includes(e.TitleText.content)||t.push(e.TitleText.content)}))}catch{}let n=e.summary.volume;try{""===n&&(n=e.onix.DescriptiveDetail.TitleDetail.TitleElement.PartNumber.split(";")[0],e.summary.title.match(n)&&(n=""))}catch{}let a="";try{e.onix.ProductSupply.SupplyDetail.Price.some((e=>{"JPY"===e.CurrencyCode&&(a=e.PriceAmount)}))}catch{}let l="";try{e.onix.DescriptiveDetail.Subject.some((e=>{"78"===e.SubjectSchemeIdentifier&&(l=e.SubjectCode)}))}catch{}const i={title:[e.summary.title,n].join(" "),author:e.summary.author,publisher:e.summary.publisher,isbn:e.summary.isbn,pubdate:e.summary.pubdate,cover:e.summary.cover,tags:t,price:a,cCode:l,source:"opendBD"};i.bibHash=C(i),s.push(i)}})),t(s)})),C=e=>h(e.id+e.title+e.author+e.publisher+e.isbn);let V=new u.Howl({src:["./audio/safety.mp3"],autoplay:!1,loop:!1,volume:1,onend:function(){console.log("Finished!")}}),T=new u.Howl({src:["./audio/error.mp3"],autoplay:!1,loop:!1,volume:.7,onend:function(){console.log("Finished!")}}),O="",D=null,_=null;const j=e=>{if("speechSynthesis"in window){const t=new SpeechSynthesisUtterance(e);t.rate=1.5,speechSynthesis.speak(t)}},B=()=>{const[e,t]=n.exports.useState("gk-xxxxxxxxxxxxxxx");let a=[],o="isbn";const c=localStorage.getItem("keichanData_"+e);if(c){const e=JSON.parse(c);e.rowList.map((e=>{void 0===e.source&&(e.source="openBD")})),a=e.rowList,a.length>0&&(o=e.mode)}const[h,u]=n.exports.useState(a),[y,w]=n.exports.useState(o),k=[];0===h.length?k.push("バーコードをスキャンしてください"):h[h.length-1].title?k.push("資料コードをスキャンしてください"):k.push("紐つけるバーコードをスキャンしてください");const[B,I]=n.exports.useState(k),[H,A]=n.exports.useState([]),[R,$]=n.exports.useState(!0),[P,L]=n.exports.useState(!0),[F,J]=n.exports.useState(!1),[U,W]=n.exports.useState(!1),[Z,q]=n.exports.useState({show:!1,message:""});n.exports.useEffect((()=>{localStorage.setItem("keichanData_"+e,JSON.stringify({mode:y,rowList:h}))}),[h,y]);const M=e=>((e,t)=>{console.log("onKeyDown");const n=(new Date).getTime(),a=n-_;_=n;const s=e||window.event,l=s.keyCode||s.which||s.charCode;"Enter"===e.key||13===l?(a<100&&t(O),D&&clearTimeout(D),O=""):(1===e.key.length?O+=e.key:"Shift"===e.key||(O=""),D&&clearTimeout(D),D=setTimeout((()=>{a<100&&t(O),O=""}),300))})(e,G);n.exports.useEffect((()=>(window.addEventListener("keydown",M),()=>{window.removeEventListener("keydown",M)})),[y,h,R,B,P]);const X=(e,t=null)=>{q({show:!0,message:e.replace("!! ","")}),I([...B,s.createElement(s.Fragment,null,t?s.createElement("div",null,s.createElement("span",{style:{fontFamily:'"Conv_OCRB", Sans-Serif'}},t)):null,e.match(/!!/)?s.createElement("div",null,s.createElement("span",{style:{color:"red"}},"!! ")):null,s.createElement("div",null,s.createElement("span",null,e.replace("!! ",""))))])},Y=async(e,t)=>{const n=[];if(n.push("ISBNのバーコードが読まれました"),n.push(s.createElement("span",{style:{fontFamily:'"Conv_OCRB", Sans-Serif'}},e)),A([]),e.match(/^[a-zA-Z](\d+)[a-zA-Z]$/)&&(e=RegExp.$1,n.push("codabarの制御コードを検出しました")),"management"===y&&h.length>0){const e=[...h],n=e[e.length-1];if(!n||n.isbn)return X("次は資料コードのバーコードを読んでください"),void T.play();{let a=m.parse(t);a&&(n.isbn=a.asIsbn13()),u(e)}}V.play(),W(!0);const a=await(async e=>new Promise((async(t,n)=>{const a=new x({isbn:e,region:"recipe"},(async e=>{if(e.count>=1){a.kill();const n=e.books[0],s={id:n.id,title:n.title,author:n.author,publisher:n.publisher,pubdate:n.pubdate,isbn:n.isbn,tags:[],price:"",cCode:"",source:"unitrad"};s.bibHash=C(s);let l=m.parse(N(s.isbn));l&&(s.isbn=l.asIsbn13());const i=await z([s.isbn]);i.length>0?(i[0].id=s.id,t(i[0])):t(s)}else!1===e.running&&0===e.count&&n()}))})))(t).catch((()=>(e=>{const t=[...h];t.forEach(((t,n)=>{N(t.isbn)===e&&(t.title="",t.author="",t.publisher="",t.cover="",t.tags=[],t.bibHash="",t.price="",t.cCode="",t.source="")})),u(t),T.play(),X("!! 本が見つかりませんでした。書誌データは追加されません")})(t)));if(W(!1),a)if(n.push("本が見つかりました！"),"isbn"===y){a.id=a.isbn,u([...h,a]),P?j(`${a.title}を追加`):n.push(`「${a.title}」を追加`);const e=h[h.length-1];if(e&&e.title){n.push(`一つ前の本、「${e.title}」から次の本の候補を探します`);const t=await S(e);A(t),t.length>0&&n.push(`候補の本が${t.length}冊みつかりました`)}}else if("management"===y){const e=[...h];e.forEach(((e,n)=>{N(e.isbn)===t&&(e.title=a.title,e.author=a.author,e.publisher=a.publisher,e.cover=a.cover,e.isbn=a.isbn,e.tags=a.tags,e.bibHash=a.bibHash,e.price=a.price,e.cCode=a.cCode,e.source=a.source)})),u(e),P&&j(`${a.title}を追加`)}I([...B,...n])},K=async e=>{if(!1===(e=>e.length>20?(X("資料コードが長すぎます。バーコードの連続読み取りと判断して、処理しません",e),T.play(),!1):null!==e.match(/^192/)?(X("192で始まるバーコードのため、書籍JANコード(下段)と判断して、処理しません",e),T.play(),!1):null!==e.match(/^491/)?(X("491で始まるバーコードのため、雑誌コードと判断して、処理しません",e),T.play(),!1):null===e.match(/[a-zA-Z0-9]+/)?(k.push("英数字以外のキーが入力されました。処理しません"),I([...B,...k]),!1):!e.match(/^[a-zA-Z]*$/)||(k.push("英字のみが入力されました。処理しません"),I([...B,...k]),!1))(e))return;e.match(/^[a-zA-Z](\d+)[a-zA-Z]$/)&&(e=RegExp.$1,k.push("codabarの制御コードを検出しました")),"isbn"===y&&(w("management"),k.push("資料コードが読み込まれたため、資料コード用のモードに切り替えます")),k.push(s.createElement("span",{style:{fontFamily:'"Conv_OCRB", Sans-Serif'}},e));const t=h[h.length-1];if(h.filter((t=>t.id===e)).length>0)return X("!! すでに登録済みの資料コードです"),void T.play();if(V.play(),u([...h,{id:e}]),t&&t.title){k.push(`一つ前の本、「${t.title}」から次の本の候補を探します`);const e=await S(t);A(e),e.length>0&&k.push(`候補の本が${e.length}冊みつかりました`)}},G=async e=>{if(!1===R)return;const t=N(e);t?Y(e,t):K(e),$(!1),setTimeout((()=>$(!0)),100)},Q=e=>{if("isbn"===y&&u([...h.filter((t=>t.id!==e))]),"management"===y){const t=[];h.forEach((n=>{n.id===e?t.push({id:n.id}):t.push(n)})),u([...t])}},ee=n.exports.useRef(null);let te;n.exports.useEffect((()=>{if(ee.current){const e=ee.current;e.scrollTop=e.scrollHeight}}),[B]),n.exports.useEffect((()=>{te&&clearTimeout(te),te=setTimeout((()=>{q({show:!1,message:""})}),6e3)}),[Z]);const ne=n.exports.useRef(null);return n.exports.useEffect((()=>{const e=setInterval((()=>{ne.current&&(ne.current.style.display="none",setTimeout((()=>{ne.current.style.display="inline"}),500))}),1e3);return()=>{clearInterval(e)}}),[!0]),s.createElement("div",{id:"index"},s.createElement(p,{isOpen:Z.show,onClose:()=>q({show:!1,message:""}),hasBackdrop:!1},s.createElement("div",{className:"bp3-card bp3-elevation-4 bp3-overlay-content alert-message"},s.createElement(d,{icon:"tick",size:25,color:"#000000"}),Z.message)),s.createElement(p,{isOpen:F,onClose:()=>J(!1),hasBackdrop:!0},s.createElement("div",{className:"bp3-card bp3-elevation-4 bp3-overlay-content settings-overlay"},s.createElement("div",{className:"settings"},s.createElement("h3",null,"設定"),"speechSynthesis"in window?s.createElement(b,{checked:P,label:"読み上げ",onChange:()=>L(!P)}):null,s.createElement("br",null),s.createElement("hr",null),s.createElement("br",null),h.length>0?s.createElement(v,{icon:"download",onClick:()=>((e,t)=>{const n=new Date;t+=`_${n.getFullYear()}${n.getMonth()+1}${n.getDate()}.json`;const a=new Blob([JSON.stringify(e,null,"  ")],{type:"application/json"}),s=URL.createObjectURL(a),l=document.createElement("a");l.href=s,l.download=t,l.click(),URL.revokeObjectURL(s)})({mode:y,rowList:h},"keichanData_"+e),style:{marginRight:"0.5rem"}},"JSONで保存"):null,s.createElement(v,{icon:"upload",onClick:()=>{document.querySelector('input[type="file"]').click()}},"JSONを読み込み"),s.createElement("input",{type:"file",accept:"application/json",onChange:e=>{for(var t,n=e.target.files,a=0;t=n[a];a++){if(!t.type.match("application/json"))continue;const e=new FileReader;e.onload=e=>{const t=JSON.parse(e.target.result);if(void 0===t.rowList||void 0===t.mode)return X("JSONファイルの形式が異なっています"),void T.play();t.rowList.map((e=>{void 0===e.source&&(e.source="openBD")})),u(t.rowList),w(t.mode)},e.readAsText(t)}},style:{display:"none"}}),s.createElement("br",null),s.createElement("br",null),s.createElement(v,{icon:"cross",onClick:()=>J(!1)},"閉じる")))),s.createElement("header",null,s.createElement("div",null),s.createElement("h1",null,"カーリルtoolbox: keichan","management"===y?s.createElement("span",{className:"mode"},"資料コード"):null),s.createElement("div",null,h.length>0?s.createElement(v,{icon:"download",onClick:()=>((e,t)=>{const n=f.utils.book_new();n.Props={Title:"",Subject:"",Author:"",CreatedDate:new Date},n.SheetNames.push("蔵書データ");const a=[];a.push(["id","タイトル","著者","出版社","ISBN","タグ","価格","Cコード"]),e.map((e=>{e.isbn&&a.push([e.id,e.title,e.author,e.publisher,e.isbn,e.tags.join(","),e.price,e.cCode])}));const s=f.utils.aoa_to_sheet(a);n.Sheets["蔵書データ"]=s;const l=f.write(n,{bookType:"xlsx",type:"binary"});E.exports.saveAs(new Blob([function(e){const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let a=0;a<e.length;a++)n[a]=255&e.charCodeAt(a);return t}(l)],{type:"application/octet-stream"}),t+".xlsx")})(h,e)},"Excelで保存"):null,s.createElement(v,{className:"settingsButton",icon:"cog",onClick:()=>J(!0)},"設定"))),s.createElement("main",null,s.createElement("div",{className:"main"},0===h.length?s.createElement("div",{className:"description"},s.createElement("div",null,s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},s.createElement("path",{d:"M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"})),"バーコードをスキャンしてください")):null,h.slice().reverse().map(((e,t)=>s.createElement("div",{key:"row"+t},"management"===y?s.createElement(l,{key:"managementCode",className:"card active",interactive:!1,elevation:i.TWO},s.createElement("span",{className:"document"},s.createElement("span",{className:"documentHeader"},"資料コード"),s.createElement("span",{className:"documentCode"},e.id)),s.createElement(d,{icon:"delete",size:25,color:"#ffffff",onClick:()=>{return t=e.id,void u(h.filter((e=>e.id!==t)));var t}})):null,s.createElement("div",{className:"linkedData"},e.isbn?s.createElement(l,{key:e.bibHash+e.isbn,className:"card indent",interactive:!1,elevation:i.TWO},s.createElement("div",{className:"flex"},s.createElement("span",{className:"isbn"},s.createElement("span",{className:"isbnHeader"},"ISBN"),s.createElement("span",{className:"isbnCode"},e.isbn))),s.createElement(d,{icon:"delete",size:25,color:"#ffffff",onClick:()=>Q(e.id)})):null,e.title?s.createElement(l,{key:e.bibHash,className:"card indent",interactive:!1,elevation:i.TWO},s.createElement("div",{className:"flex"},e.cover?s.createElement("img",{className:"thumbnail",src:e.cover,alt:""}):null,s.createElement("div",null,s.createElement("h3",null,e.title),s.createElement("p",{className:"author"},e.author),e.tags.map((e=>s.createElement(r,{key:e},e))))),s.createElement(d,{icon:"delete",size:25,color:"#ffffff",onClick:()=>Q(e.id)})):null,void 0===e.title&&U?s.createElement(l,{className:"card indent",style:{height:"120px"},interactive:!1,elevation:i.TWO},s.createElement("div",{className:"placeholder"},s.createElement("div",{className:"placeholder-line title"}),s.createElement("div",{className:"placeholder-line"}),s.createElement("div",{className:"placeholder-line"}),s.createElement("div",{className:"placeholder-line"}),s.createElement("div",{className:"placeholder-line"}))):null),"management"===y&&void 0===e.isbn?s.createElement(s.Fragment,null,s.createElement("div",{className:"description"},s.createElement("div",null,s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},s.createElement("path",{d:"M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"})),"紐つけるバーコードをスキャンしてください")),h.length>1&&H.length>0?s.createElement("div",{className:"nextBook"},s.createElement("h2",null,"もしかして",s.createElement("span",null,"(",h[h.length-2].title,"より推定)")),s.createElement("div",{className:"cards"},H.slice(0,5).map((e=>s.createElement(g,{book:e,key:e.isbn}))))):null):null)))),s.createElement("div",{className:"debug"},s.createElement("div",{className:"logs",ref:ee},B.map(((e,t)=>s.createElement("div",{key:"log"+t},e)))),s.createElement("div",{className:"cmd"},"> ",s.createElement("span",{ref:ne},"_")))))};y.render(s.createElement(B,null),document.getElementById("app"));
