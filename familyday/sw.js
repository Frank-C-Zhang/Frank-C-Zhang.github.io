if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const o=e=>i(e,t),d={module:{uri:t},exports:l,require:o};s[t]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-2lyq3EVT.css",revision:null},{url:"assets/index-B67Tt6eZ.css",revision:null},{url:"assets/index-fzMW7yVZ.js",revision:null},{url:"assets/index-lZoLlmUm.js",revision:null},{url:"icon.png",revision:"526e8f82ddad28f56984c31f4b74c786"},{url:"index.html",revision:"a96c4c78810e38f362a3d003340ef25d"},{url:"registerSW.js",revision:"e9317aeb7551b093c728ccd09185dca5"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"manifest.webmanifest",revision:"ecd6122d05fb4c918d4db865fef5348d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
