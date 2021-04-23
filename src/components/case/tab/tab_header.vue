<template>
  <div
    class="myheader"
    :style="{ background: bgcolor, color: fontcolor, 'font-size': fontsize }"
  >
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center">{{ title }}</slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "商品列表",
    };
  },
  props: {
    bgcolor: {
      type: [String],
      default: "#ccc",
    },
    fontcolor: {
      type: [String],
      default: "#fff",
    },
    fontsize: {
      type: [String],
      default: "16px",
    },
  },
};
</script>

<style lang="less" scoped>
.myheader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 15px;
  .center {
    flex: 1;
    text-align: center;
  }
}
</style>