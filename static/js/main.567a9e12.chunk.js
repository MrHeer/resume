(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{139:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(10),i=t.n(a),c=(t(82),t(76)),s=t(68),l=t.n(s),u=(t(85),t(86),function(e){var n=e.filePath,t=Object(o.useState)(""),a=Object(c.a)(t,2),i=a[0],s=a[1];Object(o.useEffect)((function(){fetch(n).then((function(e){return e.text()})).then((function(e){s(e)})).catch((function(e){console.error(e)}))}),[n]);var u=Object(o.useMemo)((function(){return{__html:l()(i)}}),[i]);return r.a.createElement("article",{className:"markdown-body",dangerouslySetInnerHTML:u})}),f=t(142),d=t(143);t(87);var h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("a",{className:"download",href:"/resume/resume.pdf",target:"_blank"},r.a.createElement(f.a,{shape:"circle",icon:r.a.createElement(d.a,null),size:"large"})),r.a.createElement(u,{filePath:"/resume/resume.md"}))},m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/resume",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/resume","/service-worker.js");m?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):v(n,e)}))}}()},77:function(e,n,t){e.exports=t(139)},82:function(e,n,t){},86:function(e,n,t){},87:function(e,n,t){}},[[77,1,2]]]);
//# sourceMappingURL=main.567a9e12.chunk.js.map