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
        class="my-8 max-w-[360px] sm:max-w-content-sm lg:max-w-content"
        :slides-per-view="slides.slides"
        :space-between="slides.space">
        <SwiperSlide v-for="category in config.categories" :key="category.name">
            <div class="card image-full h-32 w-40 bg-base-100 shadow-xl lg:h-64 lg:w-80">
                <figure>
                    <img
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
    import { EBreakpoints } from '~/utils/breakpoints.enum';

    const bgImageStyle = {
        backgroundImage: `url(/images/${config.bannerImage})`
    };

    const filter = ref('');
    const slides = ref({
        slides: 2,
        space: 0
    });

    const query = computed(() => {
        return {
            path: '/',
            where: [{ category: { $contains: filter.value } }],
            limit: config.maxArticles,
            sort: [{ date: -1 }]
        };
    });

    const calcSlides = () => {
        if (window.innerWidth > EBreakpoints.lg) {
            slides.value = {
                slides: 3,
                space: 20
            };
        } else if (window.innerWidth > EBreakpoints.sm) {
            slides.value = {
                slides: 3,
                space: 20
            };
        } else {
            slides.value = {
                slides: 2,
                space: 0
            };
        }
    };

    const updateFilter = (name: string) => {
        filter.value = name;
    };

    onMounted(() => {
        calcSlides();
        window.addEventListener('resize', calcSlides);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('resize', calcSlides);
    });
</script>
