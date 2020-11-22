<template>
  <div>
    <button @click="test">Show locations</button>
    <button @click="test">Show as capacity</button>
  </div>
  <div id="map">
    <svg width="1200px" height="800px" />
  </div>
</template>

<script>
import { fetchData } from "../helpers/fetchData.js";
import { geojson } from "../helpers/dataEndpoints";
import * as d3 from "d3";

async function getData() {
  const data = await fetchData();
  return data;
}

const width = 1200;
const height = 800;

const projection = d3
  .geoMercator()
  .scale(150000)
  .center([4.89, 52.35])
  .translate([width / 2, height / 2]);

const pathGenerator = d3.geoPath().projection(projection);

const map = d3
  .select("#map")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("preserveAspectRatio", "xMinYMin meet")
  .attr("viewBox", `0 0 ${width} ${height}`);

const mapG = map.append("g");
const dotG = map.append("g");

const toolTip = d3
  .select("#map")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

d3.json(geojson).then((data) => {
  const district = mapG.selectAll("path").data(data.features);
  district
    .enter()
    .append("path")
    .attr("d", (d) => pathGenerator(d))
    .attr("transform", `translate(0, 20)`)
    .attr("stroke", "#000000")
    .attr("fill", "none");
});

getData().then((data) => {
  const dots = dotG
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("transform", `translate(0, 20)`)
    .attr(
      "cx",
      (d) => projection([d.coordinates.longitude, d.coordinates.latitude])[0]
    )
    .attr(
      "cy",
      (d) => projection([d.coordinates.longitude, d.coordinates.latitude])[1]
    )
    .attr("r", "0");

  dots
    .transition()
    .duration(2000)
    .attr("r", (d) => d.capacity / 50)
    .attr("opacity", "1")
    .attr("stroke", "white")
    .attr("fill", "black")
    .attr("fill-opacity", "0.4")
    .attr("cursor", "pointer")

  // console.log(data)

  dots.on("click", (d, data) => {
    console.log(data.name);
    console.log(d);
    toolTip.transition().duration(200).style("opacity", 0.9);
    toolTip
      .html("Name: " + data.name)
      .style("left", d.event.pageX + "px")
      .style("top", d.event.pageY - 28 + "px");
  });
});

export default {
  name: "Map",
  props: {
    data: Array,
  },
  data() {
    return {
      loadedData: [],
    };
  },
  mounted() {
    this.cleanData();
  },
  methods: {
    async cleanData() {
      const data = await fetchData();
      this.loadedData = data;
    },
  },
};
</script>

<style scoped>
svg {
  width: 1200px;
  height: 800px;
  margin-top: 3em;
}

svg:first-of-type {
  display: none;
}

div:first-of-type {
  margin-top: 1em;
}

button {
  margin: 0 1em;
  background: transparent;
  border: none;
  font-weight: bold;
  cursor: pointer;
}

.tooltip {
  position: absolute;
  display: block;
  height: 75px;
  text-align: left;
  font-family: "Inter";
  background-color: darkred;
  color: #fff;
  padding: 0.5em 1em;
  border-radius: 5px;
}
</style>