if(!self.define){let e,o={};const r=(r,n)=>(r=new URL(r+".js",n).href,o[r]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=o,document.head.appendChild(e)}else e=r,importScripts(r),o()})).then((()=>{let e=o[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,t)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(o[s])return;let i={};const c=e=>r(e,s),f={module:{uri:s},exports:i,require:c};o[s]=Promise.all(n.map((e=>f[e]||c(e)))).then((e=>(t(...e),i)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"monitor-front"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/monitor_front/css/app.eb86f2ac.css",revision:null},{url:"/monitor_front/css/chunk-vendors.7011ec81.css",revision:null},{url:"/monitor_front/index.html",revision:"9cba1bf473372307ff1eb8650bfd0d5f"},{url:"/monitor_front/js/app.c536a105.js",revision:null},{url:"/monitor_front/manifest.json",revision:"3374c9a9264bdf2e11cae928d1e93bfc"},{url:"/monitor_front/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
