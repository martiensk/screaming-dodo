module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: false
        }
    },
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    plugins: ['vue', 'jsdoc', 'regexp', '@typescript-eslint'],
    globals: {
        Vue: true,
        Vuex: true,
        defineProps: true,
        defineEmits: true,
        defineExpose: true
    },
    root: true,
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        'plugin:regexp/recommended',
        '@vue/eslint-config-typescript',
        'plugin:import/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:jsdoc/recommended',
        'prettier'
    ],
    rules: {
        //#region jsdoc
        'jsdoc/no-undefined-types': 'off',
        //#endregion jsdoc
        //#region import
        'import/no-unresolved': 'off',
        //#endregion import
        //#region Vue
        'vue/no-multiple-template-root': 'off',
        'vue/no-v-html': 'off',
        'vue/multi-word-component-names': 'off'
        //#endregion Vue
    }
};
