module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'plugin:prettier/recommended'],
  plugins: [],
  rules: {
    'prettier/prettier': 1,
    'no-console': 0,
  },
};
