if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let c={};const r=s=>i(s,a),o={module:{uri:a},exports:c,require:r};e[a]=Promise.all(l.map((s=>o[s]||r(s)))).then((s=>(n(...s),c)))}}define(["./workbox-97f1c4be"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/App-6aec4439.css",revision:null},{url:"assets/App-997b2709.js",revision:null},{url:"assets/flappy-5ae51e04.css",revision:null},{url:"assets/flappy-96f5fc19.js",revision:null},{url:"assets/home-56113c42.css",revision:null},{url:"assets/home-ca9f9a87.js",revision:null},{url:"assets/index-68eb4303.js",revision:null},{url:"assets/index-72b13e9a.css",revision:null},{url:"assets/library-0076969b.css",revision:null},{url:"assets/library-4ed1afbe.js",revision:null},{url:"assets/PhotoDeck-5255f52f.css",revision:null},{url:"assets/PhotoDeck-e6fd913e.js",revision:null},{url:"assets/playlist-bf2b6069.js",revision:null},{url:"assets/playlist-card-m-806a1fe5.css",revision:null},{url:"assets/playlist-card-m-ba0bc44f.js",revision:null},{url:"assets/playlist-dc64be8f.css",revision:null},{url:"assets/search-78bb52fc.js",revision:null},{url:"assets/terms-660dec21.js",revision:null},{url:"assets/terms-ed683397.css",revision:null},{url:"assets/text-bold-l-59a6804a.js",revision:null},{url:"assets/text-bold-l-c8ce99aa.css",revision:null},{url:"assets/timeline-3bfd0445.js",revision:null},{url:"assets/timeline-ae1e033c.css",revision:null},{url:"assets/topnav-a85e5aa3.css",revision:null},{url:"assets/topnav-d57f5584.js",revision:null},{url:"assets/version-de7eff1d.js",revision:null},{url:"flappy/index.html",revision:"7ea3a784cfe02e47e9d836401433cde7"},{url:"flappy/js/start.js",revision:"bef9719b9f05002263c8c814ca4e37fa"},{url:"index.html",revision:"f38706c86ce1a541bd58c19703fba601"},{url:"init/assets/index.57a787fa.js",revision:null},{url:"init/assets/index.7e25d69c.css",revision:null},{url:"init/assets/vendor.da79cdb7.js",revision:null},{url:"init/index.html",revision:"4aa1cebf8452758bfc1fb24f5376d689"},{url:"landing-uno.html",revision:"f563965fdb6ec17d13ad16b15c50c83c"},{url:"landing-v2.html",revision:"4cd34f551b0e174b5bbf1646d32f9407"},{url:"landing.html",revision:"7f99cd823c3bb128f23513ac4b8797c6"},{url:"mail-fade-pro.html",revision:"06cb696e1735d537edc9e3c1d372e4f1"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"timeline/index.html",revision:"b0996058493237d5bc35cc0efa244d0f"},{url:"ultimo/_downloads.html",revision:"0fb533f488c1ab5ca5bf7edbb387962b"},{url:"ultimo/dontspeak-81mk.html",revision:"601f939d490caa0198a07aff2fecbb8e"},{url:"ultimo/global.css",revision:"90a56793c39f1c3c7380e2b18ccdf8f7"},{url:"version/css/brake.css",revision:"4c1bb8514718f949a22293eb7c55a167"},{url:"version/css/brake2.css",revision:"3e63095c1c99cf997de17aa5536b2849"},{url:"version/css/fancybox-v5.css",revision:"6a412d1bf88e02f0c5b3fa2b3a6df5d8"},{url:"version/css/style-global.css",revision:"f5d383253b42d8597c778339e31c08b9"},{url:"version/css/style-guias.css",revision:"7bad2f8db24e4313addcc5928f83b469"},{url:"version/css/style-timeline.css",revision:"ef0b41893cad23057324fac5c54103b3"},{url:"version/css/styles.css",revision:"1577f3f3aee086cbc52f92a2bce6bc14"},{url:"version/index.html",revision:"7e311cdeeceb93a49a54be6be81084e9"},{url:"assets/icons/logo1024.png",revision:"703f305b3e0d2acb4f27d3b1c36b215b"},{url:"assets/icons/logo512.png",revision:"e882126810d38330f3033bf7b6a00fea"},{url:"assets/icons/logo384.png",revision:"84c77085c9240f78d25b733ab1cb7acb"},{url:"assets/icons/logo256.png",revision:"a00c926bcd001341184521929dccbc75"},{url:"assets/icons/logo192.png",revision:"a810769691efe7ceae6435a71a815802"},{url:"assets/icons/logo128.png",revision:"2b02410d80399203a5df631a9349ca96"},{url:"assets/icons/logo96.png",revision:"73cb8fd607df6320ce77f63f51731790"},{url:"assets/icons/logo64.png",revision:"9409194c232e0da1145c1a591ed71926"},{url:"assets/icons/logo32.png",revision:"cab85d5529ceba118fc9ea19bf35850a"},{url:"assets/icons/logo16.png",revision:"6b10a1def4d4bfe9fae9c0456e3906da"},{url:"manifest.webmanifest",revision:"cf9592ad9beefb25c2279074c975916d"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/mixtaperadio\.web\.app/,new s.NetworkFirst({cacheName:"mixtape-cache",plugins:[new s.ExpirationPlugin({maxEntries:200,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/^\/image\//,new s.NetworkFirst({cacheName:"img-mixtape",plugins:[new s.ExpirationPlugin({maxEntries:100,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/assets\/icons\//,new s.CacheFirst({cacheName:"icon-mixtape",plugins:[new s.ExpirationPlugin({maxEntries:20,maxAgeSeconds:86400})]}),"GET"),s.registerRoute("./assets/audio/clicktape.mp3",new s.CacheFirst({cacheName:"cancion-cache",plugins:[]}),"GET")}));
