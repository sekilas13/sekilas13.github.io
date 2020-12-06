/*! For license information please see 10.4a61d336.chunk.js.LICENSE.txt */
(this["webpackJsonpkir-13"]=this["webpackJsonpkir-13"]||[]).push([[10],{275:function(e,a,t){"use strict";var r=t(2),n=t(8),s=t(44),c=t.n(s),l=t(0),i=t.n(l),o=t(45),d=t(51),u=function(e){return i.a.forwardRef((function(a,t){return i.a.createElement("div",Object(r.default)({},a,{ref:t,className:c()(a.className,e)}))}))},f=t(58),b=i.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,l=e.variant,d=e.as,u=void 0===d?"img":d,f=Object(n.default)(e,["bsPrefix","className","variant","as"]),b=Object(o.a)(t,"card-img");return i.a.createElement(u,Object(r.default)({ref:a,className:c()(l?b+"-"+l:b,s)},f))}));b.displayName="CardImg",b.defaultProps={variant:null};var m=b,j=u("h5"),p=u("h6"),v=Object(d.a)("card-body"),O=Object(d.a)("card-title",{Component:j}),x=Object(d.a)("card-subtitle",{Component:p}),h=Object(d.a)("card-link",{Component:"a"}),N=Object(d.a)("card-text",{Component:"p"}),y=Object(d.a)("card-header"),P=Object(d.a)("card-footer"),g=Object(d.a)("card-img-overlay"),C=i.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,d=e.bg,u=e.text,b=e.border,m=e.body,j=e.children,p=e.as,O=void 0===p?"div":p,x=Object(n.default)(e,["bsPrefix","className","bg","text","border","body","children","as"]),h=Object(o.a)(t,"card"),N=Object(l.useMemo)((function(){return{cardHeaderBsPrefix:h+"-header"}}),[h]);return i.a.createElement(f.a.Provider,{value:N},i.a.createElement(O,Object(r.default)({ref:a},x,{className:c()(s,h,d&&"bg-"+d,u&&"text-"+u,b&&"border-"+b)}),m?i.a.createElement(v,null,j):j))}));C.displayName="Card",C.defaultProps={body:!1},C.Img=m,C.Title=O,C.Subtitle=x,C.Body=v,C.Link=h,C.Text=N,C.Header=y,C.Footer=P,C.ImgOverlay=g;a.a=C},277:function(e,a,t){"use strict";t.r(a);var r=t(3),n=t(91),s=t(92),c=t(54),l=t(275),i=t(4),o=t(26);a.default=function(){var e=Object(i.g)();return Object(r.jsx)(n.a,{fluid:!0,children:Object(r.jsx)(s.a,{className:"justify-content-center mt-3",children:Object(r.jsx)(c.a,{lg:4,sm:5,md:4,children:Object(r.jsx)(l.a,{id:"NotFound",children:Object(r.jsxs)(l.a.Body,{children:[Object(r.jsx)(s.a,{className:"justify-content-center",children:Object(r.jsx)("h1",{className:"display-3",style:{color:"#d8232a"},children:"404"})}),Object(r.jsx)(s.a,{className:"justify-content-center",children:Object(r.jsx)("h5",{className:"text-center",style:{fontFamily:"monospace"},children:"NOT FOUND"})}),Object(r.jsx)(s.a,{className:"justify-content-center mt-3",children:Object(r.jsxs)("p",{className:"text-center",children:["Halaman ",Object(r.jsx)("code",{children:e.pathname})," tidak ditemukan."," ",Object(r.jsx)(o.b,{to:"/",children:"Kembali"})," ke halaman utama."]})})]})})})})})}},44:function(e,a,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)&&r.length){var c=n.apply(null,r);c&&e.push(c)}else if("object"===s)for(var l in r)t.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(a,[]))||(e.exports=r)}()},45:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));t(2);var r=t(0),n=t.n(r),s=n.a.createContext({});s.Consumer,s.Provider;function c(e,a){var t=Object(r.useContext)(s);return e||t[a]||a}},51:function(e,a,t){"use strict";t.d(a,"a",(function(){return f}));var r=t(2),n=t(8),s=t(44),c=t.n(s),l=/-(.)/g;var i=t(0),o=t.n(i),d=t(45),u=function(e){return e[0].toUpperCase()+(a=e,a.replace(l,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function f(e,a){var t=void 0===a?{}:a,s=t.displayName,l=void 0===s?u(e):s,i=t.Component,f=t.defaultProps,b=o.a.forwardRef((function(a,t){var s=a.className,l=a.bsPrefix,u=a.as,f=void 0===u?i||"div":u,b=Object(n.default)(a,["className","bsPrefix","as"]),m=Object(d.a)(l,e);return o.a.createElement(f,Object(r.default)({ref:t,className:c()(s,m)},b))}));return b.defaultProps=f,b.displayName=l,b}},54:function(e,a,t){"use strict";var r=t(2),n=t(8),s=t(44),c=t.n(s),l=t(0),i=t.n(l),o=t(45),d=["xl","lg","md","sm","xs"],u=i.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,l=e.as,u=void 0===l?"div":l,f=Object(n.default)(e,["bsPrefix","className","as"]),b=Object(o.a)(t,"col"),m=[],j=[];return d.forEach((function(e){var a,t,r,n=f[e];if(delete f[e],"object"===typeof n&&null!=n){var s=n.span;a=void 0===s||s,t=n.offset,r=n.order}else a=n;var c="xs"!==e?"-"+e:"";a&&m.push(!0===a?""+b+c:""+b+c+"-"+a),null!=r&&j.push("order"+c+"-"+r),null!=t&&j.push("offset"+c+"-"+t)})),m.length||m.push(b),i.a.createElement(u,Object(r.default)({},f,{ref:a,className:c.a.apply(void 0,[s].concat(m,j))}))}));u.displayName="Col",a.a=u},58:function(e,a,t){"use strict";var r=t(0),n=t.n(r).a.createContext(null);n.displayName="CardContext",a.a=n},91:function(e,a,t){"use strict";var r=t(2),n=t(8),s=t(44),c=t.n(s),l=t(0),i=t.n(l),o=t(45),d=i.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.fluid,l=e.as,d=void 0===l?"div":l,u=e.className,f=Object(n.default)(e,["bsPrefix","fluid","as","className"]),b=Object(o.a)(t,"container"),m="string"===typeof s?"-"+s:"-fluid";return i.a.createElement(d,Object(r.default)({ref:a},f,{className:c()(u,s?""+b+m:b)}))}));d.displayName="Container",d.defaultProps={fluid:!1},a.a=d},92:function(e,a,t){"use strict";var r=t(2),n=t(8),s=t(44),c=t.n(s),l=t(0),i=t.n(l),o=t(45),d=["xl","lg","md","sm","xs"],u=i.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,l=e.noGutters,u=e.as,f=void 0===u?"div":u,b=Object(n.default)(e,["bsPrefix","className","noGutters","as"]),m=Object(o.a)(t,"row"),j=m+"-cols",p=[];return d.forEach((function(e){var a,t=b[e];delete b[e];var r="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&p.push(""+j+r+"-"+a)})),i.a.createElement(f,Object(r.default)({ref:a},b,{className:c.a.apply(void 0,[s,m,l&&"no-gutters"].concat(p))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},a.a=u}}]);
//# sourceMappingURL=10.4a61d336.chunk.js.map