<template>
  <div>
    账户:<input type="text" v-model="user.username" /><br />
    密码:<input type="text" v-model="user.password" /><br />
    <button @click="login">登陆</button>
  </div>
</template>

<script>
import myaxios from "../../../utils/require";
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
    // login() {
    //   myaxios
    //     .post("/login", this.user)
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
    async login(e) {
      try {
        let res = await myaxios.post("/login", this.user);
        console.log(res);
      } catch (err) {
        console.log("sdfsdfsdfsd");
      }
    },
  },
};
</script>

<style>
</style>