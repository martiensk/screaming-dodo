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

    <p v-if="config.summary" class="my-8 px-8 text-center">{{ config.summary }}</p>

    <Swiper
        v-if="!filter"
        class="my-8"
        :slides-per-view="3"
        :space-between="50"
        :centered-slides="true">
        <SwiperSlide v-for="category in config.categories" :key="category.name">
            <card class="card image-full mx-4 h-32 w-40 bg-base-100 shadow-xl lg:h-64 lg:w-80">
                <figure>
                    <NuxtImg
                        :src="`/images/${category.image}`"
                        :alt="category.name"
                        height="256"
                        width="320" />
                </figure>

                <div class="card-body flex items-center justify-center">
                    <button
                        class="btn btn-primary capitalize"
                        @click="updateFilter(category.name)"
                        >{{ category.name }}</button
                    >
                </div>
            </card>
        </SwiperSlide>
    </Swiper>
    <h2
        v-else
        class="cursor-pointer text-center text-4xl capitalize underline hover:brightness-150"
        @click="filter = ''">
        X- {{ filter }}
    </h2>

    <SummaryDefault v-for="article in selectedArticles" :key="article.title" :article="article" />
</template>
<script setup lang="ts">
    import config from '~/config.json';

    console.log(config.categories);

    const bgImageStyle = {
        backgroundImage: `url(/images/${config.bannerImage})`
    };

    const filter = ref('');

    const selectedArticles = computed(() => {
        return articles.filter((article) => {
            if (!filter.value) {
                return article;
            }
            return (
                article.category.toLowerCase().replace(' ', '') ===
                filter.value.toLowerCase().replace(' ', '')
            );
        });
    });

    const updateFilter = (name: string) => {
        filter.value = name;
    };
</script>
