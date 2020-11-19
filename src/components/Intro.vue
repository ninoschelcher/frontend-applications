<template>
  <div>
    <Headings :level="1">
      What if we <span>replace</span> all <span>parking garages</span> in
      Amsterdam for <span>bike spots</span>?</Headings
    >
    <p>Datastory about bikes and cars in Amsterdam</p>
    <button v-on:click="scrollPage">Start the ride</button>
  </div>
  <img src="../assets/car.svg" alt="" />
</template>

<script>
import Headings from "../components/Headings";

export default {
  name: "Intro",
  components: {
    Headings,
  },
  methods: {},
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
  transform: translate(0, 6em);
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

img {
  animation: drive 3s ease-in-out infinite;
  position: absolute;
  bottom: 0;
  max-width: 100px;
}

/* @keyframes drive {
  0% {
    transform: translateX(-1vw);
  }

  50% {
    transform:translateX(1vw);
  }

  100% {
    transform: translateX(-1vw);
  }
} */

@media only screen and (min-width: 1500px) {
  section:first-of-type div button {
    transform: translate(0, 8.5em);
  }
}
</style>