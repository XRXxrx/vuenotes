<template>
  <div class="todo_list">
    <ul class="list-group">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
        v-for="value in list"
        :key="value.id"
      >
        <div class="form-check">
          <!-- 基本实现方式 -->
          <!-- <input
            class="form-check-input"
            type="checkbox"
            value=""
            :id="value.id"
            :checked="value.state"
            @click="value.state = !value.state"
          /> -->
          <!-- 高级实现方式，其实就是数据和元素值的双向影响，用v-model即可 -->
          <!-- 此处v-model做了：1.为复选框的checked属性赋值；2.获取复选框的checked属性，赋值给变量 -->
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
        <!-- <span
          class="badge badge-primary badge-pill"
          :class="value.state ? 'badge-success' : 'badge-warning'"
          >{{ value.state ? "完成" : "未完成" }}</span
        > -->
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
  margin-left: 50%;
  transform: translate(-50%);
  .list-group {
    width: 400px;
  }
  // .yellow {
  //   background-color: rgb(241, 241, 94);
  //   color: #000;
  // }
  // .green {
  //   background-color: rgb(14, 140, 14);
  //   color: #fff;
  // }
  .finished {
    font-style: italic;
    text-decoration: line-through;
    color: #aaa;
  }
}
</style>