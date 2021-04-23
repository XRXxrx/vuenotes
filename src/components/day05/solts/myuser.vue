<template>
  <div>
    <table border="1" width="500">
      <thead>
        <tr>
          <!-- 具名插槽 -->
          <slot name="thed"></slot>
        </tr>
      </thead>
      <tbody>
        <!-- 作用域插槽 -->
        <tr v-for="(value, index) in list" :key="index">
          <slot name="tbd" :data="value" :index="index"></slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: [Array],
      require: true,
    },
  },
};
</script>

<style>
</style>