
// service-worker.js

const cacheName = "darkfolio-cache-v1";
const assets = [
  "/",
  "/index.html",
  "/assets/css/style.css",
  "/assets/js/main.js",
  "/assets/js/terminal.js",
  "/assets/js/ai-avatar.js",
  "/assets/js/3d-effects.js",
  "/manifest.json",
  "/assets/img/icon-192.png",
  "/assets/img/icon-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
