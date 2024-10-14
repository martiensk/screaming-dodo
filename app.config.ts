export default defineAppConfig({
    theme: {
        colourScheme: 'retro',
        homeTemplate: 'default',
        forceConfig: false
    },

    categories: {
        categories: [{
          name: 'Cults',
          description: 'Sinister cults!',
          image: 'cults.jpg'
        }]
    },

    site: {
        logo: 'logo.png',
        url: 'https://www.screamingdodo.com',
        name: 'The Screaming DodoScreaming',
        description: 'Where the grave meets the grin',
        summary: 'Where the grave meets the grin',
        bannerImage: 'banner.jpeg',
        maxArticles: 20
    }
});