<template>
  <div id="app">
    <!-- 添加超链接 -->
    <router-link to="/index">首页</router-link>
    <router-link to="/school/1">广州校区</router-link>
    <router-link to="/school/2">上海校区</router-link>
    <router-link to="/school/3">深圳校区</router-link>
    <router-link to="/login">登录</router-link>
    <div>
      <!-- 设置路由映射组件的展示区域 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less">
</style>
