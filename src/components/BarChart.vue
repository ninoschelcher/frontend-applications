<template>
  <section>
    <Headings :level="2"
      >How much <span>bike</span> capacity <span>potential</span> is
      there?</Headings
    >
    <p>Now how many bikes would replace the cars?</p>
    <div>
     <img src="../assets/comparison.svg">
    </div>
  </section>
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
img {
  margin-top:1em;
}
</style>