<template>
    <div v-if="route.path !== '/'" class="navbar justify-center bg-base-200">
        <nuxt-link class="underline" to="/">Home</nuxt-link>
    </div>
    <slot />
</template>
<script setup lang="ts">
    const route = useRoute();
</script>
