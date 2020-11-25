<template>
  <section>
    <Headings :level="2">
      A <span>car</span> on a parking spot <span>vs</span> a <span>bike</span>.
    </Headings>
    <Subtitle msg="Lets compare the two to a parking spot." />
    <CompareSpots />
  </section>
</template>

<script>
import Headings from "@/components/textelements/Headings";
import Subtitle from "@/components/textelements/Subtitle";
import CompareSpots from "@/components/visualizations/CompareSpots";

export default {
  name: "ParkingSpot",
  components: {
    Headings,
    Subtitle,
    CompareSpots,
  },
};
</script>