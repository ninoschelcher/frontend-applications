<template>
  <Headings :level="2">
    A <span>car</span> on a parking spot <span>vs</span> a <span>bike</span>.
  </Headings>
  <p>Lets compare the two to a parking spot.</p>

  <div>
    <transition name="fade" mode="out-in">
      <img key=1 id="first" v-if="show" src="../assets/spot1.svg" />
      <img key=2 v-else src="../assets/spot2.svg" />
    </transition>
  </div>

  <button @click="show = !show">Show comparison</button>
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
  margin-left: 3.5em;
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
  top: -4.5em;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .4s ease-out;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

</style>