<template>
  <div>
    <p ref="myp">sfsdfdsfsd</p>
    <span ref="mys">sadadasdasd</span>
    <button @click="getDom">获取</button>
  </div>
</template>

<script>
export default {
  methods: {
    getDom() {
      this.$refs.myp.style.color = "blue";
      this.$refs.mys.style.color = "red";
    },
  },
};
</script>

<style>
</style>