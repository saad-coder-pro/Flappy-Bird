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
  "./flappy.png",
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
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
