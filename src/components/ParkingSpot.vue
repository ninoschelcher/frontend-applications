<template>
  <Headings :level="2">
    A <span>car</span> on a parking spot <span>vs</span> a <span>bike</span>.
  </Headings>
  <p>Lets compare the two to a parking spot.</p>

 <img src="../assets/spot1.svg">
 <img src="../assets/spot2.svg">
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


img {
  margin: 3em 0 0 3.5em;
}

img:last-of-type {
  display: none;
}
</style>