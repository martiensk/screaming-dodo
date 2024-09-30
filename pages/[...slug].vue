<template>
    <NuxtLayout>
        <main class="prose mx-auto my-8 max-w-content p-4 md:prose-lg">
            <ContentDoc />
        </main>
    </NuxtLayout>
    <footer class="navbar justify-center bg-base-200">
        &copy; {{ config.name }} {{ new Date().getFullYear() }}
    </footer>
</template>
<script setup lang="ts">
    import config from '~/config/.config.json';
</script>
