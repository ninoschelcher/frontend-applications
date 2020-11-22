<template>
  <img id="car" src="../assets/car.svg" alt="" />
</template>

<script>
export default {
  name: "Car",
};
</script>

<style scoped>
img {
  animation: drive 3s ease-in-out infinite;
  position: fixed;
  bottom: 0;
  max-width: 100px;
  left:47%;
}

@keyframes drive {
  0% {
    transform: translateX(-.5vw);
  }

  50% {
    transform:translateX(1vw);
  }

  100% {
    transform: translateX(-.5vw);
  }
}
</style>