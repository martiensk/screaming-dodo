<template>
    <Html :data-theme="appConfig.theme.colourScheme" />
    <ConfigBar v-if="appConfig.theme.forceConfig" />
    <NuxtPage :key />
</template>
<script setup lang="ts">
    import { onMounted } from 'vue';
    import { themeChange } from 'theme-change';

    const appConfig = useAppConfig();
    const runtimeConfig = useRuntimeConfig();

    const route = useRoute();

    useHead({
        htmlAttrs: {
            lang: 'en',
            'data-theme': appConfig.theme.colourScheme as string
        },
        title: appConfig.blog.name,
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: appConfig.blog.description
            }
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            }
        ]
    });

    defineOgImageComponent('NuxtSeo', {
        title: appConfig.blog.name,
        description: appConfig.blog.description,
        colorMode: 'dark'
    });

    useSeoMeta({
        title: appConfig.blog.name,
        description: appConfig.blog.description,
        ogTitle: appConfig.blog.name,
        ogDescription: appConfig.blog.description,
        // ogImage: `/${appConfig.seo.logo}`,
        ogUrl: runtimeConfig.public.siteUrl,
        twitterTitle: appConfig.blog.name,
        twitterDescription: appConfig.blog.description,
        twitterImage: `/${appConfig.seo.logo}`,
        twitterCard: 'summary'
    });

    const key = computed(() => route.fullPath);

    onMounted(() => {
        themeChange(false);
    });
</script>
