<template>
  <h1>Test</h1>
</template>

<script>
import { fetchData } from "../helpers/fetchData.js";

const parkingSpecifications = "https://opendata.rdw.nl/resource/b3us-f26s.json";
const geoLocations = "https://opendata.rdw.nl/resource/t5pc-eb34.json";

export default {
  name: "FetchData",
  methods: {
      async fetchDataSets() {
        const parkingSpotSpecification = await fetchData(parkingSpecifications);
        const parkingLocations = await fetchData(geoLocations);

        console.log(parkingSpotSpecification, parkingLocations)
    },
  },
};
</script>

<style scoped>
</style>