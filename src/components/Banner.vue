<template>
  <div class="banner">
    <my-dialog :show="isModalVisible" @close="closeModal"/>
    <div class="banner__background_photo">
      <img :src=building alt="Задний фон баннера">
    </div>
    <div class="banner__content">
      <div class="banner__content__wrapper">
        <h1 class="banner__title">Энергия твоего роста! – заряжаем твою карьеру</h1>
        <my-button class="banner__button" @click="openModal">Стать частью команды</my-button>
      </div>
    </div>
    <div class="banner__people">
      <img :src=people alt="Сотрудники компании CADesign">
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
  width: 1300px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #003264;
  clip-path: polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0% 100%);
}

.banner__background_photo {
  position: absolute;
  top: -39px;
  left: 875px;
  width: 1072px;
  height: 715px;
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
  position: absolute;
  top: 0;
  left: 965px;
  width: 678px;
  height: 430px;
}

@media (max-width: 768px) {

  .banner__content {
    justify-content: flex-start;
    width: 635px;
    height: 100%;
    clip-path: polygon(0 0, 83% 0, 100% 50%, 83% 100%, 0% 100%);
  }

  .banner__content__wrapper{
    margin-left: 50px;

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

  .banner__background_photo {
    width: 696px;
    height: 412px;
    top: 0;
    left: 115px;
  }

  .banner__background_photo img {
    width: 696px;
    height: 600px;
  }

  .banner__people {
    top: 70px;
    left: 420px;
  }

  .banner__people img {
    width: 527px;
    height: 334px;
  }

}

@media (max-width: 337px) {
  .banner {
    height: 318px;
  }

  .banner__content {
    justify-content: center;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    clip-path: none;
  }

  .banner__title {
    max-width: 281px;
    font-size: 22px;
    font-weight: 700;
    line-height: 25.56px;
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

  .banner__background_photo img{
    display: none;
  }

  .banner__background_photo {
    display: none;
  }

  .banner__people {
    top: 100px;
    left: 25px;
  }

  .banner__people img {
    width: 336px;
    height: 230px;
  }
}
</style>