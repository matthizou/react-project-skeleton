module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  plugins: ['react', 'prettier'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  rules: {
    'linebreak-style': [1, 'unix'],
    'react/jsx-uses-react': 1,
    'no-console': 1,
    'import/prefer-default-export': 0,
    'no-use-before-define': 0,
    'no-unused-vars': 1,
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        singleQuote: true,
        tadWidth: 2,
        trailingComma: 'all',
      },
    ],
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
}
