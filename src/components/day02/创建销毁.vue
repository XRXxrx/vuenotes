<template>
  <div>
    <button @click="flag = !flag">点击切换</button>
    <p v-if="flag">asdasdasdsadas</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true,
    };
  },
};
</script>

<style>
</style>