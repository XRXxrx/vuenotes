<template>
  <div class="tabscontainer">
    <div
      class="tabitem"
      v-for="(value, index) in list"
      :key="value.text"
      :class="{ activeStyle: index === current }"
      @click="change(value.name, value.text, index)"
    >
      <span :class="['iconfont', value.icon]"></span>
      <span>{{ value.text }}</span>
    </div>
  </div>
</template>

<script>
import bus from "../../../utils/vuebus";
export default {
  props: {
    list: {
      type: [Array],
      require: true,
      validator(value) {
        if (value.length < 2 || value.length > 5) {
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
    change(name, text, inde) {
      this.current = inde;
      this.$emit("changeCurt", name);
      bus.$emit("changeTit", text);
    },
  },
};
</script>

<style lang="less" scoped>
.tabscontainer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  border-top: 1px solid #efefef;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tabitem {
    display: flex;
    cursor: pointer;
    flex-direction: column;
    align-items: center;
  }
  // 激活项的样式
  .activeStyle {
    color: #1d7bff;
  }
}
</style>