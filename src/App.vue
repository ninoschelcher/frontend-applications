<template>
  <Intro />
  <Map />
  <ParkingSpot />
  <BarChart />
  <Conclusion />
  <Car />
</template>

<script>
import Intro from "./components/Intro.vue";
import Map from "./components/Map.vue";
import ParkingSpot from "./components/ParkingSpot.vue";
import BarChart from "./components/BarChart.vue";
import Conclusion from './components/Conclusion.vue'
import Car from "./components/Car.vue";

export default {
  name: "App",
  components: {
    Intro,
    Map,
    ParkingSpot,
    BarChart,
    Conclusion,
    Car,
  },
};
</script>

<style>
</style>
