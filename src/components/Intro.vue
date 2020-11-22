<template>
  <div>
    <Headings :level="1">
      What if we <span>replace</span> all <span>parking garages</span> in
      Amsterdam for <span>bike spots</span>?</Headings
    >
    <p>Datastory about bikes and cars in Amsterdam.</p>
    <button v-on:click="startCar">Shift + Scroll to begin!</button>
  </div>
</template>

<script>
import Headings from "../components/Headings";

export default {
  name: "Intro",
  components: {
    Headings,
  },
  methods: {
    startCar() {
      const car = document.querySelector('#car')
      car.style.left = "150vw";
    }
  },
};
</script>

<style scoped>
div {
  position: relative;
}
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
  transform: translate(0, 3em);
  animation: updown 4s ease-in-out infinite;
}

@keyframes updown {
  0% {
    transform: translateY(8.5em);
  }

  50% {
    transform: translateY(9.5em);
  }

  100% {
    transform: translateY(8.5em);
  }
}

@media only screen and (min-width: 1500px) {
  section:first-of-type div button {
    transform: translate(0, 8.5em);
  }
}
</style>