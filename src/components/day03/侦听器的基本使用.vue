<template>
  <div>
    <!-- <input type="text" v-model="username" /> -->
    <input type="text" v-model="user.userna" />
    <input type="number" v-model="user.age" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      user: {
        userna: "asdas",
        age: 34,
      },
    };
  },
  //添加侦听器
  watch: {
    //   侦听username的变化
    // username(news, old) {
    //   console.log(news, old);
    //   console.log("1223");
    // },
    // username: {
    //   //侦听器
    //   handler() {
    //     console.log("1223");
    //   },
    //   //如果为true,页面一加载就执行一次侦听器
    //   immediate: true,
    // },

    //侦听对象
    // user: {
    //   handler() {
    //     console.log("1223");
    //   },
    //   //侦听对象里属性值的变化
    //   deep: true,
    // },

    //侦听对象里单个属性的变化
    "user.userna"() {
      console.log("1223");
    },
  },
};
</script>

<style>
</style>