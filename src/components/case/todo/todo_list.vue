<template>
  <div class="mylist">
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
            :checked="value.state"
            :id="value.id"
            v-model="value.state"
          />
          <label
            class="form-check-label"
            :for="value.id"
            :class="{ fontstyle: value.state }"
          >
            {{ value.task }}
          </label>
        </div>
        <span
          class="badge badge-primary badge-pill"
          :class="value.state ? 'badge-success' : 'badge-warning'"
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
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.mylist {
  .list-group {
    width: 400px;
  }
  .fontstyle {
    font-style: italic;
    color: #ccc;
    text-decoration: line-through;
  }
}
</style>