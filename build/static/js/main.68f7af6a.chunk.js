(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{53:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(9),i=n.n(a),s=(n(53),n(25)),l=n.n(s),o=n(34),j=n(31),b=(n(55),n(37)),d=n.n(b),h=n(124),u=n(125),O=n(119),x=n(123),p=n(122),f=n(118),g=n(120),y=n(121),m=n(114),v=n(6);var w=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),i=Object(j.a)(a,2),s=i[0],b=i[1],w=Object(c.useState)(!0),k=Object(j.a)(w,2),T=k[0],C=k[1];return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("header",{children:Object(v.jsx)(m.a,{style:{padding:"40px",textAlign:"center",backgroundColor:"black"},children:Object(v.jsx)("h1",{style:{color:"white",fontFamily:"monospace"},children:"Terribily Tiny Tales"})})}),Object(v.jsx)("center",{children:Object(v.jsx)(m.a,{elevation:3,style:{padding:"50px",width:"60%",margin:"40px"},children:Object(v.jsxs)("center",{children:[Object(v.jsx)(h.a,{id:"outlined-basic",label:"Enter Roll numbers",variant:"outlined",style:{width:"60%",marginTop:"30px",marginLeft:"auto",marginRight:"auto"},onChange:function(e){r(e.target.value)}}),Object(v.jsx)("br",{}),Object(v.jsx)(u.a,{variant:"contained",style:{marginTop:"20px"},onClick:Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C(!1),fetch("/getresult",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({roll:n})}).then(function(){var e=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,b(n),C(!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)}))),children:"send"})]})})}),Object(v.jsxs)("center",{children:[T?Object(v.jsx)(f.a,{component:m.a,style:{width:"90%"},children:Object(v.jsxs)(O.a,{"aria-label":"simple table",children:[Object(v.jsx)(g.a,{children:Object(v.jsxs)(y.a,{style:{backgroundColor:"black"},children:[Object(v.jsx)(p.a,{align:"left",style:{color:"white"},children:"Roll Number"}),Object(v.jsx)(p.a,{align:"left",style:{color:"white"},children:"Result"})]})}),Object(v.jsx)(x.a,{children:0!==Object.keys(s).length?Object.keys(s).map((function(e){return Object(v.jsxs)(y.a,{children:[Object(v.jsx)(p.a,{children:e}),Object(v.jsx)(p.a,{children:s[e]})]})})):null})]})}):Object(v.jsx)(d.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}),"  "]})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,127)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(w,{})}),document.getElementById("root")),k()}},[[78,1,2]]]);
//# sourceMappingURL=main.68f7af6a.chunk.js.map