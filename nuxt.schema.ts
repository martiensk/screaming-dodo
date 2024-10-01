import { field, group } from '@nuxthq/studio/theme';

export default defineNuxtSchema({
    appConfig: {
        blog: group({
            title: 'Blog Configuration',
            description: 'Blog configuration settings',
            icon: 'mdi-palette',
            fields: {
                name: field({
                    type: 'string',
                    title: 'Name',
                    description: 'The name of the blog',
                    icon: 'mdi-text',
                    default: 'Screaming Dodo'
                }),
                description: field({
                    type: 'string',
                    title: 'Description',
                    description: 'A short description of the blog',
                    icon: 'mdi-text',
                    default: 'A simple and clean theme for Ghost'
                }),
                summary: field({
                    type: 'string',
                    title: 'Summary',
                    description: 'A longer summary of what the blog is about',
                    icon: 'mdi-text',
                    default:
                        'A simple and clean theme for Ghost, but not the band. Something else entirely.'
                }),
                bannerImage: field({
                    type: 'string',
                    title: 'Banner Image',
                    description: 'The banner image of the blog',
                    icon: 'mdi-image',
                    default: 'bannerimage.jpg'
                }),
                maxArticles: field({
                    type: 'number',
                    title: 'Max Articles',
                    description: 'The maximum number of articles to display',
                    icon: 'mdi-numeric',
                    default: 20
                })
            }
        }),
        theme: group({
            title: 'Theme Configuration',
            description: 'Theme configuration settings',
            icon: 'mdi-palette',
            fields: {
                name: field({
                    type: 'string',
                    title: 'Colour Scheme',
                    description: 'The name of the theme',
                    icon: 'mdi-ph-palette',
                    default: '',
                    required: [
                        'light',
                        'dark',
                        'cupcake',
                        'bumblebee',
                        'emerald',
                        'corporate',
                        'synthwave',
                        'retro',
                        'cyberpunk',
                        'valentine',
                        'halloween',
                        'garden',
                        'forest',
                        'aqua',
                        'lofi',
                        'pastel',
                        'fantasy',
                        'wireframe',
                        'black',
                        'luxury',
                        'dracula',
                        'cmyk',
                        'autumn',
                        'business',
                        'acid',
                        'lemonade',
                        'night',
                        'coffee',
                        'winter',
                        'dim',
                        'nord',
                        'sunset'
                    ]
                }),
                forceConfig: field({
                    type: 'boolean',
                    title: 'Force Configuration',
                    description: 'Force the site to show the theme configuration preview module',
                    icon: 'mdi-toggle-switch',
                    default: false
                })
            }
        }),
        categories: group({
            title: 'Category Configuration',
            description: 'Configure article categories',
            icon: 'mdi-palette',
            fields: {
                forceConfig: field({
                    type: 'array',
                    title: 'Categories',
                    description:
                        'Add category objects here. Each object should have a name, description and image.',
                    icon: 'mdi-format-list-bulleted',
                    default: [],
                    items: {
                        type: 'object',
                        properties: {
                            name: { type: 'string' },
                            description: { type: 'string' },
                            image: { type: 'string' }
                        }
                    }
                })
            }
        })
    }
});
