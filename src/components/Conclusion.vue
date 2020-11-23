<template>
  <section>
    <div>
      <Headings :level="2">
        <span>What</span> can we <span>relate</span> these numbers <span>to?</span> </Headings
      >
    </div>
  </section>
</template>

<script>
import Headings from "../components/Headings";

export default {
  name: "Conclusion",
  components: {
    Headings,
  },
  methods: {},
};
</script>

<style scoped>
</style>