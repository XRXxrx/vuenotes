<template>
  <div>
    <button @click="flag = !flag">切换</button>
    <p v-show="flag"></p>
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
p {
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>