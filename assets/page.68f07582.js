import("data:text/javascript;base64,Cg==");import{n as e,a as t}from"./api.e8162ab6.js";import{r as a,l,R as n,T as s,C as c,E as r,c as i,a as o}from"./vendor.de6f6c87.js";const m=o=>{let m="",u=null;const[d,p]=a.exports.useState(null),[b,E]=a.exports.useState([]);a.exports.useEffect((()=>{window.document.addEventListener("keydown",h)}),[]),a.exports.useEffect((()=>{window.document.addEventListener("keydown",h)}),[]);const h=e=>{const t=e||window.event,a=t.keyCode||t.which||t.charCode;"Enter"===e.key||13===a?(f(),u&&clearTimeout(u),m=""):(1===e.key.length?m+=e.key:"Shift"===e.key||(m=""),u&&clearTimeout(u),u=setTimeout((()=>{console.log("clear"),f(),m=""}),300))},f=async()=>{const t=e(m);if(t){const e=await v(t);e&&(p(e),await y(e))}else null===m.match(/^192/)&&alert("管理バーコード")},v=async a=>(p(null),E([]),new Promise((async(n,s)=>{const c=new t({isbn:a,region:"recipe"},(t=>{if(console.log(t),t.count>=1){c.kill();const a=t.books[0];let s=l.parse(e(a.isbn));a.isbn=s.asIsbn13(),n(a)}else!1===t.running&&0===t.count&&s()}))}))),y=async a=>{const n=a.author.split(",")[0],s=a.publisher,c=a.pubdate;let r=new t({author:n,publisher:s,year_start:c,region:"recipe"},(async t=>{if(!r.killed&&(t.count>5&&r.kill(),console.log(t),t.count>=1)){const n=[];t.books.forEach((t=>{if(null===t.isbn)return;let a=0;t.pubdate&&(a="string"!=typeof t.pubdate?t.pubdate:Number(t.pubdate.split("/")[0].split(".")[0]));let s=l.parse(e(t.isbn)),c=null;try{c=s.asIsbn13()}catch{}c&&n.push({title:t.title+" "+t.volume,author:t.author.split(",")[0],publisher:t.publisher,isbn:c,pubdate:a})})),n.sort((function(e,t){return e.isbn<t.isbn?-1:e.isbn>t.isbn?1:0}));let s=[];const c=[];let r=!1;n.forEach((e=>{e.isbn!==a.isbn&&(r?s.push(e):c.push(e)),e.isbn===a.isbn&&(r=!0)})),s=s.concat(c);const i=[];s.forEach((e=>{i.push(e.isbn)}));const o=await fetch("https://api.openbd.jp/v1/get?isbn="+i.join(",")).then((e=>e.json()));console.log(o);const m=[];return o.forEach((e=>{if(e){const t=[];try{e.onix.DescriptiveDetail.Collection.TitleDetail.TitleElement.forEach(((e,a)=>{t.includes(e.TitleText.content)||t.push(e.TitleText.content)}))}catch{}let a=e.summary.volume;try{""===a&&(a=e.onix.DescriptiveDetail.TitleDetail.TitleElement.PartNumber)}catch{}const l={title:[e.summary.title,a].join(" "),author:e.summary.author,publisher:e.summary.publisher,isbn:e.summary.isbn,pubdate:e.summary.pubdate,cover:e.summary.cover,tags:t};m.push(l)}})),E(m)}}))};return n.createElement("div",{id:"new"},n.createElement("header",null,n.createElement("h1",null,"カーリルtoolbox: keichan")),n.createElement("main",null,n.createElement("div",{className:"left"},n.createElement("div",{className:"barcode active"},n.createElement(s,{large:!0,className:"tag"},"100014")),n.createElement("div",{className:"barcode"},n.createElement(s,{large:!0,className:"tag"},"100013"),n.createElement("p",null,"SPY×FAMILY 1")),n.createElement("div",{className:"barcode"},n.createElement(s,{large:!0,className:"tag"},"100012"),n.createElement("p",null,"1Q84 Book2"))),n.createElement("div",{className:"main"},n.createElement(c,{className:"card active",interactive:!0,elevation:r.TWO},n.createElement("div",null,n.createElement(s,{className:"tag",large:!0},"100014"),n.createElement(s,{className:"tag"},"管理バーコード")),n.createElement(i,{icon:"delete",size:25,color:"#ffffff"})),d&&b.length>0?n.createElement("div",{className:"nextBook"},n.createElement("h2",null,"もしかして",n.createElement("span",null,"(",d.title+""+d.volume,"より推定)")),n.createElement("div",{className:"cards"},b.map((e=>n.createElement(c,{key:e.isbn,className:"card",interactive:!0,elevation:r.TWO},n.createElement("div",{className:"card-header"},e.cover?n.createElement("img",{src:e.cover,alt:e.title}):null,n.createElement("div",null,n.createElement("h3",null,[e.title,e.volume].join(" ")),n.createElement("p",{className:"author"},e.author),e.tags.map((e=>n.createElement(s,null,e))),n.createElement("p",null,e.isbn))),n.createElement(i,{icon:"add",size:25,color:"#ffffff"})))))):null)))};o.render(n.createElement(m,null),document.getElementById("app"));
