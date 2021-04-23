<template>
  <div class="todo_input">
    <form @submit.prevent>
      <div class="form-row align-items-center">
        <div class="col-auto">
          <div class="input-group mb-2 myinput">
            <div class="input-group-prepend">
              <div class="input-group-text">任务</div>
            </div>
            <input
              type="text"
              class="form-control"
              id="inlineFormInputGroup"
              placeholder="请填写任务信息"
              v-model.trim="task"
              @keyup.esc="task = ''"
            />
          </div>
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-2" @click="add">
            添加新任务
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: "",
    };
  },
  methods: {
    add() {
      if (this.task.length === 0) {
        return alert("值不能为空");
      }
      this.$emit("getTask", this.task);
      this.task = "";
    },
  },
};
</script>

<style lang="less" scoped>
.todo_input {
  margin-left: 50%;
  transform: translate(-50%);
  .myinput {
    width: 400px;
  }
}
</style>