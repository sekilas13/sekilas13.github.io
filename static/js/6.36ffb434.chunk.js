(this["webpackJsonpkir-13"]=this["webpackJsonpkir-13"]||[]).push([[6],{240:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0);function r(){var e=Object(a.useRef)(!0),t=Object(a.useRef)((function(){return e.current}));return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},250:function(e,t,n){"use strict";n.r(t);var a=n(57),r=n(4),c=n(0),i=n.n(c),o=n(2),u=n(3),s=n(40);var l=function(e,t){var n=Object(c.useRef)(!0);Object(c.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)},f=n(72),d=n(240);function b(e){var t=function(e){var t=Object(c.useRef)(e);return t.current=e,t}(e);Object(c.useEffect)((function(){return function(){return t.current()}}),[])}var m=Math.pow(2,31)-1;function v(e,t,n){var a=n-Date.now();e.current=a<=m?setTimeout(t,a):setTimeout((function(){return v(e,t,n)}),m)}function h(){var e=Object(d.a)(),t=Object(c.useRef)();return b((function(){return clearTimeout(t.current)})),Object(c.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(a,r){void 0===r&&(r=0),e()&&(n(),r<=m?t.current=setTimeout(a,r):v(t,a,Date.now()+r))},clear:n}}),[])}var p=n(5),j=n.n(p),O=n(93),k=n(23),g=n(1),y=n.n(g),x=n(41),E=n(12),w=Object(E.a)("carousel-caption"),N=n(6),S=i.a.forwardRef((function(e,t){var n=e.as,a=void 0===n?"div":n,r=e.bsPrefix,c=e.children,s=e.className,l=Object(u.a)(e,["as","bsPrefix","children","className"]),f=j()(s,Object(N.a)(r,"carousel-item"));return i.a.createElement(a,Object(o.a)({ref:t},l,{className:f}),c)}));S.displayName="CarouselItem";var I=S;function C(e,t){var n=0;return i.a.Children.map(e,(function(e){return i.a.isValidElement(e)?t(e,n++):e}))}var M=n(74),R=n(73),T={bsPrefix:y.a.string,as:y.a.elementType,slide:y.a.bool,fade:y.a.bool,controls:y.a.bool,indicators:y.a.bool,activeIndex:y.a.number,onSelect:y.a.func,onSlide:y.a.func,onSlid:y.a.func,interval:y.a.number,keyboard:y.a.bool,pause:y.a.oneOf(["hover",!1]),wrap:y.a.bool,touch:y.a.bool,prevIcon:y.a.node,prevLabel:y.a.string,nextIcon:y.a.node,nextLabel:y.a.string},L={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:i.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:i.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var K=i.a.forwardRef((function(e,t){var n=Object(x.a)(e,{activeIndex:"onSelect"}),a=n.as,r=void 0===a?"div":a,d=n.bsPrefix,b=n.slide,m=n.fade,v=n.controls,p=n.indicators,g=n.activeIndex,y=n.onSelect,E=n.onSlide,w=n.onSlid,S=n.interval,I=n.keyboard,T=n.onKeyDown,L=n.pause,K=n.onMouseOver,D=n.onMouseOut,G=n.wrap,P=n.touch,A=n.onTouchStart,z=n.onTouchMove,H=n.onTouchEnd,F=n.prevIcon,J=n.prevLabel,W=n.nextIcon,q=n.nextLabel,B=n.className,V=n.children,X=Object(u.a)(n,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),Y=Object(N.a)(d,"carousel"),Q=Object(c.useRef)(null),U=Object(c.useState)("next"),Z=U[0],$=U[1],_=Object(c.useState)(!1),ee=_[0],te=_[1],ne=Object(c.useState)(g||0),ae=ne[0],re=ne[1];ee||g===ae||(Q.current?$(Q.current):$((g||0)>ae?"next":"prev"),b&&te(!0),re(g||0)),Object(c.useEffect)((function(){Q.current&&(Q.current=null)}));var ce,ie=0;!function(e,t){var n=0;i.a.Children.forEach(e,(function(e){i.a.isValidElement(e)&&t(e,n++)}))}(V,(function(e,t){++ie,t===g&&(ce=e.props.interval)}));var oe=Object(f.a)(ce),ue=Object(c.useCallback)((function(e){if(!ee){var t=ae-1;if(t<0){if(!G)return;t=ie-1}Q.current="prev",y&&y(t,e)}}),[ee,ae,y,G,ie]),se=Object(s.a)((function(e){if(!ee){var t=ae+1;if(t>=ie){if(!G)return;t=0}Q.current="next",y&&y(t,e)}})),le=Object(c.useRef)();Object(c.useImperativeHandle)(t,(function(){return{element:le.current,prev:ue,next:se}}));var fe=Object(s.a)((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(le.current)&&se()})),de="next"===Z?"left":"right";l((function(){b||(E&&E(ae,de),w&&w(ae,de))}),[ae]);var be=Y+"-item-"+Z,me=Y+"-item-"+de,ve=Object(c.useCallback)((function(e){Object(R.a)(e),E&&E(ae,de)}),[E,ae,de]),he=Object(c.useCallback)((function(){te(!1),w&&w(ae,de)}),[w,ae,de]),pe=Object(c.useCallback)((function(e){if(I&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void ue(e);case"ArrowRight":return e.preventDefault(),void se(e)}T&&T(e)}),[I,T,ue,se]),je=Object(c.useState)(!1),Oe=je[0],ke=je[1],ge=Object(c.useCallback)((function(e){"hover"===L&&ke(!0),K&&K(e)}),[L,K]),ye=Object(c.useCallback)((function(e){ke(!1),D&&D(e)}),[D]),xe=Object(c.useRef)(0),Ee=Object(c.useRef)(0),we=Object(c.useState)(!1),Ne=we[0],Se=we[1],Ie=h(),Ce=Object(c.useCallback)((function(e){xe.current=e.touches[0].clientX,Ee.current=0,P&&Se(!0),A&&A(e)}),[P,A]),Me=Object(c.useCallback)((function(e){e.touches&&e.touches.length>1?Ee.current=0:Ee.current=e.touches[0].clientX-xe.current,z&&z(e)}),[z]),Re=Object(c.useCallback)((function(e){if(P){var t=Ee.current;if(Math.abs(t)<=40)return;t>0?ue(e):se(e)}Ie.set((function(){Se(!1)}),S||void 0),H&&H(e)}),[P,ue,se,Ie,S,H]),Te=null!=S&&!Oe&&!Ne&&!ee,Le=Object(c.useRef)();Object(c.useEffect)((function(){var e,t;if(Te)return Le.current=window.setInterval(document.visibilityState?fe:se,null!=(e=null!=(t=oe.current)?t:S)?e:void 0),function(){null!==Le.current&&clearInterval(Le.current)}}),[Te,se,oe,S,fe]);var Ke=Object(c.useMemo)((function(){return p&&Array.from({length:ie},(function(e,t){return function(e){y&&y(t,e)}}))}),[p,ie,y]);return i.a.createElement(r,Object(o.a)({ref:le},X,{onKeyDown:pe,onMouseOver:ge,onMouseOut:ye,onTouchStart:Ce,onTouchMove:Me,onTouchEnd:Re,className:j()(B,Y,b&&"slide",m&&Y+"-fade")}),p&&i.a.createElement("ol",{className:Y+"-indicators"},C(V,(function(e,t){return i.a.createElement("li",{key:t,className:t===ae?"active":void 0,onClick:Ke?Ke[t]:void 0})}))),i.a.createElement("div",{className:Y+"-inner"},C(V,(function(e,t){var n=t===ae;return b?i.a.createElement(k.e,{in:n,onEnter:n?ve:void 0,onEntered:n?he:void 0,addEndListener:O.a},(function(t){return i.a.cloneElement(e,{className:j()(e.props.className,n&&"entered"!==t&&be,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&me)})})):i.a.cloneElement(e,{className:j()(e.props.className,n&&"active")})}))),v&&i.a.createElement(i.a.Fragment,null,(G||0!==g)&&i.a.createElement(M.a,{className:Y+"-control-prev",onClick:ue},F,J&&i.a.createElement("span",{className:"sr-only"},J)),(G||g!==ie-1)&&i.a.createElement(M.a,{className:Y+"-control-next",onClick:se},W,q&&i.a.createElement("span",{className:"sr-only"},q))))}));K.displayName="Carousel",K.propTypes=T,K.defaultProps=L,K.Caption=w,K.Item=I;var D=K,G=n(17),P=[{alt:"Gambar background Edwin 1",capt:["Edwin",'"Bagus, karna mereka slalu membuat penemuan yang mengejutkan"']},{alt:"Gambar background Miko 2",capt:["Luthfi Jatmiko",'"Eskulnya santai sih, bercanda juga iya. Bukannya ga serius tapi biar nyaman aja"']},{alt:"Gambar background Kenzie 3",capt:["Kenziro Andriano",'"Ya seru lah dapet banyak pengalaman"']},{alt:"Gambar background Djilan 4",capt:["Djilan",'"Eskulnya santai sih,selama di KIR ga terlalu ketat banget buat nugas, tapi bebas eksperimen"']},{alt:"Gambar background Muflih 5",capt:["Rifqi Muflih",'"Eskulnya fleksibel, bisa maen biasa aja, ga terlalu banyak duit keluar"']},{alt:"Gambar background Fathur 6",capt:["Fathur Rochman",'"KIR sih sama aja kayak eskul kebanyakan, bedanya disini eksperimennya unik sama seru"']},{alt:"Gambar background Michelle 7",capt:["Michelle Safana",'"Ekskul KIR itu ekskul yg berbeda,karena disini fleksibel,gak terikat sama waktu, eksperimen nya asik dan kita tidak dipaksa berhasil dalam mencoba eksperimen nya"']}];t.default=function(){var e=Object(c.useContext)(G.a),t=Object(c.useState)(3),n=Object(a.a)(t,2),i=n[0],o=n[1],u=Object(c.useState)({width:window.innerWidth,height:window.innerHeight}),s=Object(a.a)(u,2),l=s[0],f=s[1];return Object(c.useEffect)((function(){var e=document.querySelector("#KataOrang"),t={width:e.offsetWidth,height:e.offsetHeight};function n(){var t={width:e.offsetWidth,height:e.offsetHeight};f(Object.assign({},t))}return f(Object.assign({},t)),window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]),Object(r.jsx)("section",{id:"KataOrang",children:Object(r.jsx)(D,{activeIndex:i,onSelect:function(e,t){o(e)},children:P.map((function(t,n){return Object(r.jsxs)(D.Item,{children:[Object(r.jsx)("img",{className:"d-block w-100",src:"https://via.placeholder.com/".concat(l.width,"x").concat(l.height,"/").concat("light"===e.theme?"f1faee":"373940","/fff&text=+"),alt:t.alt}),Object(r.jsxs)(D.Caption,{children:[Object(r.jsx)("h3",{style:{color:"light"===e.theme?"000":"fff"},children:t.capt[0]}),Object(r.jsx)("p",{style:{color:"light"===e.theme?"000":"fff"},children:t.capt[1]})]})]},n)}))})})}}}]);
//# sourceMappingURL=6.36ffb434.chunk.js.map