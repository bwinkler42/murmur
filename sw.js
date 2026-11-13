/* MURMUR PWA offline shell. Change CACHE_VERSION for each deployed version. */
const CACHE_VERSION = 'murmur-pwa-v14-1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key.startsWith('murmur-pwa-') && key !== CACHE_VERSION)
          .map((key) => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (request.mode === 'navigate') {
    // Check for an updated game on each online visit; fall back to cached game offline.
    event.respondWith(fetch(request).then((response) => {
      if (response.ok) {
        const copy = response.clone();
        event.waitUntil(caches.open(CACHE_VERSION)
          .then((cache) => cache.put(new URL('./index.html', self.registration.scope), copy)));
      }
      return response;
    }).catch(() => caches.match(new URL('./index.html', self.registration.scope))));
    return;
  }
  event.respondWith(caches.match(request).then((cached) => cached || fetch(request)));
});
