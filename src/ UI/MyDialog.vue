<template>
  <div class="modal-overlay" v-if="show">
    <div class="modal-content">
      <h2>Отклик на вакансию</h2>
      <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
        <div class="form-group">
          <Field class="input" name="job" type="text" id="job" placeholder="Желаемая вакансия *" />
          <span class="error">{{ errors.job }}</span>
        </div>

        <div class="form-group">
          <Field class="input" name="name" type="text" id="name" placeholder="Фамилия, имя и отчество *" />
          <span class="error">{{ errors.name }}</span>
        </div>

        <div class="form-group form-group-two">
          <Field class="input" name="phone" type="tel" id="phone"  placeholder="Мобильный телефон *"  />
          <Field class="input" name="email" type="email" id="email" placeholder="E-mail" />
          <span class="error">{{ errors.phone }}</span>
          <span class="error">{{ errors.email }}</span>
        </div>

        <div class="form-group">
          <Field class="input" name="education" type="text" id="education" placeholder="Образование *" />
          <span class="error">{{ errors.education }}</span>
        </div>

        <div class="form-group">
          <Field class="input" name="address" type="text" id="address" placeholder="Адрес места жительства *" />
          <span class="error">{{ errors.address }}</span>
        </div>

        <div class="form-group">
          <Field class="input" name="birthDate" type="date" id="birthDate" placeholder="Дата рождения"/>
        </div>

        <div class="form-group">
          <Field class="input" name="comment" as="textarea" id="comment" placeholder="Комментарий" />
        </div>

        <div class="form-group-checkbox">
          <Field class="form-group-checkbox-input" name="agreement" type="checkbox" id="agreement" />
          <label for="agreement">
            Я принимаю условия <a href="#">передачи информации</a>
          </label>
          <span class="error">{{ errors.agreement }}</span>
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
import { Form} from "vee-validate";
import {Field} from "vee-validate";
import * as yup from "yup";
import cross from '../../src/assets/image/cross.svg'

export default {
  components: {
    Form,
    Field,
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
  setup(props, { emit }) {
    const closeModal = () => emit("close");

  // Определяем правила валидации
  const schema = yup.object({
    job: yup.string().required("Желаемая вакансия обязательна"),
    name: yup.string().required("Введите фамилию, имя и отчество через пробел"),
    phone: yup.string().required("Телефон обязателен"),
    email: yup.string().email("Некорректный email").optional(),
    education: yup.string().required("Образование обязательно"),
    address: yup.string().required("Адрес обязателен"),
    agreement: yup.boolean().oneOf([true], "Вы должны принять условия"),
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
  margin: auto;
  background: #828282;
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 20;
  }

.modal-content {
  background: #FFFFFF;
  box-shadow: 0 28px 62px rgba(0, 0, 0, 0.07);
  max-height: 1205px;
  min-width: 1179px;
  padding: 104px 180px 65px 180px;
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

.form-group-two {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  gap: 5px;
}

.input {
  background-color: #F2F2F2;
  border: none;


}

input,
textarea {
  width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 32px;
  margin-bottom: 32px;
  box-sizing: border-box;
}

button {
  width: 100%;
  box-sizing: border-box;

}

textarea {
  height: 80px;
}

.submit-button {
  background: orange;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
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
  display: flex;
  align-items: center;
  min-height: 140px;

}

.form-group-checkbox-input {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 27.57px;
  height: 24px;
  padding: 9px 8px;
  margin: 0;
  cursor: pointer;
  background-color: #E9862A;

}


</style>