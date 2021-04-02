<template>
  <div>
    <div class="navbar">
      <main>
        <button class="btn btn-toggle" :class="showCate && 'active'" @click="showCate = !showCate">
          <i class="fa fa-th" />
        </button>
        <div class="mega-menu" :class="showCate && 'show'">
          <ul class="mega-list">
            <li class="mega-item active">
              <a class="mega-link" href="#">
                <img class="mega-img" src="/img/skor_klader_accessoarer.png" alt="" />
                <span class="mega-name">Fashion &amp; Accessories</span>
                <span class="mega-icon">
                  <i class="fa fa-angle-right" />
                </span>
              </a>
            </li>
            <li class="mega-item">
              <a class="mega-link" href="#">
                <img class="mega-img" src="/img/hem_familj.png" alt="" />
                <span class="mega-name">Home &amp; Garden </span>
                <span class="mega-icon">
                  <i class="fa fa-angle-right" />
                </span>
              </a>
            </li>
            <li class="mega-item">
              <a class="mega-link" href="#">
                <img class="mega-img" src="/img/skonhet_halsa.png" alt="" />
                <span class="mega-name">Beauty &amp; Health</span>
                <span class="mega-icon">
                  <i class="fa fa-angle-right" />
                </span>
              </a>
            </li>
            <li class="mega-item">
              <a class="mega-link" href="#">
                <img class="mega-img" src="/img/datorodelar.png" alt="" />
                <span class="mega-name">Computers &amp; Accessories</span>
                <span class="mega-icon">
                  <i class="fa fa-angle-right" />
                </span>
              </a>
            </li>
            <li class="mega-item">
              <a class="mega-link" href="#">
                <img class="mega-img" src="/img/ljudobild.png" alt="" />
                <span class="mega-name">Audio &amp; Video</span>
                <span class="mega-icon">
                  <i class="fa fa-angle-right" />
                </span>
              </a>
            </li>
            <li class="mega-item">
              <a class="mega-link" href="#">
                <img class="mega-img" src="/img/spelokonsol.png" alt="" />
                <span class="mega-name">Games &amp; Consoles</span>
                <span class="mega-icon">
                  <i class="fa fa-angle-right" />
                </span>
              </a>
            </li>
            <li class="mega-item">
              <a class="mega-link" href="#">
                <img class="mega-img" src="/img/mobilogps.png" alt="" />
                <span class="mega-name">Phones &amp; GPS</span>
                <span class="mega-icon">
                  <i class="fa fa-angle-right" />
                </span>
              </a>
            </li>
            <li class="mega-item">
              <a class="mega-link" href="#">
                <img class="mega-img" src="/img/barn_leksaker.png" alt="" />
                <span class="mega-name">Kids &amp; Family</span>
                <span class="mega-icon">
                  <i class="fa fa-angle-right" />
                </span>
              </a>
            </li>
            <li class="mega-item">
              <a class="mega-link" href="#">
                <img class="mega-img" src="/img/foto.png" alt="" />
                <span class="mega-name">Camera &amp; Photo</span>
                <span class="mega-icon">
                  <i class="fa fa-angle-right" />
                </span>
              </a>
            </li>
            <li class="mega-item has-sub">
              <a class="mega-link" href="#">
                <img class="mega-img" src="/img/sport_friluftsliv.png" alt="" />
                <span class="mega-name">Sports &amp; Outdoors</span>
                <span class="mega-icon">
                  <i class="fa fa-angle-right" />
                </span>
              </a>
            </li>
            <li class="mega-item has-sub">
              <a class="mega-link" href="#">
                <img class="mega-img" src="/img/AGD.png" alt="" />
                <span class="mega-name"> White Goods &amp; Household Appliances </span>
                <span class="mega-icon">
                  <i class="fa fa-angle-right" />
                </span>
              </a>
            </li>
          </ul>
          <div class="mega-menu-area">
            <h3 class="mega-title">
              <a href="#">Audio & Video</a>
            </h3>
            <div class="mega-group">
              <div class="mega-column">
                <div class="mega-sub">
                  <h4 class="mega-sub-title">Speakers & Headphones</h4>
                  <ul>
                    <li>
                      <a class="mega-sub-link" href="#">Headphones</a>
                    </li>
                    <li>
                      <a class="mega-sub-link" href="#">Portable </a>
                    </li>
                    <li>
                      <a class="mega-sub-link" href="#">Speakers</a>
                    </li>
                  </ul>
                </div>
                <div class="mega-sub">
                  <h4 class="mega-sub-title">TVs</h4>
                </div>
                <div class="mega-sub">
                  <h4 class="mega-sub-title">PA Equipment</h4>
                  <ul>
                    <li>
                      <a class="mega-sub-link" href="#">DJ</a>
                    </li>
                    <li>
                      <a class="mega-sub-link" href="#">Equipment</a>
                    </li>
                    <li>
                      <a class="mega-sub-link" href="#">Microphones</a>
                    </li>
                    <li>
                      <a class="mega-sub-link" href="#">Mixers</a>
                    </li>
                    <li>
                      <a class="mega-sub-link" href="#">PA Speakers</a>
                    </li>
                    <li>
                      <a class="mega-sub-link" href="#">Show all (10)</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="mega-column">
                <div class="mega-sub">
                  <h4 class="mega-sub-title">PA Equipment</h4>
                  <ul>
                    <li>
                      <a class="mega-sub-link" href="#">DJ</a>
                    </li>
                    <li>
                      <a class="mega-sub-link" href="#">Equipment</a>
                    </li>
                    <li>
                      <a class="mega-sub-link" href="#">Microphones</a>
                    </li>
                    <li>
                      <a class="mega-sub-link" href="#">Mixers</a>
                    </li>
                    <li>
                      <a class="mega-sub-link" href="#">PA Speakers</a>
                    </li>
                    <li>
                      <a class="mega-sub-link" href="#">Show all (10)</a>
                    </li>
                  </ul>
                </div>
                <div class="mega-sub">
                  <h4 class="mega-sub-title">Media Players</h4>
                </div>
              </div>
              <div class="mega-column">
                <div class="mega-sub">
                  <h4 class="mega-sub-title">Kids & Family</h4>
                  <ul>
                    <li>
                      <a class="mega-sub-link" href="#">Toys</a>
                    </li>
                    <li>
                      <a class="mega-sub-link" href="#">LEGO</a>
                    </li>
                    <li>
                      <a class="mega-sub-link" href="#">Playmobil</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="brand">
          <nuxt-link to="/">
            <img src="/img/logo_gb_v2_light.svg" alt="" />
          </nuxt-link>
        </div>
        <button class="btn btn-search">
          <i class="fa fa-search" />
        </button>
        <div class="box-search">
          <form @submit.prevent="search">
            <div class="group">
              <input
                v-model="query"
                type="search"
                placeholder="Search product or category"
                class="inp"
              />
              <button v-show="query.length" type="button" class="btn btn-link" @click="query = ''">
                <i class="fa fa-close" />
              </button>
            </div>
          </form>
          <div class="suggetion">
            <li>
              <a href="#"
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, iure quidem?
                Tempore</a
              >
            </li>
          </div>
        </div>
        <div class="navbar-txt">Impartial price comparison</div>
      </main>
    </div>
    <div class="nav-margin"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      query: '',
      showCate: false,
    };
  },
  methods: {
    search() {
      if (!this.query || this.query === this.$route.params.query) return;
      this.$router.push('/search/' + this.query);
    },
  },
};
</script>
<style scss scoped>
.nav-margin {
  height: 72px;
}
@media (max-width: 568px) {
  .nav-margin {
    height: 50px;
  }
}
</style>
