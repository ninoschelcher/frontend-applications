<template>
  <svg :viewBox="viewBox">
    <g>
      <path />
    </g>
    <g>
      <circle />
    </g>
  </svg>
</template>

<script>
import * as d3 from "d3";
// import { geojson } from "../helpers/dataEndpoints";

//  d3.json(geojson, (data) => {
//         console.log(data);
//         this.district = data;

export default {
  name: "Map",
  props: {
    // data: {
    //   required: true,
    //   type: Array,
    // },
    width: {
      default: 1400,
      type: Number,
    },
    height: {
      default: 650,
      type: Number,
    },
  },
  computed: {
    viewBox() {
      return `0 0 ${this.width} ${this.height}`;
    },
    projection() {
      return d3
        .geoMercator()
        .scale(200000)
        .center([4.89, 52.35])
        .translate([this.width / 2, this.height / 2]);
    },
    pathGenerator() {
      return d3.geoPath().projection(this.projection);
    },
}
}
</script>

<style scoped>
svg {
  width: 1400px;
  height: 650px;
  margin-top: 3em;
}
</style>