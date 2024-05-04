import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(() => {
  return {
    base: './',  // Esto establece la base a una ruta relativa

    define: {
      'process.env': {},
    },
    build: {
      outDir: 'dist',
    },
    server: {
      host: '0.0.0.0'
    },
    plugins: [
      react(),
      VitePWA({
        swSrc: './sw.js',
        registerType: 'autoUpdate',
        devOptions: {
          enable: true
        },
        workbox: {
          runtimeCaching: [
            /* {
              urlPattern: 'https://mixtaperadio.web.app/index.html',
              handler: 'NetworkFirst',
              options: {
                cacheName: 'html-cache',
                expiration: {
                  maxAgeSeconds: 24 * 60 * 60, // 24 horas
                },
                revision: '0001', // Asegúrate de cambiar esto cada vez que index.html se actualice
              },
            }, */
            {
              urlPattern: /^https:\/\/mixtaperadio\.web\.app/,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'mixtape-cache',
                expiration: {
                  maxEntries: 200,
                  maxAgeSeconds: 24 * 60 * 60, // 24 horas
                },
              },
            },
            {
              urlPattern: /^\/image\//,  //  /^https:\/\/mixtaperadio\.web\.app\/image\//
              handler: 'NetworkFirst',  // PRIMERO INTERNET ANTES DEL CACHE
              options: {
                cacheName: 'img-mixtape',
                expiration: {
                  maxEntries: 100,
                  maxAgeSeconds: 24 * 60 * 60, // 24 horas
                },
              },
            },
            {
              urlPattern: /\/assets\/icons\//,
              handler: 'CacheFirst',
              options: {
                cacheName: 'icon-mixtape',
                expiration: {
                  maxEntries: 20,
                  maxAgeSeconds: 24 * 60 * 60, // 24 horas
                },
              },
            },


            /* {
              urlPattern: 'https://mixtaperadio.web.app/image/djs/alibhtty/alibhtty.jpg',
              handler: 'CacheFirst',
              options: {
                cacheName: 'imagen-cache',
              },
            }, */
            {
              urlPattern: './assets/audio/clicktape.mp3',
              handler: 'CacheFirst',
              options: {
                cacheName: 'cancion-cache',
              },
            },


          ],

          /* precacheAndRoute: [
            {
              url: 'https://mixtaperadio.web.app/index.html#',
              handler: 'NetworkFirst',
              options: {
                cacheName: 'html-cache',
                expiration: {
                  maxAgeSeconds: 24 * 60 * 60, // 24 horas
                },
                revision: '0001', // Asegúrate de cambiar esto cada vez que index.html se actualice
              },
            },
          ], */

        },


        
        manifest: {
          name: 'Mixtape Radio PWA',
          short_name: 'Mixtape',
          description: 'Mixtape PWA',
          theme_color: '#066EFF',
          icons: [
            {
              src: 'assets/icons/logo1024.png',
              sizes: '1024x1024',
              type: 'image/png',
              purpose: 'any maskable'
            },
            {
              src: 'assets/icons/logo512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable'
              },
            {
              src: 'assets/icons/logo384.png',
              sizes: '384x384',
              type: 'image/png',
              purpose: 'any maskable'
              },
            {
              src: 'assets/icons/logo256.png',
              sizes: '256x256',
              type: 'image/png',
              purpose: 'any maskable'
              },
            {
              src: 'assets/icons/logo192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any maskable'
              },
            {
              src: 'assets/icons/logo128.png',
              sizes: '128x128',
              type: 'image/png',
              purpose: 'any maskable'
              },
            {
              src: 'assets/icons/logo96.png',
              sizes: '96x96',
              type: 'image/png',
              purpose: 'any maskable'
              },
            {
              src: 'assets/icons/logo64.png',
              sizes: '64x64',
              type: 'image/png',
              purpose: 'any maskable'
              },
            {
              src: 'assets/icons/logo32.png',
              sizes: '32x32',
              type: 'image/png',
              purpose: 'any maskable'
              },
            {
              src: 'assets/icons/logo16.png',
              sizes: '16x16',
              type: 'image/png',
              purpose: 'any maskable'
              },
          ]
        }
        
      })],
  };
});
