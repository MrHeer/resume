(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{14:function(e,n,t){e.exports=t(24)},19:function(e,n,t){},23:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),i=t(11),c=t.n(i),a=(t(19),t(13)),s=t(12),l=t.n(s),u=(t(22),t(23),function(e){var n=Object(o.useState)(""),t=Object(a.a)(n,2),i=t[0],c=t[1];Object(o.useEffect)((function(){fetch(e.filePath).then((function(e){return e.text()})).then((function(e){c(e)})).catch((function(e){console.error(e)}))}));return r.a.createElement("article",{className:"markdown-body",dangerouslySetInnerHTML:{__html:l()(i)}})});var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,{filePath:"./resume.md"}))},d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/resume",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/resume","/service-worker.js");d?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):h(n,e)}))}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.a1e07dab.chunk.js.map