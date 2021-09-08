var e=Object.defineProperty,t=(t,s,n)=>(((t,s,n)=>{s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n})(t,"symbol"!=typeof s?s+"":s,n),n);import("data:text/javascript;base64,Cg==");import{r as s,J as n,R as a,C as l,E as i,T as r,a as o,u as c,l as h,s as m,h as u,O as p,I as d,S as v,B as b,X as f,F as g,b as E}from"./vendor.6409ed4e.js";const y=e=>{const t=e.book,o=s.exports.useRef(null);return s.exports.useEffect((()=>{n(o.current,t.isbn,{format:"codabar",width:1.25,height:26,margin:10,fontSize:12})}),[]),a.createElement(l,{key:t.isbn,className:"card",interactive:!0,elevation:i.TWO},a.createElement("div",{className:"card-header"},t.cover?a.createElement("img",{src:t.cover,alt:t.title}):null,a.createElement("div",null,a.createElement("h3",null,[t.title,t.volume].join(" ")),a.createElement("p",{className:"author"},t.author),t.tags.map((e=>a.createElement(r,{key:e},e))))),a.createElement("svg",{ref:o,xmlns:"http://www.w3.org/2000/svg",version:"1.1"}))},w=["free","title","author","publisher","isbn","ndc","year_start","year_end","region"];function x(e){return o.get("https://unitrad.calil.jp/v1/"+e)}class k{constructor(e,s){t(this,"callback"),t(this,"killed"),t(this,"data"),this.callback=s,this.killed=!1,this.search(e)}kill(){this.killed=!0}search(e){this.killed||x("search").query(function(e){let t={};for(let s of w)e.hasOwnProperty(s)&&""!==e[s]&&(t[s]=e[s]);return t}(e)).end(((t,s)=>{t?setTimeout((()=>this.search(e)),1e3):this.receive(s.body)}))}polling(){this.killed||x("polling").query({uuid:this.data.uuid,version:this.data.version,diff:1,timeout:10}).end(((e,t)=>{null===t.body?setTimeout((()=>this.polling()),100):this.receive(t.body)}))}receive(e){if(!this.killed){if(e.books_diff){Array.prototype.push.apply(this.data.books,e.books_diff.insert);for(let t in e)e.hasOwnProperty(t)&&"books_diff"!==t&&(this.data[t]=e[t]);for(let t of e.books_diff.update)for(let e in t)if(t.hasOwnProperty(e)&&"_idx"!==e)if(!0===Array.isArray(t[e]))Array.prototype.push.apply(this.data.books[t._idx][e],t[e]);else if(t[e]instanceof Object)for(let s in t[e])t[e].hasOwnProperty(s)&&(this.data.books[t._idx][e][s]=t[e][s]);else this.data.books[t._idx][e]=t[e]}else this.data=e;this.callback(this.data),!0===e.running?(console.log("[Unitrad] continue..."),1===e.version&&0===this.data.books.length?setTimeout((()=>this.polling()),20):setTimeout((()=>this.polling()),500)):console.log("[Unitrad] complete.")}}}function z(e){e=c.nfkc(e).toUpperCase().replace(/[^0-9X]/g,"");let t=h.parse(e);if(t){if(t.isIsbn10())return t.asIsbn10();if(t.isIsbn13()){return t.asIsbn13().startsWith("978")?t.asIsbn10():t.asIsbn13()}}else{let t=h.parse("978"+e);if(t&&t.isIsbn13())return t.asIsbn10()}return!1}const V=async e=>{const t=e.author.split(",")[0],s=e.publisher,n=e.pubdate;return new Promise((async(a,l)=>{let i=new k({author:t,publisher:s,year_start:n,region:"recipe"},(async t=>{if(!i.killed&&(t.count>5&&i.kill(),console.log(t),t.count>=1)){const s=[];t.books.forEach((e=>{if(null===e.isbn)return;let t=0;e.pubdate&&(t="string"!=typeof e.pubdate?e.pubdate:Number(e.pubdate.split("/")[0].split(".")[0]));let n=h.parse(z(e.isbn)),a=null;try{a=n.asIsbn13()}catch{}a&&s.push({title:e.title+" "+e.volume,author:e.author.split(",")[0],publisher:e.publisher,isbn:a,pubdate:t})})),s.sort((function(e,t){return e.isbn<t.isbn?-1:e.isbn>t.isbn?1:0}));let n=[];const l=[];let i=!1;s.forEach((t=>{t.isbn!==e.isbn&&(i?n.push(t):l.push(t)),t.isbn===e.isbn&&(i=!0)})),n=n.concat(l);const r=[];n.forEach((e=>{r.push(e.isbn)}));const o=await S(r);a(o)}}))}))},S=async e=>new Promise((async(t,s)=>{const n=await fetch("https://api.openBD.jp/v1/get?isbn="+e.join(",")).then((e=>e.json())),a=[];n.forEach((e=>{if(e){const t=[];try{e.onix.DescriptiveDetail.Collection.TitleDetail.TitleElement.forEach(((e,s)=>{t.includes(e.TitleText.content)||t.push(e.TitleText.content)}))}catch{}let s=e.summary.volume;try{""===s&&(s=e.onix.DescriptiveDetail.TitleDetail.TitleElement.PartNumber)}catch{}let n="";try{console.log(e.onix.ProductSupply.SupplyDetail.Price),e.onix.ProductSupply.SupplyDetail.Price.some((e=>{"JPY"===e.CurrencyCode&&(n=e.PriceAmount)}))}catch{}const l={title:[e.summary.title,s].join(" "),author:e.summary.author,publisher:e.summary.publisher,isbn:e.summary.isbn,pubdate:e.summary.pubdate,cover:e.summary.cover,tags:t,price:n,cCode:""};l.bibHash=C(l),a.push(l)}})),t(a)})),C=e=>m(e.id+e.title+e.author+e.publisher+e.isbn);let N=new u.Howl({src:["./audio/warning.mp3"],autoplay:!1,loop:!1,volume:1,onend:function(){console.log("Finished!")}}),T="",B=null;const _=e=>{if("speechSynthesis"in window){const t=new SpeechSynthesisUtterance(e);t.rate=1.5,speechSynthesis.speak(t)}},H=()=>{const[e,t]=s.exports.useState("gk-xxxxxxxxxxxxxxx");let n=[],r="isbn";const o=localStorage.getItem("keichanData_"+e);if(o){const e=JSON.parse(o);n=e.rowList,r=e.mode}const[c,m]=s.exports.useState(n),[u,E]=s.exports.useState(r),[w,x]=s.exports.useState([]),[H,O]=s.exports.useState(null),[I,A]=s.exports.useState([]),[P,D]=s.exports.useState(!0),[j,F]=s.exports.useState(!0),[$,R]=s.exports.useState(!1),[J,U]=s.exports.useState({show:!1,message:""});s.exports.useEffect((()=>{localStorage.setItem("keichanData_"+e,JSON.stringify({mode:u,rowList:c}))}),[c,u]);const L=e=>((e,t)=>{const s=e||window.event,n=s.keyCode||s.which||s.charCode;"Enter"===e.key||13===n?(t(T),B&&clearTimeout(B),T=""):(1===e.key.length?T+=e.key:"Shift"===e.key||(T=""),B&&clearTimeout(B),B=setTimeout((()=>{t(T),T=""}),300))})(e,M);s.exports.useEffect((()=>(window.addEventListener("keydown",L),()=>{window.removeEventListener("keydown",L)})),[u,c,P,w,j]);const W=s.exports.useRef(null);s.exports.useEffect((()=>{if(W.current){const e=W.current;e.scrollTop=e.scrollHeight}}),[w]),s.exports.useEffect((()=>{setTimeout((()=>{U({show:!1,message:""})}),5e3)}),[J]);const Z=s.exports.useRef(null);s.exports.useEffect((()=>{const e=setInterval((()=>{Z.current&&(Z.current.style.display="none",setTimeout((()=>{Z.current.style.display="inline"}),500))}),1e3);return()=>{clearInterval(e)}}),[!0]);const M=async e=>{const t=[];if(!1===P)return;const s=z(e);if(s){t.push("ISBNのバーコードが読まれました。"),t.push(a.createElement("span",{style:{fontFamily:'"Conv_OCRB", Sans-Serif'}},e)),O(null),A([]);const n=await(async e=>new Promise((async(t,s)=>{const n=new k({isbn:e,region:"recipe"},(async e=>{if(e.count>=1){n.kill();const s=e.books[0],a={id:s.id,title:s.title,author:s.author,publisher:s.publisher,pubdate:s.pubdate,isbn:s.isbn,tags:[],price:"",cCode:""};a.bibHash=C(a);let l=h.parse(z(a.isbn));a.isbn=l.asIsbn13();const i=await S([a.isbn]);null!==i[0]?t(i[0]):t(a)}else!1===e.running&&0===e.count&&s()}))})))(s);if(n)if(t.push("本が見つかりました！"),"isbn"===u){n.id=n.isbn,m([...c,n]),j&&_(`${n.title}を追加しました。`);const e=c[c.length-1];if(e&&e.title){t.push(`一つ前の本、「${e.title}」から次の本の候補を探します。`),O(e);const s=await V(e);A(s),s.length>0&&t.push(`候補の本が${s.length}冊みつかりました。`)}}else if("management"===u){const e=[...c],s=e[e.length-1];s&&!s.title?(s.title=n.title,s.author=n.author,s.publisher=n.publisher,s.isbn=n.isbn,s.cover=n.cover,s.tags=n.tags,s.bibHash=n.bibHash,s.price=n.price,s.cCode=n.cCode,m(e),j&&_(`${n.title}を追加。`)):(U({show:!0,message:"次は資料コードのバーコードを読んでください。"}),t.push(a.createElement(a.Fragment,null,a.createElement("span",{style:{color:"red"}},"!!"),a.createElement("span",null," 資料コードのバーコードを読んでください。"))),N.play())}}else{if(e.length>20)return U({show:!0,message:"資料コードが長すぎます。バーコードの連続読み取りと判断して、処理しません。"}),t.push(a.createElement("span",{style:{fontFamily:'"Conv_OCRB", Sans-Serif'}},e)),t.push(a.createElement(a.Fragment,null,a.createElement("span",{style:{color:"red"}},"!!"),a.createElement("span",null," 資料コードが長すぎます。バーコードの連続読み取りと判断して、処理しません。"))),x([...w,...t]),void N.play();if(null!==e.match(/^192/))return U({show:!0,message:"192で始まるバーコードのため、書籍JANコード(下段)と判断して、処理しません。"}),t.push(a.createElement("span",{style:{fontFamily:'"Conv_OCRB", Sans-Serif'}},e)),t.push("192で始まるバーコードのため、書籍JANコード(下段)と判断して、処理しません。"),x([...w,...t]),void N.play();if(null!==e.match(/^491/))return U({show:!0,message:"491で始まるバーコードのため、雑誌コードと判断して、処理しません。"}),t.push(a.createElement("span",{style:{fontFamily:'"Conv_OCRB", Sans-Serif'}},e)),t.push("491で始まるバーコードのため、雑誌コードと判断して、処理しません。"),x([...w,...t]),void N.play();if(null===e.match(/[a-zA-Z0-9]+/))return t.push("英数字以外のキーが入力されました。処理しません。"),void x([...w,...t]);if(e.match(/^[a-zA-Z]*$/))return t.push("英字のみが入力されました。処理しません。"),void x([...w,...t]);e.match(/^[a-zA-Z](\d+)[a-zA-Z]$/)&&(e=RegExp.$1,t.push("codabarの制御コードを検出しました。")),"isbn"===u&&(E("management"),t.push("資料コードが読み込まれたため、資料コード用のモードに切り替えます。")),t.push(a.createElement("span",{style:{fontFamily:'"Conv_OCRB", Sans-Serif'}},e));const s=c[c.length-1];if(s&&!s.title)return s.id=e,m([...c]),t.push(a.createElement(a.Fragment,null,a.createElement("span",{style:{color:"lightgreen"}},"!"),a.createElement("span",null," 別の資料コードが読み込まれたので、新しい資料コードに変更しました。"))),void x([...w,...t]);if(c.filter((t=>t.id===e)).length>0)return U({show:!0,message:"すでに登録済みの資料コードです"}),t.push(a.createElement(a.Fragment,null,a.createElement("span",{style:{color:"red"}},"!!"),a.createElement("span",null," すでに登録済みの資料コードです"))),x([...w,...t]),void N.play();if(m([...c,{id:e}]),s&&s.title){t.push(`一つ前の本、「${s.title}」から次の本の候補を探します。`),O(s);const e=await V(s);A(e),e.length>0&&t.push(`候補の本が${e.length}冊みつかりました。`)}}x([...w,...t]),D(!1),setTimeout((()=>D(!0)),100)};return a.createElement("div",{id:"index"},a.createElement(p,{isOpen:J.show,onClose:()=>U({show:!1,message:""}),hasBackdrop:!1},a.createElement("div",{className:"bp3-card bp3-elevation-4 bp3-overlay-content alert-message"},a.createElement(d,{icon:"tick",size:25,color:"#000000"}),J.message)),a.createElement(p,{isOpen:$,onClose:()=>R(!1),hasBackdrop:!0},a.createElement("div",{className:"bp3-card bp3-elevation-4 bp3-overlay-content settings-overlay"},a.createElement("div",{className:"settings"},a.createElement("h3",null,"設定"),"speechSynthesis"in window?a.createElement(v,{checked:j,label:"読み上げ",onChange:()=>F(!j)}):null,a.createElement("br",null),a.createElement("br",null),a.createElement(b,{icon:"cross",onClick:()=>R(!1)},"閉じる")))),a.createElement("header",null,a.createElement("div",null),a.createElement("h1",null,"カーリルtoolbox: keichan","management"===u?a.createElement("span",{className:"mode"},"資料コード"):null),a.createElement("div",null,a.createElement(b,{className:"settingsButton",icon:"cog",onClick:()=>R(!0)},"設定"),c.length>0?a.createElement(b,{icon:"download",onClick:()=>((e,t)=>{const s=f.utils.book_new();s.Props={Title:"",Subject:"",Author:"",CreatedDate:new Date},s.SheetNames.push("蔵書データ");const n=[];n.push(["id","タイトル","著者","出版社","ISBN","タグ"]),e.map((e=>{n.push([e.id,e.title,e.author,e.publisher,e.isbn,e.tags.join(",")])}));const a=f.utils.aoa_to_sheet(n);s.Sheets["蔵書データ"]=a;const l=f.write(s,{bookType:"xlsx",type:"binary"});g.exports.saveAs(new Blob([function(e){const t=new ArrayBuffer(e.length),s=new Uint8Array(t);for(let n=0;n<e.length;n++)s[n]=255&e.charCodeAt(n);return t}(l)],{type:"application/octet-stream"}),t+".xlsx")})(c,e)},"Excelで保存"):null)),a.createElement("main",null,a.createElement("div",{className:"main"},0===c.length?a.createElement("div",{className:"description"},a.createElement("div",null,a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a.createElement("path",{d:"M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"})),"バーコードをスキャンしてください")):null,c.length>=1&&c[c.length-1].title?a.createElement("div",{className:"description"},a.createElement("div",null,a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a.createElement("path",{d:"M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"})),"資料コードをスキャンしてください")):null,c.slice().reverse().map(((e,t)=>a.createElement("div",{key:"row"+t},"management"===u?a.createElement(l,{key:"managementCode",className:"card active",interactive:!1,elevation:i.TWO},a.createElement("img",{src:`https://img.shields.io/badge/%E8%B3%87%E6%96%99%E3%82%B3%E3%83%BC%E3%83%89-${e.id}-blue`,alt:""}),a.createElement(d,{icon:"delete",size:25,color:"#ffffff",onClick:()=>{return t=e.id,void m(c.filter((e=>e.id!==t)));var t}})):null,e.title?a.createElement(l,{key:e.bibHash,className:"card indent",interactive:!1,elevation:i.TWO},a.createElement("div",null,e.cover?a.createElement("img",{className:"thumbnail",src:e.cover,alt:""}):null,a.createElement("div",null,a.createElement("img",{src:`https://img.shields.io/badge/book-${e.isbn}-brightgreen`,alt:""}),a.createElement("h3",null,e.title))),e.id===c[c.length-1].id?a.createElement(d,{icon:"delete",size:25,color:"#ffffff",onClick:()=>(e=>{const t=[];c.forEach((s=>{s.id===e?t.push({id:s.id}):t.push(s)})),m([...t])})(e.id)}):null):a.createElement(a.Fragment,null,a.createElement("div",{className:"description"},a.createElement("div",null,a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a.createElement("path",{d:"M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"})),"紐つけるバーコードをスキャンしてください")),H&&I.length>0?a.createElement("div",{className:"nextBook"},a.createElement("h2",null,"もしかして",a.createElement("span",null,"(",H.title,"より推定)")),a.createElement("div",{className:"cards"},I.slice(0,5).map((e=>a.createElement(y,{book:e,key:e.isbn}))))):null))))),a.createElement("div",{className:"debug"},a.createElement("div",{className:"logs",ref:W},w.map(((e,t)=>a.createElement("div",{key:"log"+t},e)))),a.createElement("div",{className:"cmd"},"> ",a.createElement("span",{ref:Z},"_")))))};E.render(a.createElement(H,null),document.getElementById("app"));
