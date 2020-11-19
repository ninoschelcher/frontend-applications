<template>
  <Headings :level="2">
    A <span>car</span> on a parking spot <span>vs</span> a <span>bike</span>.
  </Headings>
  <p>Lets compare the two to a parking spot</p>
</template>

<script>
import Headings from "../components/Headings";

export default {
  name: "ParkingSpot",
  components: {
    Headings,
  },
};
</script>

<style scoped>
</style>