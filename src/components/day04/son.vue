<template>
  <div id="son">
    <h4>子组件</h4>
    <p>接收到父组件数据：{{ mymoney }}</p>
    <input type="text" v-model="name" @keyup="yourname" />
    <input type="text" v-model="nam" @keyup="ynm" />
  </div>
</template>

<script>
//引入中间实例,可用于连接任意组件，此处用于连接兄弟组件，便于传值
import bus from "../../utils/vuebus";
export default {
  data() {
    return {
      name: "",
      nam: "",
    };
  },
  props: {
    mymoney: {
      type: [Number, String],
      required: true,
      //   default: 0,
      validator(value) {
        if (value < 0 || value > 1000000) {
          return false;
        } else {
          return true;
        }
      },
    },
  },
  methods: {
    yourname() {
      this.$emit("getname", this.name);
    },
    ynm() {
      bus.$emit("gnm", this.nam);
    },
  },
};
</script>

<style lang="less" scoped>
#son {
  width: 300px;
  height: 200px;
  margin-bottom: 20px;
  background-color: rgb(0, 255, 221);
}
</style>