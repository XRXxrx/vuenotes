<template>
  <div id="tabs">
    <myheader bgcolor="red" fontcolor="#fff" fontsize="20px">
      <template #left>返回</template>
    </myheader>
    <keep-alive>
      <component :is="comNent"></component>
    </keep-alive>
    <myfooter :list="tablist" @getName="getName"></myfooter>
  </div>
</template>

<script>
import myheader from "./myheader";
import mylist from "./mylist";
import mysearch from "./mysearch";
import myinfo from "./myinfo";
import myfooter from "./myfooter";
export default {
  components: {
    myheader,
    mylist,
    mysearch,
    myinfo,
    myfooter,
  },
  data() {
    return {
      tablist: [
        {
          icon: "icon-shangpinliebiao",
          text: "商品列表",
          name: "mylist",
        },
        {
          icon: "icon-sousuo",
          text: "商品搜索",
          name: "mysearch",
        },
        {
          icon: "icon-user",
          text: "我的信息",
          name: "myinfo",
        },
      ],
      comNent: "mylist",
    };
  },
  methods: {
    getName(data) {
      this.comNent = data;
    },
  },
};
</script>

<style>
</style>