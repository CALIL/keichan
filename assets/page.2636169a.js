import("data:text/javascript;base64,Cg==");import{n as e,a as t}from"./api.3e55eec7.js";import{r as a,l,R as n,T as s,C as c,E as r,c as o,a as i}from"./vendor.de6f6c87.js";const m=i=>{let m="",u=null;const[d,p]=a.exports.useState(null),[E,b]=a.exports.useState([]);a.exports.useEffect((()=>{window.document.addEventListener("keydown",f)}),[]),a.exports.useEffect((()=>{window.document.addEventListener("keydown",f)}),[]);const f=e=>{const t=e||window.event,a=t.keyCode||t.which||t.charCode;"Enter"===e.key||13===a?(h(),u&&clearTimeout(u),m=""):(1===e.key.length?m+=e.key:"Shift"===e.key||(m=""),u&&clearTimeout(u),u=setTimeout((()=>{console.log("clear"),h(),m=""}),300))},h=async()=>{const t=e(m);if(t){const e=await g(t);e&&(p(e),await v(e))}},g=async e=>(p(null),b([]),new Promise((async(a,n)=>{const s=new t({isbn:e,region:"recipe"},(e=>{if(console.log(e),e.count>=1){s.kill();const t=e.books[0];let n=l.parse(t.isbn);t.isbn=n.asIsbn13(),a(t)}else!1===e.running&&0===e.count&&n()}))}))),v=async e=>{e.title.split(/\s/)[0];const a=e.author.split(",")[0],n=e.publisher,s=e.pubdate;let c=new t({author:a,publisher:n,year_start:s,region:"recipe"},(t=>{if(console.log(t),t.count>=1){const a=[];t.books.forEach((e=>{if(null===e.isbn)return;let t=0;e.pubdate&&(t="string"!=typeof e.pubdate?e.pubdate:Number(e.pubdate.split("/")[0].split(".")[0]));let n=l.parse(e.isbn);a.push({title:e.title+" "+e.volume,author:e.author.split(",")[0],publisher:e.publisher,isbn:n.asIsbn13(),pubdate:t})})),a.sort((function(e,t){return e.isbn<t.isbn?-1:e.isbn>t.isbn?1:0}));const n=[];let s=!1;return a.forEach((t=>{s&&n.push(t),t.isbn===e.isbn&&(s=!0)})),console.log(e.isbn),console.log(n),b(n)}t.count>5&&c.kill()}))};return n.createElement("div",{id:"suggests"},n.createElement("header",null,n.createElement("h1",null,"カーリルtoolbox: keichan")),n.createElement("main",null,n.createElement("div",{className:"left"},n.createElement("div",{className:"barcode active"},n.createElement(s,{large:!0,className:"tag"},"100014")),n.createElement("div",{className:"barcode"},n.createElement(s,{large:!0,className:"tag"},"100013"),n.createElement("p",null,"SPY×FAMILY 1")),n.createElement("div",{className:"barcode"},n.createElement(s,{large:!0,className:"tag"},"100012"),n.createElement("p",null,"1Q84 Book2"))),n.createElement("div",{className:"main"},n.createElement(c,{className:"card active",interactive:!0,elevation:r.TWO},n.createElement("div",null,n.createElement(s,{className:"tag",large:!0},"100014"),n.createElement(s,{className:"tag"},"管理バーコード")),n.createElement(o,{icon:"delete",size:25,color:"#ffffff"})),d?n.createElement("div",{className:"nextBook"},n.createElement("h2",null,"もしかして",n.createElement("span",null,"(",d.title+""+d.volume,"より推定)")),E.map((e=>n.createElement(c,{key:e.isbn,className:"card",interactive:!0,elevation:r.TWO},n.createElement("div",{className:"card-header"},n.createElement("h3",null,[e.title,e.volume].join(" ")),n.createElement("p",{className:"author"},e.author),n.createElement("p",null,e.pubdate),n.createElement("p",null,e.isbn)),n.createElement(o,{icon:"add",size:25,color:"#ffffff"}))))):null)))};i.render(n.createElement(m,null),document.getElementById("app"));
