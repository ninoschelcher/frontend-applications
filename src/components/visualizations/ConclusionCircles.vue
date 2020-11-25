<template>
  <div :id="`${id}`">
    <img :src="require(`../../assets/${img}`)" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "ConclusionCircles",
  props: {
    id: String,
    img: String,
    text: String,
  },
};
</script>

<style scoped>
div {
  position: relative;
}
img {
  max-width: 60%;
  border-radius: 100%;
  margin-bottom: 1em;
}

#first {
  left: 10em;
  margin-top: 1em;
}

#second {
  top: -23em;
  right: 14em;
}

#third {
  top: -23em;
  right: 6em;
}

p {
  font-weight: bold;
  max-width: 50%;
  margin: 0 auto;
}
</style>
