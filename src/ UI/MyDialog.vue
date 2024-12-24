<template>
  <div class="modal__overlay" v-if="show">
    <div class="modal__content">
      <h2 class="modal__title">Отклик на вакансию</h2>
      <Form @submit="onSubmit" class="modal__form" :validation-schema="schema" v-slot="{ errors }">
        <div class="form__group">
          <div class="form__input-wrapper">
          <Field class="form__input" name="job" type="text" id="job" autocomplete="off" required/>
            <label for="job" class="form__label-wrapper">
              <span class="form__label-text">Желаемая вакансия *</span>
            </label>
          </div>
          <ErrorMessage name="job">
            <span class="form__error">{{ errors.job }}</span>
          </ErrorMessage>
        </div>

        <div class="form__group">
          <div class="form__input-wrapper">
            <Field class="form__input" name="name" type="text" id="name" autocomplete="off" required />
            <label for="name" class="form__label-wrapper">
              <span class="form__label-text">Фамилия, имя и отчество *</span>
            </label>
          </div>
          <ErrorMessage name="name">
            <span class="form__error">{{ errors.name }}</span>
          </ErrorMessage>
        </div>

        <div class="form__group">
          <div class="form__input-wrapper">
            <Field class="form__input" name="phone" type="tel" id="phone"  autocomplete="off" required  />
            <label for="phone" class="form__label-wrapper">
              <span class="form__label-text">Мобильный телефон *</span>
            </label>
          </div>
          <ErrorMessage name="phone">
            <span class="form__error">{{ errors.phone }}</span>
          </ErrorMessage>
        </div>

        <div class="form__group">
          <div class="form__input-wrapper">
            <Field class="form__input" name="email" type="email" id="email" autocomplete="off" required />
            <label for="email" class="form__label-wrapper">
              <span class="form__label-text">E-mail</span>
            </label>
          </div>
          <ErrorMessage name="email">
            <span class="form__error">{{ errors.email }}</span>
          </ErrorMessage>
        </div>

        <div class="form__group">
          <div class="form__input-wrapper">
            <Field class="form__input" name="education" type="text" id="education" autocomplete="off" required />
            <label for="education" class="form__label-wrapper">
              <span class="form__label-text">Образование *</span>
            </label>
          </div>
          <ErrorMessage name="education">
            <span class="form__error">{{ errors.education }}</span>
          </ErrorMessage>
        </div>

        <div class="form__group">
          <div class="form__input-wrapper">
            <Field class="form__input" name="address" type="text" id="address" autocomplete="off" required />
            <label for="address" class="form__label-wrapper">
              <span class="form__label-text">Адрес места жительства *</span>
            </label>
          </div>
          <ErrorMessage name="address">
            <span class="form__error">{{ errors.address }}</span>
          </ErrorMessage>
        </div>

        <div class="form__group">
          <div class="form__input-wrapper">
            <Field
                class="form__input"
                name="birthDate"
                type="text"
                id="birthDate"
                autocomplete="off"
                required
                onfocus="(this.type='date')"
                onblur="if(!this.value)this.type='text'"
            />
            <label for="birthDate" class="form__label-wrapper">
              <span class="form__label-text">Дата рождения</span>
            </label>
          </div>
        </div>

        <div class="form__group">
          <div class="form__resume-wrapper">
            <Field class="form__input form__resume-input" name="resume" type="file" id="resume" accept=".pdf,.doc,.docx" required/>
            <label for="resume" class="form__resume-label">
              <span class="label-resume">Загрузить резюме</span>
            </label>
          </div>
        </div>

        <div class="form__group">
          <div class="form__input-wrapper">
            <Field class="form__input" name="comment" as="textarea" id="comment" autocomplete="off" required />
            <label for="comment" class="form__label-wrapper">
              <span class="form__label-text">Комментарий</span>
            </label>
          </div>
        </div>

        <div class="form__group-checkbox">
          <div class="form__check-wrapper">
            <Field class="form__checkbox" name="agreement" type="checkbox" id="agreement"/>
            <label class="form__checkbox-agreement" for="agreement">
              Я принимаю условия <a href="#">передачи информации</a>
            </label>
          </div>
          <ErrorMessage name="agreement">
            <span class="form__error">{{ errors.agreement }}</span>
          </ErrorMessage>
          <button type="submit" class="form__submit-button">Отправить</button>
        </div>
      </Form>
    </div>
    <div class="modal__button">
      <button class="modal__close" @click="closeModal"><img :src="cross" alt=""></button>
    </div>
  </div>
