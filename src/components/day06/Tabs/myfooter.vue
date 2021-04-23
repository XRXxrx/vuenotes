<template>
  <div class="myfooter">
    <div
      class="tabitem"
      v-for="(value, index) in list"
      :key="value.text"
      :class="{ activeStyle: index === current }"
      @click="changefoot(value.text, value.name, index)"
    >
      <span class="iconfont" :class="value.icon"></span>
      <span>{{ value.text }}</span>
    </div>
    <!-- <div class="tabitem">
      <span class="iconfont icon-shangpinliebiao"></span>
      <span>商品列表</span>
    </div>
    <div class="tabitem">
      <span class="iconfont icon-shangpinliebiao"></span>
      <span>商品列表</span>
    </div> -->
  </div>
</template>

<script>
import bus from "../../../utils/vuebus";
export default {
  props: {
    list: {
      type: [Array],
      required: true,
      validator(val) {
        if (val.length < 2 || val.length > 5) {
          return false;
        } else {
          return true;
        }
      },
    },
  },
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    changefoot(txt, name, index) {
      this.current = index;
      this.$emit("getName", name);
      bus.$emit("getTxt", txt);
    },
  },
};
</script>

<style lang="less" scoped>
.myfooter {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #efefef;
  background-color: white;
  .tabitem {
    display: flex;
    cursor: pointer;
    flex-direction: column;
    align-items: center;
  }
  .activeStyle {
    color: #1d7bff;
  }
}
</style>