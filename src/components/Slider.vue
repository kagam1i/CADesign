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
          class="slider__arrow slider__arrow--left"
          :class="{ 'slider__arrow--disabled': !canGoBack }"
          @click="goToPrevSlide"
          :disabled="!canGoBack"
        >
          <img :src="left_arrow" alt="left arrow" />
        </button>
          <div class="slider__text">
            <p class="slider__text-name">{{ slide.name }}</p>
            <p class="slider__text-specialization">{{ slide.specialization }}</p>
            <p class="slider__text-description">{{ slide.description }}</p>
          </div>
          <img :src="slide.image" :alt="slide.name" />
          <button
              class="slider__arrow slider__arrow--right"
              :class="{ 'slider__arrow--disabled': !canGoForward }"
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
import left_arrow from "../assets/image/left_arrow.svg";
import right_arrow from "../assets/image/right_arrow.svg";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { slides } from "../Data/data.js";
import { ref } from "vue";

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
        updateButtonState();
      }
    };

    const goToNextSlide = () => {
      if (swiperRef.value) {
        swiperRef.value.slideNext();
        updateButtonState();
      }
    };

    const updateButtonState = () => {
      if (swiperRef.value) {
        canGoBack.value = swiperRef.value.activeIndex > 0;
        canGoForward.value =
          swiperRef.value.activeIndex < swiperRef.value.slides.length - 1;
      }
    };
    return {
      swiperRef,
      goToPrevSlide,
      goToNextSlide,
      updateButtonState,
      canGoBack,
      canGoForward,
    };
  },
};
</script>
<style lang="scss" scoped>

.slider {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  margin-top: 70px;

  &__content {
    position: relative;
    display: flex;
    align-items: center;
    background-color: #f7f7f7;
    width: 1480px;
    height: 446px;
  }


  &__text {
    margin-left: 58px;
    line-height: 28px;

    &-name {
      font-size: 36px;
      font-weight: 400;
      color: #242627;
      margin: 0;
    }

    &-specialization {
      line-height: 28px;
      font-size: 16px;
      font-weight: 400;
      color: #828282;
      margin: 20px 0 0 0;
    }

    &-description {
      font-size: 18px;
      font-weight: 400;
      color: #242627;
      margin: 40px 0 0 0;
    }
  }

  &__arrow {
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    cursor: pointer;
    padding: 42px 23px;

    &--left {
      margin-left: 40px;
    }

    &--right {
      margin-right: 40px;
    }

    &--disabled {
      background-color: #f7f7f7;
    }
  }

}
</style>
