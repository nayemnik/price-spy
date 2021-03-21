<template>
  <article class="layout search">
    <main>
      <div class="search-header">
        <h1>Showing results for "{{ query }}"</h1>
        <button class="btn btn-toggle-filter">
          <i class="fa fa-angle-down" />
        </button>
      </div>
      <div class="search-body">
        <div class="sidebar">
          <div class="box">
            <div class="box-head">
              <h3 class="box-title">
                Categories
              </h3>
            </div>
            <div class="box-body">
              <ul class="tags">
                <li
                  v-for="(cate, idx) in cateGroups"
                  :key="idx"
                  class="tag-item"
                >
                  <a href="#">
                    <span>{{ cate.name }}</span>
                    <span>({{ cate.count }})</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!--
          <div class="box">
            <div class="box-head">
              <h3 class="box-title">
                Brands
              </h3>
            </div>
            <div class="box-body">
              <ul class="tags">
                <li class="tag-item">
                  <a href="#">
                    <span>logitech</span>
                    <span>(117)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          -->

          <div class="box">
            <div class="box-head">
              <h3 class="box-title">
                Price
              </h3>
            </div>
            <div class="box-body">
              <div class="range-slider">
                <div class="range-controls">
                  <input
                    type="text"
                    class="js-range-input-from inp inp-xs"
                    value="0"
                  >
                  <input
                    type="text"
                    class="js-range-input-to inp inp-xs"
                    value="0"
                  >
                </div>
                <input
                  type="text"
                  class="js-range-price"
                  name="my_range"
                  value=""
                >
              </div>
            </div>
          </div>
          <div class="box">
            <div class="box-head">
              <h3 class="box-title">
                Reviews
              </h3>
            </div>
            <div class="box-body">
              <div class="range-slider">
                <div class="range-controls">
                  <input
                    type="text"
                    class="js-range-star-input-from inp inp-xs"
                    value="0"
                  >
                  <input
                    type="text"
                    class="js-range-star-input-to inp inp-xs"
                    value="0"
                  >
                </div>
                <input
                  type="text"
                  class="js-range-star"
                  name="my_range"
                  value=""
                >
              </div>
            </div>
          </div>
          <!--
          <div class="box">
            <div class="box-head">
              <h3 class="box-title">
                Brands
              </h3>
              <p class="box-sub">
                1 result
              </p>
            </div>
            <div class="box-body">
              <ul class="list">
                <li>
                  <a href="#">
                    <span>logitech</span>
                    <span>(117)</span>
                    <i class="fa fa-angle-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="box">
            <div class="box-head">
              <h3 class="box-title">
                Shops
              </h3>
              <p class="box-sub">
                1 result
              </p>
            </div>
            <div class="box-body">
              <ul class="list">
                <li>
                  <a href="#">
                    <span>logitech</span>
                    <span>(117)</span>
                    <i class="fa fa-angle-right" />
                  </a>
                </li>
              </ul>
            </div>
        </div>
        -->
        </div>
        <!-- //script .sidebar -->

        <div class="results">
          <div class="result-header">
            <div class="title">
              <h3>Search results</h3>
              <p>{{ result.totalDocs }} results</p>
            </div>
            <div class="sort">
              <span>Sort by</span>
              <select
                class="df"
                name=""
              >
                <option value="">
                  Relevance
                </option>
                <option value="">
                  Price low - high
                </option>
                <option value="">
                  Price high - low
                </option>
                <option value="">
                  Name
                </option>
                <option value="">
                  User reviews
                </option>
              </select>
            </div>
          </div>
          <div class="result-body">
            <ul>
              <li
                v-for="product in result.docs"
                :key="product._id"
              >
                <nuxt-link :to="'/product/'+product.id">
                  <div class="pro-info">
                    <div class="pro-img">
                      <img
                        :src="product.thumbnail_uri"
                        alt=""
                      >
                    </div>
                    <div>
                      <h3 class="pro-name">
                        {{ product.name }}
                      </h3>
                      <div class="rating-info">
                        <div class="stars">
                          <div
                            class="star"
                            :style="{width: product.rating/5*100+'%'}"
                          >
                            <i class="fa fa-star" />
                          </div>
                        </div>
                        <span class="review-count">({{ product.reviews.length }})</span>
                      </div>
                    </div>
                  </div>
                  <div class="pro-price">
                    <strong>{{ product.price }}</strong>
                  </div>
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="result-foo">
            <div class="pagination">
              <a
                class="btn btn-blue"
                :class="!result.hasPrevPage&&'disabled'"
                @click="qs.page--"
              >
                <i class="fa fa-angle-left" />
              </a>
              <span>Page {{ qs.page }} / {{ result.totalPages }}</span>
              <button
                class="btn btn-blue"
                :class="!result.hasNextPage&&'disabled'"
                @click="qs.page++"
              >
                <i class="fa fa-angle-right" />
              </button>
            </div>
          </div>
        </div>
        <!-- //script .results -->
      </div>
    </main>
  </article>
</template>

<script>
export default {
  name: 'search',
  data() {
    return {
      query: this.$route.params.query,
      result: {},
      cateGroups: [],
      qs: {
        page: 1,
        ...this.$route.query
      },
    }
  },
  async fetch() {
    const res = await this.$axios.$get('/search/' + this.query, {
      params: {
        withCates: !this._isMounted,
        page: 1,
        ...this.qs,
      }
    })
    this.result = res.result
    this.cateGroups = res.cateGroups || this.cateGroups
  },
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/css/ion.rangeSlider.min.css' },
    ],
    script: [
      { body: true, src: 'https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/js/ion.rangeSlider.min.js' },
      { body: true, src: '/js/rangeslider.custom.js' }
    ]
  },
  watch: {
    qs: {
      handler(val, oldVal) {
        if (val.page < 1) {
          this.qs.page = oldVal.page
        }
        this._isMounted && this.$fetch()
        if (!val.page) this.qs.page = 1
        else this.$router.push({ query: this.qs })
      },
      deep: true,
    },

  },
  mounted() {
    this.$watch('$route.query', function (val, oldVal) {
      this.qs = { ...val }
    })
  },
}
</script>

<style>
</style>
