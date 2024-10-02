export default defineNuxtConfig({
    devtools: {
        enabled: true,

        timeline: {
            enabled: true
        }
    },
    css: ['~/assets/main.css'],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },

    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL
        }
    },

    compatibilityDate: '2024-09-06',
    modules: [
        '@nuxthq/studio',
        '@stefanobartoletti/nuxt-social-share',
        'nuxt-swiper',
        'nuxt-delay-hydration',
        '@nuxt/image',
        '@nuxt/content',
        '@nuxtjs/sitemap',
        '@nuxtjs/robots',
        'nuxt-og-image',
        'nuxt-schema-org',
        '@nuxtjs/seo'
    ],
    studio: {
        enabled: true
    },
    delayHydration: {
        debug: process.env.NODE_ENV === 'development',
        mode: 'init'
    },

    site: {
        defaultLocale: 'en'
    },

    content: {
        documentDriven: true
    }
});
