<template>
  <swiper
    :slides-per-view="1"
    ref="swiperRef"
    :modules="[Pagination]"
    :pagination="{ el: '.custom-pagination', clickable: true }"
    :navigation="false"
    @swiper="(instance) => (swiperRef = instance)"
    @slideChange="updateButtonState"
  >
    <swiper-slide v-for="slide in slides" :key="slide.id">
      <div class="slider">
        <div class="slider__wrapper">
        <button
          class="slider__arrow slider__arrow--left"
          :class="{ 'slider__arrow--disabled': !canGoBack }"
          @click="goToPrevSlide"
          :disabled="!canGoBack"
        >
          <img :src="left_arrow" alt="left arrow" />
        </button>
        <div class="slider__content">
          <div class="slider__text">
            <p class="slider__text-name">{{ slide.name }}</p>
            <p class="slider__text-specialization">{{ slide.specialization }}</p>
            <p class="slider__text-description">{{ slide.description }}</p>
          </div>
          <img :src="slide.image" :alt="slide.name" />
        </div>
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
    <div class="custom-pagination"></div>
  </swiper>
</template>

<script>
import left_arrow from "../assets/image/left_arrow.svg";
import right_arrow from "../assets/image/right_arrow.svg";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from 'swiper/modules';
import "swiper/swiper-bundle.css";
import { slides } from "../data/data.js";
import { ref } from "vue";

export default {
  methods: {Pagination},
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

.custom-pagination {
  display: none;
  position: relative;
  @media screen and (max-width: 1040px) {
    display: flex;
    justify-content: center;
    margin-top: 34px;
    gap: 25px;
  }
}
.custom-pagination .swiper-pagination-bullet {
  width: 6px;
}

.slider {
  position: relative;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  margin: 70px 40px 0;

  @media screen and (max-width: 1040px){
    height: 760px;
  }

  @media screen and (max-width: 840px) {
    height: 780px;
    margin: 64px 40px 0;
  }

  @media screen and (max-width: 730px) {
    height: 800px;
  }

  @media screen and (max-width: 540px) {
    height: 740px;
    margin: 36px 20px 0;
  }




  &__wrapper {
    position: relative;
    display: grid;
    grid-template-columns: 0.5fr 7fr 0.5fr;
    align-items: center;
    background-color: #f7f7f7;
    width: 1480px;
    height: 446px;

    @media screen and (max-width: 1040px) {
      grid-template-columns: 1fr;
    }

    @media screen and (max-width: 670px) {
      grid-template-columns: 1fr;
    }
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: center;


    @media screen and (max-width: 1040px) {
      position: relative;
      flex-direction: column-reverse;
    }
  }

  &__text {
    margin-left: 58px;
    line-height: 28px;
    width: 100%;

    @media screen and (max-width: 1040px) {
      margin: 0;
      position: absolute;
      text-align: center;
      bottom: -260px;
    }

    @media screen and (max-width: 840px) {
      bottom: -280px;
    }

    @media screen and (max-width: 730px) {
      bottom: -300px;
    }

    @media screen and (max-width: 650px) {
      bottom: -320px;
    }

    @media screen and (max-width: 540px) {
      bottom: -240px;
    }

    @media screen and (max-width: 460px) {
      bottom: -260px;
    }

    &-name {
      font-size: 36px;
      font-weight: 400;
      color: #242627;
      margin: 0;

      @media screen and (max-width: 730px) {
        font-size: 28px;
      }

      @media screen and (max-width: 540px) {
        font-size: 20px;
      }
    }

    &-specialization {
      line-height: 28px;
      font-size: 16px;
      font-weight: 400;
      color: #828282;
      margin: 20px 0 0 0;

      @media screen and (max-width: 540px) {
        font-size: 13px;
        margin: 5px 0 0 0;
      }
    }

    &-description {
      font-size: 18px;
      font-weight: 400;
      color: #242627;
      margin: 40px 0 0 0;

      @media screen and (max-width: 730px) {
        margin: 35px 0 0 0;
      }

      @media screen and (max-width: 540px) {
        font-size: 13px;
        margin: 15px 0 0 0;
      }
    }
  }

  &__arrow {
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    max-height: 94px;
    cursor: pointer;
    padding: 42px 23px;

    @media screen and (max-width: 1040px) {
      display: none;
    }

    @media screen and (max-width: 670px) {
      display: none;
    }

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
