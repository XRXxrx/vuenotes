<template>
  <div class="myheader">
    <form>
      <div class="form-row align-items-center">
        <div class="col-auto">
          <div class="input-group mb-2 info">
            <div class="input-group-prepend">
              <div class="input-group-text">任务</div>
            </div>
            <input
              type="text"
              class="form-control"
              id="inlineFormInputGroup"
              placeholder="添加任务信息"
              v-model="task"
            />
          </div>
        </div>
        <div class="col-auto">
          <button
            type="submit"
            class="btn btn-primary mb-2"
            @click.prevent="btn"
          >
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
    btn() {
      if (this.task.length === 0) {
        return alert("值不能为空");
      }
      this.$emit("gettask", this.task);
      this.task = "";
    },
  },
};
</script>

<style lang="less" scoped>
.index {
  .info {
    width: 400px;
  }
}
</style>