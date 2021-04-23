<template>
  <div class="mytable table-bordered table-striped">
    <table class="table">
      <thead>
        <tr>
          <slot name="thd"></slot>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, index) in arrList" :key="value.id">
          <slot name="tbd" :value="value" :index="index"></slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    arrList: {
      type: [Array],
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.table {
  text-align: center;
}
</style>