</template>

<script>
import {Field, Form, ErrorMessage} from "vee-validate";
import * as yup from "yup";
import cross from '../../src/assets/image/cross.svg'

export default {
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    return {
      cross,
    }
  },

  props: {
    show : {
      type: Boolean,
      default: false
    }
  },
  emits: ["close"],
  setup( _ , { emit }) {
    const closeModal = () => emit("close");


    const schema = yup.object({
      job: yup.string().required("Желаемая вакансия обязательна"),
      name: yup.string().required("Введите фамилию, имя и отчество через пробел"),
      phone: yup.string().required("Телефон обязателен"),
      email: yup.string().email("Некорректный email").optional(),
      education: yup.string().required("Образование обязательно"),
      address: yup.string().required("Адрес обязателен"),
      agreement:
          yup
              .boolean()
              .transform((value) => value === true)
              .oneOf([""], "Вы должны принять условия"),
    });

    const onSubmit = (values) => {
      console.log("Form submitted:", values);
      alert("Форма успешно отправлена!");
      emit("close");
    };
    return {
      closeModal,
      onSubmit,
      schema,
    }
  }


}
</script>

<style lang="scss" scoped>
.modal__overlay {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  padding: 170px 0 45px;
  background: #828282;
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 20;
  overflow-y: auto;
}

.modal__content {
  background: #FFFFFF;
  box-shadow: 0 28px 62px rgba(0, 0, 0, 0.07);
  height: 1420px;
  //min-width: 1179px;
  width: 1179px;

  padding: 104px 180px 65px;
}

.modal__form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px 5px;
}

.modal__form .form__group:nth-child(3),
.modal__form .form__group:nth-child(7) {
  grid-column: span 1;
}

.modal__form .form__group:nth-child(4),
.modal__form .form__group:nth-child(8) {
  grid-column: span 1;
}

.modal__form .form__group:not(:nth-child(3)):not(:nth-child(4)):not(:nth-child(7)):not(:nth-child(8)) {
  grid-column: span 2;
}
.modal__form .form__group-checkbox {
  grid-column: span 2;
}


.modal__close {
  height: 70px;
  width: 70px;
  background: #E9862A;
  border: 1px solid #E9862A;
  cursor: pointer;
  z-index: 22;
}

.modal__title{
  font-size: 36px;
  font-weight: 700;
  line-height: 41.83px;
  text-align: left;
  margin-bottom: 57px;
}

.form__group {
  font-size: 16px;
  font-weight: 400;
  line-height: 19.84px;
  color: #828282;
}

.form__input-wrapper {
  position: relative;
  color: #828282;
  height: 70px;
  width: 100%;
  overflow: hidden;

}

.form__group .form__input:focus {
  background-color: #FFFFFF;
}

.form__input-wrapper .form__input {
  position: absolute;
  height: 100%;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.84px;
  color: #242627;
  outline: none;
  background-color: #F2F2F2;
  padding: 35px 18px 25px 28px;
  border: 1px solid #E0E0E0;
  box-sizing: border-box;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  resize: none;
}


.form__input-wrapper .form__label-wrapper {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  padding-left: 28px;
  display: flex;
  align-items: center;
  justify-content: start;
  pointer-events: none;
}

.form__input-wrapper .form__label-wrapper::after {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  transform: translateX(-100%);
}

.form__input-wrapper .form__label-text {
  font-size: 16px;
  font-weight: 400;
  line-height: 19.84px;
  color: #828282;
  transition: all 0.3s ease;
}

.form__input-wrapper .form__input:focus + label.form__label-wrapper .form__label-text,
.form__input-wrapper .form__input:valid + label.form__label-wrapper .form__label-text {
  font-size: 13px;
  font-weight: 400;
  line-height: 16.12px;
  color: #828282;
  transform: translateY(calc(-100% + 5px));
  padding-top: 10px;
}

.form__input-wrapper .form__input:focus + label.form__label-wrapper::after,
.form__input-wrapper .form__input:valid + label.form__label-wrapper::after {
  font-size: 13px;
  font-weight: 400;
  line-height: 16.12px;
  color: #828282;
  transform: translateX(0%);
}

