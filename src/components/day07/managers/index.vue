<template>
  <div class="index">
    <div class="top">
      <myheader></myheader>
    </div>
    <div class="bottom">
      <div class="menu">
        <mymenu></mymenu>
      </div>
      <div class="center">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import myheader from "./myheader";
import mymenu from "./mymenu";
export default {
  components: {
    myheader,
    mymenu,
  },
};
</script>

<style lang="less" scoped>
.index {
  display: flex;
  flex-direction: column;
  .bottom {
    flex: 1;
    display: flex;
    .center {
      flex: 1;
    }
  }
}
</style>