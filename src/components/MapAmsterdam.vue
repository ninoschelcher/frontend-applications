<template>
  <Headings :level="2">
    <span>Where</span> are the <span>parking garages</span> currently?</Headings
  >
  <p>Where are they located all over Amsterdam?</p>
  <Map :chartData="chartData" />
</template>

<script>
import Headings from "../components/Headings";
import Map from "../components/Map";
import fetchData from "../helpers/fetchData.js";

export default {
  name: "MapAmsterdam",
  components: {
    Headings,
    Map,
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