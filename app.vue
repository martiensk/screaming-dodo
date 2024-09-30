<template>
    <Html :data-theme="config.theme.name" />
    <ConfigBar />
    <NuxtPage :key />
</template>
<script setup lang="ts">
    import { onMounted } from 'vue';
    import { themeChange } from 'theme-change';
    import config from '~/config/.config.json';

    const route = useRoute();

    useHead({
        htmlAttrs: {
            'data-theme': config.theme.name as string
        }
    });

    const key = computed(() => route.fullPath);

    onMounted(() => {
        themeChange(false);
    });
</script>
