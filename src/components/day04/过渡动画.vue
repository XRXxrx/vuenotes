<template>
  <div>
    <button @click="flag = !flag">点击</button>
    <transition name="move">
      <p v-show="flag">fghfghfgg</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
    };
  },
};
</script>

<style lang="less" scoped>
.move-enter,
.move-leave-to {
  opacity: 0;
  font-size: 12px;
  margin-left: 300px;
}
.move-enter-active,
.move-leave-active {
  transition: all 3s;
}
.move-enter-to,
.move-leave {
  opacity: 1;
  margin-left: 0;
  font-size: 35px;
  background-color: skyblue;
}
</style>