if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>a(e,c),r={module:{uri:c},exports:t,require:o};s[c]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(i(...e),t)))}}define(["./workbox-b0a6e652"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/263-0320813e3a119fc3.js",revision:"oaUn6lPLDBnmoyk8LsXkN"},{url:"/_next/static/chunks/374-88679bd1c5fe5078.js",revision:"oaUn6lPLDBnmoyk8LsXkN"},{url:"/_next/static/chunks/439-2e689173fd8318bf.js",revision:"oaUn6lPLDBnmoyk8LsXkN"},{url:"/_next/static/chunks/484-df0150a605ee25d0.js",revision:"oaUn6lPLDBnmoyk8LsXkN"},{url:"/_next/static/chunks/488-7c9d48f61d66c4e5.js",revision:"oaUn6lPLDBnmoyk8LsXkN"},{url:"/_next/static/chunks/768-0f4635b02388cb15.js",revision:"oaUn6lPLDBnmoyk8LsXkN"},{url:"/_next/static/chunks/802-83dcd884f3682a04.js",revision:"oaUn6lPLDBnmoyk8LsXkN"},{url:"/_next/static/chunks/913-e021db8c48b76803.js",revision:"oaUn6lPLDBnmoyk8LsXkN"},{url:"/_next/static/chunks/946-4031798102ef8061.js",revision:"oaUn6lPLDBnmoyk8LsXkN"},{url:"/_next/static/chunks/951-2d49c71e3680d9f1.js",revision:"oaUn6lPLDBnmoyk8LsXkN"},{url:"/_next/static/chunks/987-263eb329492e64be.js",revision:"oaUn6lPLDBnmoyk8LsXkN"},{url:"/_next/static/chunks/app/_not-found-6889c67ba885ad06.js",revision:"oaUn6lPLDBnmoyk8LsXkN"},{url:"/_next/static/chunks/app/alfonsobot/page-f56b006e9b90a93c.js",revision:"oaUn6lPLDBnmoyk8LsXkN"},{url:"/_next/static/chunks/app/contact/page-eca84510b8543e99.js",revision:"oaUn6lPLDBnmoyk8LsXkN"},{url:"/_next/static/chunks/app/error-cecd8a4999d4b5f1.js",revision:"oaUn6lPLDBnmoyk8LsXkN"},{url:"/_next/static/chunks/app/layout-b2adf8c8271175e1.js",revision:"oaUn6lPLDBnmoyk8LsXkN"},{url:"/_next/static/chunks/app/page-b19791d608245b1a.js",revision:"oaUn6lPLDBnmoyk8LsXkN"},{url:"/_next/static/chunks/app/projects/page-640f9a89f7796199.js",revision:"oaUn6lPLDBnmoyk8LsXkN"},{url:"/_next/static/chunks/c14803c7-9604af3c504ae40e.js",revision:"oaUn6lPLDBnmoyk8LsXkN"},{url:"/_next/static/chunks/framework-510ec8ffd65e1d01.js",revision:"oaUn6lPLDBnmoyk8LsXkN"},{url:"/_next/static/chunks/main-app-96b699ff63ec6d6c.js",revision:"oaUn6lPLDBnmoyk8LsXkN"},{url:"/_next/static/chunks/main-c99a4c8ae38ac360.js",revision:"oaUn6lPLDBnmoyk8LsXkN"},{url:"/_next/static/chunks/pages/_app-4ad08e5c7f1d394d.js",revision:"oaUn6lPLDBnmoyk8LsXkN"},{url:"/_next/static/chunks/pages/_error-e3cf5f3dcac06521.js",revision:"oaUn6lPLDBnmoyk8LsXkN"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-c7b1718abc236d49.js",revision:"oaUn6lPLDBnmoyk8LsXkN"},{url:"/_next/static/css/6f20291f1184653a.css",revision:"6f20291f1184653a"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/122c360d7fe6d395-s.p.woff2",revision:"9b2795fb691d8f8a83312a4436f5a453"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/9bbb7f84f3601865-s.woff2",revision:"d8134b7ae9ca2232a397ef9afa6c8d30"},{url:"/_next/static/media/9f05b6a2725a7318-s.woff2",revision:"afbfd524bdefea1003f0ee71b617e50e"},{url:"/_next/static/media/a8eac78432f0a60b-s.woff2",revision:"be605f007472cc947fe6b6bb493228a5"},{url:"/_next/static/media/android-chrome-192x192.95ea3d22.webp",revision:"70ded04773ef21f562a7f718c21d03eb"},{url:"/_next/static/media/android-chrome-512x512.5036a465.webp",revision:"7bbb9c9b90bdeb0d0d3c04098a0ca7e3"},{url:"/_next/static/media/bg-colorssmokedark.23b3b32d.webp",revision:"5b43b9f1c3ca0b7c086203a342df0122"},{url:"/_next/static/media/bg-colorssmokelight.bbd1a99e.webp",revision:"e3d05223bc651d24387d9ebc3a1d0649"},{url:"/_next/static/media/bg-ray.24f9707f.webp",revision:"4d6b98b2f1dbb1d28d0cbd6e94baf6e1"},{url:"/_next/static/media/bg-spacesun.87104328.webp",revision:"d8219c41c0780d1fb47b479dddd36f24"},{url:"/_next/static/media/c740c1d45290834f-s.woff2",revision:"bff99a4bbc4740c49b75b52f290be90e"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d0697bdd3fb49a78-s.woff2",revision:"50b29fea20cba8e522c34a1413592253"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/yo-formal-1.3410760f.webp",revision:"d2b7e25ca3fa56e569fc19a2f8494029"},{url:"/_next/static/media/yo-formal-2.94c00ec4.webp",revision:"34ea796fa5138a184c54b81cf428e1b3"},{url:"/_next/static/oaUn6lPLDBnmoyk8LsXkN/_buildManifest.js",revision:"3bf8f62b8cfb616509c4b1d890c904c7"},{url:"/_next/static/oaUn6lPLDBnmoyk8LsXkN/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/alfonso-app.webp",revision:"eff37a2389e760fef17cb94adaaf344c"},{url:"/android-chrome-192x192.webp",revision:"70ded04773ef21f562a7f718c21d03eb"},{url:"/android-chrome-512x512.webp",revision:"7bbb9c9b90bdeb0d0d3c04098a0ca7e3"},{url:"/apple-touch-icon.webp",revision:"b82aef780c9f50fc253bf2ba27c44716"},{url:"/audio/BackInBlack.mp3",revision:"5d3e4328b421fb3a2dbef4a3fa2dbb9e"},{url:"/audio/Passion.mp3",revision:"969a70c67bc6e5d7302e443defd5808e"},{url:"/browserconfig.xml",revision:"61bfd064535af0c276bb63b3fd579733"},{url:"/cv/en_alfonso.html",revision:"affe0ea7c2c2bf9ea78e062cbac1803a"},{url:"/cv/en_alfonso.pdf",revision:"77e368f12f17464fe7d55fbfac15d217"},{url:"/cv/es_alfonso.html",revision:"ff7bcfc84b7927fbcd7d88151c94d967"},{url:"/cv/es_alfonso.pdf",revision:"c23e8b076b291376f957bf4809991e3e"},{url:"/favicon-16x16.webp",revision:"17fd14efb8599c893709da8b546cd7d7"},{url:"/favicon-32x32.webp",revision:"6255789bd7d2447b06ca8500cf404c90"},{url:"/google22cabb8b4bdc371a.html",revision:"97d5346b703d425f995a6e28bd1ea397"},{url:"/image/bg-colorssmokedark.webp",revision:"5b43b9f1c3ca0b7c086203a342df0122"},{url:"/image/bg-colorssmokelight.webp",revision:"e3d05223bc651d24387d9ebc3a1d0649"},{url:"/image/bg-ray.webp",revision:"4d6b98b2f1dbb1d28d0cbd6e94baf6e1"},{url:"/image/bg-spacesun.webp",revision:"d8219c41c0780d1fb47b479dddd36f24"},{url:"/image/yo-formal-1.webp",revision:"d2b7e25ca3fa56e569fc19a2f8494029"},{url:"/image/yo-formal-2.webp",revision:"34ea796fa5138a184c54b81cf428e1b3"},{url:"/manifest.json",revision:"9ba1ccb2e0697c8735ddfe240e1d3ffa"},{url:"/mstile-150x150.webp",revision:"864c35c0b7cf4f9a0a7cea6673d6348c"},{url:"/robots.txt",revision:"987497bfb623e1059632e5a607d56454"},{url:"/safari-pinned-tab.svg",revision:"d58cad211217ec8152068f86492835cc"},{url:"/swe-worker-4da67dda9bc18c53.js",revision:"5a47d90db13bb1309b25bdf7b363570e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
