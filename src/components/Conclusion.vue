<template>
  <section data-page="4">
    <div>
      <Headings :level="2">
        <span>What</span> can we <span>relate</span> these numbers
        <span>to?</span>
      </Headings>
      <Subtitle msg="Some things could be different." />
    </div>
    <div id="container">
      <ConclusionCircles
        id="first"
        img="bikegarage.png"
        text="10x more capacity as new bike garage at Amsterdam Centraal."
      />
      <ConclusionCircles
        id="second"
        img="citizens.jpeg"
        text="10% more people in Amsterdam could store their bike."
      />
      <ConclusionCircles
        id="third"
        img="uitstoot.jpeg"
        text="15.080.800kg less co2 emission if a car drives 5.000km per year."
      />
    </div>
  </section>
</template>

<script>
import Headings from "../components/textelements/Headings";
import Subtitle from "../components/textelements/Subtitle";
import ConclusionCircles from "../components/visualizations/ConclusionCircles";

export default {
  name: "Conclusion",
  components: {
    Headings,
    Subtitle,
    ConclusionCircles,
  },
};
</script>

<style scoped>
@media only screen and (max-width: 1500px) {
  #container {
    display: flex;
    margin-top: 5em;
  }

  #container > div {
    position: initial;
  }
}
</style>