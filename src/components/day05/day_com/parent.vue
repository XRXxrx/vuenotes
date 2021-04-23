<template>
  <div>
    <button @click="current = 'first'">first</button>
    <button @click="current = 'second'">second</button>
    <button @click="current = 'third'">third</button>
    <!-- keep-alive用于保持动态组件的状态 -->
    <keep-alive>
      <component :is="current"></component>
    </keep-alive>
  </div>
</template>

<script>
import first from "./first";
import second from "./second";
import third from "./third";
export default {
  components: {
    first,
    second,
    third,
  },
  data() {
    return {
      current: "first",
    };
  },
};
</script>

<style>
</style>