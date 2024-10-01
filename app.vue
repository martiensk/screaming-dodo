<template>
    <Html :data-theme="appConfig.theme.colourScheme" />
    <ConfigBar v-if="appConfig.theme.forceConfig" />
    <NuxtPage :key />
</template>
<script setup lang="ts">
    import { onMounted } from 'vue';
    import { themeChange } from 'theme-change';

    const appConfig = useAppConfig();

    const route = useRoute();

    useHead({
        htmlAttrs: {
            'data-theme': appConfig.theme.colourScheme as string
        }
    });

    const key = computed(() => route.fullPath);

    onMounted(() => {
        themeChange(false);
    });
</script>