.form__resume-wrapper {
  position: relative;
  border-bottom: 1px solid #242627;
}

.form__resume-input {
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  cursor: pointer;
}

.form__resume-label {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 69px;
  background-color: #FFFFFF;
  cursor: pointer;
  color: #187CD3;
  font-size: 15px;
  font-weight: 400;
  line-height: 18.6px;
}

.form__submit-button {
  background: #E9862A;
  color: white;
  font-size: 16px;
  font-weight: 700;
  line-height: 18.59px;
  border: none;
  width: 254px;
  height: 64px;
  padding: 10px;
  cursor: pointer;
  transition: background 0.3s;
}

.form__submit-button:disabled {
  background: #ccc;
  cursor: not-allowed;
}


.form__error {
  font-weight: 400;
  color: #BE1A1A;
  font-size: 11px;
}

.form__group-checkbox {
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  min-height: 140px;
  border: 1px solid #F2F2f2;
  padding: 58px 32px;
}

.form__check-wrapper {
  display: flex;
  align-items: center;
  gap: 21.83px;
}

.form__checkbox {
  width: 27.57px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 8px;
  margin: 0;
  cursor: pointer;
  background-color: #E9862A;
}

@media (max-width: 1150px) {
  .modal__overlay{
    padding: 107px 0 84px;
    background: #4F4F4F;
  }

  .modal__content{
    position: relative;
    width: 768px;
    padding: 128px 40px 77px;
  }

  .modal__button{
    position: absolute;
    top: 144px;
    right: 200px;
  }

  .modal__close{
    height: 64px;
    width: 64px;
  }

  .modal__title{
    font-size: 32px;
    font-weight: 700;
    line-height: 37.18px;
    margin-bottom: 53px;
  }

  .form__group-checkbox {
    padding: 38px 32px;
  }

  .form__check-wrapper {
    gap: 18.36px;
  }

  .form__submit-button {
    width: 203px;
  }

}

@media (max-width: 650px) {

  .modal__overlay{
    padding: 0 0 580px;
    background: #292929E8;
  }

  .modal__content{
    position: relative;
    width: 320px;
    padding: 80px 20px 42px;
  }

  .modal__button{
    position: absolute;
    top: 20px;
    right: 160px;
  }

  .modal__close{
    height: 36px;
    width: 36px;
  }

  .modal__title{
    font-size: 18px;
    font-weight: 700;
    line-height: 20.92px;
    margin-bottom: 38px;
  }

  .form__input-wrapper .form__label-text {
    font-size: 12px;
    font-weight: 400;
    line-height: 14.88px;
  }

  .form__input-wrapper .form__input:focus + label.form__label-wrapper .form__label-text,
  .form__input-wrapper .form__input:valid + label.form__label-wrapper .form__label-text {
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
  }

  .form__input-wrapper .form__input {
    font-size: 12px;
    font-weight: 400;
    line-height: 14.88px;
    padding: 25px 8px 15px 18px;
  }

  .form__input-wrapper{
    height: 50px;
  }

  .form__input-wrapper .form__label-wrapper{
    padding-left: 11px;
  }

  .form__error{
    font-size: 10px;
  }

  .modal__form {
    grid-template-columns: 1fr;
    gap: 20px;
  }


  .modal__form .form__group:not(:nth-child(3)):not(:nth-child(4)):not(:nth-child(7)):not(:nth-child(8)) {
    grid-column: span 1;
  }
  .modal__form .form__group-checkbox {
    grid-column: span 1;
  }

  .form__resume-label {
    height: 49px;
    font-size: 12px;
    font-weight: 400;
    line-height: 14.88px;
  }

  .form__group-checkbox {
    justify-content: center;
    border: none;
    padding: 7px 0;

  }

  .form__check-wrapper{
    gap: 11px;
  }

  .form__checkbox-agreement{
    font-weight: 400;
    font-size: 11px;
    line-height: 13.64px;
  }

  .form__submit-button {
    font-size: 14px;
    font-weight: 700;
    line-height: 16.27px;
    width: 280px;
    height: 56px;
  }

  .form__checkbox {
    width: 18px;
    height: 18px;
    align-items: center;
    justify-content: center;
  }
}

</style>

