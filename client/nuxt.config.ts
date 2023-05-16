// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint';
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/eslint-module'],
  vite: {
    plugins: [eslintPlugin()],
  },
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
  runtimeConfig: {
    public: {
      TEST_EMAIL: process.env.NUXT_CREDENTIAL_EMAIL,
      TEST_PASSWORD: process.env.NUXT_CREDENTIAL_PASSWORD,
      REST_API: process.env.NUXT_REST_API,
    },
  },
});
