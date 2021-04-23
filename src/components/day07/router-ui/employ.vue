<template>
  <div class="employ">{{ info }}</div>
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
    if (id === "1") {
      this.info = "广州校区信息";
    } else if (id === "2") {
      this.info = "上海校区信息";
    } else if (id === "3") {
      this.info = "深圳校区信息";
    }
  },
};
</script>

<style>
</style>