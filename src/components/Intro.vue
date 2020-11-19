<template>
  <div>
    <Headings :level="1">
      What if we <span>replace</span> all <span>parking garages</span> in
      Amsterdam for <span>bike spots</span>?</Headings
    >
    <p>Datastory about bikes and cars in Amsterdam</p>
    <button>Start the ride</button>
  </div>
</template>

<script>
import Headings from "../components/Headings";

export default {
  name: "Intro",
  components: {
    Headings,
  },
};
</script>

<style scoped>

section:first-of-type div p {
  margin-top: 1em;
  font-size: 1.2em;
}

section:first-of-type div button {
  background: none;
  border: none;
  font-weight: bold;
  font-size: 1.4em;
  cursor: pointer;
  transform: translate(0, 5em);
}

@media only screen and (min-width: 1500px) {
  section:first-of-type div button {
    transform: translate(0, 10em);
  }
}
</style>