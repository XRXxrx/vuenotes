<template>
  <div>
    <button @click="flag = !flag">点击切换</button>
    <!-- <div :class="{ menu: true, small: flag }"></div> -->
    <!-- <div class="menu" :class="{ small: flag }"></div> -->
    <!-- menu处不写引号表示一个变量 -->
    <div :class="['menu', { small: flag }]"></div>
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
.menu {
  width: 400px;
  height: 500px;
  background-color: blue;
}
.small {
  width: 200px;
  height: 200px;
  background-color: skyblue;
}
</style>