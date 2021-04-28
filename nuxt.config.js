import config from 'config';

const axiosConfig = config.axios;
const debug = config.debug || !!process.env.DEBUG;

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '',
    titleTemplate: (title) => {
      return title ? title + ' | PriceSpy AliExpress' : 'PriceSpy AliExpress';
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'robots', content: 'index,follow' },
      { name: 'revisit-after', content: '1 days' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/style.css' },
      {
        body: true,
        rel: 'stylesheet',
        href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css',
        lazyload: '1',
      },
      {
        body: true,
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap',
        lazyload: '1',
      },
    ],
    script: [
      {
        body: true,
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/filter.js', '@/plugins/slug.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/router-extras',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next', '@nuxtjs/pwa'],

  /*
   ** Server Middleware
   */
  serverMiddleware: {
    '/api': !debug && '~/api',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    ...axiosConfig,
  },
  auth: {},
  router: {
    parseQuery(query) {
      return require('qs').parse(query);
    },
    stringifyQuery(query) {
      const result = require('qs').stringify(query);
      return result ? '?' + result : '';
    },
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    watch: !debug ? ['@/api'] : [],
    cache: true,
    parallel: true,
    babel: {
      plugins: [
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
      ],
    },
  },
  server: {
    ...config.server,
  },
};
