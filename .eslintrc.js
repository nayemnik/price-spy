module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'no-unused-vars': 1,
    'comma-dangle': 0,
    'space-before-function-paren': 0,
    'require-await': 1,
    curly: 0,
    'vue/no-v-html': 0,
    'no-console': 0,
  }
}
