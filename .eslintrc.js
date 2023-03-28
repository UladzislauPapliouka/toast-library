module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        'no-bitwise': 0,
        'react/jsx-props-no-spreading': 0,
    },
};
