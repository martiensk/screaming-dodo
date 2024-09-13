<template>
    <div class="banner-image hero h-96" :style="bgImageStyle">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold">{{ config.name }}</h1>
                <p class="mb-5">
                    {{ config.description }}
                </p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import config from '~/config.json';

    const bgImageStyle = {
        backgroundImage: `url(/images/${config.bannerImage})`
    };
</script>
