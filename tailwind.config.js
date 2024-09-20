/** @type {import('tailwindcss').Config} */
import { themes } from './utils/themes';

export default {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue'
    ],
    theme: {
        extend: {
            width: {
                content: '1024px',
                'content-sm': '600px'
            },
            maxWidth: {
                content: '1024px',
                'content-sm': '600px'
            }
        }
    },
    plugins: [require('daisyui'), require('@tailwindcss/typography')],
    daisyui: {
        themes
    },
    darkMode: 'class'
};
