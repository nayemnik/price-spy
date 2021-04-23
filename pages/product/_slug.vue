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
          <nuxt-link :to="'/category/' + $slug(category.name, category._id)">
            {{ category.name }}
          </nuxt-link>
        </li>
      </ul>
      <!-- /End .breadcrumb -->

      <div class="product-header">
        <div class="product-img" data-js="modal" data-js-modal-name="modal-product-review">
          <img :src="product.thumbnail_uri" alt="" />
          <button class="btn btn-link"><i class="far fa-picture" /> <span>1</span></button>
        </div>

        <div class="product-info">
          <div class="product-name">
            {{ product.name }}
          </div>
          <nuxt-link
            class="rating-info"
            :to="'/product/' + $slug(product.name, product._id) + '/reviews'"
          >
            <div class="stars sm">
              <div class="star" :style="{ width: (product.rating / 5) * 100 + '%' }">
                <i class="fa fa-star" />
              </div>
            </div>
            <div class="review-point">{{ +product.rating.toFixed(1) }}</div>
            <div class="review-count">({{ product.reviews.length }} reviews)</div>
          </nuxt-link>
          <!-- <ul class="product-list-info list-default">
          <li>
            <span class="dt">
              <b>Category:</b>
            </span>
            <span class="dd">Watches</span>
          </li>
          <li>
            <span class="dt">
              <b>Sold:</b>
            </span>
            <span class="dd">7k</span>
          </li>
        </ul> -->
          <!--
          <div class="review-badges">
            <i class="fa fa-thumbs-up green" />
            <span>“Fit”4 related reviews</span>
          </div>
          <div class="rank-container">
            <label class="label label-blue">RANK 8</label> in
            <a href="#">Mice &amp; Pointing Devices</a> <span>|</span>
            <a href="#">Compare with top 10</a>
          </div>
          -->
        </div>

        <div class="product-summary">
          <nuxt-link
            class="fading-box"
            :to="'/product/' + $slug(product.name, product._id) + '/price-history'"
          >
            <div class="header">
              <span>Price history</span>
              <span>Now: {{ price }}</span>
            </div>
            <img src="/img/price-history.png" />
          </nuxt-link>
          <div class="btn-group">
            <button class="btn btn-blue"><i class="fa fa-heart" /> <span>Save</span></button>
            <button class="btn btn-blue"><i class="fa fa-bell" /> <span>Price alert</span></button>
            <button class="btn btn-blue">
              <i class="fa fa-balance-scale" /> <span>Compare</span>
            </button>
          </div>
        </div>
      </div>
      <!-- /End .product-header -->

      <div class="sticky-track">
        <nuxt-link
          class="sticky-item"
          :to="'/product/' + $slug(product.name, product._id) + '#price'"
          active-class="active"
        >
          <h5>Prices</h5>
          <strong class="price">{{ price }}</strong>
        </nuxt-link>
        <nuxt-link
          class="sticky-item"
          :to="'/product/' + $slug(product.name, product._id) + '#info'"
          active-class="active"
        >
          <h5>Info</h5>
        </nuxt-link>
        <nuxt-link
          class="sticky-item"
          :to="'/product/' + $slug(product.name, product._id) + '/reviews'"
          active-class="active"
        >
          <h5>Reviews</h5>
          <div class="rating-info">
            <div class="stars">
              <div class="star" :style="{ width: (product.rating / 5) * 100 + '%' }">
                <i class="fa fa-star" />
              </div>
            </div>
            <span class="review-point">{{ +product.rating.toFixed(1) }}</span>
            <span class="review-count">({{ product.reviews.length }})</span>
          </div>
        </nuxt-link>
        <nuxt-link
          class="sticky-item"
          :to="'/product/' + $slug(product.name, product._id) + '/price-history'"
          active-class="active"
        >
          <h5>Price history</h5>
          <div></div>
        </nuxt-link>
      </div>
      <!-- /End .sticky-track -->
      <nuxt-child :product="product" :category="category" />

      <section>
        <div class="sec-title">
          <h2 class="title">Others visited</h2>
        </div>
        <div class="cards others-visited">
          <ul>
            <li v-for="p in relates" :key="p._id" class="card">
              <nuxt-link :to="`/product/${$slug(p.name, p._id)}`">
                <div class="card-img">
                  <img :src="p.thumbnail_uri" />
                </div>
                <div class="stars">
                  <div class="star" :style="{ width: (p.rating / 5) * 100 + '%' }">
                    <i class="fa fa-star" />
                  </div>
                </div>
                <h4 class="card-name">{{ p.name }}</h4>
                <div class="price">
                  <strong>
                    {{
                      p.minActivityAmount
                        ? p.minActivityAmount.formatedAmount
                        : p.minAmount.formatedAmount
                    }}
                  </strong>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </section>
      <!--
      <section>
        <div class="sec-title">
          <h2 class="title">Recently viewed products</h2>
        </div>
        <div class="cards">
          <ul>
            <li class="card">
              <a href="#">
                <div class="label label-green">-18%</div>
                <div class="card-img">
                  <img src="/img/card-1.jpg" alt="" />
                </div>
                <div class="stars">
                  <div class="star" style="width: 50%">
                    <i class="fa fa-star" />
                  </div>
                </div>
                <h4 class="card-name">Sony PlayStation 5 (PS5)</h4>
                <div class="price">
                  <strong>£449.99</strong>
                </div>
              </a>
            </li>
          </ul>
          <div class="toggle-show-less">
            <button class="btn btn-link">
              <span>Show more</span>
              <i class="fa fa-angle-down" />
            </button>
          </div>
        </div>
      </section>
      -->
    </main>
  </article>
</template>

<script>
import { idFromSlug } from '@/utils';

export default {
  async asyncData({ $axios, params, redirect }) {
    const id = idFromSlug(params.slug);
    if (!id) return redirect('/404');
    const product = await $axios.$get('/product/' + id);
    if (!product) return redirect('/404');
    const category = await $axios.$get('/category/' + product.category, {
      params: { populate: 'ancestors' },
    });
    const relates = await $axios.$get('/product/relates/' + id);
    return { id, product, category, relates };
  },
  data() {
    return {
      id: null,
      product: {
        reviews: [],
      },
      category: [],
      relates: [],
    };
  },
  head() {
    return {
      title: this.product.name || 'Product',
    };
  },
  computed: {
    ancestors() {
      if (!this.category.ancestors) return [];
      return this.category.ancestors.slice().reverse();
    },
    price() {
      return (
        this.product.minActivityAmount?.formatedAmount ?? this.product.minAmount.formatedAmount
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.product-summary {
  .fading-box {
    display: block;
    color: inherit;
    .header {
      margin-bottom: 1rem;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
