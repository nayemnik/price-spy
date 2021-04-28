<template>
  <article class="layout">
    <main>
      <ul class="breadcrumb">
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li v-for="ancestor in ancestors" :key="ancestor._id">
          <nuxt-link :to="'/category/' + $slug(ancestor.name, ancestor._id)">
            {{ ancestor.name }}
          </nuxt-link>
        </li>
        <li>
          {{ cate.name }}
        </li>
      </ul>
      <div class="wrapper">
        <template v-if="cate.children.length">
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
              <nuxt-link class="category-link" :to="'/category/' + $slug(child.name, child._id)">
                <img :src="child.img" class="category-img" />
                <span class="category-name">
                  {{ child.name }}
                </span>
              </nuxt-link>
            </li>
          </ul>
          <div class="products">
            <h5 class="title">Popular products in {{ cate.name }}</h5>
            <ul class="listing">
              <li v-for="product in products.docs" :key="product._id" class="card">
                <nuxt-link :to="`/product/${$slug(product.name, product._id)}`">
                  <div class="card-img">
                    <img :src="product.thumbnail_uri" :alt="product.name" />
                  </div>
                  <div class="rating-info">
                    <div class="stars">
                      <div class="star" :style="{ width: `${(product.rating / 5) * 100}%` }">
                        <i class="fa fa-star"></i>
                      </div>
                    </div>
                    <div class="review-count">({{ product.reviewCount }})</div>
                  </div>
                  <h4 class="card-name">{{ product.name }}</h4>
                  <div class="price">
                    <strong>{{ product.price }}</strong>
                  </div>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </template>
        <template v-else>
          <div class="page-header">
            <h2>
              {{ cate.name }}
            </h2>
          </div>
          <div class="controls">
            <div class="left">
              Sort by
              <button class="sort-by-btn">
                Popularity
                <i class="fa fa-angle-down"></i>
              </button>
            </div>
            <div class="right"></div>
          </div>
          <div class="products">
            <div class="product-count">{{ products.totalDocs }} results</div>
            <ul class="listing">
              <li v-for="product in products.docs" :key="product._id" class="card">
                <nuxt-link :to="`/product/${$slug(product.name, product._id)}`">
                  <div class="card-img">
                    <img :src="product.thumbnail_uri" :alt="product.name" />
                  </div>
                  <div class="rating-info">
                    <div class="stars">
                      <div class="star" :style="{ width: `${(product.rating / 5) * 100}%` }">
                        <i class="fa fa-star"></i>
                      </div>
                    </div>
                    <div class="review-count">({{ product.reviewCount }})</div>
                  </div>
                  <h4 class="card-name">{{ product.name }}</h4>
                  <div class="price">
                    <strong>{{ product.price }}</strong>
                  </div>
                </nuxt-link>
              </li>
            </ul>
            <Paginator v-bind="products" />
          </div>
        </template>
      </div>
    </main>
  </article>
</template>

<script>
import { idFromSlug } from '@/utils';
export default {
  data() {
    return {
      cate: {
        children: [],
      },
      products: {},
    };
  },
  async fetch() {
    console.log();
    const id = idFromSlug(this.$route.params.slug);
    if (!id) return this.$router.replace('/404');
    const cate = await this.$axios.$get('/category/' + id, {
      params: { populate: 'ancestors children' },
    });
    if (!cate) return this.$router.replace('/404');
    this.cate = cate;
    this.products = await this.$axios.$get('/product/category/' + id, {
      params: this.$route.query,
    });
  },
  head() {
    return {
      title: this.cate.name || 'Category',
    };
  },
  computed: {
    ancestors() {
      if (!this.cate.ancestors) return [];
      return this.cate.ancestors.slice().reverse();
    },
  },
  watch: {
    $route(to, from) {
      if (to.path === from.path) {
        this.$nuxt.refresh();
      }
    },
  },
  fetchDelay: 0,
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
  .controls {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    padding-top: 1rem;
    .sort-by-btn {
      background: none;
      border: none;
      cursor: pointer;
      color: rgb(0, 128, 163);
      font: inherit;
      font-weight: 600;
    }
    .right {
      display: flex;
    }
  }
  .products {
    border-top: 1px solid #bec4c6;
    margin-top: 1rem;
    padding-top: 1rem;
    .product-count {
      text-align: center;
    }
    .listing {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 15px;
      list-style: none;
      .rating-info {
        display: flex;
        justify-content: center;
        .review-count {
          opacity: 0.75;
          font-size: 0.9rem;
          margin-left: 0.3rem;
        }
      }
    }
  }
}
</style>
