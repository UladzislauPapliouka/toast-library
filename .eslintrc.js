module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['simple-import-sort', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-bitwise': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/extensions': 0,
    'react/forbid-prop-types': 0,
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react$', '^[a-z]'],
          ['^@'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^.+\\.s?css$'],
          ['^\\u0000'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@constants', './src/constants'],
          ['@components', './src/components'],
          ['@hooks', './src/hooks'],
          ['@utils', './src/utils'],
          ['@service', './src/service'],
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
};
