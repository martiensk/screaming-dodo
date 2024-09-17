import '@nuxt/schema';

declare module '@nuxt/schema' {
    interface NuxtConfig {
        delayHydration?: {
            debug?: boolean;
            mode?: string;
        };
    }
}
