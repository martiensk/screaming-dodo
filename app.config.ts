export default defineAppConfig({
    theme: {
        colourScheme: 'luxury',
        homeTemplate: 'default',
        forceConfig: false
    },

    categories: {
        categories: [
            {
                name: 'Health',
                description: 'Health related articles',
                image: 'health.webp'
            },
            {
                name: 'Technology',
                description: 'Technology related articles',
                image: 'tech.webp'
            },
            {
                name: 'Fashion',
                description: 'Fashion related articles',
                image: 'fashion.png'
            },
            {
                name: 'Science',
                description: 'Science related articles',
                image: 'science.png'
            }
        ]
    },

    blog: {
        name: 'Screaming Dodo',
        description: 'A simple and clean theme for Ghost',
        summary: 'A simple and clean theme for Ghost, but not the band. Something else entirely.',
        bannerImage: 'bannerimage.jpg',
        maxArticles: 20
    }
});