// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt'
  ],
  pwa: {
    strategies: 'generateSW',
    registerType: 'autoUpdate',
    manifest: {
      name: 'Nuxt + Workbox',
      short_name: 'Nuxt + Workbox',
      description: 'Nuxt + Workbox',
      icons: [
        {
          src: 'favicon.ico',
          sizes: '64x64',
          type: 'image/x-icon',
        }
      ]
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.pathname.includes('images.unsplash.com') || url.pathname.includes('tailwindui.com'),
          handler: 'StaleWhileRevalidate',
          method: "GET",
          options: {
            cacheName: 'images-cache',
            cacheableResponse: {
              statuses: [200]
            },
            expiration: {
              maxEntries: 60,
              maxAgeSeconds: 60 * 60 * 12,
              purgeOnQuotaError: true
            }
          }
        },
        {
          urlPattern: ({ url }) => url.pathname.includes('/api/'),
          handler: 'StaleWhileRevalidate',
          method: "GET",
          options: {
            cacheName: 'api-cache',
            cacheableResponse: {
              statuses: [200]
            },
            expiration: {
              maxEntries: 60,
              maxAgeSeconds: 60 * 60 * 12,
              purgeOnQuotaError: true
            }
          }
        },
      ]
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 3600,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      type: 'module',
    },
  }
})
