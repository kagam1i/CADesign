<template>
  <div class="modal-overlay" v-if="show">
    <div class="modal-content">
      <h2>Отклик на вакансию</h2>
      <Form @submit="onSubmit" class="modal-form" :validation-schema="schema" v-slot="{ errors }">
        <div class="form-group">
          <div class="form-group-input">
          <Field class="input" name="job" type="text" id="job" autocomplete="off" required/>
            <label for="job" class="label-wrapper">
              <span class="label-text">Желаемая вакансия *</span>
            </label>
          </div>
          <ErrorMessage name="job">
            <span class="error">{{ errors.job }}</span>
          </ErrorMessage>
        </div>

        <div class="form-group">
          <div class="form-group-input">
            <Field class="input" name="name" type="text" id="name" autocomplete="off" required />
            <label for="name" class="label-wrapper">
              <span class="label-text">Фамилия, имя и отчество *</span>
            </label>
          </div>
          <ErrorMessage name="name">
            <span class="error">{{ errors.name }}</span>
          </ErrorMessage>
        </div>

        <div class="form-group">
          <div class="form-group-input">
            <Field class="input" name="phone" type="tel" id="phone"  autocomplete="off" required  />
            <label for="phone" class="label-wrapper">
              <span class="label-text">Мобильный телефон *</span>
            </label>
          </div>
          <ErrorMessage name="phone">
            <span class="error">{{ errors.phone }}</span>
          </ErrorMessage>
        </div>

        <div class="form-group">
          <div class="form-group-input">
            <Field class="input" name="email" type="email" id="email" autocomplete="off" required />
            <label for="email" class="label-wrapper">
              <span class="label-text">E-mail</span>
            </label>
          </div>
          <ErrorMessage name="email">
            <span class="error">{{ errors.email }}</span>
          </ErrorMessage>
        </div>

        <div class="form-group">
          <div class="form-group-input">
            <Field class="input" name="education" type="text" id="education" autocomplete="off" required />
            <label for="education" class="label-wrapper">
              <span class="label-text">Образование *</span>
            </label>
          </div>
          <ErrorMessage name="education">
            <span class="error">{{ errors.education }}</span>
          </ErrorMessage>
        </div>

        <div class="form-group">
          <div class="form-group-input">
            <Field class="input" name="address" type="text" id="address" autocomplete="off" required />
            <label for="address" class="label-wrapper">
              <span class="label-text">Адрес места жительства *</span>
            </label>
          </div>
          <ErrorMessage name="address">
            <span class="error">{{ errors.address }}</span>
          </ErrorMessage>
        </div>

        <div class="form-group">
          <div class="form-group-input">
            <Field
                class="input input-date"
                name="birthDate"
                type="text"
                id="birthDate"
                autocomplete="off"
                required
                onfocus="(this.type='date')"
                onblur="if(!this.value)this.type='text'"
            />
            <label for="birthDate" class="label-wrapper">
              <span class="label-text">Дата рождения</span>
            </label>
          </div>
        </div>

        <div class="form-group">
          <div class="form-group-input">
            <Field class="input input-date" name="birthDate" type="date" id="birthDate" autocomplete="off" required/>
            <label for="birthDate" class="label-wrapper">
              <span class="label-text">Дата рождения</span>
            </label>
          </div>
        </div>

        <div class="form-group">
          <div class="form-group-input">
            <Field class="input input-message" name="comment" as="textarea" id="comment" autocomplete="off" required />
            <label for="comment" class="label-wrapper">
              <span class="label-text">Комментарий</span>
            </label>
          </div>
        </div>

        <div class="form-group-checkbox">
          <div class="check-wrapper">
            <Field class="form-group-checkbox-input" name="agreement" type="checkbox" id="agreement"/>
            <label for="agreement">
              Я принимаю условия <a href="#">передачи информации</a>
            </label>
          </div>
          <ErrorMessage name="agreement">
            <span class="error">{{ errors.agreement }}</span>
          </ErrorMessage>
          <div class="check-wrapper">
            <Field class="form-group-checkbox-input" name="agreement" type="checkbox" id="agreement"/>
            <label for="agreement">
              Я принимаю условия <a href="#">передачи информации</a>
            </label>
          </div>
          <ErrorMessage name="agreement">
            <span class="error">{{ errors.agreement }}</span>
          </ErrorMessage>
          <button type="submit" class="submit-button">Отправить</button>
        </div>
      </Form>
    </div>
    <div class="modal-button">
      <button class="modal-close" @click="closeModal"><img :src="cross" alt=""></button>
    </div>
  </div>
