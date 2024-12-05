<template>
  <div class="points">
    <div class="points__wrapper">
      <div class="points__item" v-for="(item, index) in items" :key="index">
        <img class="icon" :src="item.icon" :alt="item.title" />
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import point1 from '../assets/image/point1.svg'
import point2 from '../assets/image/point2.svg'
import point3 from '../assets/image/point3.svg'
import point4 from '../assets/image/point4.svg'
import point5 from '../assets/image/point5.svg'
import point6 from '../assets/image/point6.svg'


export default {
  data() {
    return {
      items: [
        { title: "Развитие", icon: point1},
        { title: "Обучение", icon: point2},
        { title: "Ответственность", icon: point3},
        { title: "Динамика", icon: point4},
        { title: "Комфорт", icon: point5},
        { title: "Надежность", icon: point6},
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'Roboto';
  src: url('../assets/fonts/Roboto-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.points {
  display: flex;
  justify-content: center;
  align-content: center;

}

.points__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin-top: 76px;
  max-width: 1180px;
  max-height: 753px;
}

.points__item {
  display: flex;               /* Используем Flexbox */
  flex-direction: column;      /* Размещаем элементы в колонку */
  justify-content: center;     /* Центрируем по вертикали */
  align-items: center;         /* Центрируем по горизонтали */
  text-align: center;
  height: 377px;
  width: 398.27px;
  background-color: #FFFFFF;
  border: 1px solid #EDEDED;

}

p {
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 400;
}

.icon {
  height: 62px;
  width: 66px;
  margin-bottom: 44px;
}

</style>