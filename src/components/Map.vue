<template>
  <section>
    <Headings :level="2">
      <span>Where</span> are the
      <span>parking garages</span> currently?</Headings
    >
    <p>Where are they located all over Amsterdam?</p>
    <MapChart :chartData="chartData" />
  </section>
</template>

<script>
import Headings from "../components/Headings";
import MapChart from "../components/MapChart.vue";
import fetchData from "../helpers/fetchData.js";

export default {
  name: "Map",
  components: {
    Headings,
    MapChart,
  },
  data() {
    return {
      chartData: this.chartData,
    };
  },
  async created() {
    const data = await fetchData();
    this.chartData = data;
  },
};
</script>

<style scoped>
</style>