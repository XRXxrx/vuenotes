<template>
  <div>
    <myuser :list="tasklist">
      <template #thed>
        <th>编号</th>
        <th>信息</th>
        <th>状态</th>
      </template>
      <template #tbd="scope">
        <td>{{ scope.index + 1 }}</td>
        <td>{{ scope.data.task }}</td>
        <td>{{ scope.data.state ? "完成" : "未完成" }}</td>
      </template>
    </myuser>
  </div>
</template>

<script>
import myuser from "./myuser";
export default {
  components: {
    myuser,
  },
  data() {
    return {
      tasklist: [
        { id: 1, task: "周一早晨九点开会", level: "紧急", state: false },
        { id: 2, task: "周一晚上八点半聚餐", level: "还好", state: false },
        { id: 3, task: "准备周二上午演讲稿", level: "一般", state: true },
      ],
    };
  },
};
</script>

<style>
</style>