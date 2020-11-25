 <template>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  name: "Subtitle",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>