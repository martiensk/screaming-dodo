<template>
    <div
        class="card mx-auto my-10 w-10/12 cursor-pointer rounded-none bg-base-100 shadow-none"
        @click="navigateTo(article._path)">
        <figure v-if="article.image">
            <NuxtImg :src="`/images/${article.image}`" :alt="article.title" />
        </figure>
        <div class="card-body">
            <div class="mb-4 flex">
                <div class="avatar">
                    <div
                        class="mr-4 w-12 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
                        <NuxtImg
                            :src="`/images/authors/${article.author.toLowerCase().replace(' ', '')}.png`" />
                    </div>
                </div>
                <div>
                    <p>
                        <span class="font-bold">Author:</span> {{ article.author }}<br />
                        <span>Date:</span> {{ article.published }}
                    </p>
                </div>
            </div>
            <h2 class="card-title">{{ article.title }}</h2>
            <p>{{ article.summary }}</p>
            <hr />
        </div>
    </div>
</template>
<script setup lang="ts">
    import type { ParsedContent } from '@nuxt/content';

    defineProps<{
        article: ParsedContent;
    }>();
</script>
