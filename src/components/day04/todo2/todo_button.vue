<template>
  <div class="todo_button">
    <div class="btn-group" role="group" aria-label="Basic example">
      <button
        type="button"
        class="btn"
        :class="state === '全部' ? 'btn-primary' : 'btn-secondary'"
        @click="change('全部')"
      >
        全部
      </button>
      <button
        type="button"
        class="btn"
        :class="state === '已完成' ? 'btn-primary' : 'btn-secondary'"
        @click="change('已完成')"
      >
        已完成
      </button>
      <button
        type="button"
        class="btn"
        :class="state === '未完成' ? 'btn-primary' : 'btn-secondary'"
        @click="change('未完成')"
      >
        未完成
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: "全部",
    };
  },
  methods: {
    change(value) {
      this.state = value;
      this.$emit("getBtn", value);
    },
  },
};
</script>

<style lang="less" scoped>
.todo_button {
  margin-top: 10px;
  width: 400px;
  text-align: center;
}
</style>