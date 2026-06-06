import prettierConfig from 'eslint-config-prettier';

export default [
    {
        files: ['resources/js/**/*.js'],
        rules: {
            'no-unused-vars': 'error',
            'no-console': 'off',
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
        },
    },
    prettierConfig,
];
