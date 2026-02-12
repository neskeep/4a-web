import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  future: { compatibilityVersion: 4 },
  devtools: { enabled: false },

  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'reka-ui/nuxt',
    '@nuxt/image'
  ],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  build: {
    transpile: ['gsap']
  },

  image: {
    quality: 80,
    formats: ['avif', 'webp']
  }
})
