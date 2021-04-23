<template>
  <div id="app">
    <button @click="flag = !flag">点击</button>
    <transition
      enter-active-class="animate__animated animate__tada"
      leave-active-class="animate__animated animate__bounceOutRight"
    >
      <p class="move" v-show="flag">An animated element</p>
    </transition>
  </div>
</template>

<script>
import "animate.css";
export default {
  data() {
    return {
      flag: false,
    };
  },
};
</script>

<style lang="less" scoped>
#app {
  width: 300px;
  height: 300px;
  background-color: pink;
  overflow: hidden;
}
.move {
  width: 100px;
  background-color: skyblue;
}
</style>