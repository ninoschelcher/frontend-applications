<template>
  <div id="bars">
    <div>
      <div class="info">
        <img src="@/assets/barcar.svg" />
        <p>= 1000 car spots</p>
      </div>
      <div class="imgwrapper">
        <img
          src="@/assets/barcar.svg"
          v-for="carAmount in countCars"
          :key="carAmount"
          id="car"
        />
      </div>
      <h3 class="amounts">{{ carAmount }} + Car Spots</h3>
    </div>
    <div>
      <div class="info">
        <img src="@/assets/bike.svg" />
        <p>= 1000 bike spots</p>
      </div>
      <div class="imgwrapper">
        <img
          src="@/assets/bike.svg"
          v-for="bikeAmount in countBikes"
          :key="bikeAmount"
          id="bike"
        />
      </div>
      <h3 class="amounts">{{ bikeAmount }} + Potential Bike Spots</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "BarChart",
  props: ["chartData"],
  data() {
    return {
      carAmount: Number,
      bikeAmount: Number,
      countCars: Number,
      countBikes: Number,
      data: Array,
    };
  },
  mounted() {
    const data = this.chartData;
    this.data = data;

    const countCars = (accumulator, item) => {
      return accumulator + item.capacity;
    };

    this.carAmount = data.reduce(countCars, 0);
    this.bikeAmount = this.carAmount * 6;
    this.countCars = Math.floor(this.carAmount / 1000);
    this.countBikes = Math.floor(this.bikeAmount / 1000);
  },
};
</script>

<style scoped>
#bars {
  display: flex;
  justify-content: space-between;
  margin: 4em 0.5em 0 0.5em;
  align-items: baseline;
}

#bars > div {
  width: 500px;
  height: 650px;
  margin: 0 6em;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  align-self: flex-end;
}

#bars > div:first-of-type {
  display: flex;
  flex-direction: column;
}

#bars .amounts {
  font-size: 1.8em;
  border-top: 3px solid #000;
  padding-top: 0.5em;
  margin-top: 0.5em;
}

.info {
  text-align: center;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -40px;
}

.info p {
  font-weight: bold;
  margin-left: 0.4em;
  font-size: 1.5em;
}

.imgwrapper {
  display: flex;
  flex-wrap: wrap-reverse;
}
.imgwrapper img {
  margin: 0.3em;
  max-width: 100px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active {
  transition-delay: 0.2s;
}
</style>