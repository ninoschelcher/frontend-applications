<template>
  <div>
    <Subjects />
    </div>
</template>

<script>
import Subjects from './components/Subjects'

export default {
  name: "App",
  components: {
    Subjects
  }
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
