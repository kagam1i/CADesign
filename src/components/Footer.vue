<template>
  <div class="footer">
    <div class="footer__wrapper">
      <h2 class="footer__title">Отдел подбора персонала:</h2>
      <p class="footer__phone">8 800 700 8000</p>
      <a class="footer__email" href="/"> oco_rabota@mail.ru</a>
      <my-button @click="openModal" class="footer__button" >Стать частью команды</my-button>
      <my-dialog :show="isModalVisible" @close="closeModal"/>
      <div class="footer__contacts">
        <button class="footer__social-button"><img class="footer__social-icon--vk" :src="vk" alt=""></button>
        <button class="footer__social-button"><img class="footer__social-icon--ok" :src="ok" alt=""></button>
        <button class="footer__social-button"><img class="footer__social-icon--facebook" :src="facebook" alt=""></button>
        <button class="footer__social-button"><img class="footer__social-icon--instagram" :src="instagram" alt=""></button>
      </div>
    </div>
    <div class="footer__information">
      <span class="footer__copyright">© 1998–2019,«Компания», 53002, Иваново, Лежневская 34 корпус 1</span>
      <a class="footer__policy" href="#">Политика обработки персональных данных</a>
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
      isModalVisible: false,
    };
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
.footer {
  font-family: 'Roboto', sans-serif;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f7f7f7;
  margin-top: 72px;

  &__wrapper {
    display: flex;
    margin: 72px 0;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    line-height: 22.32px;
    font-size: 18px;
    font-weight: 400;
  }

  &__phone {
    line-height: 74.94px;
    font-size: 64px;
    font-weight: 400;
    margin: 23px 0 14px 0;
  }

  &__email {
    line-height: 21px;
    font-size: 18px;
    font-weight: 400;
    text-decoration: none;
    color: #187cd3;
  }

  &__button {
    margin: 48px 0;
  }

  &__contacts {
    display: flex;
    justify-content: center;
    gap: 16px;
  }

  &__social{

    &-button {
      width: 68px;
      height: 50px;
      background-color: #f7f7f7;
      border: 1px solid #e0e0e0;
      cursor: pointer;
    }

    &-icon {
      &--vk {
        height: 10px;
        width: 20px;
        background: none;
      }

      &--ok {
        height: 17.6px;
        width: 11px;
        background: none;
      }

      &--instagram {
        height: 15px;
        width: 15px;
        background: none;
      }

      &--facebook {
        height: 16.75px;
        width: 9px;
        background: none;
      }
    }
  }

  &__information {
    width: 100%;
    background: #ffffff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
  }

    &__copyright {
      text-align: center;
      line-height: 16.31px;
      font-size: 11px;
      font-weight: 400;
      color: #828282;
      margin-bottom: 17px;
    }

    &__policy {
      line-height: 17.36px;
      text-decoration: none;
      font-size: 14px;
      font-weight: 400;
      color: #187cd3;
    }
}

@media (max-width: 1000px) {
  .footer {
    margin-top: 64px;
  }

  .footer__wrapper {
    margin: 64px 0;
  }

  .footer__phone {
    line-height: 69.44px;
    font-size: 56px;
    font-weight: 400;
    margin: 19px 0 22px 0;
  }

  .footer__button{
    font-size: 16px;
    font-weight: 700;
    line-height: 18.59px;
    height: 64px;
    width: 261px;
    padding: 23px 36px;
  }


  .footer__social-button{
    width: 48px;
    height: 35px;
  }
}

@media (max-width: 500px) {
  .footer {
    margin-top: 36px;
  }

  .footer__wrapper {
    margin: 36px 0;
  }

  .footer__title {
    line-height: 17.36px;
    font-size: 14px;
    font-weight: 400;
  }

  .footer__phone {
    line-height: 37.2px;
    font-size: 30px;
    font-weight: 400;
    margin: 15px 0;
  }

  .footer__email {
    line-height: 18.73px;
    font-size: 16px;
    font-weight: 400;
  }

  .footer__button{
    margin: 30px 0;
  }

  .footer__contacts {
    gap: 11px;
  }

  .footer__information{
    padding: 20px 0;
  }

  .footer__policy{
    line-height: 13.64px;
    font-size: 11px;
    font-weight: 400;
  }

  .footer__button{
    font-size: 14px;
    font-weight: 700;
    line-height: 16.27px;
    height: 56px;
    width: 223px;
    padding: 19px 29px;
  }
}

</style>