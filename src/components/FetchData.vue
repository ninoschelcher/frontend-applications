<template>
  <div></div>
</template>

<script>
import { fetchData } from "../helpers/fetchData.js";
import { getSpecificLocation } from "../helpers/specificLocation.js";
import { combineDataSets } from '../helpers/combineData.js'

import { parkingSpecifications, geoLocations, row, cityCode } from '../helpers/dataEndpoints';

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
  console.log(combinedData)
  },
};
</script>

<style scoped>

div {
  display: none;
}

</style>
