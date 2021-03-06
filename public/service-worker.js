const cacheName = 'cache-v1';
const precacheResources = [
    '/',
    '/offline',
    'css/styles.css',
    'img/background.png',
    'img/favicon.svg',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(precacheResources);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request)
        .then(cachedResponse => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request).catch(e => {
                return caches.open(cacheName)
                    .then(cache => cache.match("/offline"))
            })
        })
    );
});
