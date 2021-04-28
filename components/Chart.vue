<template>
  <canvas ref="chart"></canvas>
</template>

<script>
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';

export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    chartData: {
      type: Object,
      default: () => ({}),
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  watch: {
    chartData(data) {
      this.chart.data = data;
      this.chart.update('none');
    },
    options(ops) {
      this.chart.options = ops;
      this.chart.update();
    },
  },
  mounted() {
    this.chart = new Chart(this.$refs.chart, {
      type: 'line',
      data: this.chartData,
      options: this.options,
    });
  },
  beforeDestroy() {
    this.chart.destroy();
  },
};
</script>
