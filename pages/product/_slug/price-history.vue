<template>
  <div>
    <h1 class="title">
      Lowest price {{ price.formatedAmount }} ({{ product.updated_at | date('yyyy-MM-dd') }})
    </h1>
    <line-chart :chart-data="chartData" :options="chartOptions" :height="400" :width="1200" />
  </div>
</template>

<script>
import LineChart from '@/components/LineChart';
import { format } from 'date-fns';

export default {
  components: {
    LineChart,
  },
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      chartData: {},
      chartOptions: {
        aspectRatio: 0.5,
        legend: {
          display: false,
        },
        scales: {
          x: {
            type: 'timeseries',
            time: {
              unit: 'day',
              displayFormats: {
                day: 'yyyy-MM-dd',
              },
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
    // TODO: get price histories
  },
  computed: {
    price() {
      return this.product.minActivityAmount ?? this.product.minAmount;
    },
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.chartData = {
        labels: [format(new Date(this.product.updated_at), 'yyyy-MM-dd')],
        datasets: [
          {
            label: 'Price',
            backgroundColor: '#7cb5ec',
            data: [this.price.value],
          },
        ],
      };
    },
  },
};
</script>

<style></style>
