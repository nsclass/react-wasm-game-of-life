(this["webpackJsonpreact-wasm-game-of-life"]=this["webpackJsonpreact-wasm-game-of-life"]||[]).push([[1],{11:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(4),o=n.n(c),i=(n(11),n(2)),u=n.n(i),s=n(5),l=n(1),f=(n(13),function(e){var t=a.a.useRef(),n=a.a.useRef(),r=function r(a){if(void 0!==n.current){var c=a-n.current;e(c)}n.current=a,t.current=requestAnimationFrame(r)};a.a.useEffect((function(){return t.current=requestAnimationFrame(r),function(){return cancelAnimationFrame(t.current)}}),[])}),m=function(e){var t=e.universe,n=e.wasmMemory,c=Object(r.useState)(!1),o=Object(l.a)(c,2),i=(o[0],o[1]),u=a.a.useRef(null),s=Object(r.useState)(6*t.width()+1),m=Object(l.a)(s,2),v=m[0],h=(m[1],Object(r.useState)(6*t.height()+1)),d=Object(l.a)(h,2),b=d[0],w=(d[1],function(e,n){return e*t.width()+n});return a.a.useEffect((function(){var e=u.current.getContext("2d");!function(e){var n=t.width(),r=t.height();e.beginPath(),e.strokeStyle="#CCCCCC";for(var a=0;a<=n;a++)e.moveTo(6*a+1,0),e.lineTo(6*a+1,6*r+1);for(var c=0;c<=r;c++)e.moveTo(0,6*c+1),e.lineTo(6*n+1,6*c+1);e.stroke()}(e),function(e){var r=t.width(),a=t.height(),c=t.cells(),o=new Uint8Array(n.memory.buffer,c,r*a);e.beginPath();for(var i=0;i<a;i++)for(var u=0;u<r;u++){var s=w(i,u);e.fillStyle=0===o[s]?"#FFFFFF":"#000000",e.fillRect(6*u+1,6*i+1,5,5)}e.stroke()}(e),i(!1)})),f((function(e){t.tick(),i(!0)})),a.a.createElement("div",null,a.a.createElement("canvas",{id:"game-of-life-canvas",ref:u,width:v,height:b}))},v=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),c=t[0],o=t[1],i=Object(r.useState)(null),f=Object(l.a)(i,2),v=f[0],h=f[1],d=Object(r.useState)(null),b=Object(l.a)(d,2),w=b[0],g=b[1];return v||c||function(){var e=Object(s.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(!0),console.log("loading..."),e.next=5,n.e(0).then(n.bind(null,20));case 5:return t=e.sent,h(t.Universe.new()),e.next=9,n.e(0).then(n.bind(null,19));case 9:r=e.sent,g(r),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error("Unexpected error in loadWasm. [Message: ".concat(e.t0.message,"]"));case 16:return e.prev=16,o(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[0,13,16,19]])})));return function(){return e.apply(this,arguments)}}()(),v&&w?a.a.createElement(m,{universe:v,wasmMemory:w}):a.a.createElement("div",{className:"container"},a.a.createElement("h1",{className:"title"},"loading..."))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports=n(14)}},[[6,2,3]]]);
//# sourceMappingURL=main.3551e278.chunk.js.map