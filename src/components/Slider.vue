<template>
  <swiper
      :slides-per-view="1"
      ref="swiperRef"
      :pagination="{ clickable: true }"
      :navigation="false"
      @swiper="(instanse) => (swiperRef = instanse)"
      @slideChange="updateButtonState"
  >
    <swiper-slide v-for="slide in slides" :key="slide.id">
      <div class="slider">
        <div class="slider__content">
          <button
              class="left_arrow"
              :class="{ 'left_arrow_disabled': !canGoBack }"
              @click="goToPrevSlide"
              :disabled="!canGoBack"
          >
            <img :src="left_arrow" alt="left arrow" />
          </button>
          <div class="slider__content__text">
            <p>{{ slide.name }}</p>
            <p>{{ slide.specialization }}</p>
            <p>{{ slide.description }}</p>
          </div>
          <img :src="slide.image" :alt="slide.name" />
          <button
              class="right_arrow"
              :class="{ 'right_arrow_disabled': !canGoForward }"
              @click="goToNextSlide"
              :disabled="!canGoForward"
          >
            <img :src="right_arrow" alt="right arrow" />
          </button>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import left_arrow from '../assets/image/left_arrow.svg';
import right_arrow from '../assets/image/right_arrow.svg';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import {slides} from '../Data/data.js';
import {ref} from 'vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      left_arrow,
      right_arrow,
      slides,
    };
  },
  setup() {
    const swiperRef = ref(null);
    const canGoBack = ref(false);
    const canGoForward = ref(true);

    const goToPrevSlide = () => {
      if (swiperRef.value) {
        swiperRef.value.slidePrev();
        updateButtonState()
      }
    };

    const goToNextSlide = () => {
      if (swiperRef.value) {
        swiperRef.value.slideNext();
        updateButtonState()
      }
    };

    const updateButtonState = () => {
      if (swiperRef.value) {
        canGoBack.value = swiperRef.value.activeIndex > 0;
        canGoForward.value = swiperRef.value.activeIndex < swiperRef.value.slides.length - 1;
      }
    };
    return {
      swiperRef,
      goToPrevSlide,
      goToNextSlide,
      updateButtonState,
      canGoBack,
      canGoForward
    }
  },
};
</script>
<style lang="scss" scoped>

.slider {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  margin-top: 70px;

  &__content {
    display: flex;
    align-items: center;
    background-color: #F7F7F7;
    width: 1480px;
    height: 446px;

    img {
      max-width: 541px;
      max-height: 425px;
    }

    &__text {
      margin-left: 58px;

      p:first-child {
        font-size: 36px;
        font-weight: 400;
        color: #242627;
        margin: 0;

      }

      p:nth-child(2) {
        font-size: 16px;
        font-weight: 400;
        color: #828282;
        margin: 20px 0 0 0;
      }

      p:nth-child(3) {
        font-size: 18px;
        font-weight: 400;
        color: #242627;
        margin: 40px 0 0 0
      }
    }
  }

  button {
    background-color: #FFFFFF;
    border: 1px solid #E0E0E0;
    cursor: pointer;
    padding: 42px 23px;
  }

  .right_arrow {
    margin-right: 40px;
  }
  .left_arrow {
    margin-left: 40px;
  }
  .right_arrow_disabled{
    background-color: #F7F7F7;
  }
  .left_arrow_disabled{
    background-color: #F7F7F7;
  }

}
</style>

