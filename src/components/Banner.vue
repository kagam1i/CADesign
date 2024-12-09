<template>
  <div class="banner">
    <div class="banner__background"></div>
    <div class="banner__content">
      <h1>Энергия твоего роста! – заряжаем твою карьеру</h1>
      <my-button>Стать частью команды</my-button>
    </div>
      <div class="banner__images">
<!--        <img class="img_people" :src="people" alt="">-->
        <img class="img_building" :src="building" alt="">
      </div>
  </div>
</template>

<script>
import MyButton from "../ UI/MyButton.vue";
import people from '../assets/image/people.svg'
import building from '../assets/image/building.svg'

export default {
  components: {MyButton},
  data() {
    return {
      people,
      building,

    }
  }

};
</script>


<style lang="scss" scoped>
@font-face {
  font-family: 'Roboto';
  src: url('../assets/fonts/Roboto-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.banner {
  font-family: 'Roboto', sans-serif;
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden
}

.banner__background {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #003264;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 100%;
  clip-path: polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0% 100%);

}

.banner__content {
  position: absolute;
  max-width: 500px;
  top: 50%;
  left: 15%;
  transform: translateY(-50%);
  color: #fff;
  z-index: 2;
}

h1 {
  color: #FFFFFF;
  line-height: 42px;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 59px;
}

.banner__images {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
}

.img_people {
  width: 678px;
  height: 430px
}

.img_building {
  position: absolute;
  top: 0;
  right: 0;
  width: 1072px;
  height: 715px;
}

</style>