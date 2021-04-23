<template>
  <div id="login">
    <div class="upd">账户名:<input type="text" /><br /></div>
    <div class="upd">
      密&nbsp;&nbsp;&nbsp;&nbsp;码：<input type="password" />
    </div>
    <mybtn :txt="text" :type="type" @getbtn="logn"></mybtn>
  </div>
</template>

<script>
import mybtn from "./mybutton";
export default {
  data() {
    return {
      text: "登录",
      type: "success",
    };
  },
  components: {
    mybtn,
  },
  methods: {
    logn() {
      console.log("登录成功");
    },
  },
};
</script>

<style lang="less" scoped>
#login {
  margin: 10px auto;
  text-align: center;
  .upd {
    font-size: 30px;
    margin-bottom: 20px;
    input {
      border: 1px solid #000;
      width: 300px;
      height: 30px;
      margin-left: 20px;
      outline: none;
    }
  }
}
</style>