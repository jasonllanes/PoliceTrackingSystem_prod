'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "dd6e27a44919403b24de955190a96d38",
".git/config": "9c899d8d64892227f9764cab25f17d1e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1198f9ee7490e77c1da2732c1440b96f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d2dd4d73c3af278b598443bf007b812d",
".git/logs/refs/heads/main": "1b33a840661f217df03f329b74392e99",
".git/logs/refs/remotes/origin/main": "a9b5990533c1f24ebeb3de3d0a5b65e0",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/72af39d51f402ecf0bafca5e216ee995cddbd4": "9702d290804b28bf50013418c16a133d",
".git/objects/04/93f3b45441681f010fb209a02c107692f5251b": "53a177b80348862dd49cf56159c1f139",
".git/objects/08/0f2789d5b5f4655fd1ecf80467dea545a6d946": "a04deeb1b3e35f1508499735fee5b354",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0f/5626f4a94f6131d2adcd5416d6136bbcd40088": "b1a19af113e4e2f6477692bba8f16983",
".git/objects/17/898d0077d17edf9e93e5bd0976c9e5b6a195e2": "2442773b30ef0bd8d4e240f9f6fbf6f3",
".git/objects/1b/4124b75838a652178333cab0964d4c07806a78": "035a2a29f2bf94efca172b329f1963a7",
".git/objects/1c/9de649bccdb33a86a349baef109cdc72b6ec55": "f4c5b484fa2a9b948c1bd50a3bac49e7",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/1f/b60a9ace5db6f649a8fe658392ac8ddeaf703b": "9ddc54372dcf08f133260adfe58e4c15",
".git/objects/22/8d90bd03dac9d65459bd6b56e36fa2db882470": "bc139c72a6b28b18a5081b2320717cbc",
".git/objects/2b/9ef40880d845fe265005a3b1f76fa16606f877": "1dcf24ae9b9349b9e1383910595d6a53",
".git/objects/2e/f736f2eb0514cde47fcaf9f08cf68fef2a22ee": "a53b1e74aae5e1f26bc7930b8fc4d142",
".git/objects/2f/60861c3e1f30f5ecf5a9de8bb8da8664e5038f": "ce2ebcccfb70205108c2104b3f5461ff",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/e155505666fd7dcec3ad21113ec50cd6d7408b": "f460b67187ac7d2a6c55f90698cd2757",
".git/objects/36/8a8ce857f5d45c5dffa256c92827fb9143195a": "ce5ab032ecde8c394df3e77b988a4b01",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/39/389936eb83818e030b280ce125b08939bd88eb": "cb0ada32fb6513a7d9c762295d8bbad7",
".git/objects/3a/4a4d37334921eea22fabc479c447741451974f": "3a035746ac437787f1dd759b27bc08d8",
".git/objects/40/149ba70a3c93324ebf7bb67f025f14ef0837f8": "d28a04aa94239c6b43e5846e86b90f21",
".git/objects/44/0afb0a89405e1f91a7c8544b7efa211880dcfe": "05ffd75e6d2f5da18dfb3cd28fb33601",
".git/objects/45/a13955bbd7443723c142d762e06353d812c4f0": "29948fddbb1c26045495bbbb6081d443",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4d/68b07e0164556fd02f7956628ae008f542254b": "172af0846c3c91c72cc2288332bd474e",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/56e5979ee86a21d48be672febeec90a678e200": "1378d4af0e61b30965c2bd1a44fa982f",
".git/objects/52/fe77ee460a66a986f1ec823c62027b43ecdfe8": "4bde4935c619aba837f06d92064ab0e3",
".git/objects/58/eaaa509312eaf49148a6e67dccf90faa73885c": "f985eeac1f382f84b7fdfcb0ebc73da3",
".git/objects/59/71a13ab3d208d11a891380360547c3a88d46ae": "f6a1782e063ca8c7601916497c635a98",
".git/objects/5e/595ebbc853280d558e4d3bcdfbe9851772cf59": "398ac1b067205725d0102d05b2465658",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/68/945f52da3ee24a2b8eea93fe19b2abe333c4af": "86819109da45a998eb321ccddc14b107",
".git/objects/6a/e8854637a7aa18bbbf83c25264c5c15d774548": "0657012710f83bab1da5a0403124093c",
".git/objects/6e/2e758892fbf8d31a4ae4ef595a20806cced1fd": "91fa19ddd6593b43c87badc93a585bc3",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/77/0ae8e5e5c13d5f055d16d4c8bf76f055da8bcc": "0f201bb0107137bc419503e68faa43e6",
".git/objects/77/5f6bfdf15420d7e6a6caaf6f4649318eb561bb": "318f2cb4044057782c890d7af1c3a9ed",
".git/objects/79/990cb8b03f943c2dc11dc441bb8823f7ee612a": "d1caacd04597659b9eff3ffb425e871f",
".git/objects/7e/95b9094474bf995cec36a8b12ba50b92790776": "7c7b81b0ab5f9575b8cd629332bdb814",
".git/objects/85/0438c57f682d615f9b33c9564a42aab1e61a41": "a4f72337ac8a6efcf20e77e70cfe4f12",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/2841f65ed327e36fae3af5b9417b722b52d8c4": "92267f7ac89bc836d88201cf1fccd322",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/90/1a2702187f95d301aa5126b6d51b996b6dd04e": "971679fe7595473cc21635d0ba43002e",
".git/objects/90/3c025b98eee5717a1fbce5886f3010386d0a7c": "fc397cc4fe33703fe253b4482203d96a",
".git/objects/9e/2e790de92d4eb338112f779b0273bd784dbecf": "3a1208f08762c65a3e4535159698363e",
".git/objects/a3/c286c2eb64c958b3f366299b756224af7b71ad": "35eded671da68fca45b445e16e6ae6a5",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b1/fbcc0c3ff0749aa558b57b41d013b68ce3170c": "96dc0512d53370682464abcd9a60b1f6",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b5/379d6e77fbfad10cad0ae3184363f6d1561036": "3080af10963ea38c151b75e2d931108c",
".git/objects/b6/3780f08eecfa5e991d68757160d87ccadfbbd4": "e9c1775f3081793f31621a76c6e67635",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/c4d3c27588a0e1e73345f7b1ae009e1fc3e7b4": "c565b2a2c5a664803c3087b32e8943a3",
".git/objects/cc/844befb167ede394dfb698ae0d3b76fb44146d": "a483c3bd12b88a03c20a258a2bd7de8d",
".git/objects/d2/ce47a7027437308e3228881973f314740b1ced": "7ce5d002fc406c7087575c924cec9249",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/04c8a08cab2e500d6009a3fa4a629242a6d7ce": "2b3f593bac3e6f8fbc9ad44dc75f100e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/3669a205129d7e9e73f913a19008f082166ed1": "1534f43827f99306b6712be5c20d95db",
".git/objects/e0/105e979ba4c19be462fb2f12a13a809e4be4a0": "e2762f5353316a571943aa8436abe91f",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e6/0876f4ef47ccbd5a2d05698f6551be391f68d1": "f7ed331a81c72e53887e46c7c2be7e36",
".git/objects/ea/99f8990de53d7085fb9fc704ad2b2728a7c700": "c1065f1df5759d7094e0bf053a6a9351",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/3c19d2c0b514140eb8e5342e3cebd8910f2f81": "d66df60f79097ec410c1d0609cd16621",
".git/objects/f9/2d7ea6743f6c0a9aadd451ce3d108f2c849a6f": "b984f6df3ee8c8b29063d79b4ad1cd72",
".git/refs/heads/main": "a12e2b5200bb4e960d62fa1f8514e35d",
".git/refs/remotes/origin/main": "a12e2b5200bb4e960d62fa1f8514e35d",
"assets/AssetManifest.json": "4a4cdc2a14df5479ff37427ad3c9b67b",
"assets/AssetManifest.smcbin": "53417be58a36e6e1df8067599c75cc6f",
"assets/assets/images/sentinex_logo.png": "bfa90c01ea03710febdf1c862462e7a0",
"assets/FontManifest.json": "ac3f70900a17dc2eb8830a3e27c653c3",
"assets/fonts/MaterialIcons-Regular.otf": "c6fe8a04bc71154c7004f728d999a400",
"assets/NOTICES": "4cfdcd3506a81bfa3b989c9cb4dee6c9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/sentinex_logo.png": "bfa90c01ea03710febdf1c862462e7a0",
"index.html": "3e2ac1e279021248bc546060773acf3c",
"/": "3e2ac1e279021248bc546060773acf3c",
"main.dart.js": "cfdcfb310360d3aff731515ac63a6fd6",
"manifest.json": "3455fdb7b1d0c553cff25e73c813ddba",
"version.json": "d0728a9b4669dfb27c10bc8b609df5d6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
