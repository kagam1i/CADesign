<template>
  <div class="app">
    <Header />
    <!--    <Banner />-->
    <Points />
    <Slider />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Points from "./components/Points.vue";
import Slider from "./components/Slider.vue";
import Footer from "./components/Footer.vue";
import Banner from "./components/Banner.vue";

export default {
  components: {Header , Points , Slider, Footer},

}
</script>

<style lang="scss" scoped>

@font-face {
  font-family: 'Roboto';
  src: url('./assets/fonts/Roboto-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  width: 100%;
  height: 100%;
  font-family: 'Roboto', sans-serif;
}
</style>
