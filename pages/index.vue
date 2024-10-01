<template>
    <NuxtLayout>
        <component :is="dynamicComponent"></component>
    </NuxtLayout>
    <footer class="navbar justify-center bg-base-200">
        &copy; {{ appConfig.blog.name }} {{ new Date().getFullYear() }}
    </footer>
</template>

<script setup lang="ts">
    import { defineAsyncComponent } from 'vue';

    const appConfig = useAppConfig();

    const dynamicComponent = shallowRef<Component | null>(null);

    onMounted(async () => {
        const template = appConfig.theme.homeTemplate;

        switch (template) {
            default:
                dynamicComponent.value = defineAsyncComponent(
                    () => import('~/components/templates/Default.vue')
                );
        }
    });
</script>
