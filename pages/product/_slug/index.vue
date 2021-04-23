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
