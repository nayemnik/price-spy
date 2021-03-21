<template>
  <section>
    <div class="sec-title">
      <h2 class="title">
        Categories
      </h2>
    </div>
    <ul class="category-list">
      <li class="category-item">
        <nuxt-link
          class="category-link"
          to="/theme/daily-deals"
        >
          <img
            class="category-img"
            src="/img/banner_logo_big.png"
            alt=""
          ><span class="category-name">Daily
            Deals</span>
          <span class="category-icon">
            <i class="fa fa-angle-right" />
          </span>
        </nuxt-link>
      </li>
      <li
        v-for="cate in cates"
        :key="cate._id"
        class="category-item has-sub"
      >
        <nuxt-link
          class="category-link"
          :to="'/category/'+cate._id"
        >
          <img
            class="category-img"
            :class="!cate.img && 'opacity-0'"
            :src="cate.img"
            alt=""
          >
          <span class="category-name">{{ cate.name }}</span>
          <span class="category-icon">
            <i class="fa fa-angle-right" />
          </span>
        </nuxt-link>
        <ul class="category-sub">
          <li
            v-for="childCate in cate.children"
            :key="childCate._id"
            class="category-item"
          >
            <nuxt-link
              class="category-link"
              :to="'/category/'+childCate._id"
            >
              {{ childCate.name }}
            </nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cates: [],
    }
  },
  async fetch() {
    this.cates = await this.$axios.$get('category')
  },
  fetchKey: 'categories',
}
</script>

<style>
</style>
