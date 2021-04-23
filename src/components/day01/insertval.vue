<template>
  <h1>{{ msg }}</h1>
</template>
<script>
export default {
  data() {
    return {
      msg: "精神抖擞",
    };
  },
};
</script>
<style lang="less" scoped>
h1 {
  font-weight: 700;
  font-size: 23px;
  color: red;
}
</style>