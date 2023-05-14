// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint'
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/eslint-module'],
    vite: {
        plugins: [eslintPlugin()],
    },
    css: ['@fortawesome/fontawesome-svg-core/styles.css']
})
