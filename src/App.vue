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
      //If you scroll up on mac/down on windows you get scrolled towards the right
      if (event.deltaY > 0) {
        this.scrollX =
          this.scrollX < document.body.scrollWidth
            ? document.scrollingElement.scrollLeft %
                document.body.clientWidth ==
              0
              ? this.scrollX + document.body.clientWidth
              : this.scrollX
            : document.body.scrollWidth;

        //Select all sections, check if current section is the same as where the client is located and add a class with animation
        const sections = document.querySelectorAll("section");
        sections.forEach((element) => {
          const pagenr = this.scrollX / document.body.clientWidth;
          if (element.dataset.page == pagenr) {
            element.classList.add("doFadeIn");
          }
        });
        window.scroll(this.scrollX, 0);
        //If you scroll down on mac/up on windows you get scrolled towards the right
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
