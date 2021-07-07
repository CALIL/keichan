var t=Object.defineProperty,e=(e,s,i)=>(((e,s,i)=>{s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[s]=i})(e,"symbol"!=typeof s?s+"":s,i),i);import{u as s,l as i,r as o,a as n,R as r,S as a,b as h}from"./vendor.6db76fe3.js";!function(t=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(s){const i=new URL(t,location),o=t=>{URL.revokeObjectURL(t.src),t.remove()};self[e]=t=>new Promise(((s,n)=>{const r=new URL(t,i);if(self[e].moduleMap[r])return s(self[e].moduleMap[r]);const a=new Blob([`import * as m from '${r}';`,`${e}.moduleMap['${r}']=m;`],{type:"text/javascript"}),h=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(a),onerror(){n(new Error(`Failed to import: ${t}`)),o(h)},onload(){s(self[e].moduleMap[r]),o(h)}});document.head.appendChild(h)})),self[e].moduleMap={}}}("/keichan/assets/");function l(t){t=s.nfkc(t).toUpperCase().replace(/[^0-9X]/g,"");let e=i.parse(t);if(e){if(e.isIsbn10())return e.asIsbn10();if(e.isIsbn13()){return e.asIsbn13().startsWith("978")?e.asIsbn10():e.asIsbn13()}}else{let e=i.parse("978"+t);if(e&&e.isIsbn13())return e.asIsbn10()}return!1}const d=["free","title","author","publisher","isbn","ndc","year_start","year_end","region"];function u(t){return o.get("https://unitrad.calil.jp/v1/"+t)}class c{constructor(t,s){e(this,"callback"),e(this,"killed"),e(this,"data"),this.callback=s,this.killed=!1,this.search(t)}kill(){this.killed=!0}search(t){this.killed||u("search").query(function(t){let e={};for(let s of d)t.hasOwnProperty(s)&&""!==t[s]&&(e[s]=t[s]);return e}(t)).end(((e,s)=>{e?setTimeout((()=>this.search(t)),1e3):this.receive(s.body)}))}polling(){this.killed||u("polling").query({uuid:this.data.uuid,version:this.data.version,diff:1,timeout:10}).end(((t,e)=>{null===e.body?setTimeout((()=>this.polling()),100):this.receive(e.body)}))}receive(t){if(!this.killed){if(t.books_diff){Array.prototype.push.apply(this.data.books,t.books_diff.insert);for(let e in t)t.hasOwnProperty(e)&&"books_diff"!==e&&(this.data[e]=t[e]);for(let e of t.books_diff.update)for(let t in e)if(e.hasOwnProperty(t)&&"_idx"!==t)if(!0===Array.isArray(e[t]))Array.prototype.push.apply(this.data.books[e._idx][t],e[t]);else if(e[t]instanceof Object)for(let s in e[t])e[t].hasOwnProperty(s)&&(this.data.books[e._idx][t][s]=e[t][s]);else this.data.books[e._idx][t]=e[t]}else this.data=t;this.callback(this.data),!0===t.running?(console.log("[Unitrad] continue..."),1===t.version&&0===this.data.books.length?setTimeout((()=>this.polling()),20):setTimeout((()=>this.polling()),500)):console.log("[Unitrad] complete.")}}}class m extends n.exports.Component{constructor(t){super(t),this.state={invalidISBN:!1,books:[]},this.timer=null,this.str="",this.prevISBN=null,this.documentCode=null}onKeyDown(t){const e=t||window.event,s=e.keyCode||e.which||e.charCode;"Enter"===t.key||13===s?(this.str.length>=10&&(l(this.str)?(this.setState({invalidISBN:!1}),this.addBook(this.str)):(this.setState({invalidISBN:!0}),this.pushTempBook(this.str))),this.timer&&clearTimeout(this.timer),this.str=""):(1===t.key.length?this.str+=t.key:this.str="",this.timer&&clearTimeout(this.timer),this.timer=setTimeout((()=>{console.log("clear"),this.str.length>=10&&(l(this.str)?(this.setState({invalidISBN:!1}),this.addBook(this.str)):(this.setState({invalidISBN:!0}),this.pushTempBook(this.str))),this.str=""}),300))}componentDidMount(){window.document.addEventListener("keydown",this.onKeyDown.bind(this))}addBook(t){new c({isbn:t,region:"recipe"},(t=>{if(t.count>=1){const e=t.books[0];this.pushBook(e.title,e.isbn)}else console.log("not found")}))}pushBook(t,e){this.prevISBN!==e&&(console.log(this.documentCode),this.documentCode?(this.state.books.shift(),this.state.books.unshift([{value:this.documentCode},{value:t},{value:e},{value:""}]),this.documentCode=null):this.state.books.unshift([{value:e},{value:t},{value:e},{value:""}]),this.setState({}),this.prevISBN=e)}pushTempBook(t){this.documentCode!==t&&(this.state.books.unshift([{value:t},{value:""},{value:""},{value:""}]),this.setState({}),this.documentCode=t)}render(){return 0===this.state.books.length?r.createElement("div",{className:"description"},r.createElement("div",null,r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},r.createElement("path",{d:"M0 448V64h18v384H0zm26.857-.273V64H36v383.727h-9.143zm27.143 0V64h8.857v383.727H54zm44.857 0V64h8.857v383.727h-8.857zm36 0V64h17.714v383.727h-17.714zm44.857 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm18 0V64h8.857v383.727h-8.857zm35.715 0V64h18v383.727h-18zm44.857 0V64h18v383.727h-18zm35.999 0V64h18.001v383.727h-18.001zm36.001 0V64h18.001v383.727h-18.001zm26.857 0V64h18v383.727h-18zm45.143 0V64h26.857v383.727h-26.857zm35.714 0V64h9.143v383.727H476zm18 .273V64h18v384h-18z"})),"バーコードをスキャンしてください")):r.createElement(a,{data:this.state.books,columnLabels:["id","title","isbn"]})}}h.render(r.createElement(m,null),document.getElementById("app"));
