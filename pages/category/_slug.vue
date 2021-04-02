<template>
  <article class="layout">
    <main>
      <ul class="breadcrumb">
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          {{ cate.name }}
        </li>
      </ul>
      <div class="wrapper">
        <div class="page-header">
          <div>
            <img :src="cate.img" />
          </div>
          <h5>
            {{ cate.name }}
          </h5>
        </div>
        <ul class="category-list">
          <li v-for="child in cate.children" :key="child._id" class="category-item">
            <nuxt-link class="category-link" :to="'/category/' + slug(child)">
              <img :src="child.img" class="category-img" />
              <span class="category-name">
                {{ child.name }}
              </span>
            </nuxt-link>
          </li>
        </ul>
        <div class="products">
          <div class="header">
            <h5>Popular products in {{ cate.name }}</h5>
          </div>
          <ul class="listing">
            <li v-for="product in products.docs" :key="product._id" class="card">
              <nuxt-link :to="`/product/${slug(product)}`">
                <div class="card-img">
                  <img :src="product.thumbnail_uri" :alt="product.name" />
                </div>
                <div class="stars">
                  <div class="star" :style="{ width: `${(product.rating / 5) * 100}%` }">
                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <h4 class="card-name">{{ product.name }}</h4>
                <!-- <h5 class="card-sub-title">Games</h5> -->
                <div class="price">
                  <strong>{{ product.price }}</strong>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </article>
</template>

<script>
import slug from 'slug';
import { idFromSlug } from '@/utils';
export default {
  async asyncData({ $axios, params, redirect }) {
    const id = idFromSlug(params.slug);
    if (!id) return redirect('/404');
    const cate = await $axios.$get('/category/' + id);
    if (!cate) return redirect('/404');
    const products = await $axios.$get('/product/category/' + id);
    return { id, cate, products };
  },
  data() {
    return {
      id: null,
      cate: {},
      products: [],
    };
  },
  head() {
    return {
      title: this.cate.name || 'Category',
    };
  },
  methods: {
    slug(item) {
      return slug(item.name) + '-' + item._id;
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  .page-header {
    display: flex;
    align-items: baseline;
    img {
      vertical-align: middle;
      height: 80px;
      width: auto;
    }
  }
  .category-list {
    margin-top: 1em;
    margin-bottom: 1em;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style: none;
  }
  .products {
    .listing {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 15px;
      list-style: none;
    }
  }
}
</style>
