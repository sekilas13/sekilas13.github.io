(this["webpackJsonpkir-13"]=this["webpackJsonpkir-13"]||[]).push([[22],{289:function(e,t,n){"use strict";n.r(t);var a=n(140),c=n(53),o=n(3),r=n(0),i=n(290),s=n(91),l=n(273),u=n(4),m=n(13),d=n(274),j=n(90);function b(e){var t=e.theme,n=e.tToggler;return Object(o.jsx)(j.a,{type:"switch",id:"custom-switch",checked:"light"!==t,onChange:n,label:"\u200c"})}var h=Object(r.memo)(b),f=n(72),O=n(59),g=n(94);function x(e){var t="dark"===e.theme?O.c:g.a;return Object(o.jsx)(f.a,{icon:t})}var p=Object(r.memo)(x);function v(e){var t="dark"===e.theme?g.b:O.e;return Object(o.jsx)(f.a,{icon:t})}var k=Object(r.memo)(v);function T(e){var t=e.theme,n=e.tToggler;return Object(o.jsx)(d.a,{children:Object(o.jsxs)(d.a.Row,{className:"justify-content-center",children:[Object(o.jsx)("small",{className:"sun",children:Object(o.jsx)(k,{theme:t})}),Object(o.jsx)(h,{theme:t,tToggler:n}),Object(o.jsx)("small",{className:"moon",children:Object(o.jsx)(p,{theme:t})})]})})}var w=function(e,t){return e.theme===t.theme},C=Object(r.memo)(T,w),y=n(26),S={"/":[{nama:"Deskripsi",to:"#deskripsi"},{nama:"Pandangan Orang",to:"#KataOrang"},{nama:"Gambar",to:"#gambar"}],"/covid":[{nama:"Kondisi Terkini",to:"#all"},{nama:"Data Provinsi",to:"#provinsi"}]};function N(e){var t=e.path,n=e.getHeight,a=e.expanded,c=e.setExpandClose,r=function(e){e.preventDefault(),c();var t=n();if(t){var o=document.querySelector(e.target.id);if(a)setTimeout((function(){var e=o.offsetTop-t;window.scrollTo(0,e)}),150);else{var r=o.offsetTop-t;window.scrollTo(0,r)}}},i=S[t];return Object(o.jsx)(o.Fragment,{children:i&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l.a.Link,{as:y.b,to:"/"===t?"/covid":"/",onClick:function(){return a&&c()},children:"/"===t?"Informasi Covid 19":"Halaman Utama"}),i.map((function(e,t){return Object(o.jsx)(l.a.Link,{href:e.to,id:e.to,onClick:r,children:e.nama},t)}))]})})}var q=Object(r.memo)(N),D=n(19);t.default=Object(r.memo)(Object(D.a)((function(){var e=Object(r.useContext)(m.a),t=Object(r.useRef)(),n=function(){var e=Object(r.useContext)(m.a),t=document.querySelector('meta[name="theme-color"]'),n=document.querySelector('meta[name="msapplication-TileColor"]'),a="#f0efeb",c="#323234",o=function(t){window.localStorage.setItem("theme",t),e.setTheme(t)};return Object(r.useEffect)((function(){var r=window.localStorage.getItem("theme");r?e.setTheme(r):o("light"),r&&"light"===r?(t.content=a,n.content=a):(t.content=c,n.content=c)}),[]),[function(){"light"===e.theme?(o("dark"),t.content=c,n.content=c):(o("light"),t.content=a,n.content=a)}]}(),d=Object(c.a)(n,1)[0],j=Object(r.useState)({expanded:!1}),b=Object(c.a)(j,2),h=b[0],f=b[1],O=Object(u.g)(),g=Object(u.f)(),x=e.theme,p=Object(r.useCallback)((function(e){return f(Object(a.a)(Object(a.a)({},h),e))}),[h]),v=Object(r.useCallback)((function(){return p({expanded:!1})}),[p]),k=Object(r.useCallback)((function(){d()}),[d]),T=Object(r.useCallback)((function(){return t.current?t.current.getBoundingClientRect().height:t.current}),[t]);return Object(o.jsx)(i.a,{bg:"light"===x&&x,variant:x,className:"dark"===x&&"navbar-custom",sticky:"top",expand:"lg",expanded:h.expanded,onToggle:function(){return p({expanded:!h.expanded})},ref:t,children:Object(o.jsxs)(s.a,{children:[Object(o.jsx)(i.a.Brand,{href:"#",onClick:function(e){(e.preventDefault(),"/"===O.pathname)?(document.querySelectorAll(".nav-link").forEach((function(e){e.classList.remove("active")})),h.expanded?(p({expanded:!1}),setTimeout((function(){return window.scrollTo(0,0)}),150)):window.scrollTo(0,0)):h.expanded?(p({expanded:!1}),setTimeout((function(){return g.push("/")}),300)):g.push("/")},children:"KIR"}),Object(o.jsx)(i.a.Toggle,{"aria-controls":"navigasi-nav"}),Object(o.jsxs)(i.a.Collapse,{id:"navigasi-nav",children:[Object(o.jsx)(l.a,{className:"ml-auto text-center",children:Object(o.jsx)(q,{path:O.pathname,getHeight:T,expanded:h.expanded,setExpandClose:v})}),Object(o.jsx)(C,{theme:x,tToggler:k})]})]})})})))}}]);
//# sourceMappingURL=22.cc258324.chunk.js.map