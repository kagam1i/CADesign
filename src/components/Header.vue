<template>
  <header class="header">
      <a href="#" @click="handleLogoClick">
        <img class="header__logo" :src="logo" alt="Логотип сайта CADesign" />
      </a>
      <nav
          class="header__navigation"
          :class="{ active: isNavigationActive, open: isBurgerActive }"
      >
        <ul class="header__list">
          <li
              v-for="(navItem, index) in navLink"
              :key="index"
              class="header__list-item"
              @click="handleItemClick(navItem)"
              :class="{ active: activeItem === navItem }"
          >
            {{ navItem }}
          </li>
        </ul>
        <div class="header__dropdown">
          <button class="header__socials-button" @click="toggleDropdown">
            Социальные сети
            <img class="header__arrow" :src="arrow" alt="arrow" />
          </button>
          <div v-if="isOpenTooltip" class="header__dropdown-wrapper">
            <ul class="header__dropdown-list">
              <li
                  v-for="(dropItem, index) in dropdownItems"
                  :key="index"
                  class="header__dropdown-item"
              >
                <a :href="dropItem.link" class="header__dropdown-item-link" @click="toggleDropdown">
                  <img :src="dropItem.icon" alt="">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
          class="header__burger"
          :class="{ active: isBurgerActive }"
          @click="toggleBurgerMenu"
      >
        <span></span>
      </div>
    <div v-if="isOpenBurger" class="overlay"></div>
  </header>
</template>

<script>
import logo from '../assets/image/Frame.svg';
import arrow from '../assets/image/arrow.svg';
import { navLink } from "../data/data.js";
import {dropdownItems} from '../data/data.js';

export default {
  data() {
    return {
      logo,
      arrow,
      navLink,
      dropdownItems,
      activeItem: null,
      isBurgerActive: false,
      isNavigationActive: false,
      isOpenTooltip: false,
      isOpenBurger: false
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
    },

    toggleBurgerMenu() {
      this.isBurgerActive = !this.isBurgerActive
      this.isNavigationActive = !this.isNavigationActive
      this.isOpenBurger = !this.isOpenBurger
      this.isOpenTooltip = true
    },

    toggleDropdown() {
      this.isOpenTooltip = !this.isOpenTooltip;
    },

    handleClickOutside(event) {
      const dropdown = this.$el
      console.log(dropdown);
      if (!dropdown.contains(event.target)) {
        this.isOpenTooltip = false
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'Nunito Sans';
  src: url('../assets/fonts/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #242627D6;
  opacity: 0.84;
  z-index: 20;
}

.header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
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

.header__socials-button:active .header__arrow {
  transform: rotate(-90deg);
  transition: transform 0.3s ease;
}


.header__arrow {
  height: 5px;
  width: 5px;
  margin-left: 6px;
}

.header__dropdown-wrapper {
  position: absolute;
  margin-top: 8px;
  width: 173px;
  height: 137px;
  padding: 19px;
  background-color: #FFFFFF;
}

.header__dropdown-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 135px;
  height: 99px;
  list-style-type: none;
  background: #fff;
  color: #187CD3;
}

.header__dropdown-item-link {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header__dropdown-item {
  border: 1px solid #E0E0E0;
}

.open {
  display: block !important;
}

.header__burger {
  display: none;
  position: relative;
  z-index: 30;
  align-items: center;
  justify-content: flex-end;
  width: 28px;
  height: 18px;
}

.header__burger span {
  height: 2px;
  width: 100%;
  transform: scale(1);
  background: #003264;
}

.header__burger::before,
.header__burger::after {
  content: '';
  position: absolute;
  height: 2px;
  width: 100%;
  background-color: #003264;
  transition: all 0.3s ease 0s;
}

.header__burger::before {
  top: 0;
}

.header__burger::after {
  bottom: 0;
}

.header__burger.active span {transform: scale(0)}

.header__burger.active::before{
  background-color: #FFFFFF;
  top:50%;
  transform: rotate(-45deg) translate(0, -50%);
}
.header__burger.active::after{
  background-color: #FFFFFF;
  bottom: 50%;
  transform: rotate(45deg) translate(0, 50%);
}


@media (max-width: 1250px) {
  .header__logo {
    margin-right: 60px;
  }
  .header__list {
    gap: 32px;
  }
}

@media (max-width: 1024px) {
  .header {
    padding: 0 40px;
    justify-content: space-between;
  }

  .header__burger {
    display: flex;
  }

  .header__socials-button {
    display: none;
  }
  .header__dropdown-wrapper {
    position: static;
    background: transparent;
    width: 100%;
    height: 35px;
  }

  .header__dropdown-wrapper {
    padding: 0;
    margin: 0 0 0 40px;
  }

  .header__dropdown-list {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    background: transparent;
    gap: 51px;
  }

  .header__dropdown-item {
    width: 48px;
    height: 35px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 14px 16px;
  }

  .header__dropdown-item:hover {
    border: 1px solid #E0E0E0;
    transition: border 0.3s ease;
  }


  .header__navigation {
    display: none;
    position: fixed;
    height: 472px;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 30;
    overflow-y: hidden;
    overflow-x: hidden;
    background-color: #242627;
  }

  .header__list{
    height: 256px;
    flex-direction: column;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.84px;
    color: #FFFFFF;
    gap: 0;
    row-gap: 39px;
    margin: 68px 0 60px 40px;
  }

  .header__navigation.open .header__list-item {
    border-bottom: none;
    transition: color 0.3s ease;
  }


  .header__navigation.open .header__list-item:hover {
    font-size: 16px;
    font-weight: 700;
    line-height: 18.59px;
    color: #E9862A;

  }

  .header__navigation.open .header__list-item.active {
    font-size: 16px;
    font-weight: 700;
    line-height: 18.59px;
    color: #E9862A;
  }
}

@media (max-width: 430px) {
  .header__dropdown-list{
    gap: 16px;
  }
}

</style>