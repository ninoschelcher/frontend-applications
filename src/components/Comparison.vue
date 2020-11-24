<template>
  <section>
    <Headings :level="2"
      >How much <span>bike</span> capacity <span>potential</span> is
      there?</Headings
    >
    <p>Now how many bikes would replace the cars?</p>
    <BarChart v-if="isDataLoaded" :chartData="chartData" />
  </section>
</template>

<script>
import Headings from "../components/Headings";
import fetchData from "../helpers/fetchData.js";
import BarChart from "../components/visualizations/BarChart.vue";

export default {
  name: "Comparison",
  components: {
    Headings,
    BarChart,
  },
  data() {
    return {
      chartData: [],
      isDataLoaded: false,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const data = await fetchData();
      this.chartData = data;
      this.isDataLoaded = true;
    },
  },
};
</script>

<style scoped>
</style>