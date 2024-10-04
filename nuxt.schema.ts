import { field, group } from '@nuxthq/studio/theme';

export default defineNuxtSchema({
    appConfig: {
        site: group({
            title: 'Site Configuration',
            description: 'Site configuration settings',
            icon: 'mdi-palette',
            fields: {
                name: field({
                    type: 'string',
                    title: 'Name',
                    description: 'The name of the site',
                    icon: 'mdi-text',
                    default: 'Screaming Dodo'
                }),
                description: field({
                    type: 'string',
                    title: 'Description',
                    description: 'A short description of the site',
                    icon: 'mdi-text',
                    default: 'A simple and clean theme for Ghost'
                }),
                summary: field({
                    type: 'string',
                    title: 'Summary',
                    description: 'A longer summary of what the site is about',
                    icon: 'mdi-text',
                    default:
                        'A simple and clean theme for Ghost, but not the band. Something else entirely.'
                }),
                bannerImage: field({
                    type: 'string',
                    title: 'Banner Image',
                    description: 'The banner image of the site',
                    icon: 'mdi-image',
                    default: 'bannerimage.jpg'
                }),
                maxArticles: field({
                    type: 'number',
                    title: 'Max Articles',
                    description: 'The maximum number of articles to display',
                    icon: 'mdi-numeric',
                    default: 20
                }),
                logo: field({
                    type: 'string',
                    title: 'logo',
                    description: 'Your logo image',
                    icon: 'mdi-text'
                }),
                url: field({
                    type: 'string',
                    title: 'URL',
                    description: 'The URL of the site',
                    icon: 'mdi-text'
                })
            }
        }),
        theme: group({
            title: 'Theme Configuration',
            description: 'Theme configuration settings',
            icon: 'mdi-palette',
            fields: {
                colourScheme: field({
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
                homeTemplate: field({
                    type: 'string',
                    title: 'Template',
                    description: 'The template to use for the theme',
                    icon: 'mdi-file-document',
                    default: 'Default',
                    required: ['default']
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
                categories: field({
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
