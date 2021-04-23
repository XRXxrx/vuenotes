<template>
  <div>
    账户:<input type="text" v-model="user.username" /><br />
    密码:<input type="text" v-model="user.password" /><br />
    <button @click="login">登陆</button>
  </div>
</template>

<script>
import axios from "axios";
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
      axios
        .post("http://157.122.54.189:9083/login", this.user)
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