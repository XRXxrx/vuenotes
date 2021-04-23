<template>
  <div class="index">
    <myheader bgcolor="red" fontcolor="#fff" fontsize="20px">
      <template #left>返回</template>
    </myheader>
  </div>
</template>

<script>
import myheader from "./tab_header";
export default {
  components: {
    myheader,
  },
};
</script>

<style>
</style>