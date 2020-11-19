<template>
  <FetchData />
  <section>
    <Intro />
  </section>
  <section>
    <MapAmsterdam />
  </section>
  <section>
    <ParkingSpot />
  </section>
  <section>
    <BarChart />
  </section>
</template>

<script>
import FetchData from "./components/FetchData.vue";
import Intro from "./components/Intro.vue";
import MapAmsterdam from "./components/MapAmsterdam.vue";
import ParkingSpot from "./components/ParkingSpot.vue";
import BarChart from "./components/BarChart.vue";

export default {
  name: "App",
  components: {
    FetchData,
    Intro,
    MapAmsterdam,
    ParkingSpot,
    BarChart,
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
}

section:first-of-type {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
