(this["webpackJsonpkir-13"]=this["webpackJsonpkir-13"]||[]).push([[27],{169:function(a,n,t){"use strict";t.r(n);var e=t(2),i=t(56),o=t(151),r=t(0),s={"/":[{nama:"Deskripsi",to:"#deskripsi"},{nama:"Pandangan Orang",to:"#KataOrang"},{nama:"Gambar",to:"#gambar"}],"/covid":[{nama:"Kondisi Terkini",to:"#all"},{nama:"Data Provinsi",to:"#provinsi"}]};function c(a){var n=a.path,t=a.getHeight,r=a.expanded,c=a.setExpandClose,d=function(a){a.preventDefault(),c();var n=t();if(n){var e=document.querySelector(a.target.id);if(r)setTimeout((function(){var a=e.offsetTop-n;window.scrollTo(0,a)}),150);else{var i=e.offsetTop-n;window.scrollTo(0,i)}}},l=s[n];return Object(e.jsx)(e.Fragment,{children:l&&Object(e.jsxs)(e.Fragment,{children:[Object(e.jsx)(o.a.Link,{as:i.b,to:"/"===n?"/covid":"/",onClick:function(){return r&&c()},children:"/"===n?"Informasi Covid 19":"Halaman Utama"}),l.map((function(a,n){return Object(e.jsx)(o.a.Link,{href:a.to,id:a.to,onClick:d,children:a.nama},n)}))]})})}n.default=Object(r.memo)(c)}}]);
//# sourceMappingURL=27.23708b27.chunk.js.map