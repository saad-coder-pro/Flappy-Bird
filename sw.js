const CACHE_NAME = "flappy-bird-cache-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./game.js",
  "./manifest.json",

  // Images
  "./img/BG.png",
  "./img/botpipe.png",
  "./img/getready.png",
  "./img/go.png",
  "./img/ground.png",
  "./img/toppipe.png",
  "./img/bird/b0.png",
  "./img/bird/b1.png",
  "./img/bird/b2.png",
  "./img/ground/g0.png",
  "./img/ground/g1.png",
  "./img/tap/t0.png",
  "./img/tap/t1.png",
  "./BG.png",
  // Sounds
  "./sfx/die.wav",
  "./sfx/flap.wav",
  "./sfx/hit.wav",
  "./sfx/score.wav",
  "./sfx/start.wav"
];


self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting(); // Ensures SW activates immediately after install
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim(); // Take control of open clients immediately
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
