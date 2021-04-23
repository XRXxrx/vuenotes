<template>
  <div class="login">
    <h1>登陆页面</h1>
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      localStorage.setItem("mytoken", "ok");
      this.$router.push({ name: "index" });
    },
  },
};
</script>

<style>
</style>