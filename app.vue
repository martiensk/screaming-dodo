<template>
    <Html :data-theme="config.theme.default" />
    <ConfigBar />
    <NuxtLayout>
        <NuxtPage :key />
    </NuxtLayout>
    <footer class="navbar justify-center bg-base-200">
        &copy; {{ config.name }} {{ new Date().getFullYear() }}
    </footer>
</template>
<script setup lang="ts">
    import { onMounted } from 'vue';
    import { themeChange } from 'theme-change';
    import config from '~/config.json';

    const route = useRoute();

    useHead({
        htmlAttrs: {
            'data-theme': config.theme.default
        }
    });

    const key = computed(() => route.fullPath);

    onMounted(() => {
        themeChange(false);
    });
</script>
