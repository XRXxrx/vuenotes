<template>
  <div class="todo_list">
    <ul class="list-group">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
        v-for="value in list"
        :key="value.id"
      >
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            :id="value.id"
            v-model="value.state"
          />
          <label
            class="form-check-label"
            :for="value.id"
            :class="{ finished: value.state }"
          >
            {{ value.task }}
          </label>
        </div>
        <span
          class="badge badge-primary badge-pill"
          :class="{
            'badge-success': value.state,
            'badge-warning': !value.state,
          }"
          >{{ value.state ? "完成" : "未完成" }}</span
        >
      </li>
    </ul>
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

<style lang="less" scoped>
.todo_list {
  .list-group {
    width: 400px;
  }
  .finished {
    font-style: italic;
    text-decoration: line-through;
    color: #aaa;
  }
}
</style>