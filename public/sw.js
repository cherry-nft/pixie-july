if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let o={};const c=e=>s(e,r),t={module:{uri:r},exports:o,require:c};a[r]=Promise.all(i.map((e=>t[e]||c(e)))).then((e=>(n(...e),o)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/PSG-Logo.png",revision:"723c5306b379b1fbf38c7749045c6029"},{url:"/TikTok_logo.svg",revision:"c78ba100d7c6487f018090ce13a78ec2"},{url:"/_next/static/-aKWJ4wDwpSdIIG13L50W/_buildManifest.js",revision:"0ba9e78953a305a202ac69eda9c13315"},{url:"/_next/static/-aKWJ4wDwpSdIIG13L50W/_ssgManifest.js",revision:"5352cb582146311d1540f6075d1f265e"},{url:"/_next/static/chunks/238-8510a57bd8f40487.js",revision:"8510a57bd8f40487"},{url:"/_next/static/chunks/339-1f19d87a09f5358c.js",revision:"1f19d87a09f5358c"},{url:"/_next/static/chunks/623-0a9add327a7eeb22.js",revision:"0a9add327a7eeb22"},{url:"/_next/static/chunks/825-c8a4c88fbb5e5c0b.js",revision:"c8a4c88fbb5e5c0b"},{url:"/_next/static/chunks/framework-9b5d6ec4444c80fa.js",revision:"9b5d6ec4444c80fa"},{url:"/_next/static/chunks/main-f015e8f35fb3624e.js",revision:"f015e8f35fb3624e"},{url:"/_next/static/chunks/pages/_app-42a0fca9dd79fdce.js",revision:"42a0fca9dd79fdce"},{url:"/_next/static/chunks/pages/_error-7397496ca01950b1.js",revision:"7397496ca01950b1"},{url:"/_next/static/chunks/pages/collection/%5Bid%5D-dbf2ae5dfc130e38.js",revision:"dbf2ae5dfc130e38"},{url:"/_next/static/chunks/pages/collection/packs-02eb1db256dd12ce.js",revision:"02eb1db256dd12ce"},{url:"/_next/static/chunks/pages/index-36e307d67bc7168e.js",revision:"36e307d67bc7168e"},{url:"/_next/static/chunks/pages/sonics-203017aacace2ac8.js",revision:"203017aacace2ac8"},{url:"/_next/static/chunks/pages/thunder-a7a9dc987c6f79a5.js",revision:"a7a9dc987c6f79a5"},{url:"/_next/static/chunks/pages/wallet/%5Baddress%5D-244e4f3975a3ace9.js",revision:"244e4f3975a3ace9"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-53b75ab9f3bc4ea5.js",revision:"53b75ab9f3bc4ea5"},{url:"/_next/static/css/27d86dd586178aef.css",revision:"27d86dd586178aef"},{url:"/_next/static/css/604354315a55fd1e.css",revision:"604354315a55fd1e"},{url:"/_next/static/css/66f2923f764683b1.css",revision:"66f2923f764683b1"},{url:"/_next/static/css/a9a858597e6c5d6f.css",revision:"a9a858597e6c5d6f"},{url:"/_next/static/css/ab3f2a1f911911af.css",revision:"ab3f2a1f911911af"},{url:"/_next/static/css/eb4823a8dffcefd5.css",revision:"eb4823a8dffcefd5"},{url:"/concorde-video.mp4",revision:"ec07e45387c259bad201a1cd6551e01b"},{url:"/concorde.mp4",revision:"18c3fa11540811da71b3cd30fc773c7c"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Display-Black.otf",revision:"6434254b4301838aed2b0a8428a52dec"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Display-BlackItalic.otf",revision:"dbce9bb90e2fe42ec864018ebd5bc096"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Display-Bold.otf",revision:"94348d7ee70c258261a757b66596c4f9"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Display-BoldItalic.otf",revision:"ec0cae4b95509fe27e64b2dff8fef3ef"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Display-Heavy.otf",revision:"ab7fbc919a091663d289282da6a49fd3"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Display-HeavyItalic.otf",revision:"7d9b950ef1ade1bb23f58af038783581"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Display-Light.otf",revision:"d2e8530d7b0f9ca7c5298263bd1a184a"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Display-LightItalic.otf",revision:"39952ee7dfea127ddebc5a13ce58e0e4"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Display-Medium.otf",revision:"84d3637759a89aa1b59df2a828544511"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Display-MediumItalic.otf",revision:"557592b0324385955c74fb022ace5972"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Display-Regular.otf",revision:"f4245a5167ad609c4ba2d0850d553bd2"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Display-RegularItalic.otf",revision:"4fdd6f9c08dfaf61a984a914a1b6bda4"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Display-Semibold.otf",revision:"2723a0240d8e4fd81b39668e0e33640a"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Display-SemiboldItalic.otf",revision:"84e3882b6d333559d3eb042a01b06328"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Display-Thin.otf",revision:"5a942603c086e4c24355b64a2b160c72"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Display-ThinItalic.otf",revision:"e79731360fc0afaf4afffcd45af1d1bf"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Display-Ultralight.otf",revision:"77c1464d7d448754be1640c8a3f45517"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Display-UltralightItalic.otf",revision:"b8b44905130392635dce332d912a8a37"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Italic.ttf",revision:"05f2ccddb258f5dfb25aa965a4a2ca43"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Rounded-Black.otf",revision:"41cd4e684cec8b6fa83aaada8bad8873"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Rounded-Bold.otf",revision:"bf108f8e2fcbda9e4ea2b18ed7799caf"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Rounded-Heavy.otf",revision:"43e2e246b1b021c3435c57b3dcf71e63"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Rounded-Light.otf",revision:"5d6b13c011fc2e019e5276b4ae744bdf"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Rounded-Medium.otf",revision:"137ee8cda3c7f9c388e62aca25c82744"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Rounded-Regular.otf",revision:"6720e086a89d34cb9ca424a3ba913082"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Rounded-Semibold.otf",revision:"02dc9f029efbbe4cd105420f50202dd9"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Rounded-Thin.otf",revision:"f8ab0e64878f5c5e3db454b6f89dd0cd"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Rounded-Ultralight.otf",revision:"5e29fac7018bce07d6f5b20c79b7142f"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Text-Black.otf",revision:"82d5f38559f66d19b968066608f4a489"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Text-BlackItalic.otf",revision:"774fc2cdd8f7b73b4d092b7c4b787486"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Text-Bold.otf",revision:"88b6e0b21919fa6abb7899faa1571f01"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Text-BoldItalic.otf",revision:"41a00af026a7270048deaacc3bdb9271"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Text-Heavy.otf",revision:"fadde3407f7fb52b942bd5bac0ba042c"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Text-HeavyItalic.otf",revision:"a6e4377c5221bb478d11f5e5f812a319"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Text-Light.otf",revision:"753fc9d460f7722614e34fe61ed1c073"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Text-LightItalic.otf",revision:"28d8d0b1c702c1efb4598f16bab0a5b1"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Text-Medium.otf",revision:"ded5efe3e8ec62553c3b10f4edd4ca8d"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Text-MediumItalic.otf",revision:"499ca95e4b95de800de70051bb81219b"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Text-Regular.otf",revision:"a07152f3f0c03589a75b218b2c6536cb"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Text-RegularItalic.otf",revision:"b1be36c491043eda634143b39bf1cf8c"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Text-Semibold.otf",revision:"9a7c849b216648913f216d20a21e9aae"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Text-SemiboldItalic.otf",revision:"919f7cd048eca041b9ff1fd06c6d9981"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Text-Thin.otf",revision:"603fb2d8c5af2435e1532bf0d64b9a56"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Text-ThinItalic.otf",revision:"df5de52b409e873b53540e79eb916f6b"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Text-Ultralight.otf",revision:"5e3e5fd76b8d6b729b1b806755472068"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro-Text-UltralightItalic.otf",revision:"f13eca0f8b8af1975e6468626d195e4e"},{url:"/fonts/San-Francisco-Pro-Fonts-master/SF-Pro.ttf",revision:"b00758ffdb3216ea93c6fc6957aa2cfa"},{url:"/images/PSG-Concorde-Horizontal.svg",revision:"8317ddb29fa3a5892b98f9e040098e86"},{url:"/images/PSG-Concorde-Stacked.svg",revision:"14c9feb68230b951690b2d1cf52c659f"},{url:"/images/ascii-pg.png",revision:"15400c77516b60dc505e9bbef82b579b"},{url:"/images/clandestine.png",revision:"9ff6fcf3bf7e3f373823f3eccec573a5"},{url:"/images/football-1.png",revision:"ace78b8be0b0c776c8354ae084cc6de6"},{url:"/images/football-2.png",revision:"5fdab1159bbdcb7f62c1a791eb778727"},{url:"/images/frame-pg.png",revision:"731f4e6dba426029a29bf88c3a274c13"},{url:"/images/gradients/black-gradient.json",revision:"f28ddf46e736be6ca7ecb4f700c5c8ba"},{url:"/images/gradients/colorful-gradient.json",revision:"13bc7ce4e1f1eca749ecbf21d273c73b"},{url:"/images/lens-logo.png",revision:"19963b9874d4cda8d079e9ef9253c35f"},{url:"/images/mcdonalds.png",revision:"4a53ed7e8ff04d4f3dc4657c8c32b4bf"},{url:"/images/nike-logo.png",revision:"4aaef0b90b25f254fadf186527f212ce"},{url:"/images/orbit.png",revision:"7b692d46345e7273668697697a5aa46e"},{url:"/images/pixie-icon-2.png",revision:"b9dc43766fe9a103040b8cda6ac3df27"},{url:"/images/pixie-icon-3.png",revision:"c5a0eb5af07a410c6c876a59d719695b"},{url:"/images/pixie-icon-4.png",revision:"49a36c3d68ae2d182a73a624f93f8994"},{url:"/images/playtime/Bath.png",revision:"01bc6923b9440ea22e882af6ff125838"},{url:"/images/playtime/Button.png",revision:"6daf221935c85c1fa4a0bef024591890"},{url:"/images/playtime/Candle.png",revision:"f90ab07fbc2683b3a815cd0b5506cde0"},{url:"/images/playtime/Chick.png",revision:"f4b22a8940dc7c7b90242c0897557f7f"},{url:"/images/playtime/Cloud.png",revision:"dc8b33a19274c88f254f028f3844a4c5"},{url:"/images/playtime/Crystal-ball.png",revision:"e8e5aab2d33d6520483d16f42c28462e"},{url:"/images/playtime/Duck.png",revision:"b685886328077c71d34ddd999a32f6ba"},{url:"/images/playtime/Glasses.png",revision:"a1f6603714befc171ac0982e844067bf"},{url:"/images/playtime/Hat.png",revision:"451cc40c920654a2903688df9aee6f52"},{url:"/images/playtime/Heart.png",revision:"88468fb526db73eafa5e7f1924195806"},{url:"/images/playtime/Joystick.png",revision:"3cd6f3c74def6f3a11a4f6edc09a4e0a"},{url:"/images/playtime/Key.png",revision:"a30ddb75038e7e85dd3ac36fcd030495"},{url:"/images/playtime/Lamp.png",revision:"0601e1382c8d2617b3ba2ea8f8fe8cb3"},{url:"/images/playtime/Magnifier.png",revision:"dd75d3bdb8eebb579138053015a23754"},{url:"/images/playtime/Moon.png",revision:"cb83ee18abfe86339ad9b7be829f3f46"},{url:"/images/playtime/Phone.png",revision:"4aa5591c5153f04e5d2b05e60e39d379"},{url:"/images/playtime/Plane.png",revision:"26dc8673f3cbe0d51c8ea3a07eccca86"},{url:"/images/playtime/Purse.png",revision:"6dd020206d003ec0fa41e4e3b70d0572"},{url:"/images/playtime/Shark.png",revision:"916cb247b1b19288168821c2d5e42977"},{url:"/images/playtime/Sled.png",revision:"e72d2b297da861425d0b73f9da7a3a23"},{url:"/images/playtime/Spatula.png",revision:"9ed7df849bb5bd5746139a0339adc82b"},{url:"/images/playtime/T-Rex.png",revision:"5b85d9395924bf3d2a55341cde230f7a"},{url:"/images/playtime/Teddy-Bear.png",revision:"f1e5589df4c2d8f9ca0cb0ed8bbcaff5"},{url:"/images/playtime/Tennis.png",revision:"aee28121a07ed8912a7a0b7fd452e20e"},{url:"/images/playtime/Turtle.png",revision:"f460112d18dd2b66ae87a1989009b016"},{url:"/images/pokemon-pg.png",revision:"dc91273f3e9b418e3da3e9c52d02df99"},{url:"/images/psg1.png",revision:"927e17f1056002c93b303473001cbdbf"},{url:"/images/psg2.png",revision:"a906264c0b87c127c9305e45c563d44d"},{url:"/images/psg3.png",revision:"b03c0bbdaad3059d0bc1a4b358a2d0c0"},{url:"/images/sticker-default.png",revision:"8c8dbe8b40a434696edcb3ea2ed3d91c"},{url:"/images/token-default.png",revision:"a8215d8ffea69218fbce664b216ad3b4"},{url:"/images/traits-default.png",revision:"5ea16f379a8a1b4c5c32125aeda31680"},{url:"/images/war-film-poster.png",revision:"ffa828eff89d138439ca58ce676f817b"},{url:"/images/warpcast-default.png",revision:"5bbaf457798831bf353b096a3c41a403"},{url:"/manifest.json",revision:"78cbb79b723db3e9f8dd0892cdebc4b8"},{url:"/membercard.png",revision:"3100b3381632c74fd35c73fb9ff700ea"},{url:"/pixie-avatar.png",revision:"2fea5a8bc7dd2e7487e6ae481a8e577c"},{url:"/pixie-logo.svg",revision:"552d25a0149e9c14a16bf4b52f993954"},{url:"/plastic-wrap.png",revision:"e6024d1fa5eacd1f20af261a87ad3653"},{url:"/playground-gift.png",revision:"8c8dbe8b40a434696edcb3ea2ed3d91c"},{url:"/playground-icon.png",revision:"805d466a8f6283301fb303319bc32c42"},{url:"/profile-media-v2.svg",revision:"d4b43612731b3f190bed5e2a176b8866"},{url:"/profile-media.svg",revision:"1b8343014c0d62bce497721ba466c3c4"},{url:"/songs/kw-burn.mp3",revision:"6988415e24ad442d65fd5a580a28bee2"},{url:"/sound-wave-ani.gif",revision:"f78dc8da396f0f1c92370141d9432097"},{url:"/veeze-cover.png",revision:"900a3d9c16b163ab4d2205f6247952e2"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"},{url:"/wave-sound-pause.svg",revision:"4724fdac2bca9cf78a7aa02bf02822ea"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));