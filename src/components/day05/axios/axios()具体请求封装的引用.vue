<template>
  <div>
    账户:<input type="text" v-model="user.username" /><br />
    密码:<input type="text" v-model="user.password" /><br />
    <button @click="login">登陆</button>
  </div>
</template>

<script>
import { userLogin } from "../../../apis/loginURL";
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      userLogin(this.user)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>