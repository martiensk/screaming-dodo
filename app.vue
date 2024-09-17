<template>
    <Html :data-theme="config.public.theme" />
    <ConfigBar />
    <!-- <NuxtLayout>
        <NuxtPage :key />
    </NuxtLayout> -->
    <footer class="navbar justify-center bg-base-200">
        &copy; {{ config.public.name }} {{ new Date().getFullYear() }}
    </footer>
</template>
<script setup lang="ts">
    import { onMounted } from 'vue';
    import { themeChange } from 'theme-change';
    // import config from '~/config.json';
    const config = useRuntimeConfig();

    // const route = useRoute();

    useHead({
        htmlAttrs: {
            'data-theme': config.public.theme as string
        }
    });

    // const key = computed(() => route.fullPath);

    onMounted(() => {
        themeChange(false);
    });
</script>
