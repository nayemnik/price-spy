<template>
  <article class="layout">
    <main>
      <ul class="breadcrumb">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/c/catename">Audio & Video</a>
        </li>
        <li>
          <a href="/c/catename">Speakers & Headphones</a>
        </li>
        <li>
          <a href="/c/catename">Headphones</a>
        </li>
        <li>
          <span>Apple AirPods (2nd Generation) with Charging Case</span>
        </li>
      </ul>
      <!-- /End .breadcrumb -->

      <div class="product-header">
        <div class="product-img" data-js="modal" data-js-modal-name="modal-product-review">
          <img :src="product.thumbnail_uri" alt="" />
          <button class="btn btn-link"><i class="far fa-picture" /> <span>1</span></button>
        </div>

        <div class="product-info">
          <h1 class="product-name">
            {{ product.name }}
          </h1>
          <a class="rating-info" href="#">
            <div class="stars sm">
              <div class="star" :style="{ width: (product.rating / 5) * 100 + '%' }">
                <i class="fa fa-star" />
              </div>
            </div>
            <div class="review-count">({{ product.reviews.length }} reviews)</div>
          </a>
          <ul class="product-list-info list-default">
            <li v-for="(val, key) in product.specs" :key="key">
              <span class="dt"
                ><b>{{ key }}:</b></span
              >
              <span class="dd">{{ val }}</span>
            </li>
          </ul>
          <div class="review-badges">
            <i class="fa fa-thumbs-up green" />
            <span>“Fit”4 related reviews</span>
          </div>
          <div class="rank-container">
            <label class="label label-blue">RANK 8</label> in
            <a href="#">Mice &amp; Pointing Devices</a> <span>|</span>
            <a href="#">Compare with top 10</a>
          </div>
        </div>

        <div class="product-summary">
          <div class="fading-box">Price history</div>
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
        <nuxt-link class="sticky-item" :to="'/product/' + product._id" active-class="active">
          <h5>Prices</h5>
          <strong class="price">{{ product.price }}</strong>
        </nuxt-link>
        <a class="sticky-item" href="#">
          <h5>Info</h5>
          <ul class="property-list">
            <li>Bluetooth</li>
            <li>True Wireless</li>
            <li>Wireless</li>
          </ul>
        </a>
        <a class="sticky-item" href="#">
          <h5>Reviews</h5>
          <div class="rating-info">
            <div class="stars">
              <div class="star" :style="{ width: (product.rating / 5) * 100 + '%' }">
                <i class="fa fa-star" />
              </div>
            </div>
            <span class="review-count">({{ product.reviews.length }})</span>
          </div>
        </a>
        <a class="sticky-item" href="#">
          <h5>Price history</h5>
          <div>asd</div>
        </a>
      </div>
      <!-- /End .sticky-track -->

      <!-- modal product review -->
      <div class="modal modal-lg" data-js-modal="modal-product-review">
        <div class="modal-box">
          <div class="modal-head">
            <button class="btn btn-link">
              <i class="fa fa-close" />
            </button>
            <h3 class="modal-title">Logitech G502 Lightspeed</h3>
          </div>
          <div class="modal-body">
            <div class="owl-carousel">
              <div class="item" data-hash="slider-1">
                <img src="/img/sliders/slider-1.jpg" alt="" />
              </div>
              <div class="item" data-hash="slider-2">
                <img src="/img/sliders/slider-2.jpg" alt="" />
              </div>
              <div class="item" data-hash="slider-3">
                <img src="/img/sliders/slider-3.jpg" alt="" />
              </div>
              <div class="item" data-hash="slider-4">
                <img src="/img/sliders/slider-4.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="modal-foo">
            <div class="owl-galery">
              <a class="item" href="#slider-1">
                <img src="/img/sliders/slider-1.jpg" alt="" />
              </a>
              <a class="item" href="#slider-2">
                <img src="/img/sliders/slider-2.jpg" alt="" />
              </a>
              <a class="item" href="#slider-3">
                <img src="/img/sliders/slider-3.jpg" alt="" />
              </a>
              <a class="item" href="#slider-4">
                <img src="/img/sliders/slider-4.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="product-body">
        <div class="sort">
          <h2 class="title">Price comparison <span class="title-count">(12)</span></h2>
          <div class="sort-list">
            <select id="shipping-cost" name="" class="inp">
              <option value="">Price incl. shipping cost</option>
              <option value="">Price excl. shipping cost</option>
            </select>

            <label class="checkbox checkbox-xs">
              <input type="checkbox" />
              <i class="icon-checkbox" />
              Default
            </label>

            <select id="" name="">
              <option value="">More</option>
              <option value="">
                <label class="checkbox checkbox-xs">
                  <input type="checkbox" />
                  <i class="icon-checkbox" />
                  Default
                </label>
              </option>
            </select>
          </div>
        </div>

        <table class="table table-list mb-none">
          <thead>
            <tr>
              <th />
              <th class="th-store">Store</th>
              <th class="th-product">Product</th>
              <th class="th-stock">Stock</th>
              <th class="th-price">Price</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <!-- In stock -->
            <tr>
              <td>
                <button class="btn btn-gray">
                  <i class="fa fa-angle-down" />
                </button>
              </td>
              <td>
                <a href="#">
                  <picture>
                    <img src="/img/brands/onbuy.png" alt="OnBuy" />
                  </picture>
                  <div class="rating-info">
                    <span class="icon green">
                      <i class="far fa-smile" />
                    </span>
                    <span class="point">4.5</span>
                    <span class="review-count">(20)</span>
                  </div>
                </a>
              </td>
              <td>
                <a class="product-name" href="#">
                  <span> Logitech G502 Lightspeed Wireless Gaming Mouse </span>
                </a>
              </td>
              <td>
                <a class="green tooltip" href="#">
                  <i class="fa fa-th" />
                  <i class="fa fa-check" />
                  <span class="tooltip-info">In stock</span>
                </a>
              </td>
              <td>
                <a href="#">
                  <div class="box-price red">
                    <span>
                      <i class="label label-red fa fa-tags" />
                    </span>
                    <span class="price">£55.99</span>
                    <span class="free-delivery">Free delivery</span>
                  </div>
                </a>
              </td>
              <td>
                <a class="btn btn-green" href="#"> View in shop <i class="fa fa-angle-right" /> </a>
              </td>
            </tr>
            <!-- /section In stock -->

            <!-- Js App/section -->
            <tr>
              <td colspan="6">
                <div class="expanded-info">
                  <div>
                    <h3>
                      <a href="#"> OnBuy <i class="fa fa-angle-right" /> </a>
                    </h3>
                    <div class="rating-info">
                      <span class="icon green">
                        <i class="far fa-smile" />
                      </span>
                      <span class="point">4.5</span>
                      <span class="dashed">|</span>
                      <a href="#">
                        <span class="review-count">20 reivews</span>
                      </a>
                    </div>
                    <ul class="list-default">
                      <li>Thousands of Sellers</li>
                      <li>Secure Payment with PayPal</li>
                      <li>UK Based Company</li>
                    </ul>
                  </div>
                  <picture>
                    <img src="/img/consumer_electronics.png" alt="" />
                  </picture>
                </div>
                <div class="locationand-currency-info">
                  <img src="/img/flags/gb.gif" alt="" />
                  <span class="txt-xs">
                    OnBuy is a marketplace run from United Kingdom. Offers that are listed can be
                    from different shops and you make your purchases directly from those shops. Read
                    the website's own terms and conditions for each offer before your purchase.
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <button class="btn btn-link">
                  <i class="fa fa-ellipsis-v" />
                </button>
              </td>
              <td colspan="2">
                <a class="product-name" href="#">
                  <span class="mg-bt-5"> Logitech G502 Lightspeed Wireless Gaming Mouse </span>
                  <p class="txt-xs gray">In Stock</p>
                </a>
              </td>
              <td>
                <a class="green tooltip" href="#">
                  <i class="fa fa-th" />
                  <i class="fa fa-check" />
                  <span class="tooltip-info">In stock</span>
                </a>
              </td>
              <td>
                <a href="#">
                  <div class="box-price red">
                    <span>
                      <i class="label label-red fa fa-tags" />
                    </span>
                    <span class="price">£55.99</span>
                    <span class="free-delivery">Free delivery</span>
                  </div>
                </a>
              </td>
              <td>
                <a class="btn btn-green" href="#"> View in shop <i class="fa fa-angle-right" /> </a>
              </td>
            </tr>
            <!-- //section Js App/section -->

            <!-- Out of stock -->
            <tr>
              <td>
                <button class="btn btn-gray">
                  <i class="fa fa-angle-down" />
                </button>
              </td>
              <td>
                <a href="#">
                  <picture>
                    <img src="/img/brands/onbuy.png" alt="OnBuy" />
                  </picture>
                  <div class="rating-info">
                    <span class="icon red">
                      <i class="far fa-frown" />
                    </span>
                    <span class="point">4.5</span>
                    <span class="review-count">(20)</span>
                  </div>
                </a>
              </td>
              <td>
                <a href="#">
                  <span> Logitech G502 Lightspeed Wireless Gaming Mouse </span>
                </a>
              </td>
              <td>
                <a class="red tooltip" href="#">
                  <i class="fa fa-th" />
                  <i class="fa fa-close" />
                  <span class="tooltip-info">Out of stock</span>
                </a>
              </td>
              <td>
                <a href="#">
                  <div class="box-price">
                    <span class="price">£55.99</span>
                  </div>
                </a>
              </td>
              <td>
                <a class="btn btn-green" href="#"> View in shop <i class="fa fa-angle-right" /> </a>
              </td>
            </tr>
            <!-- /section Out of stock -->

            <!-- Out of stock -->
            <tr>
              <td>
                <button class="btn btn-gray">
                  <i class="fa fa-angle-down" />
                </button>
              </td>
              <td>
                <a href="#">
                  <picture>
                    <img src="/img/brands/onbuy.png" alt="OnBuy" />
                  </picture>
                  <div class="rating-info">
                    <span class="icon red">
                      <i class="far fa-frown" />
                    </span>
                    <span class="point">4.5</span>
                    <span class="review-count">(20)</span>
                  </div>
                </a>
              </td>
              <td>
                <a href="#">
                  <span> Logitech Logitech - G502 Wireless Lightspeed Black Gamer Mouse </span>
                </a>
              </td>
              <td>
                <a class="gray tooltip" href="#">
                  <i class="fa fa-th" />
                  <i class="fa fa-question" />
                  <span class="tooltip-info">Unknow stock</span>
                </a>
              </td>
              <td>
                <a href="#">
                  <div class="box-price">
                    <span class="price">£55.99</span>
                  </div>
                </a>
              </td>
              <td>
                <a class="btn btn-green" href="#"> View in shop <i class="fa fa-angle-right" /> </a>
              </td>
            </tr>
            <!-- /section Out of stock -->

            <!-- None Button -->
            <tr>
              <td>
                <button class="btn btn-gray">
                  <i class="fa fa-angle-down" />
                </button>
              </td>
              <td>
                <a href="#">
                  <span>Box</span>
                </a>
              </td>
              <td>
                <a href="#">
                  <span> Logitech G502 Lightspeed Wireless Gaming Mouse </span>
                </a>
              </td>
              <td>
                <a class="red tooltip" href="#">
                  <i class="fa fa-th" />
                  <i class="fa fa-close" />
                  <span class="tooltip-info">Out of stock</span>
                </a>
              </td>
              <td>
                <a href="#">
                  <div class="box-price gray">
                    <span class="price">£55.99</span>
                    <span class="free-delivery">Free delivery</span>
                  </div>
                </a>
              </td>
              <td />
            </tr>
            <!-- /section None Button -->
          </tbody>
        </table>

        <table class="table table-list mb-show">
          <tbody>
            <!-- In stock -->
            <tr>
              <td>
                <button class="btn btn-gray">
                  <i class="fa fa-angle-down" />
                </button>
              </td>
              <td>
                <a href="#">
                  <picture>
                    <img src="/img/brands/onbuy.png" alt="OnBuy" />
                  </picture>
                  <div class="rating-info">
                    <span class="icon green">
                      <i class="far fa-smile" />
                    </span>
                    <span class="point">4.5</span>
                    <span class="review-count">(20)</span>
                  </div>
                </a>
              </td>
              <td>
                <a class="green tooltip" href="#">
                  <i class="fa fa-th" />
                  <i class="fa fa-check" />
                  <span class="tooltip-info">In stock</span>
                </a>
              </td>
              <td>
                <a href="#">
                  <div class="box-price red">
                    <span>
                      <i class="label label-red fa fa-tags" />
                    </span>
                    <span class="price">£55.99</span>
                    <span class="free-delivery">Free delivery</span>
                  </div>
                </a>
              </td>
              <td>
                <a class="btn btn-green" href="#">
                  <span>View in shop</span> <i class="fa fa-angle-right" />
                </a>
              </td>
            </tr>
            <!-- /section In stock -->

            <!-- Js App/section -->
            <tr>
              <td colspan="6">
                <div class="expanded-info">
                  <div>
                    <h3>
                      <a href="#"> OnBuy <i class="fa fa-angle-right" /> </a>
                    </h3>
                    <div class="rating-info">
                      <span class="icon green">
                        <i class="far fa-smile" />
                      </span>
                      <span class="point">4.5</span>
                      <span class="dashed">|</span>
                      <a href="#">
                        <span class="review-count">20 reivews</span>
                      </a>
                    </div>
                    <ul class="list-default">
                      <li>Thousands of Sellers</li>
                      <li>Secure Payment with PayPal</li>
                      <li>UK Based Company</li>
                    </ul>
                  </div>
                  <picture class="mb-none">
                    <img src="/img/consumer_electronics.png" alt="" />
                  </picture>
                </div>
                <div class="locationand-currency-info">
                  <img src="/img/flags/gb.gif" alt="" />
                  <span class="txt-xs">
                    OnBuy is a marketplace run from United Kingdom. Offers that are listed can be
                    from different shops and you make your purchases directly from those shops. Read
                    the website's own terms and conditions for each offer before your purchase.
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <button class="btn btn-link">
                  <i class="fa fa-ellipsis-v" />
                </button>
              </td>
              <td>
                <a class="product-name ellipsis" href="#">
                  <span class="mg-bt-5"> Logitech G502 Lightspeed Wireless Gaming Mouse </span>
                  <p class="txt-xs gray">In Stock</p>
                </a>
              </td>
              <td>
                <a class="green tooltip" href="#">
                  <i class="fa fa-th" />
                  <i class="fa fa-check" />
                  <span class="tooltip-info">In stock</span>
                </a>
              </td>
              <td>
                <a href="#">
                  <div class="box-price red">
                    <span>
                      <i class="label label-red fa fa-tags" />
                    </span>
                    <span class="price">£55.99</span>
                    <span class="free-delivery">Free delivery</span>
                  </div>
                </a>
              </td>
              <td>
                <a class="btn btn-green" href="#">
                  <span>View in shop</span> <i class="fa fa-angle-right" />
                </a>
              </td>
            </tr>
            <!-- //section Js App/section -->
          </tbody>
        </table>
      </div>

      <section>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-html="product.description" />
        <div class="sec-title">
          <h2 class="title">Price and product information</h2>
          <a class="title-fix-right" href="#">Show more</a>
        </div>
        <div class="sec-body">
          <p class="product-info-fix-width">
            The best price for Logitech G502 Lightspeed right now is £55.99. It is among the 10 most
            popular products in our Mice & Pointing Devices category with an average rating of 3.0
            of 5. Our users mention “Fit” as a prominent feature. PriceSpy compares deals and offers
            from 22 shops, online and local.
          </p>
          <table class="table table-dl">
            <tbody>
              <tr>
                <th scope="row">Brand</th>
                <td>
                  <a href="#">Logitech</a>
                </td>
              </tr>
              <tr>
                <th>Brand Logitech</th>
                <td>Wireless connection</td>
              </tr>
              <tr>
                <th>Connection</th>
                <td>Adjustable weight, Ergonomic design, Tilt wheel</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div class="sec-title">
          <h2 class="title">Others visited</h2>
        </div>
        <div class="cards others-visited">
          <ul>
            <li class="card">
              <a href="#">
                <div class="card-img">
                  <img src="/img/card-1.jpg" alt="" />
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
                <h4 class="card-name">Sony PlayStation 5 (PS5)</h4>
                <div class="price">
                  <strong>£449.99</strong>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>

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
    const product = await $axios.$get('/product/' + id);
    if (!product) return redirect('/404');
    return { id, product };
  },
  data() {
    return {
      id: null,
      product: {
        reviews: [],
      },
    };
  },
  head() {
    return {
      title: this.product.name || 'Product',
    };
  },
  methods: {
    slug(cate) {
      return slug(cate.name) + '-' + cate._id;
    },
  },
};
</script>

<style></style>
