<template>
  <div id="map"></div>
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
  .scale(140000)
  .center([4.89, 52.34])
  .translate([width / 2, height / 2]);

const pathGenerator = d3.geoPath().projection(projection);

const map = d3
  .select("#map")
  .append("svg")
  .call(
    d3.zoom().on("zoom", function () {
      map.attr("transform", d3.event.transform);
    })
  )
  .attr("width", width)
  .attr("height", height)
  .attr("preserveAspectRatio", "xMinYMin meet")
  .attr("viewBox", `0 0 ${width} ${height}`);

const mapG = map.append("g");
const dotG = map.append("g");
const dots = dotG.selectAll("circle");

const divTooltip = d3
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
  dots
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
    .attr("r", (d) => d.capacity / 50)
    .attr("opacity", "1")
    .attr("stroke", "white")
    .attr("fill", "black")
    .attr("fill-opacity", "0.4")
    .attr("cursor", "pointer")
    .on("click", (d) => {
      // console.log(data.name)
      console.log(d)
      divTooltip.transition().duration(200).style("opacity", 0.9);
      divTooltip
        // .html("Name: " + d.name)
        // .style("left", d3.event.pageX + "px")
        // .style("top", d3.event.pageY - 28 + "px");
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
</style>