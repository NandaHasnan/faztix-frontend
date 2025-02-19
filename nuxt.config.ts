// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  compatibilityDate: '2024-11-01',
  // plugins: ['~/plugins/pinia.js'],
  // modules: ['@pinia/nuxt'],
  srcDir: 'src/',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
