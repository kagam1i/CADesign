<template>
  <div class="points">
    <div class="points__wrapper">
      <div class="points__item" v-for="(item, index) in points" :key="index">
        <img class="points__icon" :src="item.icon" :alt="item.title" />
        <p>{{ item.title }}</p>
        <p class="points__description">{{ item?.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {points} from '../Data/data.js'


export default {
  data() {
    return {
        points,
    };
  },
};
</script>

<style lang="scss" scoped>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 377px;
  width: 398.27px;
  background-color: #FFFFFF;
  border: 1px solid #EDEDED;
  line-height: 24.8px;
  font-size: 20px;
  font-weight: 400;
}

.points__icon {
  height: 62px;
  width: 66px;
  margin-bottom: 44px;
}

.points__description {
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: #646464;
  margin-top: 23px;
  max-width: 297px;
}

.points__wrapper > *:nth-child(4) {
  z-index: 2;
  transform: translate(1px, -1px);
  box-shadow: 0px 4px 52px 0px rgba(0, 0, 0, 0.1);
}

</style>