<template>
  <div id="index">
    <a href="#/home">home</a>
    <a href="#/moive">moive</a>
    <a href="#/about">about</a>
    <component :is="comNent"></component>
  </div>
</template>

<script>
import myhome from "./home";
import mymoive from "./moive";
import myabout from "./about";
export default {
  components: {
    myhome,
    mymoive,
    myabout,
  },
  data() {
    return {
      comNent: "myhome",
    };
  },
  mounted() {
    // console.log(location.hash);
    window.onhashchange = () => {
      if (location.hash === "#/home") {
        this.comNent = "myhome";
      } else if (location.hash === "#/moive") {
        this.comNent = "mymoive";
      } else if (location.hash === "#/about") {
        this.comNent = "myabout";
      }
    };
  },
};
</script>

<style lang="less" scoped>
#index {
  a {
    margin-right: 10px;
  }
}
</style>