<template>
  <Headings :level="2">
    A <span>car</span> on a parking spot <span>vs</span> a <span>bike</span>.
  </Headings>
  <p>Lets compare the two to a parking spot.</p>

  <div>
    <transition name="fade" mode="out-in">
      <img key="1" id="first" v-if="show" src="../assets/spot1.svg" />
      <img key="2" v-else src="../assets/spot2.svg" />
    </transition>
  </div>

  <button v-if="show" v-on:click="show = !show">Show comparison</button>
  <button v-else v-on:click="show = !show">Show single spot</button>
</template>

<script>
import Headings from "../components/Headings";

export default {
  name: "ParkingSpot",
  data() {
    return {
      show: true,
    };
  },
  components: {
    Headings,
  },
};
</script>

<style scoped>
#first {
  margin-left: 5em;
  margin-top: 1.5em;
}
img {
  margin: 3em 0 0 0;
}

div {
  height: 100%;
}

button {
  width: 130px;
  display: inline-block;
  padding: 1em 0;
  background-color: transparent;
  border: none;
  font-weight: bold;
  border-bottom: 3px solid #000;
  cursor: pointer;
  outline: none;
  position: relative;
  margin: 0 auto;
  top: -8em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>