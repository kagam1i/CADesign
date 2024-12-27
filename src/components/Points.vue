<template>
  <div class="points">

    <swiper
        :space-between="0"
        :modules="[Pagination]"
        :navigation="false"
        :breakpoints="breakpoints"
        :pagination="{  el: '.custom-pagination',clickable: true }"
        class="points__swiper"
    >
        <swiper-slide v-for="(item, index) in points" :key="index">
            <div class="points__item">
              <img class="points__icon" :src="item.icon" :alt="item.title" />
              <p>{{ item.title }}</p>
              <p class="points__description">{{ item?.description }}</p>
            </div>
        </swiper-slide>
      <div class="custom-pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import {points} from '../data/data.js'


export default {
  methods: {Pagination},
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      points,
      breakpoints: {
        640: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },

        1040: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },

      },
    };
  },
};
</script>

<style lang="scss" scoped>


::v-deep(.swiper-wrapper) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;

  @media screen and (max-width: 1199px) {
    display: flex;

  }
}

.custom-pagination {
  display: none;

  @media screen and (max-width: 1200px) {
    position: relative;
    display: flex;
    justify-content: center;
  }
}

.points {
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;


  @media screen and (max-width: 1200px) {
    height: 500px;
    margin: 0 40px;
  }

  @media screen and (max-width: 784px) {

  }
}

.points__swiper {
  width: 100%;
  margin-top: 76px;
  max-width: 1180px;
  max-height: 755px;


}

.points__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 377px;
  width: 393px;
  max-width: 100%; /* Ограничьте ширину */
  background-color: #FFFFFF;
  border: 1px solid #EDEDED;
  line-height: 24.8px;
  font-size: 20px;
  font-weight: 400;

  @media screen and (max-width: 1200px){
    height: 344px;
    width: 344px;
  }

  //@media screen and (max-width: 1040px){
  //  height: 344px;
  //  width: 344px;
  //}
}

.points__icon {
  height: 62px;
  width: 66px;
  margin-bottom: 44px;

  @media screen and (max-width: 1200px){
    height: 92px;
    width: 57px;
  }

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
  box-shadow: 0 4px 52px 0 rgba(0, 0, 0, 0.1);
}

</style>