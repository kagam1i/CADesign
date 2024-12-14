<template>
  <header class="header">
      <a href="#" @click="handleLogoClick">
        <img class="header__logo" :src="logo" alt="Логотип сайта CADesign" />
      </a>
      <nav class="header__navigation">
        <ul class="header__list">
          <li
              v-for="(item, index) in navLink"
              :key="index"
              class="header__list-item"
              @click="handleItemClick(item)"
              :class="{ active: activeItem === item }"
          >
            {{ item }}
          </li>
        </ul>
        <button class="header__socials-button">
          Социальные сети
          <img class="header__arrow" :src="arrow" alt="arrow" />
        </button>
      </nav>
  </header>
</template>

<script>
import logo from '../assets/image/Frame.svg';
import arrow from '../assets/image/arrow.svg';
import { navLink } from "../data/data.js";

export default {
  data() {
    return {
      logo,
      arrow,
      navLink,
      activeItem: null,
    };
  },
  methods: {
    handleLogoClick() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    handleItemClick(item) {
      this.activeItem = item;
    }
  }
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'Nunito Sans';
  src: url('../assets/fonts/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: #FFFFFF;
  height: 98px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #F2F2F2;
  z-index: 10;
}


.header__logo {
  margin-right: 190px;
}

.header__navigation {
  display: flex;
  align-items: center;
  gap: 64px;
  height: 100%;
}

.header__list {
  font-weight: 400;
  font-size: 16px;
  line-height: 19.84px;
  display: flex;
  list-style-type: none;
  gap: 64px;
  height: 100%;
}

.header__list-item {
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: color 0.3s ease;
  height: 100%;
}

.header__list-item:hover {
  border-bottom: 1px solid #E9862A;
  transition: color 0.3s ease;
}


.header__socials-button {
  font-family: 'Nunito Sans', sans-serif;
  background-color: white;
  border: none;
  color: #187CD3;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.48px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.header__socials-button:hover .header__arrow {
  transform: rotate(-90deg);
  transition: transform 0.3s ease;
}

.header__arrow {
  height: 5px;
  width: 5px;
  margin-left: 6px;
}
</style>