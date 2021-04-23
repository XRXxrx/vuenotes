<template>
  <div id="sis">
    <p>接收到的兄弟组件的数据：{{ brgf }}</p>
  </div>
</template>

<script>
import bus from "../../utils/vuebus";
export default {
  data() {
    return {
      brgf: "",
    };
  },
  //因为不知道兄弟组件什么时候发出事件，所以页面一加载就进行监听
  mounted() {
    //因为function会改变this指向,s所以用箭头函数
    bus.$on("gnm", (data) => {
      this.brgf = data;
    });
  },
};
</script>

<style lang="less" scoped>
#sis {
  width: 300px;
  height: 300px;
  background-color: skyblue;
}
</style>