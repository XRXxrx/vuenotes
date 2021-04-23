<template>
  <div>
    <p>{{ msg.split("").reverse().join("") }}</p>
    <p>{{ reverseString }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello",
    };
  },
  //定义计算属性
  computed: {
    reverseString() {
      return this.msg.split("").reverse().join("");
    },
  },
};
</script>

<style>
</style>