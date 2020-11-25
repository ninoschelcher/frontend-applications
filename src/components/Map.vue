<template>
  <section>
    <Headings :level="2">
      <span>Where</span> are the
      <span>parking garages</span> currently?</Headings
    >
    <Subtitle msg="Where are they located all over Amsterdam?" />
    <MapChart v-if="isDataLoaded" :chartData="chartData" />
    <p id="data">Data used from RDW and Gemeente Amsterdam</p>
  </section>
</template>

<script>
import Headings from "@/components/textelements/Headings";
import Subtitle from "@/components/textelements/Subtitle";
import MapChart from "@/components/visualizations/MapChart";
import fetchData from "@/helpers/fetchData.js";

export default {
  name: "Map",
  components: {
    Headings,
    Subtitle,
    MapChart,
  },
  data() {
    return {
      chartData: [],
      isDataLoaded: false,
    };
  },
  created() {
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
#data {
  position: relative;
  top: -5em;
  font-size: 0.8em;
  font-weight: bold;
}
</style>