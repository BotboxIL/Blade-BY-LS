self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('blade-store').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/logo.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});