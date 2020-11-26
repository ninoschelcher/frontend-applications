<template>
  <div>
    <transition name="fade" mode="out-in">
      <img key="1" id="first" v-if="show" src="@/assets/spot1.svg" />
      <img key="2" v-else src="@/assets/spot2.svg" />
    </transition>
  </div>
  <button v-if="show" v-on:click="show = !show">Show comparison</button>
  <button v-else v-on:click="show = !show">Show single spot</button>
</template>

<script>
export default {
  name: "CompareSpots",
  data() {
    return {
      show: true,
    };
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
  transition-delay: 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media only screen and (max-width: 1500px) {
  img {
    max-width: 60%;
  }
}
</style>