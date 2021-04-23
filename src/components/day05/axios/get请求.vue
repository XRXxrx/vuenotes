<template>
  <div>
    <input type="text" v-model="txt" /><br />
    <button @click="getinfo">无参请求</button><br />
    <button @click="getsearch">拼接参数请求</button><br />
    <button @click="getsearchs">params传参请求</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      txt: "",
    };
  },
  methods: {
    getinfo() {
      axios
        .get("http://157.122.54.189:9083/post")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getsearch() {
      axios
        .get("http://157.122.54.189:9083/post_search?keyword=" + this.txt)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getsearchs() {
      axios
        .get("http://157.122.54.189:9083/post_search", {
          params: { keyword: this.txt },
        })
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