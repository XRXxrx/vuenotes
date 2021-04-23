<template>
  <div class="mytable">
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <slot name="thd"></slot>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, index) in info" :key="value.id">
          <slot name="tbd" :value="value" :index="index"></slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: [Array],
      require: true,
    },
  },
};
</script>

<style lang="less" scoped>
.table {
  text-align: center;
}
</style>