<template>
  <Intro />
  <Map />
  <ParkingSpot />
  <Comparison />
  <Conclusion />
  <Car />
</template>

<script>
import Intro from "./components/Intro.vue";
import Map from "./components/Map.vue";
import ParkingSpot from "./components/ParkingSpot.vue";
import Comparison from "./components/Comparison.vue";
import Conclusion from "./components/Conclusion.vue";
import Car from "./components/Car.vue";

export default {
  name: "App",
  components: {
    Intro,
    Map,
    ParkingSpot,
    Comparison,
    Conclusion,
    Car,
  },
  mounted() {
    this.scrollX = 0;
    window.addEventListener("mousewheel", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("mousewheel", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      if (event.deltaY > 0) {
        this.scrollX =
          this.scrollX < document.body.scrollWidth
            ? document.scrollingElement.scrollLeft %
                document.body.clientWidth ==
              0
              ? this.scrollX + document.body.clientWidth
              : this.scrollX
            : document.body.scrollWidth;

        window.scroll(this.scrollX, 0);
      } else if (event.deltaY < 0) {
        this.scrollX =
          this.scrollX > 0
            ? document.scrollingElement.scrollLeft %
                document.body.clientWidth ==
              0
              ? this.scrollX - document.body.clientWidth
              : this.scrollX
            : 0;
        window.scroll(this.scrollX, 0);
      }
    },
  },
};
</script>

<style>
</style>
