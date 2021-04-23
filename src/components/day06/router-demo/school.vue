<template>
  <div class="school">
    {{ info }}
    <p>{{ id }}</p>
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