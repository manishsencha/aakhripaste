(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(31),o=n.n(c),r=(n(36),n(19)),s=n(2),i=n(10),u=n.n(i),l=n(13),d=n(5),f=n(16),j=n(15),p=n.n(j),b=n(14),h=n.n(b),O=n(4);var x=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)("txt"),r=Object(d.a)(o,1)[0],i=Object(s.f)(),j=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ctrlKey||"s"!==t.key.toLowerCase()){e.next=7;break}if(t.preventDefault(),console.log(n),""!==n.trim()){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,h.a.post("/",{code:n}).then((function(e){console.log(e),c("");var t=e.data.link;console.log(t),i.push("/"+t)})).catch((function(e){alert(e)}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){return window.addEventListener("keydown",j),function(){window.removeEventListener("keydown",j)}}),[n]),Object(O.jsx)(f.a,{className:"app_editor",defaultValue:n,defaultLanguage:r,onChange:function(e){c(e)},theme:"vs-dark",options:{minimap:{enabled:!1},scroolBar:{smoothScrolling:!0}},loading:Object(O.jsx)(p.a,{color:"#000",loading:!0,size:50})})};n(67);var v=function(e){var t=e.match.params.id,n=Object(s.f)(),c=Object(a.useState)(""),o=Object(d.a)(c,2),r=o[0],i=o[1],j=Object(a.useState)("txt"),b=Object(d.a)(j,1)[0];return Object(a.useEffect)(Object(l.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=window.location.protocol+"//"+window.location.host,console.log(a),e.next=4,h.a.post("/".concat(t)).then(function(){var e=Object(l.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,t.data.code;case 3:a=e.sent,console.log(a),200!==t.status?n.push("/"):i(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){alert(e)}));case 4:case"end":return e.stop()}}),e)}))),[]),Object(O.jsx)(f.a,{defaultLanguage:b,value:r,theme:"vs-dark",options:{minimap:{enabled:!1},scroolBar:{smoothScrolling:!0},readOnly:!0},loading:Object(O.jsx)(p.a,{color:"#000",loading:!0,size:50})})};var m=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(r.a,{children:Object(O.jsxs)(s.c,{children:[Object(O.jsx)(s.a,{exact:!0,path:"/",children:Object(O.jsx)(x,{})}),Object(O.jsx)(s.a,{exact:!0,path:"/:id",component:v})]})})})};o.a.render(Object(O.jsx)(m,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.17d1f3ee.chunk.js.map