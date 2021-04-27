<template>
  <article class="layout">
    <main>
      <!-- {{ categories-partial }} -->
      <CategoryHeader />
      <!-- 
      <section>
        <div class="sec-title">
          <h2 class="title">Popular products</h2>
        </div>
        <div class="cards has-show-more">
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
            <li class="card">
              <a href="#">
                <div class="card-img">
                  <img src="/img/card-2.jpg" alt="" />
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
            <li class="card">
              <a href="#">
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
            <li class="card">
              <a href="#">
                <div class="card-img">
                  <img src="/img/card-2.jpg" alt="" />
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

      <section>
        <div class="sec-title">
          <h2 class="title">Daily Deals</h2>
          <a class="view-all" href="#">View all deals</a>
        </div>
        <div class="cards has-show-more">
          <ul>
            <li class="card">
              <a href="#">
                <div class="label label-green">-18%</div>
                <div class="card-img">
                  <img src="/img/new-1.jpg" alt="" />
                </div>
                <div class="stars">
                  <div class="star" style="width: 50%">
                    <i class="fa fa-star" />
                  </div>
                </div>
                <h4 class="card-name">Sony PlayStation 5 (PS5)</h4>
                <h5 class="card-sub-title">Trainers &amp; Casual Shoes</h5>
                <div class="price">
                  <strong>£449.99</strong>
                </div>
              </a>
            </li>
            <li class="card">
              <a href="#">
                <div class="card-img">
                  <img src="/img/new-2.jpg" alt="" />
                </div>
                <div class="stars">
                  <div class="star" style="width: 50%">
                    <i class="fa fa-star" />
                  </div>
                </div>
                <h4 class="card-name">Sony PlayStation 5 (PS5)</h4>
                <h5 class="card-sub-title">Games</h5>
                <div class="price">
                  <strong>£449.99</strong>
                </div>
              </a>
            </li>
            <li class="card">
              <a href="#">
                <div class="card-img">
                  <img src="/img/new-3.jpg" alt="" />
                </div>
                <div class="stars">
                  <div class="star" style="width: 50%">
                    <i class="fa fa-star" />
                  </div>
                </div>
                <h4 class="card-name">Sony PlayStation 5 (PS5)</h4>
                <h5 class="card-sub-title">TVs</h5>
                <div class="price">
                  <strong>£449.99</strong>
                  <div class="store-logo">
                    <img src="/img/store_asos.png" alt="" />
                  </div>
                </div>
              </a>
            </li>
            <li class="card">
              <a href="#">
                <div class="card-img">
                  <img src="/img/new-4.jpg" alt="" />
                </div>
                <div class="stars">
                  <div class="star" style="width: 50%">
                    <i class="fa fa-star" />
                  </div>
                </div>
                <h4 class="card-name">Sony PlayStation 5 (PS5)</h4>
                <h5 class="card-sub-title">PS5</h5>
                <div class="price">
                  <strong>£449.99</strong>
                  <div class="store-logo">
                    <span>Console Passion</span>
                  </div>
                </div>
                <div class="card-extra">
                  <div>7 days ago: £79.97</div>
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
      <section>
        <div class="sec-title">
          <h2 class="title">New product releases</h2>
          <!-- <p class="sub">Inspired by your browsing history</p>
          <a class="view-all" href="#">View all deals</a> -->
        </div>
        <div class="cards" :class="!newExpanded && 'has-show-more'">
          <ul>
            <li v-for="p in newProductsShown" :key="p._id" class="card">
              <nuxt-link :to="'/product/' + $slug(p.name, p._id)">
                <!-- <div class="label label-green">-18%</div> -->
                <div class="card-img">
                  <img :src="p.thumbnail_uri" />
                </div>
                <div class="stars">
                  <div class="star" :style="{ width: (p.rating / 5) * 100 + '%' }">
                    <i class="fa fa-star" />
                  </div>
                </div>
                <h4 class="card-name">{{ p.name }}</h4>
                <h5 class="card-sub-title">{{ p.category.name }}</h5>
                <div class="price">
                  <strong>{{
                    p.minActivityAmount
                      ? p.minActivityAmount.formatedAmount
                      : p.minAmount.formatedAmount
                  }}</strong>
                </div>
              </nuxt-link>
              <!-- <div class="card-foo">
                <button class="btn"><i class="far fa-bell" /> <span>Price alert</span></button>
              </div> -->
            </li>
          </ul>
          <div class="toggle-show-less">
            <button v-if="newExpanded" class="btn btn-link" @click="newExpanded = false">
              <span>Show less</span>
              <i class="fa fa-angle-up" />
            </button>
            <button v-else class="btn btn-link" @click="newExpanded = true">
              <span>Show more</span>
              <i class="fa fa-angle-down" />
            </button>
          </div>
        </div>
      </section>
    </main>
  </article>
</template>

<script>
export default {
  data() {
    return {
      newProducts: [],
      newExpanded: false,
    };
  },
  async fetch() {
    this.newProducts = await this.$axios.$get('/product/new');
  },
  head: {
    title: 'Home',
  },
  computed: {
    newProductsShown() {
      return this.newExpanded ? this.newProducts : this.newProducts.slice(0, 4);
    },
  },
};
</script>
