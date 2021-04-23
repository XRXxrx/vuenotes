<template>
  <div>
    <input type="text" v-myfocus v-mycolor="'blue'" />
  </div>
</template>

<script>
//引入封装指令，并用解构获取想要的指令，但目前指令未注册还不知道它是个指令
import { myfocus, mycolor } from "../../utils/mydirective";
export default {
  directives: {
    //注册指令
    myfocus,
    mycolor,
  },
};
</script>

<style>
</style>