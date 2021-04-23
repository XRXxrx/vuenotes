<template>
  <div
    class="myheader"
    :style="{
      background: bgcolor,
      color: fontcolor,
      'font-size': fontsize,
    }"
  >
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      {{ title }}
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
import bus from "../../../utils/vuebus";
export default {
  props: {
    bgcolor: {
      type: [String],
      required: true,
      default: "#ccc",
    },
    fontcolor: {
      type: [String],
      required: true,
    },
    fontsize: {
      type: [String],
      required: true,
    },
  },
  data() {
    return {
      title: "商品列表",
    };
  },
  mounted() {
    bus.$on("getTxt", (data) => {
      //   console.log(data);
      this.title = data;
    });
  },
};
</script>

<style lang="less" scoped>
.myheader {
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 10px;
  .center {
    flex: 1;
    text-align: center;
  }
}
</style>