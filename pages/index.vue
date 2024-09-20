<template>
    <component :is="dynamicComponent"></component>
</template>

<script setup lang="ts">
    import { defineAsyncComponent } from 'vue';
    import config from '~/content/config/.config.json';

    const dynamicComponent = shallowRef<Component | null>(null);

    onMounted(async () => {
        const template = config.template;

        switch (template) {
            default:
                dynamicComponent.value = defineAsyncComponent(
                    () => import('~/components/templates/Default.vue')
                );
        }
    });
</script>
