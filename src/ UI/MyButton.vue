<template>
  <button class="my_button" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>

.my_button {
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  background: #E9862A;
  border-radius: 2px;
  color: #FFFFFF;
  border: none;
  padding: 23px 35px;
}

.my_button:hover {
  background: #E77E1E;
  transition: 0.3s;
}

</style>
