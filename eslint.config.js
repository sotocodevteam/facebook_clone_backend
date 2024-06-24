import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            sourceType: 'module',
        },
    },
    {
        languageOptions: {
            globals: globals.node,
        },
        rules: {
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
            curly: ['error', 'all'],
            camelcase: ['error', { properties: 'always' }],
            'no-duplicate-imports': ['error', { includeExports: true }],
        },
        ignores: ['**/node_modules/**', '**/dist/**', '**/build/**'],
    },
    pluginJs.configs.recommended,
];
