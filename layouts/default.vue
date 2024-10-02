<template>
    <div v-if="route.path !== '/'" class="navbar justify-center bg-base-200">
        <nuxt-link class="underline" to="/">Home</nuxt-link>
    </div>
    <slot />
    <footer class="navbar justify-center bg-base-200">
        &copy; {{ appConfig.site.name }} {{ new Date().getFullYear() }}
    </footer>
</template>
<script setup lang="ts">
    const route = useRoute();
    const appConfig = useAppConfig();
</script>
