import("data:text/javascript;base64,Cg==");import{n as e,a as t}from"./api.3e55eec7.js";import{r as a,R as l,T as n,C as s,E as c,c as r,a as o}from"./vendor.de6f6c87.js";const i=o=>{let i="",m=null;const[u,d]=a.exports.useState(null),[p,E]=a.exports.useState([]);a.exports.useEffect((()=>{window.document.addEventListener("keydown",f)}),[]),a.exports.useEffect((()=>{window.document.addEventListener("keydown",f)}),[]);const f=e=>{const t=e||window.event,a=t.keyCode||t.which||t.charCode;"Enter"===e.key||13===a?(b(),m&&clearTimeout(m),i=""):(1===e.key.length?i+=e.key:"Shift"===e.key||(i=""),m&&clearTimeout(m),m=setTimeout((()=>{console.log("clear"),b(),i=""}),300))},b=async()=>{const t=e(i);if(t){const e=await h(t);e&&(d(e),await v(e))}},h=async e=>(d(null),E([]),new Promise((async(a,l)=>{const n=new t({isbn:e,region:"recipe"},(e=>{console.log(e),e.count>=1?(n.kill(),a(e.books[0])):!1===e.running&&0===e.count&&l()}))}))),v=async e=>{const a=e.title.split(/\s/)[0],l=e.author.split(",")[0],n=e.publisher,s=e.pubdate;let c=new t({author:l,publisher:n,year_start:s,region:"recipe"},(t=>{if(console.log(t),t.count>=1){const l=[];t.books.forEach((t=>{if(null===t.isbn)return;if(t.isbn===e.isbn)return;if(!t.title.match(a))return;let n=0;t.pubdate&&(n="string"!=typeof t.pubdate?t.pubdate:Number(t.pubdate.split("/")[0].split(".")[0])),l.push({title:t.title+" "+t.volume,author:t.author.split(",")[0],publisher:t.publisher,pubdate:n})})),l.sort((function(e,t){return e.pubdate<t.pubdate?-1:e.pubdate>t.pubdate?1:0})),E(l)}t.count>5&&c.kill()}))};return l.createElement("div",{id:"suggests"},l.createElement("header",null,l.createElement("h1",null,"カーリルtoolbox: keichan")),l.createElement("main",null,l.createElement("div",{className:"left"},l.createElement("div",{className:"barcode active"},l.createElement(n,{large:!0,className:"tag"},"100014")),l.createElement("div",{className:"barcode"},l.createElement(n,{large:!0,className:"tag"},"100013"),l.createElement("p",null,"SPY×FAMILY 1")),l.createElement("div",{className:"barcode"},l.createElement(n,{large:!0,className:"tag"},"100012"),l.createElement("p",null,"1Q84 Book2"))),l.createElement("div",{className:"main"},l.createElement(s,{className:"card active",interactive:!0,elevation:c.TWO},l.createElement("div",null,l.createElement(n,{className:"tag",large:!0},"100014"),l.createElement(n,{className:"tag"},"管理バーコード")),l.createElement(r,{icon:"delete",size:25,color:"#ffffff"})),u?l.createElement("div",{className:"nextBook"},l.createElement("h2",null,"もしかして",l.createElement("span",null,"(",u.title+""+u.volume,"より推定)")),p.map((e=>l.createElement(s,{key:e.isbn,className:"card",interactive:!0,elevation:c.TWO},l.createElement("div",{className:"card-header"},l.createElement("h3",null,[e.title,e.volume].join(" ")),l.createElement("p",{className:"author"},e.author)),l.createElement(r,{icon:"add",size:25,color:"#ffffff"}))))):null)))};o.render(l.createElement(i,null),document.getElementById("app"));
