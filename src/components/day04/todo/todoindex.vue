<template>
  <div id="todo">
    <todo-input @getTask="addTask"></todo-input>
    <todo-list :list="getList"></todo-list>
    <todo-button @filterList="filterList"></todo-button>
  </div>
</template>

<script>
import TodoInput from "./todo_input ";
import TodoList from "./todo_list ";
import TodoButton from "./todo_button ";
export default {
  data() {
    return {
      tasklist: [
        { id: 1, task: "周一早晨九点开会", state: false },
        { id: 2, task: "周一晚上八点半聚餐", state: false },
        { id: 3, task: "准备周二上午演讲稿", state: true },
      ],
      id: "",
      current: "全部",
    };
  },
  components: {
    TodoInput,
    TodoList,
    TodoButton,
  },
  methods: {
    addTask(data) {
      //   console.log(data);
      if (this.tasklist.length === 0) {
        this.id = 1;
      } else {
        this.id = this.tasklist[this.tasklist.length - 1].id + 1;
      }
      this.tasklist.push({ id: this.id, task: data, state: false });
    },
    filterList(data) {
      this.current = data;
      // console.log(this.current);
    },
  },
  //使用计算属性，直接从缓存中调用，不用每次加载过滤事件
  computed: {
    getList() {
      if (this.current === "已完成") {
        return this.tasklist.filter((v) => v.state);
        // console.log(this.tasklist.filter((v) => v.state));
      } else if (this.current === "未完成") {
        return this.tasklist.filter((v) => !v.state);
      } else {
        return this.tasklist;
      }
    },
  },
};
</script>

<style lang="less" scoped>
</style>