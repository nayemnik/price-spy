
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'PriceSpy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'robots', content: 'index,follow' },
      { name: 'revisit-after', content: '1 days' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/style.css' },
      { body: true, rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css', lazyload: '1' },
      { body: true, rel: 'preconnect', href: 'https://fonts.gstatic.com', lazyload: '1' },
      { body: true, rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap', lazyload: '1' },
    ],
    script: [
      { body: true, src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js' },
      { body: true, src: '/js/mega-menu.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/pwa',
  ],

  /*
  ** Server Middleware
  */
  serverMiddleware: {
    '/api': '~/api'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    port: '3001', // debug
    // prefix: '/api/',
    xsrfHeaderName: 'CSRF-TOKEN'
  },
  auth: {
    strategies: {
      cookie: {
        cookie: {
          name: 'XSRF-TOKEN',
        },
        endpoints: {
          csrf: {
            url: ''
          }
        }
      },
    }
  },
  router: {
    parseQuery(query) {
      return require('qs').parse(query)
    },
    stringifyQuery(query) {
      const result = require('qs').stringify(query)
      return result ? '?' + result : ''
    }
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // watch: ['@/api'],
    cache: true,
    parallel: true,
  }
}
