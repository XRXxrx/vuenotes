<template>
  <div class="index">
    <myheader @gettask="gettask"></myheader>
    <mylist :list="getlist"></mylist>
    <mybutton @getchange="getchange"></mybutton>
  </div>
</template>

<script>
import myheader from "./todo_header";
import mylist from "./todo_list";
import mybutton from "./todo_button";
export default {
  components: {
    myheader,
    mylist,
    mybutton,
  },
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
  methods: {
    gettask(data) {
      // console.log(data);
      if (this.tasklist.length === 0) {
        this.id = 1;
      } else {
        this.id = this.tasklist[this.tasklist.length - 1].id + 1;
      }
      this.tasklist.push({ id: this.id, task: data, state: false });
    },
    getchange(value) {
      this.current = value;
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