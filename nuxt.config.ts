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
        '@nuxt/image'
    ],
    delayHydration: {
        debug: process.env.NODE_ENV === 'development',
        mode: 'init'
    },
    runtimeConfig: {
        public: {
            theme: '',
            forceThemeConfig: false,
            name: 'TestApp'
        }
    }
});
