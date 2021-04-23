<template>
  <div class="todo_input">
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
              v-model.trim="txt"
            />
          </div>
        </div>
        <div class="col-auto">
          <button
            type="submit"
            class="btn btn-primary mb-2"
            @click.prevent="addInfo"
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
      txt: "",
    };
  },
  methods: {
    addInfo() {
      if (this.txt.length === 0) {
        return alert("值不能为空");
      }
      this.$emit("getInfo", this.txt);
      this.txt = "";
    },
  },
};
</script>

<style lang="less" scoped>
.todo_input {
  .info {
    width: 400px;
  }
}
</style>