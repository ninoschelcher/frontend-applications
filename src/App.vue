<template>
  <section id="intro">
    <Intro />
  </section>
  <section id="map">
    <MapAmsterdam />
  </section>
  <section id="spot">
    <ParkingSpot />
  </section>
  <section id="bar">
    <BarChart />
  </section>
  <Car />
</template>

<script>
import Intro from "./components/Intro.vue";
import MapAmsterdam from "./components/MapAmsterdam.vue";
import ParkingSpot from "./components/ParkingSpot.vue";
import BarChart from "./components/BarChart.vue";
import Car from './components/Car.vue';

export default {
  name: "App",
  components: {
    Intro,
    MapAmsterdam,
    ParkingSpot,
    BarChart,
    Car,
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    document.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
}

body {
  background-color: #339653;
}

body::-webkit-scrollbar {
  display: none;
}

#app {
  display: flex;
  width: 400vw;
}

section {
  height: 100vh;
  width: 100vw;
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

section:first-of-type {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
