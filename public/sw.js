if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>a(e,t),r={module:{uri:t},exports:c,require:o};s[t]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(n(...e),c)))}}define(["./workbox-7028bf80"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/AlfonsoApp.png",revision:"f4d7fce6e03a764d67392ecec3de89bd"},{url:"/_next/static/chunks/196.1521aaa01a17d453.js",revision:"1521aaa01a17d453"},{url:"/_next/static/chunks/213-691e54a59342a9a0.js",revision:"uoQ2_xIpxoH2t1YDxLhh5"},{url:"/_next/static/chunks/246-1333c5ca4aa98e93.js",revision:"uoQ2_xIpxoH2t1YDxLhh5"},{url:"/_next/static/chunks/306-25941fa5f4d595c5.js",revision:"uoQ2_xIpxoH2t1YDxLhh5"},{url:"/_next/static/chunks/343-841cf6a8e98dba94.js",revision:"uoQ2_xIpxoH2t1YDxLhh5"},{url:"/_next/static/chunks/357-e83d2b0ce3e66d7a.js",revision:"uoQ2_xIpxoH2t1YDxLhh5"},{url:"/_next/static/chunks/410-5f3b82ef457499ad.js",revision:"uoQ2_xIpxoH2t1YDxLhh5"},{url:"/_next/static/chunks/430-8eb624b308b7fcc3.js",revision:"uoQ2_xIpxoH2t1YDxLhh5"},{url:"/_next/static/chunks/507-d1df1be2ec694f6a.js",revision:"uoQ2_xIpxoH2t1YDxLhh5"},{url:"/_next/static/chunks/509.30ef881aa534eb88.js",revision:"30ef881aa534eb88"},{url:"/_next/static/chunks/564.fcd19d3793d1e7b6.js",revision:"fcd19d3793d1e7b6"},{url:"/_next/static/chunks/662-f271101b28bebc72.js",revision:"uoQ2_xIpxoH2t1YDxLhh5"},{url:"/_next/static/chunks/767-41e1ef4570a3e6c8.js",revision:"uoQ2_xIpxoH2t1YDxLhh5"},{url:"/_next/static/chunks/805-ec36c84ad472f1f6.js",revision:"uoQ2_xIpxoH2t1YDxLhh5"},{url:"/_next/static/chunks/841-e8e0f4e95e512b0e.js",revision:"uoQ2_xIpxoH2t1YDxLhh5"},{url:"/_next/static/chunks/871-d6fd545261d4bad8.js",revision:"uoQ2_xIpxoH2t1YDxLhh5"},{url:"/_next/static/chunks/951-56a57047057d81e3.js",revision:"uoQ2_xIpxoH2t1YDxLhh5"},{url:"/_next/static/chunks/app/alfonsobot/page-b28b4faf7d2d381e.js",revision:"uoQ2_xIpxoH2t1YDxLhh5"},{url:"/_next/static/chunks/app/contact/page-4181ae8e74897724.js",revision:"uoQ2_xIpxoH2t1YDxLhh5"},{url:"/_next/static/chunks/app/head-912a63e10e01a2b3.js",revision:"uoQ2_xIpxoH2t1YDxLhh5"},{url:"/_next/static/chunks/app/layout-99c94ef7494782b0.js",revision:"uoQ2_xIpxoH2t1YDxLhh5"},{url:"/_next/static/chunks/app/page-80d082f75d99f8fa.js",revision:"uoQ2_xIpxoH2t1YDxLhh5"},{url:"/_next/static/chunks/app/proyects/page-b7b51219ce3c2763.js",revision:"uoQ2_xIpxoH2t1YDxLhh5"},{url:"/_next/static/chunks/app/rpg/page-acc656c31d0f1f76.js",revision:"uoQ2_xIpxoH2t1YDxLhh5"},{url:"/_next/static/chunks/main-a7e99499b1e74cb1.js",revision:"uoQ2_xIpxoH2t1YDxLhh5"},{url:"/_next/static/chunks/main-app-0356905272eb6de5.js",revision:"uoQ2_xIpxoH2t1YDxLhh5"},{url:"/_next/static/chunks/pages/_app-91dc5076ccc576e5.js",revision:"uoQ2_xIpxoH2t1YDxLhh5"},{url:"/_next/static/chunks/pages/_error-199e92567d4229e6.js",revision:"uoQ2_xIpxoH2t1YDxLhh5"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-091fbfdcdb428f8a.js",revision:"uoQ2_xIpxoH2t1YDxLhh5"},{url:"/_next/static/css/c95d03b4981ad9f7.css",revision:"c95d03b4981ad9f7"},{url:"/_next/static/css/fb736ddcef13b708.css",revision:"fb736ddcef13b708"},{url:"/_next/static/media/05a31a2ca4975f99.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/BG_Ray.d48e9e5e.jpg",revision:"21e45cb3721ba096f61e1e8ae5492fd4"},{url:"/_next/static/media/SpaceSun.f9b60f34.jpg",revision:"352bebf392a15480bbd7785fd537a609"},{url:"/_next/static/media/YoFormal2.815a2fc7.png",revision:"198a3589a14c4d3b1bf2ac2c68de451d"},{url:"/_next/static/media/android-chrome-512x512.eef2b943.png",revision:"5b82f1ff1a4ba7f1f0d501c60f4f2f4d"},{url:"/_next/static/media/c9a5bc6a7c948fb0.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/uoQ2_xIpxoH2t1YDxLhh5/_buildManifest.js",revision:"60a6fdf668f064aae4c515dc44a9c5e0"},{url:"/_next/static/uoQ2_xIpxoH2t1YDxLhh5/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/android-chrome-192x192.png",revision:"f225b942bf53945db4773d0246d41d1c"},{url:"/android-chrome-512x512.png",revision:"5b82f1ff1a4ba7f1f0d501c60f4f2f4d"},{url:"/apple-touch-icon.png",revision:"be438b51f5afe53f23557c6bfc157555"},{url:"/audio/BackInBlack.mp3",revision:"5d3e4328b421fb3a2dbef4a3fa2dbb9e"},{url:"/audio/Passion.mp3",revision:"969a70c67bc6e5d7302e443defd5808e"},{url:"/browserconfig.xml",revision:"61bfd064535af0c276bb63b3fd579733"},{url:"/cv/en_alfonso.html",revision:"e134873b425a426a44ec1f2a04d5aba5"},{url:"/cv/en_alfonso.pdf",revision:"93e6423bf73404a718600eee02aa832a"},{url:"/cv/es_alfonso.html",revision:"086beffabab4dcd483e85c22ca9fd385"},{url:"/cv/es_alfonso.pdf",revision:"b5a7dd8070ea00f056e744280b53812b"},{url:"/favicon-16x16.png",revision:"6a9d8cb2847da82c519e303069fa9fba"},{url:"/favicon-32x32.png",revision:"d2a990614d3a35293b3491658249e8e4"},{url:"/favicon.ico",revision:"80f3de80b69e6d273d35898cffc21bb7"},{url:"/google22cabb8b4bdc371a.html",revision:"97d5346b703d425f995a6e28bd1ea397"},{url:"/image/BG_Ray.jpg",revision:"21e45cb3721ba096f61e1e8ae5492fd4"},{url:"/image/SpaceSun.jpg",revision:"352bebf392a15480bbd7785fd537a609"},{url:"/image/YoFormal.png",revision:"b1eb29cd5072b7f1534274e6e86e916a"},{url:"/image/YoFormal2.png",revision:"198a3589a14c4d3b1bf2ac2c68de451d"},{url:"/manifest.json",revision:"8bd4bd4714606c28d6d7a61d9f01f082"},{url:"/mstile-150x150.png",revision:"466195cf06ee39689b85d0864707e229"},{url:"/robots.txt",revision:"987497bfb623e1059632e5a607d56454"},{url:"/safari-pinned-tab.svg",revision:"d58cad211217ec8152068f86492835cc"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
