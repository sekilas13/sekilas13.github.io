(this["webpackJsonpkir-13"]=this["webpackJsonpkir-13"]||[]).push([[8],{145:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0);function r(){var e=Object(a.useRef)(!0),t=Object(a.useRef)((function(){return e.current}));return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},280:function(e,t,n){"use strict";n.r(t);var a=n(36),r=n(1),c=n(0),i=n.n(c),o=n(14),u=[{alt:"Gambar background Edwin 1",capt:["Edwin",'"Bagus, karna mereka slalu membuat penemuan yang mengejutkan"']},{alt:"Gambar background Miko 2",capt:["Luthfi Jatmiko",'"Eskulnya santai sih, bercanda juga iya. Bukannya ga serius tapi biar nyaman aja"']},{alt:"Gambar background Kenzie 3",capt:["Kenziro Andriano",'"Ya seru lah dapet banyak pengalaman"']},{alt:"Gambar background Djilan 4",capt:["Djilan",'"Eskulnya santai sih,selama di KIR ga terlalu ketat banget buat nugas, tapi bebas eksperimen"']},{alt:"Gambar background Muflih 5",capt:["Rifqi Muflih",'"Eskulnya fleksibel, bisa maen biasa aja, ga terlalu banyak duit keluar"']},{alt:"Gambar background Fathur 6",capt:["Fathur Rochman",'"KIR sih sama aja kayak eskul kebanyakan, bedanya disini eksperimennya unik sama seru"']},{alt:"Gambar background Michelle 7",capt:["Michelle Safana",'"Ekskul KIR itu ekskul yg berbeda,karena disini fleksibel,gak terikat sama waktu, eksperimen nya asik dan kita tidak dipaksa berhasil dalam mencoba eksperimen nya"']}],s=n(2),l=n(3),f=n(90);var d=function(e,t){var n=Object(c.useRef)(!0);Object(c.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)},b=n(107),m=n(145);function v(e){var t=function(e){var t=Object(c.useRef)(e);return t.current=e,t}(e);Object(c.useEffect)((function(){return function(){return t.current()}}),[])}var h=Math.pow(2,31)-1;function p(e,t,n){var a=n-Date.now();e.current=a<=h?setTimeout(t,a):setTimeout((function(){return p(e,t,n)}),h)}function j(){var e=Object(m.a)(),t=Object(c.useRef)();return v((function(){return clearTimeout(t.current)})),Object(c.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(a,r){void 0===r&&(r=0),e()&&(n(),r<=h?t.current=setTimeout(a,r):p(t,a,Date.now()+r))},clear:n}}),[])}var O=n(7),k=n.n(O),g=n(139),y=n(140),x=n(5),E=n.n(x),w=n(101),N=n(12),S=Object(N.a)("carousel-caption"),I=n(9),C=i.a.forwardRef((function(e,t){var n=e.as,a=void 0===n?"div":n,r=e.bsPrefix,c=e.children,o=e.className,u=Object(l.default)(e,["as","bsPrefix","children","className"]),f=k()(o,Object(I.a)(r,"carousel-item"));return i.a.createElement(a,Object(s.default)({ref:t},u,{className:f}),c)}));C.displayName="CarouselItem";var M=C;function R(e,t){var n=0;return i.a.Children.map(e,(function(e){return i.a.isValidElement(e)?t(e,n++):e}))}var T=n(105),L=n(108),K={bsPrefix:E.a.string,as:E.a.elementType,slide:E.a.bool,fade:E.a.bool,controls:E.a.bool,indicators:E.a.bool,activeIndex:E.a.number,onSelect:E.a.func,onSlide:E.a.func,onSlid:E.a.func,interval:E.a.number,keyboard:E.a.bool,pause:E.a.oneOf(["hover",!1]),wrap:E.a.bool,touch:E.a.bool,prevIcon:E.a.node,prevLabel:E.a.string,nextIcon:E.a.node,nextLabel:E.a.string},D={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:i.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:i.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var G=i.a.forwardRef((function(e,t){var n=Object(w.a)(e,{activeIndex:"onSelect"}),a=n.as,r=void 0===a?"div":a,o=n.bsPrefix,u=n.slide,m=n.fade,v=n.controls,h=n.indicators,p=n.activeIndex,O=n.onSelect,x=n.onSlide,E=n.onSlid,N=n.interval,S=n.keyboard,C=n.onKeyDown,M=n.pause,K=n.onMouseOver,D=n.onMouseOut,G=n.wrap,P=n.touch,A=n.onTouchStart,z=n.onTouchMove,H=n.onTouchEnd,F=n.prevIcon,J=n.prevLabel,W=n.nextIcon,q=n.nextLabel,B=n.className,V=n.children,X=Object(l.default)(n,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),Y=Object(I.a)(o,"carousel"),Q=Object(c.useRef)(null),U=Object(c.useState)("next"),Z=U[0],$=U[1],_=Object(c.useState)(!1),ee=_[0],te=_[1],ne=Object(c.useState)(p||0),ae=ne[0],re=ne[1];ee||p===ae||(Q.current?$(Q.current):$((p||0)>ae?"next":"prev"),u&&te(!0),re(p||0)),Object(c.useEffect)((function(){Q.current&&(Q.current=null)}));var ce,ie=0;!function(e,t){var n=0;i.a.Children.forEach(e,(function(e){i.a.isValidElement(e)&&t(e,n++)}))}(V,(function(e,t){++ie,t===p&&(ce=e.props.interval)}));var oe=Object(b.a)(ce),ue=Object(c.useCallback)((function(e){if(!ee){var t=ae-1;if(t<0){if(!G)return;t=ie-1}Q.current="prev",O&&O(t,e)}}),[ee,ae,O,G,ie]),se=Object(f.a)((function(e){if(!ee){var t=ae+1;if(t>=ie){if(!G)return;t=0}Q.current="next",O&&O(t,e)}})),le=Object(c.useRef)();Object(c.useImperativeHandle)(t,(function(){return{element:le.current,prev:ue,next:se}}));var fe=Object(f.a)((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(le.current)&&se()})),de="next"===Z?"left":"right";d((function(){u||(x&&x(ae,de),E&&E(ae,de))}),[ae]);var be=Y+"-item-"+Z,me=Y+"-item-"+de,ve=Object(c.useCallback)((function(e){Object(L.a)(e),x&&x(ae,de)}),[x,ae,de]),he=Object(c.useCallback)((function(){te(!1),E&&E(ae,de)}),[E,ae,de]),pe=Object(c.useCallback)((function(e){if(S&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void ue(e);case"ArrowRight":return e.preventDefault(),void se(e)}C&&C(e)}),[S,C,ue,se]),je=Object(c.useState)(!1),Oe=je[0],ke=je[1],ge=Object(c.useCallback)((function(e){"hover"===M&&ke(!0),K&&K(e)}),[M,K]),ye=Object(c.useCallback)((function(e){ke(!1),D&&D(e)}),[D]),xe=Object(c.useRef)(0),Ee=Object(c.useRef)(0),we=Object(c.useState)(!1),Ne=we[0],Se=we[1],Ie=j(),Ce=Object(c.useCallback)((function(e){xe.current=e.touches[0].clientX,Ee.current=0,P&&Se(!0),A&&A(e)}),[P,A]),Me=Object(c.useCallback)((function(e){e.touches&&e.touches.length>1?Ee.current=0:Ee.current=e.touches[0].clientX-xe.current,z&&z(e)}),[z]),Re=Object(c.useCallback)((function(e){if(P){var t=Ee.current;if(Math.abs(t)<=40)return;t>0?ue(e):se(e)}Ie.set((function(){Se(!1)}),N||void 0),H&&H(e)}),[P,ue,se,Ie,N,H]),Te=null!=N&&!Oe&&!Ne&&!ee,Le=Object(c.useRef)();Object(c.useEffect)((function(){var e,t;if(Te)return Le.current=window.setInterval(document.visibilityState?fe:se,null!=(e=null!=(t=oe.current)?t:N)?e:void 0),function(){null!==Le.current&&clearInterval(Le.current)}}),[Te,se,oe,N,fe]);var Ke=Object(c.useMemo)((function(){return h&&Array.from({length:ie},(function(e,t){return function(e){O&&O(t,e)}}))}),[h,ie,O]);return i.a.createElement(r,Object(s.default)({ref:le},X,{onKeyDown:pe,onMouseOver:ge,onMouseOut:ye,onTouchStart:Ce,onTouchMove:Me,onTouchEnd:Re,className:k()(B,Y,u&&"slide",m&&Y+"-fade")}),h&&i.a.createElement("ol",{className:Y+"-indicators"},R(V,(function(e,t){return i.a.createElement("li",{key:t,className:t===ae?"active":void 0,onClick:Ke?Ke[t]:void 0})}))),i.a.createElement("div",{className:Y+"-inner"},R(V,(function(e,t){var n=t===ae;return u?i.a.createElement(y.e,{in:n,onEnter:n?ve:void 0,onEntered:n?he:void 0,addEndListener:g.a},(function(t){return i.a.cloneElement(e,{className:k()(e.props.className,n&&"entered"!==t&&be,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&me)})})):i.a.cloneElement(e,{className:k()(e.props.className,n&&"active")})}))),v&&i.a.createElement(i.a.Fragment,null,(G||0!==p)&&i.a.createElement(T.a,{className:Y+"-control-prev",onClick:ue},F,J&&i.a.createElement("span",{className:"sr-only"},J)),(G||p!==ie-1)&&i.a.createElement(T.a,{className:Y+"-control-next",onClick:se},W,q&&i.a.createElement("span",{className:"sr-only"},q))))}));G.displayName="Carousel",G.propTypes=K,G.defaultProps=D,G.Caption=S,G.Item=M;var P=G,A=n(13);t.default=Object(c.memo)(Object(A.a)((function(){var e=Object(c.useContext)(o.a),t=Object(c.useState)(3),n=Object(a.a)(t,2),i=n[0],s=n[1],l=Object(c.useState)({width:window.innerWidth,height:window.innerHeight}),f=Object(a.a)(l,2),d=f[0],b=f[1],m=Object(c.useMemo)((function(e){s(e)}),[]);return Object(c.useEffect)((function(){var e=document.querySelector("#KataOrang"),t={width:e.offsetWidth,height:e.offsetHeight};function n(){var t={width:e.offsetWidth,height:e.offsetHeight};b(Object.assign({},t))}return b(Object.assign({},t)),window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]),Object(r.jsx)("section",{id:"KataOrang",children:Object(r.jsx)(P,{activeIndex:i,onSelect:m,children:u.map((function(t,n){return Object(r.jsxs)(P.Item,{children:[Object(r.jsx)("img",{className:"d-block w-100",src:"https://via.placeholder.com/".concat(d.width,"x").concat(d.height,"/").concat("light"===e.theme?"f1faee":"373940","/fff&text=+"),alt:t.alt}),Object(r.jsxs)(P.Caption,{children:[Object(r.jsx)("h3",{style:{color:"light"===e.theme?"000":"fff"},children:t.capt[0]}),Object(r.jsx)("p",{style:{color:"light"===e.theme?"000":"fff"},children:t.capt[1]})]})]},n)}))})})})))}}]);
//# sourceMappingURL=8.ce879fe8.chunk.js.map