</template>

<script>
import {Field, Form, ErrorMessage} from "vee-validate";
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
    // Определяем правила валидации
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
.modal-overlay {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  padding: 170px 0 45px;
  margin: 0 auto;
  padding: 170px 0 45px;
  background: #828282;
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 20;
  overflow-y: auto;
}


.modal-content {
  background: #FFFFFF;
  box-shadow: 0 28px 62px rgba(0, 0, 0, 0.07);
  height: 1420px;
  min-width: 1179px;
  padding: 104px 180px 65px;
}

.modal-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px 5px;
}

.modal-form .form-group:nth-child(3),
.modal-form .form-group:nth-child(7) {
  grid-column: span 1;
}

.modal-form .form-group:nth-child(4),
.modal-form .form-group:nth-child(8) {
  grid-column: span 1;
}

.modal-form .form-group:not(:nth-child(3)):not(:nth-child(4)):not(:nth-child(7)):not(:nth-child(8)) {
  grid-column: span 2;
}
.modal-form .form-group-checkbox {
  grid-column: span 2;
}

//.input {
//  width: 100%;
//  height: 70px;
//  box-sizing: border-box;
//  border: none;
//  background-color: #F2F2F2;
//  padding: 25px 18px 25px 28px;
//}


.input-message {
  height: 153px;

}

.modal-close {
  height: 70px;
  width: 70px;
  background: #E9862A;
  border: 1px solid #E9862A;
  cursor: pointer;
  z-index: 22;
}

h2 {
  font-size: 36px;
  font-weight: 700;
  line-height: 41.83px;
  text-align: left;
  margin-bottom: 57px;
}

.form-group {
  font-size: 16px;
  font-weight: 400;
  line-height: 19.84px;
  color: #828282;
}

.form-group-input {
  position: relative;
  color: #828282;
  height: 70px;
  width: 100%;
  overflow: hidden;

}

.form-group .input:focus {
  background-color: #FFFFFF;
}

.form-group-input .input {
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


.form-group-input .label-wrapper {
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

.form-group-input .label-wrapper::after {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  transform: translateX(-100%);
}

.form-group-input .label-text {
  font-size: 16px;
  font-weight: 400;
  line-height: 19.84px;
  color: #828282;
  transition: all 0.3s ease;
}

.form-group-input .input:focus + label.label-wrapper .label-text,
.form-group-input .input:valid + label.label-wrapper .label-text {
  font-size: 13px;
  font-weight: 400;
  line-height: 16.12px;
  color: #828282;
  transform: translateY(calc(-100% + 5px));
  padding-top: 10px;
}

.form-group-input .input:focus + label.label-wrapper::after,
.form-group-input .input:valid + label.label-wrapper::after {
  font-size: 13px;
  font-weight: 400;
  line-height: 16.12px;
  color: #828282;
  transform: translateX(0%);
}


button {
  width: 100%;
  box-sizing: border-box;

}

textarea {
  height: 80px;
}

.submit-button {
  background: #E9862A;
  background: #E9862A;
  color: white;
  border: none;
  width: 254px;
  height: 64px;
  width: 254px;
  height: 64px;
  padding: 10px;
  cursor: pointer;
  transition: background 0.3s;
}

.submit-button:disabled {
  background: #ccc;
  cursor: not-allowed;
}


.error {
  font-weight: 400;
  color: #BE1A1A;
  font-size: 11px;
}

.form-group-checkbox {
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  min-height: 140px;
  border: 1px solid #F2F2f2;
  padding: 58px 32px;
}

.check-wrapper {
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  min-height: 140px;
  border: 1px solid #F2F2f2;
  padding: 58px 32px;
}

.check-wrapper {
  display: flex;
  align-items: center;
  gap: 21.83px;
  gap: 21.83px;
}

.form-group-checkbox-input {
  width: 27.57px;
  height: 24px;
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

</style>