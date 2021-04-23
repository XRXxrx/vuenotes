<template>
  <div class="school">
    {{ info }}
    <p>{{ id }}</p>
    <button @click="intro">分彩</button>
    <button @click="employ">信息</button>
    <button @click="back">回退</button>
    <div style="width: 100px; background: skyblue">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: "",
    };
  },
  props: ["id"],
  methods: {
    intro() {
      //嵌套路由
      // this.$router.push({ path: `/school/${this.id}/intro` });
      //命名路由
      // this.$router.push({ name: "intro" });
      //命名路由传参
      // 如果用name，传参可以用params，也可以用query
      this.$router.push({
        name: "intro",
        params: { username: "dsf", age: 23 },
      });
      // this.$router.push({
      //   name: "intro",
      //   query: { username: "dsf", age: 23 },
      // });
      // 如果用path，传参只能用query，params会被忽略
    },
    employ() {
      // this.$router.push({ name: "employ" });
      this.$router.push({
        path: `/school/${this.id}/employ`,
        query: { username: "dsf", age: 23 },
      });
    },
    back() {
      this.$router.go(-1);
      // this.$router.back();
    },
    jump(id) {
      if (id === "1") {
        this.info = "广州校区";
      } else if (id === "2") {
        this.info = "上海校区";
      } else if (id === "3") {
        this.info = "深圳校区";
      }
    },
  },
  mounted() {
    // console.log(this.$route);
    // console.log(this.$router);
    // console.log(typeof this.$route.params.id);
    let id = this.$route.params.id;
    this.jump(id);
    this.jump(this.id);
  },
  watch: {
    $route(to, from) {
      let id = to.params.id;
      this.jump(id);
      this.jump(this.id);
    },
  },
};
</script>

<style>
</style>