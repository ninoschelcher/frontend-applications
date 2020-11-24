<template>
  <section>
    <div>
      <Headings :level="2">
        <span>What</span> can we <span>relate</span> these numbers
        <span>to?</span>
      </Headings>
      <p>Some things could be different.</p>
    </div>
    <div id="first">
      <img src="../assets/bikegarage.png" alt="" />
      <p>10x more capacity as new bike garage at Amsterdam Centraal.</p>
    </div>
    <div id="second">
      <img src="../assets/citizens.jpeg" alt="" />
      <p>10% more people in Amsterdam could store their bike.</p>
    </div>
    <div id="third">
      <img src="../assets/bikegarage.png" alt="" />
      <p>15.080.800kg less co2 emission if a car drives 5.000km per year.</p>
    </div>
  </section>
</template>

<script>
import Headings from "../components/Headings";

export default {
  name: "Conclusion",
  components: {
    Headings,
  },
  methods: {},
};
</script>

<style scoped>
img {
  max-width: 60%;
  border-radius: 100%;
  margin-bottom: 1em;
}

#first {
  left: 10em;
  position: relative;
  margin-top: 1em;
}

#second {
  position: relative;
  top: -23em;
  right: 14em;
}

#third {
  position: relative;
  top: -23em;
  right: 6em;
}

#first p,
#second p,
#third p {
  font-weight: bold;
  max-width: 50%;
  margin: 0 auto;
}
</style>