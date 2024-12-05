<template>
  <div class="footer">
    <div class="footer__wrapper">
      <h2>Отдел подбора персонала:</h2>
      <p class="phone_number">8 800 700 8000</p>
      <a href="/"> oco_rabota@mail.ru</a>
      <my-button class="custom_component">Стать частью команды</my-button>
      <div class="footer__contacts">
        <button class="btn"><img class="vk" :src="vk" alt=""></button>
        <button class="btn"><img class="ok" :src="ok" alt=""></button>
        <button class="btn"><img class="facebook" :src="facebook" alt=""></button>
        <button class="btn"><img class="instagram" :src="instagram" alt=""></button>
      </div>
    </div>
    <div class="footer__information">
      <p>© 1998–2019,«Компания», 53002, Иваново, Лежневская 34 корпус 1</p>
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


export default {
  components: {MyButton},
  data () {
    return {
      vk,
      ok,
      facebook,
      instagram,
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

.footer {
  font-family: 'Roboto', sans-serif;
  //display: flex;
  //justify-content: center;
  //align-items: center;
  width: 100%;
  margin-top: 72px;

}

.footer__wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #F7F7F7;
}


h2 {
  margin: 72px 0 0 0;
  font-size: 18px;
  font-weight: 400;
}

.phone_number {
  margin: 23px 0 0 0;
  font-size: 64px;
  font-weight: 400;
}

a {
  margin: 14px 0 0 0;
  font-size: 18px;
  font-weight: 400;
  text-decoration: none;
  color: #187CD3;
}

.footer__contacts {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 48px;
  margin-bottom: 72px;
}

.custom_component {
  margin: 48px 0 0 0;
}

.btn {
  width: 68px;
  height: 50px;
  background-color: #F7F7F7;
  border: 1px solid #E0E0E0;
  cursor: pointer;
  padding: 0;
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
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.footer__information p {
  font-size: 11px;
  font-weight: 400;
  color: #828282;
  margin: 40px 0 0 0;
}

.footer__information a {
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  color: #187CD3;
  margin: 17px 0 40px 0;
}

</style>