<template>
  <div>
    <todo_input @getInfo="getInfo"></todo_input>
    <todo_list :list="getlist"></todo_list>
    <todo_button @getBtn="getBtn"></todo_button>
  </div>
</template>

<script>
import todo_input from "./todo_input";
import todo_list from "./todo_list";
import todo_button from "./todo_button";
export default {
  components: {
    todo_input,
    todo_list,
    todo_button,
  },
  data() {
    return {
      tasklist: [
        { id: 1, task: "周一早晨九点开会", state: false },
        { id: 2, task: "周一晚上八点半聚餐", state: false },
        { id: 3, task: "准备周二上午演讲稿", state: true },
      ],
      id: 4,
      current: "全部",
    };
  },
  methods: {
    getInfo(data) {
      console.log(data);
      this.tasklist.push({ id: this.id, task: data, state: false });
      this.id++;
    },
    getBtn(data) {
      this.current = data;
    },
  },
  computed: {
    getlist() {
      if (this.current === "已完成") {
        return this.tasklist.filter((v) => v.state);
      } else if (this.current === "未完成") {
        return this.tasklist.filter((v) => !v.state);
      } else {
        return this.tasklist;
      }
    },
  },
};
</script>

<style>
</style>