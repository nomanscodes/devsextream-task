// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    'devextreme/dist/css/dx.light.css',
    './assets/main.scss'
  ],
  modules: ['@pinia/nuxt'],
})
