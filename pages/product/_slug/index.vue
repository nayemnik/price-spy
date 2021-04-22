<template>
  <section>
    <div class="sec-title">
      <h1 class="title">Price and product information</h1>
      <!-- <a class="title-fix-right" href="#">Show more</a> -->
    </div>
    <div id="info" class="sec-body">
      <p class="product-info-fix-width">
        The best price for {{ product.name }} right now is {{ product.price }}.
        <!-- It is among the 10 most
            popular products in our Mice & Pointing Devices category with an average rating of 3.0
            of 5. Our users mention “Fit” as a prominent feature. PriceSpy compares deals and offers
            from 22 shops, online and local. -->
      </p>
      <table class="table table-dl">
        <tbody>
          <tr v-for="(val, key) in product.specs" :key="key">
            <th>{{ key }}</th>
            <td>{{ val }}</td>
          </tr>
        </tbody>
      </table>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="product.description" />
    </div>
  </section>
  <!--
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
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => ({
        reviews: [],
      }),
    },
    category: {
      type: Object,
      default: () => ({}),
    },
  },
  head() {
    return {
      title: this.product.name || 'Product',
    };
  },
};
</script>

<style></style>
