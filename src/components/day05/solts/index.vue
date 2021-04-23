<template>
  <div>
    <!-- 具名插槽 -->
    <myheader>
      <template v-slot:left>
        <span>返回</span>
      </template>
      <template v-slot:main>
        <span>个人中心</span>
      </template>
      <template v-slot:right>
        <span>搜索</span>
      </template>
    </myheader>
  </div>
</template>

<script>
import myheader from "./myheader";
export default {
  components: {
    myheader,
  },
};
</script>

<style>
</style>