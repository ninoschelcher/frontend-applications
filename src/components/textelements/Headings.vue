 <template>
  <h1 v-if="level === 1">
    <slot></slot>
  </h1>
  <h2 v-else-if="level === 2">
    <slot></slot>
  </h2>
</template>

<script>
export default {
  name: "Headings",
  props: {
    level: {
      type: Number,
      required: true,  
    },
  },
};
</script>

<style>
h1 {
  font-size: 4em;
}
h2 {
  font-size: 3em;
  text-align: center;
  margin-top:1em;
  margin-bottom:.3em;
}

span {
  color: #fff;
}

@media only screen and (min-width: 1500px) {
  h1 {
    max-width: 80%;
    margin: 0 auto;
    font-size:4.5em;
  }
}
</style>