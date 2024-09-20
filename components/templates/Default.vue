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

    <Swiper v-if="!filter" class="my-8" :slides-per-view="3" :space-between="50">
        <SwiperSlide v-for="category in config.categories" :key="category.name">
            <div class="card image-full mx-4 h-32 w-40 bg-base-100 shadow-xl lg:h-64 lg:w-80">
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
            </div>
        </SwiperSlide>
    </Swiper>
    <h2
        v-else
        class="cursor-pointer text-center text-4xl capitalize underline hover:brightness-150"
        @click="updateFilter('')">
        X- {{ filter }}
    </h2>

    <ContentList :query>
        <template #default="{ list }">
            <SummaryDefault v-for="article in list" :key="article.title" :article="article" />
        </template>
        <template #not-found>
            <p>No articles found.</p>
        </template>
    </ContentList>
</template>
<script setup lang="ts">
    import config from '~/content/config/.config.json';

    console.log(config.categories);

    const bgImageStyle = {
        backgroundImage: `url(/images/${config.bannerImage})`
    };

    const filter = ref('');

    const query = computed(() => {
        return {
            path: '/',
            where: [{ category: { $contains: filter.value } }],
            limit: config.maxArticles,
            sort: [{ date: -1 }]
        };
    });

    // const selectedArticles = computed(() => {
    //     return articles.filter((article) => {
    //         if (!filter.value) {
    //             return article;
    //         }
    //         return (
    //             article.category.toLowerCase().replace(' ', '') ===
    //             filter.value.toLowerCase().replace(' ', '')
    //         );
    //     });
    // });

    const updateFilter = (name: string) => {
        filter.value = name;
    };
</script>
