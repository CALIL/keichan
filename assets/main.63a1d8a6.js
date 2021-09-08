var e=Object.defineProperty,t=(t,s,n)=>(((t,s,n)=>{s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n})(t,"symbol"!=typeof s?s+"":s,n),n);import("data:text/javascript;base64,Cg==");import{r as s,J as n,R as a,C as l,E as i,T as r,a as o,u as c,l as h,h as m,O as u,I as p,S as d,B as v,b}from"./vendor.9f15e8b1.js";const g=e=>{const t=e.book,o=s.exports.useRef(null);return s.exports.useEffect((()=>{n(o.current,t.isbn,{format:"codabar",width:1.25,height:26,margin:10,fontSize:12})}),[]),a.createElement(l,{key:t.isbn,className:"card",interactive:!0,elevation:i.TWO},a.createElement("div",{className:"card-header"},t.cover?a.createElement("img",{src:t.cover,alt:t.title}):null,a.createElement("div",null,a.createElement("h3",null,[t.title,t.volume].join(" ")),a.createElement("p",{className:"author"},t.author),t.tags.map((e=>a.createElement(r,{key:e},e))))),a.createElement("svg",{ref:o,xmlns:"http://www.w3.org/2000/svg",version:"1.1"}))},E=["free","title","author","publisher","isbn","ndc","year_start","year_end","region"];function f(e){return o.get("https://unitrad.calil.jp/v1/"+e)}class y{constructor(e,s){t(this,"callback"),t(this,"killed"),t(this,"data"),this.callback=s,this.killed=!1,this.search(e)}kill(){this.killed=!0}search(e){this.killed||f("search").query(function(e){let t={};for(let s of E)e.hasOwnProperty(s)&&""!==e[s]&&(t[s]=e[s]);return t}(e)).end(((t,s)=>{t?setTimeout((()=>this.search(e)),1e3):this.receive(s.body)}))}polling(){this.killed||f("polling").query({uuid:this.data.uuid,version:this.data.version,diff:1,timeout:10}).end(((e,t)=>{null===t.body?setTimeout((()=>this.polling()),100):this.receive(t.body)}))}receive(e){if(!this.killed){if(e.books_diff){Array.prototype.push.apply(this.data.books,e.books_diff.insert);for(let t in e)e.hasOwnProperty(t)&&"books_diff"!==t&&(this.data[t]=e[t]);for(let t of e.books_diff.update)for(let e in t)if(t.hasOwnProperty(e)&&"_idx"!==e)if(!0===Array.isArray(t[e]))Array.prototype.push.apply(this.data.books[t._idx][e],t[e]);else if(t[e]instanceof Object)for(let s in t[e])t[e].hasOwnProperty(s)&&(this.data.books[t._idx][e][s]=t[e][s]);else this.data.books[t._idx][e]=t[e]}else this.data=e;this.callback(this.data),!0===e.running?(console.log("[Unitrad] continue..."),1===e.version&&0===this.data.books.length?setTimeout((()=>this.polling()),20):setTimeout((()=>this.polling()),500)):console.log("[Unitrad] complete.")}}}function w(e){e=c.nfkc(e).toUpperCase().replace(/[^0-9X]/g,"");let t=h.parse(e);if(t){if(t.isIsbn10())return t.asIsbn10();if(t.isIsbn13()){return t.asIsbn13().startsWith("978")?t.asIsbn10():t.asIsbn13()}}else{let t=h.parse("978"+e);if(t&&t.isIsbn13())return t.asIsbn10()}return!1}const k=async e=>{const t=e.author.split(",")[0],s=e.publisher,n=e.pubdate;return new Promise((async(a,l)=>{let i=new y({author:t,publisher:s,year_start:n,region:"recipe"},(async t=>{if(!i.killed&&(t.count>5&&i.kill(),console.log(t),t.count>=1)){const s=[];t.books.forEach((e=>{if(null===e.isbn)return;let t=0;e.pubdate&&(t="string"!=typeof e.pubdate?e.pubdate:Number(e.pubdate.split("/")[0].split(".")[0]));let n=h.parse(w(e.isbn)),a=null;try{a=n.asIsbn13()}catch{}a&&s.push({title:e.title+" "+e.volume,author:e.author.split(",")[0],publisher:e.publisher,isbn:a,pubdate:t})})),s.sort((function(e,t){return e.isbn<t.isbn?-1:e.isbn>t.isbn?1:0}));let n=[];const l=[];let i=!1;s.forEach((t=>{t.isbn!==e.isbn&&(i?n.push(t):l.push(t)),t.isbn===e.isbn&&(i=!0)})),n=n.concat(l);const r=[];n.forEach((e=>{r.push(e.isbn)}));const o=await x(r);a(o)}}))}))},x=async e=>new Promise((async(t,s)=>{const n=await fetch("https://api.openBD.jp/v1/get?isbn="+e.join(",")).then((e=>e.json())),a=[];n.forEach((e=>{if(e){const t=[];try{e.onix.DescriptiveDetail.Collection.TitleDetail.TitleElement.forEach(((e,s)=>{t.includes(e.TitleText.content)||t.push(e.TitleText.content)}))}catch{}let s=e.summary.volume;try{""===s&&(s=e.onix.DescriptiveDetail.TitleDetail.TitleElement.PartNumber)}catch{}const n={title:[e.summary.title,s].join(" "),author:e.summary.author,publisher:e.summary.publisher,isbn:e.summary.isbn,pubdate:e.summary.pubdate,cover:e.summary.cover,tags:t};n.bibHash=z(n),a.push(n)}})),t(a)})),z=e=>e.isbn;let V=new m.Howl({src:["./audio/warning.mp3"],autoplay:!1,loop:!1,volume:1,onend:function(){console.log("Finished!")}}),S="",N=null;const C=e=>{if("speechSynthesis"in window){const t=new SpeechSynthesisUtterance(e);t.rate=1.5,speechSynthesis.speak(t)}},T=()=>{const[e,t]=s.exports.useState("gk-xxxxxxxxxxxxxxx");let n=[];const r=localStorage.getItem("keichanData_"+e);r&&(n=JSON.parse(r));const[o,c]=s.exports.useState(n),[m,b]=s.exports.useState([]),[E,f]=s.exports.useState(null),[T,H]=s.exports.useState([]);let O="isbn";r&&o[0].id!==o[0].isbn&&(O="management");const[_,B]=s.exports.useState(O),[I,F]=s.exports.useState(!0),[$,j]=s.exports.useState(!0),[A,R]=s.exports.useState(!1),[D,P]=s.exports.useState({show:!1,message:""});s.exports.useEffect((()=>{localStorage.setItem("keichanData_"+e,JSON.stringify(o))}),[o]);const J=e=>((e,t)=>{const s=e||window.event,n=s.keyCode||s.which||s.charCode;"Enter"===e.key||13===n?(t(S),N&&clearTimeout(N),S=""):(1===e.key.length?S+=e.key:"Shift"===e.key||(S=""),N&&clearTimeout(N),N=setTimeout((()=>{t(S),S=""}),300))})(e,Z);s.exports.useEffect((()=>(window.addEventListener("keydown",J),()=>{window.removeEventListener("keydown",J)})),[_,o,I,m,$]);const U=s.exports.useRef(null);s.exports.useEffect((()=>{if(U.current){const e=U.current;e.scrollTop=e.scrollHeight}}),[m]),s.exports.useEffect((()=>{setTimeout((()=>{P({show:!1,message:""})}),5e3)}),[D]);const W=s.exports.useRef(null);s.exports.useEffect((()=>{const e=setInterval((()=>{W.current&&(W.current.style.display="none",setTimeout((()=>{W.current.style.display="inline"}),500))}),1e3);return()=>{clearInterval(e)}}),[!0]);const Z=async e=>{const t=[];if(!1===I)return;const s=w(e);if(s){t.push("ISBNのバーコードが読まれました。"),t.push(a.createElement("span",{style:{fontFamily:'"Conv_OCRB", Sans-Serif'}},e)),f(null),H([]);const n=await(async e=>new Promise((async(t,s)=>{const n=new y({isbn:e,region:"recipe"},(async e=>{if(e.count>=1){n.kill();const s=e.books[0],a={id:s.id,title:s.title,author:s.author,publisher:s.publisher,pubdate:s.pubdate,isbn:s.isbn,tags:[]};a.bibHash=z(a);let l=h.parse(w(a.isbn));a.isbn=l.asIsbn13();const i=await x([a.isbn]);null!==i[0]?t(i[0]):t(a)}else!1===e.running&&0===e.count&&s()}))})))(s);if(n)if(t.push("本が見つかりました！"),"isbn"===_){n.id=n.isbn,c([...o,n]),$&&C(`${n.title}を追加しました。`);const e=o[o.length-1];if(e&&e.title){t.push(`一つ前の本、「${e.title}」から次の本の候補を探します。`),f(e);const s=await k(e);H(s),s.length>0&&t.push(`候補の本が${s.length}冊みつかりました。`)}}else if("management"===_){const e=[...o],s=e[e.length-1];s&&!s.title?(s.title=n.title,s.author=n.author,s.publisher=n.publisher,s.isbn=n.isbn,s.cover=n.cover,s.tags=n.tags,s.bibHash=n.bibHash,c(e),$&&C(`${n.title}を追加。`)):(P({show:!0,message:"次は資料コードのバーコードを読んでください。"}),t.push(a.createElement(a.Fragment,null,a.createElement("span",{style:{color:"red"}},"!!"),a.createElement("span",null," 資料コードのバーコードを読んでください。"))),V.play())}}else{if(e.length>20)return P({show:!0,message:"資料コードが長すぎます。バーコードの連続読み取りと判断して、処理しません。"}),t.push(a.createElement("span",{style:{fontFamily:'"Conv_OCRB", Sans-Serif'}},e)),t.push(a.createElement(a.Fragment,null,a.createElement("span",{style:{color:"red"}},"!!"),a.createElement("span",null," 資料コードが長すぎます。バーコードの連続読み取りと判断して、処理しません。"))),b([...m,...t]),void V.play();if(null!==e.match(/^192/))return P({show:!0,message:"192で始まるバーコードのため、書籍JANコード(下段)と判断して、処理しません。"}),t.push(a.createElement("span",{style:{fontFamily:'"Conv_OCRB", Sans-Serif'}},e)),t.push("192で始まるバーコードのため、書籍JANコード(下段)と判断して、処理しません。"),b([...m,...t]),void V.play();if(null!==e.match(/^491/))return P({show:!0,message:"491で始まるバーコードのため、雑誌コードと判断して、処理しません。"}),t.push(a.createElement("span",{style:{fontFamily:'"Conv_OCRB", Sans-Serif'}},e)),t.push("491で始まるバーコードのため、雑誌コードと判断して、処理しません。"),b([...m,...t]),void V.play();if(null===e.match(/[a-zA-Z0-9]+/))return t.push("英数字以外のキーが入力されました。処理しません。"),void b([...m,...t]);if(e.match(/^[a-zA-Z]*$/))return t.push("英字のみが入力されました。処理しません。"),void b([...m,...t]);e.match(/^[a-zA-Z](\d+)[a-zA-Z]$/)&&(e=RegExp.$1,t.push("codabarの制御コードを検出しました。")),"isbn"===_&&(B("management"),t.push("資料コードが読み込まれたため、資料コード用のモードに切り替えます。")),t.push(a.createElement("span",{style:{fontFamily:'"Conv_OCRB", Sans-Serif'}},e));const s=o[o.length-1];if(s&&!s.title)return s.id=e,c([...o]),t.push(a.createElement(a.Fragment,null,a.createElement("span",{style:{color:"lightgreen"}},"!"),a.createElement("span",null," 別の資料コードが読み込まれたので、新しい資料コードに変更しました。"))),void b([...m,...t]);if(o.filter((t=>t.id===e)).length>0)return P({show:!0,message:"すでに登録済みの資料コードです"}),t.push(a.createElement(a.Fragment,null,a.createElement("span",{style:{color:"red"}},"!!"),a.createElement("span",null," すでに登録済みの資料コードです"))),b([...m,...t]),void V.play();if(c([...o,{id:e}]),s&&s.title){t.push(`一つ前の本、「${s.title}」から次の本の候補を探します。`),f(s);const e=await k(s);H(e),e.length>0&&t.push(`候補の本が${e.length}冊みつかりました。`)}}b([...m,...t]),F(!1),setTimeout((()=>F(!0)),100)};return a.createElement("div",{id:"index"},a.createElement(u,{isOpen:D.show,onClose:()=>P({show:!1,message:""}),hasBackdrop:!1},a.createElement("div",{className:"bp3-card bp3-elevation-4 bp3-overlay-content alert-message"},a.createElement(p,{icon:"tick",size:25,color:"#000000"}),D.message)),a.createElement(u,{isOpen:A,onClose:()=>R(!1),hasBackdrop:!0},a.createElement("div",{className:"bp3-card bp3-elevation-4 bp3-overlay-content settings-overlay"},a.createElement("div",{className:"settings"},a.createElement("h3",null,"設定"),"speechSynthesis"in window?a.createElement(d,{checked:$,label:"読み上げ",onChange:()=>j(!$)}):null,a.createElement("br",null),a.createElement("br",null),a.createElement(v,{icon:"cross",onClick:()=>R(!1)},"閉じる")))),a.createElement("header",null,a.createElement("div",null),a.createElement("h1",null,"カーリルtoolbox: keichan","management"===_?a.createElement("span",{className:"mode"},"資料コード"):null),a.createElement(v,{icon:"cog",onClick:()=>R(!0)},"設定")),a.createElement("main",null,a.createElement("div",{className:"main"},0===o.length?a.createElement("div",{className:"description"},a.createElement("div",null,a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a.createElement("path",{d:"M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"})),"バーコードをスキャンしてください")):null,o.length>=1&&o[o.length-1].title?a.createElement("div",{className:"description"},a.createElement("div",null,a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a.createElement("path",{d:"M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"})),"資料コードをスキャンしてください")):null,o.slice().reverse().map(((e,t)=>a.createElement("div",{key:"row"+t},"management"===_?a.createElement(l,{key:"managementCode",className:"card active",interactive:!0,elevation:i.TWO},a.createElement("img",{src:`https://img.shields.io/badge/%E8%B3%87%E6%96%99%E3%82%B3%E3%83%BC%E3%83%89-${e.id}-blue`,alt:""})):null,e.title?a.createElement(l,{key:e.bibHash,className:"card indent",interactive:!0,elevation:i.TWO},a.createElement("div",null,e.cover?a.createElement("img",{className:"thumbnail",src:e.cover,alt:""}):null,a.createElement("div",null,a.createElement("img",{src:`https://img.shields.io/badge/book-${e.isbn}-brightgreen`,alt:""}),a.createElement("h3",null,e.title)))):a.createElement(a.Fragment,null,a.createElement("div",{className:"description"},a.createElement("div",null,a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a.createElement("path",{d:"M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"})),"紐つけるバーコードをスキャンしてください")),E&&T.length>0?a.createElement("div",{className:"nextBook"},a.createElement("h2",null,"もしかして",a.createElement("span",null,"(",E.title,"より推定)")),a.createElement("div",{className:"cards"},T.slice(0,5).map((e=>a.createElement(g,{book:e,key:e.isbn}))))):null))))),a.createElement("div",{className:"debug"},a.createElement("div",{className:"logs",ref:U},m.map(((e,t)=>a.createElement("div",{key:"log"+t},e)))),a.createElement("div",{className:"cmd"},"> ",a.createElement("span",{ref:W},"_")))))};b.render(a.createElement(T,null),document.getElementById("app"));
