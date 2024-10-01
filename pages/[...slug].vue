<template>
    <NuxtLayout>
        <main
            class="prose mx-auto my-8 max-w-content p-4 md:prose-lg prose-a:pointer-events-none prose-a:no-underline">
            <ContentDoc />
        </main>
    </NuxtLayout>
    <footer class="navbar justify-center bg-base-200">
        &copy; {{ appConfig.blog.name }} {{ new Date().getFullYear() }}
    </footer>
</template>
<script setup lang="ts">
    const appConfig = useAppConfig();
</script>
