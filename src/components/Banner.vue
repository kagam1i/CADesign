<template>
  <div class="banner">
    <my-dialog :show="isModalVisible" @close="closeModal"/>
    <div class="banner__background">
      <img :src=building class="banner__background-img" alt="Задний фон баннера">
    </div>
    <div class="banner__content">
      <div class="banner__content__wrapper">
        <h1 class="banner__title">Энергия твоего роста! – заряжаем твою карьеру</h1>
        <my-button class="banner__button" @click="openModal">Стать частью команды</my-button>
      </div>
    </div>
    <div class="banner__people">
      <img :src=people class="banner__people-img" alt="Сотрудники компании CADesign">
    </div>
  </div>
</template>


<script>
import MyButton from "../ UI/MyButton.vue";
import people from '../assets/image/people.svg'
import building from '../assets/image/building.svg'
import MyDialog from "../ UI/MyDialog.vue";

export default {
  components: {MyButton, MyDialog},
  data() {
    return {
      people,
      building,
      isModalVisible: false,

    }
  },
  methods: {
    openModal () {
      this.isModalVisible = true;
    },
    closeModal () {
      this.isModalVisible = false;
    }
  },

};
</script>


<style lang="scss" scoped>
.banner {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden
}

.banner__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 67%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #003264;
  clip-path: polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0% 100%);
}

.banner__background {
  position: absolute;
  right: 0;
  background-color: aliceblue;
}

.banner__title {
  max-width: 592px;
  color: white;
  font-size: 36px;
  font-weight: 700;
  line-height: 41.83px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.banner__button {
  margin-top: 59px;
  font-size: 16px;
  font-weight: 700;
  line-height: 18.59px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.banner__people {
  height: 100%;
  position: relative;
  left: 50%;
}

@media screen and (max-width: 1250px) {
  .banner__content__wrapper{
    max-width: 450px;
  }
}
@media screen and (max-width: 1024px) {
  .banner__content {
    width: 75%;
  }

  .banner__people {
    display: flex;
    align-items: flex-end;
  }
  .banner__people-img {
    height: 334px;
    width: 527px;
  }
  .banner__background {
    width: 100%;
    height: 100%;
    background-image: url('../assets/image/laptopBasckgroundBanner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom center;
  }
  .banner__background-img {
    display: none;
  }
}

@media (max-width: 768px) {
  .banner__content {
    justify-content: flex-start;
    width: 635px;
    height: 100%;
    clip-path: polygon(0 0, 83% 0, 100% 50%, 83% 100%, 0% 100%);
  }

  .banner__content__wrapper{
    margin: 0 0 75px 50px;
  }

  .banner__title {
    max-width: 384px;
    font-size: 30px;
    font-weight: 700;
    line-height: 34.86px;
  }

  .banner__button {
    width: 254px;
    height: 64px;
    margin-top: 51px;
    padding: 23px 33px;
  }
  .banner__people {
    left: 275px;
  }
}
@media screen and (max-width: 678px) {
  .banner__content {
    width: 100%;
    clip-path: none;
    justify-content: center;
  }
  .banner__content__wrapper {
    display: flex;
    margin: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .banner__title {
    text-align: center;
    max-width: 400px;
    font-size: 28px;
    font-weight: 700;
    line-height: 35.56px;
  }

  .banner__button {
    position: relative;
    width: 224px;
    height: 56px;
    margin-top: 148px;
    padding: 20px 30px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16.27px;
    z-index: 6;
  }
  .banner__people{
    position: static;
    display: flex;
    justify-content: center;
  }
  .banner__people-img {
    position:  relative;
    bottom: -25px;
    margin-left: 60px;
    width: 410px;
    height: 280px;
  }
}
</style>