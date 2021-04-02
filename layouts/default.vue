<template>
  <div>
    <NavBar />
    <Aside />
    <Nuxt keep-alive :keep-alive-props="{ exclude: ['Search'] }" />
    <Footer />
  </div>
</template>
<script>
import Aside from '~/components/Aside.vue';
import NavBar from '~/components/NavBar.vue';
import Footer from '~/components/Footer.vue';
export default {
  components: {
    Aside,
    NavBar,
    Footer,
  },
};
</script>
