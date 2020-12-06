/*! For license information please see 8.1d4ecd5e.chunk.js.LICENSE.txt */
(this["webpackJsonpkir-13"]=this["webpackJsonpkir-13"]||[]).push([[8],{144:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(77);function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},145:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,a,r,n,l,i){var c=n||"<<anonymous>>",o=i||r;if(null==a[r])return t?new Error("Required "+l+" `"+o+"` was not specified in `"+c+"`."):null;for(var s=arguments.length,u=Array(s>6?s-6:0),f=6;f<s;f++)u[f-6]=arguments[f];return e.apply(void 0,[a,r,c,l,o].concat(u))}var a=t.bind(null,!1);return a.isRequired=t.bind(null,!0),a},e.exports=t.default},272:function(e,t,a){"use strict";var r=a(2),n=a(8),l=a(43),i=a.n(l),c=(a(65),a(0)),o=a.n(c),s=a(93),u=a(44),f=a(66),d=a(62),b=Function.prototype.bind.call(Function.prototype.call,[].slice);var m=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};var v=function(e,t){return Object(c.useMemo)((function(){return function(e,t){var a=m(e),r=m(t);return function(e){a&&a(e),r&&r(e)}}(e,t)}),[e,t])},p=o.a.createContext(null);p.displayName="NavContext";var O=p,j=a(80),y=o.a.createContext(null),x=function(){},N=o.a.forwardRef((function(e,t){var a,l,i=e.as,s=void 0===i?"ul":i,u=e.onSelect,f=e.activeKey,d=e.role,m=e.onKeyDown,p=Object(n.default)(e,["as","onSelect","activeKey","role","onKeyDown"]),N=Object(c.useReducer)((function(e){return!e}),!1)[1],g=Object(c.useRef)(!1),h=Object(c.useContext)(j.a),P=Object(c.useContext)(y);P&&(d=d||"tablist",f=P.activeKey,a=P.getControlledId,l=P.getControllerId);var E=Object(c.useRef)(null),C=function(e){var t=E.current;if(!t)return null;var a,r=(a="[data-rb-event-key]:not(.disabled)",b(t.querySelectorAll(a))),n=t.querySelector(".active");if(!n)return null;var l=r.indexOf(n);if(-1===l)return null;var i=l+e;return i>=r.length&&(i=0),i<0&&(i=r.length-1),r[i]},w=function(e,t){null!=e&&(u&&u(e,t),h&&h(e,t))};Object(c.useEffect)((function(){if(E.current&&g.current){var e=E.current.querySelector("[data-rb-event-key].active");e&&e.focus()}g.current=!1}));var I=v(t,E);return o.a.createElement(j.a.Provider,{value:w},o.a.createElement(O.Provider,{value:{role:d,activeKey:Object(j.b)(f),getControlledId:a||x,getControllerId:l||x}},o.a.createElement(s,Object(r.default)({},p,{onKeyDown:function(e){var t;switch(m&&m(e),e.key){case"ArrowLeft":case"ArrowUp":t=C(-1);break;case"ArrowRight":case"ArrowDown":t=C(1);break;default:return}t&&(e.preventDefault(),w(t.dataset.rbEventKey,e),g.current=!0,N())},ref:I,role:d}))))})),g=o.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,c=e.children,s=e.as,f=void 0===s?"div":s,d=Object(n.default)(e,["bsPrefix","className","children","as"]);return a=Object(u.a)(a,"nav-item"),o.a.createElement(f,Object(r.default)({},d,{ref:t,className:i()(l,a)}),c)}));g.displayName="NavItem";var h=g,P=a(100),E=a(81),C=(a(79),o.a.forwardRef((function(e,t){var a=e.active,l=e.className,s=e.eventKey,u=e.onSelect,f=e.onClick,d=e.as,b=Object(n.default)(e,["active","className","eventKey","onSelect","onClick","as"]),m=Object(j.b)(s,b.href),v=Object(c.useContext)(j.a),p=Object(c.useContext)(O),y=a;if(p){b.role||"tablist"!==p.role||(b.role="tab");var x=p.getControllerId(m),N=p.getControlledId(m);b["data-rb-event-key"]=m,b.id=x||b.id,b["aria-controls"]=N||b["aria-controls"],y=null==a&&null!=m?p.activeKey===m:a}"tab"===b.role&&(b.tabIndex=y?b.tabIndex:-1,b["aria-selected"]=y);var g=Object(E.a)((function(e){f&&f(e),null!=m&&(u&&u(m,e),v&&v(m,e))}));return o.a.createElement(d,Object(r.default)({},b,{ref:t,onClick:g,className:i()(l,y&&"active")}))})));C.defaultProps={disabled:!1};var w=C,I={disabled:!1,as:P.a},k=o.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.disabled,c=e.className,s=e.href,f=e.eventKey,d=e.onSelect,b=e.as,m=Object(n.default)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return a=Object(u.a)(a,"nav-link"),o.a.createElement(w,Object(r.default)({},m,{href:s,ref:t,eventKey:f,as:b,disabled:l,onSelect:d,className:i()(c,a,l&&"disabled")}))}));k.displayName="NavLink",k.defaultProps=I;var F=k,S=o.a.forwardRef((function(e,t){var a,l,b,m=Object(s.a)(e,{activeKey:"onSelect"}),v=m.as,p=void 0===v?"div":v,O=m.bsPrefix,j=m.variant,y=m.fill,x=m.justify,g=m.navbar,h=m.className,P=m.children,E=m.activeKey,C=Object(n.default)(m,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),w=Object(u.a)(O,"nav"),I=!1,k=Object(c.useContext)(f.a),F=Object(c.useContext)(d.a);return k?(l=k.bsPrefix,I=null==g||g):F&&(b=F.cardHeaderBsPrefix),o.a.createElement(N,Object(r.default)({as:p,ref:t,activeKey:E,className:i()(h,(a={},a[w]=!I,a[l+"-nav"]=I,a[b+"-"+j]=!!b,a[w+"-"+j]=!!j,a[w+"-fill"]=y,a[w+"-justified"]=x,a))},C),P)}));S.displayName="Nav",S.defaultProps={justify:!1,fill:!1},S.Item=h,S.Link=F;t.a=S},274:function(e,t,a){"use strict";var r=a(2),n=a(8),l=a(43),i=a.n(l),c=a(0),o=a.n(c),s=a(94),u=(a(65),a(78)),f=a(47),d=a(44),b=o.a.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,s=e.bsCustomPrefix,u=e.className,b=e.isValid,m=e.isInvalid,v=e.lang,p=e.as,O=void 0===p?"input":p,j=Object(n.default)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),y=Object(c.useContext)(f.a),x=y.controlId,N=y.custom?[s,"custom-file-input"]:[l,"form-control-file"],g=N[0],h=N[1];return l=Object(d.a)(g,h),o.a.createElement(O,Object(r.default)({},j,{ref:t,id:a||x,type:"file",lang:v,className:i()(u,l,b&&"is-valid",m&&"is-invalid")}))}));b.displayName="FormFileInput";var m=b,v=o.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.bsCustomPrefix,s=e.className,u=e.htmlFor,b=Object(n.default)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),m=Object(c.useContext)(f.a),v=m.controlId,p=m.custom?[l,"custom-file-label"]:[a,"form-file-label"],O=p[0],j=p[1];return a=Object(d.a)(O,j),o.a.createElement("label",Object(r.default)({},b,{ref:t,htmlFor:u||v,className:i()(s,a),"data-browse":b["data-browse"]}))}));v.displayName="FormFileLabel";var p=v,O=o.a.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,s=e.bsCustomPrefix,b=e.disabled,v=void 0!==b&&b,O=e.isValid,j=void 0!==O&&O,y=e.isInvalid,x=void 0!==y&&y,N=e.feedbackTooltip,g=void 0!==N&&N,h=e.feedback,P=e.className,E=e.style,C=e.label,w=e.children,I=e.custom,k=e.lang,F=e["data-browse"],S=e.as,R=void 0===S?"div":S,T=e.inputAs,K=void 0===T?"input":T,A=Object(n.default)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),M=I?[s,"custom"]:[l,"form-file"],L=M[0],V=M[1];l=Object(d.a)(L,V);var D=Object(c.useContext)(f.a).controlId,z=Object(c.useMemo)((function(){return{controlId:a||D,custom:I}}),[D,I,a]),_=null!=C&&!1!==C&&!w,q=o.a.createElement(m,Object(r.default)({},A,{ref:t,isValid:j,isInvalid:x,disabled:v,as:K,lang:k}));return o.a.createElement(f.a.Provider,{value:z},o.a.createElement(R,{style:E,className:i()(P,l,I&&"custom-file")},w||o.a.createElement(o.a.Fragment,null,I?o.a.createElement(o.a.Fragment,null,q,_&&o.a.createElement(p,{"data-browse":F},C)):o.a.createElement(o.a.Fragment,null,_&&o.a.createElement(p,null,C),q),(j||x)&&o.a.createElement(u.a,{type:j?"valid":"invalid",tooltip:g},h))))}));O.displayName="FormFile",O.Input=m,O.Label=p;var j=O,y=(a(79),o.a.forwardRef((function(e,t){var a,l,s=e.bsPrefix,u=e.bsCustomPrefix,b=e.type,m=e.size,v=e.htmlSize,p=e.id,O=e.className,j=e.isValid,y=void 0!==j&&j,x=e.isInvalid,N=void 0!==x&&x,g=e.plaintext,h=e.readOnly,P=e.custom,E=e.as,C=void 0===E?"input":E,w=Object(n.default)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),I=Object(c.useContext)(f.a).controlId,k=P?[u,"custom"]:[s,"form-control"],F=k[0],S=k[1];if(s=Object(d.a)(F,S),g)(l={})[s+"-plaintext"]=!0,a=l;else if("file"===b){var R;(R={})[s+"-file"]=!0,a=R}else if("range"===b){var T;(T={})[s+"-range"]=!0,a=T}else if("select"===C&&P){var K;(K={})[s+"-select"]=!0,K[s+"-select-"+m]=m,a=K}else{var A;(A={})[s]=!0,A[s+"-"+m]=m,a=A}return o.a.createElement(C,Object(r.default)({},w,{type:b,size:v,ref:t,readOnly:h,id:p||I,className:i()(O,a,y&&"is-valid",N&&"is-invalid")}))})));y.displayName="FormControl";var x=Object.assign(y,{Feedback:u.a}),N=o.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,s=e.children,u=e.controlId,b=e.as,m=void 0===b?"div":b,v=Object(n.default)(e,["bsPrefix","className","children","controlId","as"]);a=Object(d.a)(a,"form-group");var p=Object(c.useMemo)((function(){return{controlId:u}}),[u]);return o.a.createElement(f.a.Provider,{value:p},o.a.createElement(m,Object(r.default)({},v,{ref:t,className:i()(l,a)}),s))}));N.displayName="FormGroup";var g=N,h=a(53),P=o.a.forwardRef((function(e,t){var a=e.as,l=void 0===a?"label":a,s=e.bsPrefix,u=e.column,b=e.srOnly,m=e.className,v=e.htmlFor,p=Object(n.default)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),O=Object(c.useContext)(f.a).controlId;s=Object(d.a)(s,"form-label");var j="col-form-label";"string"===typeof u&&(j=j+" "+j+"-"+u);var y=i()(m,s,b&&"sr-only",u&&j);return v=v||O,u?o.a.createElement(h.a,Object(r.default)({as:"label",className:y,htmlFor:v},p)):o.a.createElement(l,Object(r.default)({ref:t,className:y,htmlFor:v},p))}));P.displayName="FormLabel",P.defaultProps={column:!1,srOnly:!1};var E=P,C=o.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,c=e.as,s=void 0===c?"small":c,u=e.muted,f=Object(n.default)(e,["bsPrefix","className","as","muted"]);return a=Object(d.a)(a,"form-text"),o.a.createElement(s,Object(r.default)({},f,{ref:t,className:i()(l,a,u&&"text-muted")}))}));C.displayName="FormText";var w=C,I=o.a.forwardRef((function(e,t){return o.a.createElement(s.a,Object(r.default)({},e,{ref:t,type:"switch"}))}));I.displayName="Switch",I.Input=s.a.Input,I.Label=s.a.Label;var k=I,F=a(51),S=Object(F.a)("form-row"),R=o.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.inline,c=e.className,s=e.validated,u=e.as,f=void 0===u?"form":u,b=Object(n.default)(e,["bsPrefix","inline","className","validated","as"]);return a=Object(d.a)(a,"form"),o.a.createElement(f,Object(r.default)({},b,{ref:t,className:i()(c,s&&"was-validated",l&&a+"-inline")}))}));R.displayName="Form",R.defaultProps={inline:!1},R.Row=S,R.Group=g,R.Control=x,R.Check=s.a,R.File=j,R.Switch=k,R.Label=E,R.Text=w;t.a=R},290:function(e,t,a){"use strict";var r=a(2),n=a(8),l=a(43),i=a.n(l),c=a(0),o=a.n(c),s=a(93),u=a(51),f=a(44),d=o.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,c=e.as,s=Object(n.default)(e,["bsPrefix","className","as"]);a=Object(f.a)(a,"navbar-brand");var u=c||(s.href?"a":"span");return o.a.createElement(u,Object(r.default)({},s,{ref:t,className:i()(l,a)}))}));d.displayName="NavbarBrand";var b,m=d,v=a(133),p=a(134),O=a(135),j=a(101),y=a(103),x={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function N(e,t){var a=t["offset"+e[0].toUpperCase()+e.slice(1)],r=x[e];return a+parseInt(Object(v.a)(t,r[0]),10)+parseInt(Object(v.a)(t,r[1]),10)}var g=((b={})[O.c]="collapse",b[O.d]="collapsing",b[O.b]="collapsing",b[O.a]="collapse show",b),h={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:N},P=o.a.forwardRef((function(e,t){var a=e.onEnter,l=e.onEntering,s=e.onEntered,u=e.onExit,f=e.onExiting,d=e.className,b=e.children,m=e.dimension,v=void 0===m?"height":m,x=e.getDimensionValue,h=void 0===x?N:x,P=Object(n.default)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),E="function"===typeof v?v():v,C=Object(c.useMemo)((function(){return Object(j.a)((function(e){e.style[E]="0"}),a)}),[E,a]),w=Object(c.useMemo)((function(){return Object(j.a)((function(e){var t="scroll"+E[0].toUpperCase()+E.slice(1);e.style[E]=e[t]+"px"}),l)}),[E,l]),I=Object(c.useMemo)((function(){return Object(j.a)((function(e){e.style[E]=null}),s)}),[E,s]),k=Object(c.useMemo)((function(){return Object(j.a)((function(e){e.style[E]=h(E,e)+"px",Object(y.a)(e)}),u)}),[u,h,E]),F=Object(c.useMemo)((function(){return Object(j.a)((function(e){e.style[E]=null}),f)}),[E,f]);return o.a.createElement(O.e,Object(r.default)({ref:t,addEndListener:p.a},P,{"aria-expanded":P.role?P.in:null,onEnter:C,onEntering:w,onEntered:I,onExit:k,onExiting:F}),(function(e,t){return o.a.cloneElement(b,Object(r.default)({},t,{className:i()(d,b.props.className,g[e],"width"===E&&"width")}))}))}));P.defaultProps=h;var E=P,C=a(66),w=o.a.forwardRef((function(e,t){var a=e.children,l=e.bsPrefix,i=Object(n.default)(e,["children","bsPrefix"]);return l=Object(f.a)(l,"navbar-collapse"),o.a.createElement(C.a.Consumer,null,(function(e){return o.a.createElement(E,Object(r.default)({in:!(!e||!e.expanded)},i),o.a.createElement("div",{ref:t,className:l},a))}))}));w.displayName="NavbarCollapse";var I=w,k=a(81),F=o.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,s=e.children,u=e.label,d=e.as,b=void 0===d?"button":d,m=e.onClick,v=Object(n.default)(e,["bsPrefix","className","children","label","as","onClick"]);a=Object(f.a)(a,"navbar-toggler");var p=Object(c.useContext)(C.a)||{},O=p.onToggle,j=p.expanded,y=Object(k.a)((function(e){m&&m(e),O&&O()}));return"button"===b&&(v.type="button"),o.a.createElement(b,Object(r.default)({},v,{ref:t,onClick:y,"aria-label":u,className:i()(l,a,!j&&"collapsed")}),s||o.a.createElement("span",{className:a+"-icon"}))}));F.displayName="NavbarToggle",F.defaultProps={label:"Toggle navigation"};var S=F,R=a(80),T=Object(u.a)("navbar-text",{Component:"span"}),K=o.a.forwardRef((function(e,t){var a=Object(s.a)(e,{expanded:"onToggle"}),l=a.bsPrefix,u=a.expand,d=a.variant,b=a.bg,m=a.fixed,v=a.sticky,p=a.className,O=a.children,j=a.as,y=void 0===j?"nav":j,x=a.expanded,N=a.onToggle,g=a.onSelect,h=a.collapseOnSelect,P=Object(n.default)(a,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),E=Object(f.a)(l,"navbar"),w=Object(c.useCallback)((function(){g&&g.apply(void 0,arguments),h&&x&&N&&N(!1)}),[g,h,x,N]);void 0===P.role&&"nav"!==y&&(P.role="navigation");var I=E+"-expand";"string"===typeof u&&(I=I+"-"+u);var k=Object(c.useMemo)((function(){return{onToggle:function(){return N&&N(!x)},bsPrefix:E,expanded:!!x}}),[E,x,N]);return o.a.createElement(C.a.Provider,{value:k},o.a.createElement(R.a.Provider,{value:w},o.a.createElement(y,Object(r.default)({ref:t},P,{className:i()(p,E,u&&I,d&&E+"-"+d,b&&"bg-"+b,v&&"sticky-"+v,m&&"fixed-"+m)}),O)))}));K.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},K.displayName="Navbar",K.Brand=m,K.Toggle=S,K.Collapse=I,K.Text=T;t.a=K},47:function(e,t,a){"use strict";var r=a(0),n=a.n(r).a.createContext({controlId:void 0});t.a=n},50:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(54);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],r=!0,n=!1,l=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(o){n=!0,l=o}finally{try{r||null==c.return||c.return()}finally{if(n)throw l}}return a}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},54:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(64);function n(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(r.a)(e,t):void 0}}},64:function(e,t,a){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}a.d(t,"a",(function(){return r}))},65:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];function r(){for(var e=arguments.length,a=Array(e),r=0;r<e;r++)a[r]=arguments[r];var n=null;return t.forEach((function(e){if(null==n){var t=e.apply(void 0,a);null!=t&&(n=t)}})),n}return(0,l.default)(r)};var r,n=a(145),l=(r=n)&&r.__esModule?r:{default:r};e.exports=t.default},66:function(e,t,a){"use strict";var r=a(0),n=a.n(r).a.createContext(null);n.displayName="NavbarContext",t.a=n},77:function(e,t,a){"use strict";function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return r}))},78:function(e,t,a){"use strict";var r=a(2),n=a(8),l=a(43),i=a.n(l),c=a(0),o=a.n(c),s=a(11),u=a.n(s),f={type:u.a.string,tooltip:u.a.bool,as:u.a.elementType},d=o.a.forwardRef((function(e,t){var a=e.as,l=void 0===a?"div":a,c=e.className,s=e.type,u=void 0===s?"valid":s,f=e.tooltip,d=void 0!==f&&f,b=Object(n.default)(e,["as","className","type","tooltip"]);return o.a.createElement(l,Object(r.default)({},b,{ref:t,className:i()(c,u+"-"+(d?"tooltip":"feedback"))}))}));d.displayName="Feedback",d.propTypes=f,t.a=d},79:function(e,t,a){"use strict";var r=function(){};e.exports=r},80:function(e,t,a){"use strict";a.d(t,"b",(function(){return l}));var r=a(0),n=a.n(r).a.createContext(null),l=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null};t.a=n},94:function(e,t,a){"use strict";var r=a(2),n=a(8),l=a(43),i=a.n(l),c=(a(65),a(0)),o=a.n(c),s=a(78),u=a(47),f=a(44),d=o.a.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,s=e.bsCustomPrefix,d=e.className,b=e.type,m=void 0===b?"checkbox":b,v=e.isValid,p=void 0!==v&&v,O=e.isInvalid,j=void 0!==O&&O,y=e.isStatic,x=e.as,N=void 0===x?"input":x,g=Object(n.default)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),h=Object(c.useContext)(u.a),P=h.controlId,E=h.custom?[s,"custom-control-input"]:[l,"form-check-input"],C=E[0],w=E[1];return l=Object(f.a)(C,w),o.a.createElement(N,Object(r.default)({},g,{ref:t,type:m,id:a||P,className:i()(d,l,p&&"is-valid",j&&"is-invalid",y&&"position-static")}))}));d.displayName="FormCheckInput";var b=d,m=o.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.bsCustomPrefix,s=e.className,d=e.htmlFor,b=Object(n.default)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),m=Object(c.useContext)(u.a),v=m.controlId,p=m.custom?[l,"custom-control-label"]:[a,"form-check-label"],O=p[0],j=p[1];return a=Object(f.a)(O,j),o.a.createElement("label",Object(r.default)({},b,{ref:t,htmlFor:d||v,className:i()(s,a)}))}));m.displayName="FormCheckLabel";var v=m,p=o.a.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,d=e.bsCustomPrefix,m=e.inline,p=void 0!==m&&m,O=e.disabled,j=void 0!==O&&O,y=e.isValid,x=void 0!==y&&y,N=e.isInvalid,g=void 0!==N&&N,h=e.feedbackTooltip,P=void 0!==h&&h,E=e.feedback,C=e.className,w=e.style,I=e.title,k=void 0===I?"":I,F=e.type,S=void 0===F?"checkbox":F,R=e.label,T=e.children,K=e.custom,A=e.as,M=void 0===A?"input":A,L=Object(n.default)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),V="switch"===S||K,D=V?[d,"custom-control"]:[l,"form-check"],z=D[0],_=D[1];l=Object(f.a)(z,_);var q=Object(c.useContext)(u.a).controlId,B=Object(c.useMemo)((function(){return{controlId:a||q,custom:V}}),[q,V,a]),U=V||null!=R&&!1!==R&&!T,G=o.a.createElement(b,Object(r.default)({},L,{type:"switch"===S?"checkbox":S,ref:t,isValid:x,isInvalid:g,isStatic:!U,disabled:j,as:M}));return o.a.createElement(u.a.Provider,{value:B},o.a.createElement("div",{style:w,className:i()(C,l,V&&"custom-"+S,p&&l+"-inline")},T||o.a.createElement(o.a.Fragment,null,G,U&&o.a.createElement(v,{title:k},R),(x||g)&&o.a.createElement(s.a,{type:x?"valid":"invalid",tooltip:P},E))))}));p.displayName="FormCheck",p.Input=b,p.Label=v;t.a=p},98:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return n}));var r={prefix:"far",iconName:"moon",icon:[512,512,[],"f186","M279.135 512c78.756 0 150.982-35.804 198.844-94.775 28.27-34.831-2.558-85.722-46.249-77.401-82.348 15.683-158.272-47.268-158.272-130.792 0-48.424 26.06-92.292 67.434-115.836 38.745-22.05 28.999-80.788-15.022-88.919A257.936 257.936 0 0 0 279.135 0c-141.36 0-256 114.575-256 256 0 141.36 114.576 256 256 256zm0-464c12.985 0 25.689 1.201 38.016 3.478-54.76 31.163-91.693 90.042-91.693 157.554 0 113.848 103.641 199.2 215.252 177.944C402.574 433.964 344.366 464 279.135 464c-114.875 0-208-93.125-208-208s93.125-208 208-208z"]},n={prefix:"far",iconName:"sun",icon:[512,512,[],"f185","M494.2 221.9l-59.8-40.5 13.7-71c2.6-13.2-1.6-26.8-11.1-36.4-9.6-9.5-23.2-13.7-36.2-11.1l-70.9 13.7-40.4-59.9c-15.1-22.3-51.9-22.3-67 0l-40.4 59.9-70.8-13.7C98 60.4 84.5 64.5 75 74.1c-9.5 9.6-13.7 23.1-11.1 36.3l13.7 71-59.8 40.5C6.6 229.5 0 242 0 255.5s6.7 26 17.8 33.5l59.8 40.5-13.7 71c-2.6 13.2 1.6 26.8 11.1 36.3 9.5 9.5 22.9 13.7 36.3 11.1l70.8-13.7 40.4 59.9C230 505.3 242.6 512 256 512s26-6.7 33.5-17.8l40.4-59.9 70.9 13.7c13.4 2.7 26.8-1.6 36.3-11.1 9.5-9.5 13.6-23.1 11.1-36.3l-13.7-71 59.8-40.5c11.1-7.5 17.8-20.1 17.8-33.5-.1-13.6-6.7-26.1-17.9-33.7zm-112.9 85.6l17.6 91.2-91-17.6L256 458l-51.9-77-90.9 17.6 17.6-91.2-76.8-52 76.8-52-17.6-91.2 91 17.6L256 53l51.9 76.9 91-17.6-17.6 91.1 76.8 52-76.8 52.1zM256 152c-57.3 0-104 46.7-104 104s46.7 104 104 104 104-46.7 104-104-46.7-104-104-104zm0 160c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z"]}}}]);
//# sourceMappingURL=8.1d4ecd5e.chunk.js.map