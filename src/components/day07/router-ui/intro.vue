<template>
  <div class="intro">{{ info }}</div>
</template>

<script>
export default {
  data() {
    return {
      info: "",
    };
  },
  mounted() {
    let id = this.$route.params.id;
    // console.log(id);

    if (id === "1") {
      this.info = "广州校区分彩";
    } else if (id === "2") {
      this.info = "上海校区分彩";
    } else if (id === "3") {
      this.info = "深圳校区分彩";
    }
  },
};
</script>

<style>
</style>