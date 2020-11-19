<template>
  <div></div>
</template>

<script>
import { fetchData } from "../helpers/fetchData.js";
import { getSpecificLocation } from "../helpers/specificLocation.js";
import { combineDataSets } from '../helpers/combineData.js'

const parkingSpecifications = "https://opendata.rdw.nl/resource/b3us-f26s.json";
const geoLocations = "https://opendata.rdw.nl/resource/t5pc-eb34.json";
const row = "areaid";
const cityCode = "363";

export default {
  name: "FetchData",
  async created() {
    const parkingSpotSpecification = await fetchData(parkingSpecifications);
    const geoLocation = await fetchData(geoLocations);
    const specificLocations = getSpecificLocation(
      parkingSpotSpecification,
      row,
      cityCode
    );
    const combinedData = combineDataSets(specificLocations, geoLocation);

    console.log(combinedData);
  },
};
</script>

<style scoped>

div {
  display: none;
}

</style>
