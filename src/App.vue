<template>
  <section>
    <h1>
      What if we <span>replace</span> all <span>parking garages</span> in
      Amsterdam for <span>bike spots</span>?
    </h1>
  </section>
  <section></section>
  <section></section>
  <section></section>
</template>

<script>
// import Calculator from './components/Calculator'

export default {
  name: "App",
  components: {},
  data: () => {
    return {
      message: "Hello Vue :)",
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");

body {
  background-color: #219653;
}
#app {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

h1 {
  color: #000;
  font-size: 4em;
  font-weight: bold;
}

h1 span {
  color: #fff;
}
</style>
