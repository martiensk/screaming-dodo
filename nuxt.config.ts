export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['~/assets/main.css'],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },

    compatibilityDate: '2024-09-06',
    modules: [
        '@stefanobartoletti/nuxt-social-share',
        'nuxt-swiper',
        'nuxt-delay-hydration',
        '@nuxt/image',
        '@nuxthq/studio',
        '@nuxt/content'
    ],
    delayHydration: {
        debug: process.env.NODE_ENV === 'development',
        mode: 'init'
    }
});
