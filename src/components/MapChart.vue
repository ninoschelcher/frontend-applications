<template>
  <div>
    <button :class="{ active: isActive }" v-on:click="asNormal">
      Show locations
    </button>
    <button :class="{ active: !isActive }" v-on:click="asCapacity">
      Show as capacity
    </button>
  </div>
  <div id="map"></div>
</template>

<script>
import { geojson } from "../helpers/dataEndpoints";
import * as d3 from "d3";

export default {
  name: "MapChart",
  props: ["chartData"],
  data() {
    return {
      isActive: true,
    };
  },
  mounted() {
    let data = this.chartData;

    const width = 1200;
    const height = 800;

    const projection = d3
      .geoMercator()
      .scale(150000)
      .center([4.88, 52.34])
      .translate([width / 2, height / 2]);

    const pathGenerator = d3.geoPath().projection(projection);

    const map = d3
      .select("#map")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .call(
        d3.zoom().on("zoom", function () {
          map.attr("transform", d3.event.transform);
        })
      );

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
      .duration(1500)
      .attr("r", "10")
      .attr("opacity", "1")
      .attr("stroke", "white")
      .attr("fill", "black")
      .attr("fill-opacity", "0.4")
      .attr("cursor", "pointer");

    dots.on("click", (d, data) => {
      console.log("test");
      toolTip
        .transition()
        .duration(500)
        .style("opacity", 0.9)
        .style("visibility", "visible");
      toolTip
        .html("<strong>Name:</strong> " + data.name)
        .style("left", d.offsetX + "px")
        .style("top", d.offsetY + "px");
    });

    // console.log("test");
  },
  methods: {
    asCapacity() {
      this.isActive = !this.isActive;
      const dots = d3.selectAll("circle");

      dots
        .transition()
        .duration(1500)
        .attr("r", "0")
        .transition()
        .duration(1500)
        .attr("r", (d) => d.capacity / 50)
        .attr("opacity", "1")
        .attr("stroke", "white")
        .attr("fill", "black")
        .attr("fill-opacity", "0.4")
        .attr("cursor", "pointer");
    },
    asNormal() {
      this.isActive = !this.isActive;
      const dots = d3.selectAll("circle");

      dots
        .transition()
        .duration(1500)
        .attr("r", "0")
        .transition()
        .duration(1500)
        .attr("r", "10")
        .attr("opacity", "1")
        .attr("stroke", "white")
        .attr("fill", "black")
        .attr("fill-opacity", "0.4")
        .attr("cursor", "pointer");
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

#map {
  position: relative;
}

button {
  margin: 0 1em;
  background: transparent;
  border: none;
  font-weight: bold;
  cursor: pointer;
  outline: none;
}

button.active {
  border-bottom: 3px solid #000;
  padding: 0.5em 0;
}
</style>