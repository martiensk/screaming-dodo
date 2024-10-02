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
        title: appConfig.site.name,
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: appConfig.site.description
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
        title: appConfig.site.name,
        description: appConfig.site.description,
        colorMode: 'dark'
    });

    useSeoMeta({
        title: appConfig.site.name,
        description: appConfig.site.description,
        ogTitle: appConfig.site.name,
        ogDescription: appConfig.site.description,
        ogImage: `/${appConfig.site.logo}`,
        ogUrl: runtimeConfig.public.siteUrl,
        twitterTitle: appConfig.site.name,
        twitterDescription: appConfig.site.description,
        twitterImage: `/${appConfig.site.logo}`,
        twitterCard: 'summary'
    });

    const key = computed(() => route.fullPath);

    onMounted(() => {
        themeChange(false);
    });
</script>
