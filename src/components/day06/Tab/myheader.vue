<template>
  <div class="header" :style="{ background: bgcolor, color: fontcolor }">
    <div class="left">
      <slot name="left">aa</slot>
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
      default: "red",
    },
    fontcolor: {
      type: [String],
      default: "#fff",
    },
  },
  data() {
    return {
      title: "信息列表",
    };
  },
  mounted() {
    bus.$on("changeTit", (data) => {
      this.title = data;
    });
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 50px;
  font-size: 20px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ccc;
  .center {
    flex: 1;
    text-align: center;
  }
}
</style>