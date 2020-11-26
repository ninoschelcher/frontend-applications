<template>
  <section>
    <div>
      <button id="modal" @click="showModal = true">
        Show extra information
      </button>
      <transition name="fade" mode="out-in">
        <div v-if="showModal" class="overlay">
          <p>
            Amsterdam is famous for it's bikes. A lot of people drive a bike to
            school, work or just to go shopping. Then again there are a lot of
            availale parking garages as well.
          </p>
          <p>
            I was very interested in knowing how many bikes would fit on these
            parking spots that are in the car garages.
          </p>
          <p>
            With the data from the RDW I was able to create a fun little
            datastory that answers that question.
          </p>
          <button id="overlay" @click="showModal = false">Close info</button>
        </div>
      </transition>
      <Headings :level="1">
        What if we <span>replace</span> all <span>parking garages</span> in
        Amsterdam for <span>bike spots</span>?</Headings
      >
      <Subtitle msg="Datastory about bikes and cars in Amsterdam." />
      <button id="scroll">Scroll to begin!</button>
    </div>
  </section>
</template>

<script>
import Headings from "@/components/textelements/Headings";
import Subtitle from "@/components/textelements/Subtitle";

export default {
  name: "Intro",
  components: {
    Headings,
    Subtitle,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style scoped>
div {
  position: relative;
}
section:first-of-type div p {
  margin-top: 1em;
  font-size: 1.2em;
}

section #modal {
  cursor: pointer;
  border: none;
  background: none;
  font-weight: bold;
  top: -2em;
  position: relative;
}

section #scroll {
  background: none;
  border: none;
  font-weight: bold;
  font-size: 1.4em;
  cursor: pointer;
  transform: translate(0, 3em);
  animation: updown 4s ease-in-out infinite;
}

section > div > div {
  opacity: 0;
}

.overlay {
  background-color: white;
  border-radius: 10px;
  width: 30%;
  padding: 0.5em 1em;
  height: 320px;
  margin: 0 auto;
  opacity: 1;
  position: absolute;
  left: 0;
  right: 0;
  text-align: left;
}

.overlay button {
  background: none;
  border: none;
  font-size: 1em;
  margin-top: 1em;
  font-weight: bold;
  cursor: pointer;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-out;
  transition-delay: 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@keyframes updown {
  0% {
    transform: translateY(8.5em);
  }

  50% {
    transform: translateY(9.5em);
  }

  100% {
    transform: translateY(8.5em);
  }
}

@media only screen and (min-width: 1500px) {
  section > button {
    transform: translate(0, 8.5em);
  }
}
</style>