<template>
  <div class="footer">
    <div class="footer__wrapper">
      <h2>Отдел подбора персонала:</h2>
      <p class="phone_number">8 800 700 8000</p>
      <a href="/"> oco_rabota@mail.ru</a>
      <my-button class="custom_component" @click="openModal">Стать частью команды</my-button>
<!--      <my-dialog v-if="isModalOpen" :isOpen="isModalOpen" @close="closeModal"/>-->
      <div class="footer__contacts">
        <button class="btn"><img class="vk" :src="vk" alt=""></button>
        <button class="btn"><img class="ok" :src="ok" alt=""></button>
        <button class="btn"><img class="facebook" :src="facebook" alt=""></button>
        <button class="btn"><img class="instagram" :src="instagram" alt=""></button>
      </div>
    </div>
    <div class="footer__information">
      <span>© 1998–2019,«Компания», 53002, Иваново, Лежневская 34 корпус 1</span>
      <a href="#">Политика обработки персональных данных</a>
    </div>
  </div>
</template>

<script>
import vk from '../assets/image/vk.svg'
import ok from '../assets/image/ok.svg'
import facebook from '../assets/image/facebook.svg'
import instagram from '../assets/image/instagram.svg'
import MyButton from "../ UI/MyButton.vue";
import MyDialog from "../ UI/MyDialog.vue";


export default {
  components: {MyDialog, MyButton},
  data () {
    return {
      vk,
      ok,
      facebook,
      instagram,
      // isModalOpen: false,
    };
  },
  // methods: {
  //   openModal() {
  //     console.log('openModal');
  //     this.isModalOpen = true;
  //   },
  //   closeModal() {
  //     console.log('closeModal');
  //     this.isModalOpen = false;
  //   },
  // },
};

</script>

<style lang="scss" scoped>

@font-face {
  font-family: 'Roboto';
  src: url('../assets/fonts/Roboto-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.footer {
  font-family: 'Roboto', sans-serif;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #F7F7F7;
  margin-top: 72px
}

.footer__wrapper {
  display: flex;
  margin: 72px 0;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

h2 {
  line-height: 22.32px;
  font-size: 18px;
  font-weight: 400;
}

.phone_number {
  line-height: 74.94px;
  font-size: 64px;
  font-weight: 400;
  margin: 23px 0 14px 0;
}

a {
  line-height: 21px;
  font-size: 18px;
  font-weight: 400;
  text-decoration: none;
  color: #187CD3;
}

.custom_component {
  margin: 48px 0;
}

.footer__contacts {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.btn {
  width: 68px;
  height: 50px;
  background-color: #F7F7F7;
  border: 1px solid #E0E0E0;
  cursor: pointer;
}

.vk {
  height: 10px;
  width: 20px;
  background: none;
}

.ok {
  height: 17.6px;
  width: 11px;
  background: none;
}

.instagram {
  height: 15px;
  width: 15px;
  background: none;
}

.facebook {
  height: 16.75px;
  width: 9px;
  background: none;
}

.footer__information {
  width: 100%;
  background: #FFFFFF;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
}

.footer__information span {
  line-height: 16.31px;
  font-size: 11px;
  font-weight: 400;
  color: #828282;
  margin-bottom: 17px;
}

.footer__information a {
  line-height: 17.36px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  color: #187CD3;
}

</style>