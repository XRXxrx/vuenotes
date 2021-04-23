<template>
  <div class="userinfo">
    <h1>{{ id }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
    };
  },
  mounted() {
    // console.log(this.$route);
    //动态路由接受参数
    // this.id = this.$route.params.id;
    //命名路由接收参数
    // this.id = this.$route.query.id;
    // this.id = this.$route.params.id;
    this.id = this.$route.query.id;
  },
};
</script>

<style>
</style>