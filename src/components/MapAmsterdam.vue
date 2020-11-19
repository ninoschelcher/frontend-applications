<template>
  <Headings :level="2">
    <span>Where</span> are the <span>parking garages</span> currently?</Headings
  >
  <Map />
</template>

<script>
import Headings from "../components/Headings";
import Map from "../components/Map";

export default {
  name: "MapAmsterdam",
  components: {
    Headings,
    Map,
  },
};
</script>

<style scoped>
</style>