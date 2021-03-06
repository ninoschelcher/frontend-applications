<template>
  <div>
    <button
      :class="{ active: showNormal }"
      v-on:click="
        asNormal();
        resetActive();
        showNormal = true;
      "
    >
      Show locations
    </button>
    <button
      :class="{ active: showCapacity }"
      v-on:click="
        asCapacity();
        resetActive();
        showCapacity = true;
      "
    >
      Show as capacity
    </button>
  </div>
  <div id="map"></div>
</template>

<script>
import { geojson } from "@/helpers/dataEndpoints";
import * as d3 from "d3";

export default {
  name: "MapChart",
  props: ["chartData"],
  data() {
    return {
      showNormal: true,
      showCapacity: false,
    };
  },
  mounted() {
    //Make data acccessible with data
    let data = this.chartData;

    //Width and height of svg
    const width = 1200;
    const height = 700;

    //Map projection of the visualization
    this.projection = d3
      .geoMercator()
      .scale(150000)
      .center([4.88, 52.35])
      .translate([width / 2, height / 2]);

    //Path generator for projection
    this.pathGenerator = d3.geoPath().projection(this.projection);

    //Select the svg and add the width, height and other attributes
    const map = d3
      .select("#map")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", `0 0 ${width} ${height}`);

    //appending & select
    const svg = d3.select("svg");
    const mapG = map.append("g");
    const dotG = map.append("g");
    const g = d3.selectAll("g");

    //Zoom function
    const zoom = d3.zoom().on("zoom", (d) => {
      g.attr("transform", d.transform);
    });

    svg.call(zoom);

    //Set tooltip
    this.toolTip = d3
      .select("#map")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    //Set geojson to json and fill the map
    d3.json(geojson).then((data) => {
      const district = mapG.selectAll("path").data(data.features);
      district
        .enter()
        .append("path")
        .attr("d", (d) => this.pathGenerator(d))
        .attr("transform", `translate(0, 20)`)
        .attr("stroke", "#000000")
        .attr("fill", "none");
    });

    //Place dots on the map with the data
    this.dots = dotG
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("transform", `translate(0, 20)`)
      .attr(
        "cx",
        (d) =>
          this.projection([d.coordinates.longitude, d.coordinates.latitude])[0]
      )
      .attr(
        "cy",
        (d) =>
          this.projection([d.coordinates.longitude, d.coordinates.latitude])[1]
      )
      .attr("r", "0");

    //Transition on entering
    this.dots
      .transition()
      .duration(1500)
      .attr("r", "10")
      .attr("opacity", "1")
      .attr("stroke", "white")
      .attr("fill", "black")
      .attr("fill-opacity", "0.4")
      .attr("cursor", "pointer");

    //Onclick for dots
    this.dots.on("click", (d, data) => {
      this.toolTip
        .transition()
        .duration(500)
        .style("opacity", 0.9)
        .style("visibility", "visible");
      this.toolTip
        .html(
          "<strong>Name:</strong> " +
            data.name +
            "<br>" +
            "<strong>Capacity: </strong>" +
            data.capacity
        )
        .style("left", d.offsetX + "px")
        .style("top", d.offsetY + "px");
    });
  },
  methods: {
    asCapacity() {
      this.dots
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
      this.dots
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
    resetActive() {
      this.showNormal = false;
      this.showCapacity = false;
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
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  border-bottom: 3px solid transparent;
  transition-delay: 1.5s;
}

button.active {
  transition-delay: 1.5s;
  border-bottom: 3px solid #000;
  padding: 0.5em 0;
}
</style>