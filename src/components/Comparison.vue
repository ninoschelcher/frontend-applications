<template>
  <section>
    <Headings :level="2"
      >How much <span>bike</span> capacity <span>potential</span> is
      there?</Headings
    >
    <Subtitle msg="Now how many bikes would replace the cars?" />
    <BarChart v-if="isDataLoaded" :chartData="chartData" />
  </section>
</template>

<script>
import Headings from "@/components/textelements/Headings";
import Subtitle from "@/components/textelements/Subtitle";
import BarChart from "@/components/visualizations/BarChart";
import fetchData from "@/helpers/fetchData.js";

export default {
  name: "Comparison",
  components: {
    Headings,
    Subtitle,
    BarChart,
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
</style>