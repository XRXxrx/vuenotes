<template>
  <div class="mybutton">
    <div class="btn-group" role="group" aria-label="Basic example">
      <button
        type="button"
        class="btn"
        :class="state === '全部' ? 'btn-primary' : 'btn-secondary'"
        @click="changest('全部')"
      >
        全部
      </button>
      <button
        type="button"
        class="btn"
        :class="state === '已完成' ? 'btn-primary' : 'btn-secondary'"
        @click="changest('已完成')"
      >
        已完成
      </button>
      <button
        type="button"
        class="btn"
        :class="state === '未完成' ? 'btn-primary' : 'btn-secondary'"
        @click="changest('未完成')"
      >
        未完成
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: "全部",
    };
  },
  methods: {
    changest(data) {
      // console.log(data);
      this.state = data;
      this.$emit("getchange", data);
    },
  },
};
</script>

<style lang="less" scoped>
.mybutton {
  margin-top: 10px;
  width: 400px;
  .btn-group {
    margin-left: 140px;
  }
}
</style>