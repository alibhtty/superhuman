importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

workbox.setConfig({
  debug: true,
});

workbox.precaching.precacheAndRoute([
  { url: './index.html', revision: '0001' },
  { url: './src/style/index.css', revision: '0001' },
  { url: './assets/audio/clicktape.mp3', revision: '0001' }
  //'../src/style/index.css',
  //'./assets/audio/clicktape.mp3'
]);

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'images-mix',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);

workbox.routing.registerRoute(
  new RegExp('https://mixtaperadio.web.app/'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'api',
  })
);

workbox.routing.registerRoute(
  /\.(?:ttf)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'font-mix',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 5,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);


// CACHE .MP3
workbox.routing.registerRoute(
  // Usa una expresión regular para hacer coincidir las solicitudes de archivos .mp3, .wav y .m4a
  /.*\.(mp3|wav|m4a)$/,
  // Usa la estrategia de caché CacheFirst
  new workbox.strategies.CacheFirst({
    cacheName: 'mixtape-audio',
    plugins: [
      // Expulsa las entradas más antiguas cuando el límite de entradas se excede
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 20,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);