<template>
  <main class="main-layout" @click="langDeactive">
    <Header />
    <Home />

    <div class="main-circle" id="main-circle">
      <svg
        viewBox="-1 -1 50 50"
        xmlns="http://www.w3.org/2000/svg"
        width="60px"
        height="60px"
      >
        <circle
          cx="25"
          cy="25"
          r="15.9155"
          fill="none"
          stroke-width="3"
        ></circle>
        <circle
          cx="25"
          cy="25"
          r="15.9155"
          fill="none"
          stroke-width="3"
          stroke-dasharray="100, 100"
          :stroke-dashoffset="100 - circle_border"
        ></circle>
      </svg>
    </div>

    <Footer />
  </main>
</template>
<script>
import Header from "./header.vue";
import Home from "./home.vue";
import Footer from "./footer.vue";
import Scroll from "../mixins/scrollPosition";
export default {
  name: "main-layout",
  components: { Header, Home, Footer },
  data() {
    return {
      circle_border: 1,
    };
  },
  methods: {
    langDeactive(){
      this.$store.commit('langDeactive')
    }
  },
  mixins: [Scroll("scrollY")],

  watch: {
    scrollY: function (val) {
      let scrollItem = document.getElementById("main-circle");

      let totalHeight = document.body.scrollHeight;
      this.circle_border = 100 * (val / (totalHeight - 730));

      scrollItem.onclick = function () {
        scrollTop();
      };
      //   console.log(val, totalHeight, this.circle_border)

      function scrollTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      window.onscroll = function () {
        if (
          document.documentElement.scrollTop > 100 ||
          document.body.scrollTop > 100
        ) {
          scrollItem.classList.add("item-visible");
        } else {
          scrollItem.classList.remove("item-visible");
        }
      };
    },
  },
};
</script>
<style lang="scss">
.main-circle {
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 24px;
  right: 36px;
  z-index: 99;
  transform: translateY(400px);
  transition: 0.36s linear;
  opacity: 0;
  cursor: pointer;

  &.item-visible {
    transform: translateY(0);
    opacity: 1;
  }

  &::before {
    content: "";
    width: 5px;
    height: 30%;
    border-radius: 20px;
    background: #0563bb;
    display: block;
    position: absolute;
    top: 50%;
    left: 49%;
    transform: translate(0%, -50%) rotateZ(40deg);
    transform-origin: top left;
  }

  &::after {
    content: "";
    width: 5px;
    height: 30%;
    position: absolute;
    top: 50%;
    right: 49%;
    border-radius: 20px;
    background: #0563bb;
    transform: translate(0%, -50%) rotateZ(-40deg);
    transform-origin: top right;
  }

  svg {
    circle {
      &:nth-child(1) {
        stroke: #fff;
      }

      &:nth-child(2) {
        stroke: #0563bb;
      }
    }
  }
}
</style>
