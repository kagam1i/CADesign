<template>
  <header class="header">
    <div class="header__wrapper">
      <a href="#" @click="handleLogoClick">
        <img class="header__logo" :src="logo" alt="Логотип сайта CADesign" />
      </a>
      <nav class="header__navigation">
        <ul>
          <li
              v-for="(item, index) in navLink"
              :key="index"
              @click="handleItemClick(item)"
              :class="{ active: activeItem === item }"
          >
            {{ item }}
          </li>
        </ul>
        <button>
          Социальные сети
          <img class="header__arrow" :src="arrow" alt="arrow" />
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
import logo from '../assets/image/Frame.svg';
import arrow from '../assets/image/arrow.svg';
import { navLink } from "../Data/data.js";

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
  font-family: 'Roboto';
  src: url('../assets/fonts/Roboto-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

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
  margin: 0 auto;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.header__wrapper {
  display: flex;
  align-items: center;
}

.header__logo {
  margin-right: 190px;
}

.header__navigation {
  display: flex;
  align-items: center;
  gap: 64px;
}

.header__navigation ul {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  list-style-type: none;
  padding: 0; /* Убираем отступы */
  margin: 0;
  gap: 64px;
}

.header__navigation li {
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;
}

.header__navigation li::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: #E9862A;
  transition: width 0.3s ease;
}

.header__navigation li.active::after {
  width: 100%;
}


.header__navigation button {
  font-family: 'Nunito Sans', sans-serif;
  background-color: white;
  border: none;
  color: #187CD3;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.header__navigation button:hover .header__arrow {
  transform: rotate(-90deg);
  transition: transform 0.3s ease;
}

.header__arrow {
  height: 5px;
  width: 5px;
  margin-left: 6px;
}
</style>