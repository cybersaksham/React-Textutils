(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{30:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(15),s=a.n(r),o=a(10),l=a(8),i=a(2),b=a(0);function d(e){return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.theme.nav_fg," bg-").concat(e.theme.nav_fg),id:"navbar",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(l.b,{className:"navbar-brand",to:"/",children:e.title}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(l.b,{className:"nav-link",to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(l.b,{className:"nav-link",to:"/about",children:"About"})})]}),Object(b.jsxs)("div",{className:"form-check form-switch",children:[Object(b.jsx)("input",{type:"color",id:"themeColor",name:"themeColor",onChange:function(){var t=document.getElementById("themeColor");e.changeColor(t.value)},value:e.color}),Object(b.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Theme"})]})]})]})})}function m(e){var t=e.theme,a=e.showAlert,n=e.text,c=e.setText,r=e.title;document.title=r;return Object(b.jsxs)("div",{className:"container my-3",children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"myText",className:"form-label",children:"Enter Text here"}),Object(b.jsx)("textarea",{value:n,onChange:function(e){return c(e.target.value)},className:"form-control",id:"myText",rows:"10",placeholder:"Enter here",style:{backgroundColor:t.bg,color:t.fg}})]}),Object(b.jsx)("button",{onClick:function(){c(n.toUpperCase()),""===n?a("danger","Enter something to convert"):a("success","Converted to upper case")},className:"m-2 btn btn-outline-primary",children:"Upper Case"}),Object(b.jsx)("button",{onClick:function(){c(n.toLowerCase()),""===n?a("danger","Enter something to convert"):a("success","Converted to lower case")},className:"m-2 btn btn-outline-primary",children:"Lower Case"}),Object(b.jsx)("button",{onClick:function(){c(""),""===n?a("danger","Enter something to clear"):a("success","Text cleared")},className:"m-2 btn btn-outline-primary",children:"Clear Text"}),Object(b.jsx)("button",{onClick:function(){navigator.clipboard.writeText(n),""===n?a("danger","Enter something to copy"):a("success","Text copied")},className:"m-2 btn btn-outline-primary",children:"Copy Text"}),Object(b.jsx)("button",{onClick:function(){var e=n.split(/[ ]+/).join(" ").trim();e===n?a("danger","No white spaces"):a("success","White space removed"),c(e)},className:"m-2 btn btn-outline-primary",children:"Remove White-spaces"}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("h2",{children:"Summary"}),Object(b.jsx)("hr",{}),Object(b.jsx)("p",{children:"".concat(n.split(" ").filter((function(e){return""!==e})).length," words & ").concat(n.length," letters")}),Object(b.jsx)("p",{children:"".concat(n.length/10," seconds required to read")})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("h2",{children:"Preview"}),Object(b.jsx)("hr",{}),Object(b.jsx)("p",{children:""===n?"Preview will appear here":n})]})]})}function j(e){return e.alert&&Object(b.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(b.jsx)("strong",{children:e.alert.type.charAt(0).toUpperCase()+e.alert.type.slice(1)}),": "," ",e.alert.msg]})}function h(e){var t=e.title;return document.title=t,Object(b.jsxs)("div",{className:"container my-3",children:[Object(b.jsx)("h1",{children:"About"}),Object(b.jsx)("hr",{}),Object(b.jsx)("p",{children:"This is a simple textutils website made in react."}),Object(b.jsx)("p",{children:"This webstie is made by saksham."})]})}d.defaultProps={title:"Title Here"};var u=function(){var e=Object(n.useState)({nav:"#eef3f3",nav_fg:"light",bg:"#ffffff",fg:"black"}),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(a.bg),s=Object(o.a)(r,2),u=s[0],p=s[1],x=Object(n.useState)(null),g=Object(o.a)(x,2),v=g[0],O=g[1],f=Object(n.useState)(""),C=Object(o.a)(f,2),N=C[0],y=C[1],T=function(e){var t=document.getElementById("styles_js");t||((t=document.createElement("style")).type="text/css",t.id="styles_js",document.getElementsByTagName("head")[0].appendChild(t)),t.appendChild(document.createTextNode("body {background-color: ".concat(e.bg," !important;}"))),t.appendChild(document.createTextNode("body {color: ".concat(e.fg," !important;}"))),t.appendChild(document.createTextNode("#navbar {background-color: ".concat(e.nav," !important;}"))),t.appendChild(document.createTextNode(".btn {color: ".concat(e.fg," !important; border: 1px solid ").concat(e.fg," !important;}"))),t.appendChild(document.createTextNode(".btn:hover {background-color: ".concat(e.nav," !important; border: 1px solid ").concat(e.nav," !important;}")))};T(a);var w=function(e){var t,a=(t=(t=e).replace("#",""),(299*parseInt(t.substr(0,2),16)+587*parseInt(t.substr(2,2),16)+114*parseInt(t.substr(4,2),16))/1e3>=128?"black":"white"),n={nav:e,nav_fg:"white"===a?"dark":"light",bg:e+"e0",fg:a};c(n),T(n)};return Object(b.jsxs)(l.a,{children:[Object(b.jsx)(d,{title:"TextUtils",theme:a,toggle:w,color:u,changeColor:function(e){p(e),w(e)}}),Object(b.jsx)(j,{alert:v}),Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{exact:!0,path:"/about",children:Object(b.jsx)(h,{title:"About"})}),Object(b.jsx)(i.a,{exact:!0,path:"/",children:Object(b.jsx)(m,{title:"TextUtils",theme:a,showAlert:function(e,t){O({type:e,msg:t}),null!=localStorage.timeout&&clearTimeout(localStorage.timeout);var a=setTimeout((function(){O(null)}),2e3);localStorage.timeout=a},text:N,setText:y})})]})]})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(u,{})}),document.getElementById("root")),p()}},[[30,1,2]]]);
//# sourceMappingURL=main.acb107c6.chunk.js.map