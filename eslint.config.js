import prettierConfig from 'eslint-config-prettier';

export default [
    {
        files: ['resources/js/**/*.js'],
        rules: {
            'no-unused-vars': 'warn',
            'no-console': 'off',
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
        },
    },
    prettierConfig,
];
