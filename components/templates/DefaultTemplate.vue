<template>
    <div class="banner-image hero h-96" :style="bgImageStyle">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold">{{ appConfig.site.name }}</h1>
                <p class="mb-5">
                    {{ appConfig.site.description }}
                </p>
            </div>
        </div>
    </div>

    <p v-if="appConfig.site.summary" class="my-8 px-8 text-center">{{ appConfig.site.summary }}</p>

    <Transition @enter="enter" @leave="leave">
        <Swiper
            v-if="!filter"
            id="categories-swiper"
            class="my-8 max-w-[360px] sm:max-w-content-sm lg:max-w-content"
            :slides-per-view="slides.slides"
            :space-between="slides.space">
            <SwiperSlide v-for="category in categories" :key="category.name">
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
                            @click="updateFilter($event, category.name)"
                            >{{ category.name }}</button
                        >
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </Transition>
    <Transition @enter="enter" @leave="leave">
        <h2
            v-if="filter"
            class="cursor-pointer text-center text-4xl capitalize underline hover:brightness-150"
            @click="updateFilter($event, '')">
            X- {{ filter }}
        </h2>
    </Transition>

    <ContentList :query>
        <template #default="{ list }">
            <SummaryDefaultSummary
                v-for="article in list"
                :key="article.title"
                :article="article" />
        </template>
        <template #not-found>
            <p>No articles found.</p>
        </template>
    </ContentList>
</template>
<script setup lang="ts">
    import { EBreakpoints } from '~/utils/breakpoints.enum';
    import { gsap } from 'gsap';
    import { Flip } from 'gsap/all';

    gsap.registerPlugin(Flip);

    //#region Interfaces
    declare interface ICategory {
        name: string;
        description: string;
        image: string;
    }
    //#endregion

    //#region Composables
    const appConfig = useAppConfig();
    //#endregion

    //#region Refs
    const bgImageStyle = {
        backgroundImage: `url(/images/${appConfig.site.bannerImage})`
    };

    const categories = appConfig.categories.categories as ICategory[];

    const filter = ref('');
    const slides = ref({
        slides: 2,
        space: 0
    });
    //#endregion

    //#region Computed
    const query = computed(() => {
        return {
            path: '/',
            where: [{ category: { $contains: filter.value } }],
            limit: appConfig.site.maxArticles,
            sort: [{ date: -1 }]
        };
    });
    //#endregion

    //#region Methods
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

    const updateFilter = (e: MouseEvent, name: string) => {
        filter.value = name;
    };

    //#region Animations
    const enter = (el: Element, done: () => void) => {
        gsap.from(el, {
            duration: 0.4,
            height: 0,
            marginTop: 0,
            marginBottom: 0,
            opacity: 0,
            ease: 'easeOut',
            onComplete: done
        });
    };
    const leave = (el: Element, done: () => void) => {
        gsap.to(el, {
            duration: 0.4,
            height: 0,
            marginTop: 0,
            marginBottom: 0,
            opacity: 0,
            ease: 'easeOut',
            onComplete: done
        });
    };

    //#endregion
    //#endregion

    //#region Lifecycle Hooks
    onMounted(() => {
        calcSlides();
        window.addEventListener('resize', calcSlides);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('resize', calcSlides);
    });
    //#endregion
</script>
