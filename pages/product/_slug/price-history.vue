<template>
  <div>
    <h1 class="title">
      Lowest price US ${{ lowestPrice.price }} ({{ lowestPrice.updated_at | date('yyyy-MM-dd') }})
    </h1>
    <chart
      type="line"
      :chart-data="chartData"
      :options="chartOptions"
      :height="400"
      :width="1200"
    />
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      lowestPrice: {},
      chartData: {},
      chartOptions: {
        legend: {
          display: false,
        },
        scales: {
          x: {
            type: 'time',
            ticks: {
              source: 'data',
            },
            time: {
              unit: 'day',
              minUnit: 'day',
              round: true,
              displayFormats: {
                day: 'yyyy-MM-dd',
              },
              tooltipFormat: 'yyyy-MM-dd',
            },
          },
          y: {
            type: 'linear',
            min: 0,
          },
        },
      },
    };
  },
  async fetch() {
    const priceHistory = await this.$axios.$get(`/product/${this.product._id}/price-history`, {
      params: { page: this.$route.query.page },
    });
    this.chartData = {
      labels: [],
      datasets: [
        {
          label: 'Price',
          backgroundColor: '#7cb5ec',
          fill: false,
          data: priceHistory.docs.map((p) => {
            return {
              x: new Date(p.updated_at),
              y: p.minActivityAmount?.value ?? p.minAmount.value,
            };
          }),
        },
      ],
    };
    this.lowestPrice = await this.$axios.$get(`/product/${this.product._id}/lowest-price`);
  },
  computed: {
    price() {
      return this.product.minActivityAmount ?? this.product.minAmount;
    },
  },
};
</script>

<style></style>
