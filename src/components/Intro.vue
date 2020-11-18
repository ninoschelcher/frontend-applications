<template>
  <div>
    <h1>
      What if we <span>replace</span> all <span>parking garages</span> in
      Amsterdam for <span>bike spots</span>?
    </h1>
    <p>Datastory about bikes and cars in Amsterdam</p>
    <button>Start the ride</button>
  </div>
</template>

<script>
export default {
  name: "Intro",
};
</script>

<style scoped>
section:first-of-type div {
}

section:first-of-type div h1 {
  font-size: 4em;
}

section:first-of-type div span {
  color: #fff;
}

section:first-of-type div p {
  margin-top: 1em;
  font-size: 1.2em;
}

section:first-of-type div button {
  transform: translate(0, 10.5em);
  background: none;
  border: none;
  font-weight: bold;
  font-size: 1em;
  cursor: pointer;
}

@media only screen and (min-width: 1500px) {
  h1 {
    max-width: 80%;
    margin: 0 auto;
  }
  section:first-of-type div button {
  transform: translate(0, 14.5em);
  }
}
</style>