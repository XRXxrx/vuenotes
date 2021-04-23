<template>
  <div id="fat">
    <h1>父组件</h1>
    <p>接收到子组件的数据：{{ str }}</p>
    <input type="text" v-model="money" />
    <son :mymoney="money" @getname="getname"></son>
    <sister></sister>
  </div>
</template>

<script>
import son from "./son";
import sister from "./sister";
export default {
  data() {
    return {
      money: "",
      str: "",
    };
  },
  components: {
    son,
    sister,
  },
  methods: {
    getname(data) {
      //   console.log(data);
      this.str = data;
    },
  },
};
</script>

<style lang="less" scoped>
#fat {
  width: 300px;
  height: 680px;
  padding: 20px 0;
  background-color: pink;
}
</style>