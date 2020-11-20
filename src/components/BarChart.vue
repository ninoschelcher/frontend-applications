<template>
  <Headings :level="2"
    >How much <span>bike</span> capacity <span>potential</span> is
    there?</Headings
  >
  <p> </p>
</template>

<script>
import Headings from "../components/Headings";

export default {
  name: "BarChart",
  components: {
    Headings,
  },
};
</script>

<style scoped>
</style>