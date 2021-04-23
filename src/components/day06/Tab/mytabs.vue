<template>
  <div id="tabs">
    <myheader bgcolor="orange">
      <template #left> 返回 </template>
    </myheader>
    <keep-alive><component :is="curt"></component></keep-alive>
    <myfooter :list="tablist" @changeCurt="changeCurt"></myfooter>
  </div>
</template>

<script>
import myheader from "./myheader";
import myfooter from "./myfooter";
import mysearch from "./mysearch";
import mylist from "./mylist";
import myinfo from "./myinfo";
export default {
  components: {
    myheader,
    myfooter,
    mysearch,
    mylist,
    myinfo,
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
      curt: "mylist",
    };
  },
  methods: {
    changeCurt(datas) {
      this.curt = datas;
    },
  },
};
</script>

<style>
</style>