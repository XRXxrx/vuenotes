<template>
  <div
    class="btn"
    :class="{ success: type == 'success', danger: type == 'danger' }"
    @click="butn"
  >
    {{ txt }}
  </div>
</template>

<script>
export default {
  props: {
    txt: {
      type: [String],
      require: true,
    },
    type: {
      type: [String],
      require: true,
    },
  },
  methods: {
    butn(e) {
      this.$emit("getbtn", e);
    },
  },
};
</script>

<style lang="less" scoped>
.btn {
  width: 90%;
  margin: 0 auto;
  height: 50px;
  border-radius: 25px;
  text-align: center;
  line-height: 50px;
  background-color: #ccc;
  color: #000;
  font-size: 20px;
}
.success {
  background-color: rgb(29, 155, 29);
  color: #fff;
}
.danger {
  background-color: rgb(214, 85, 33);
  color: #fff;
}
</style>