<template>
  <div class="cotainer">
    <div class="header">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="main">
        <slot name="main"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
  height: 80px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 80px;
  background-color: #555;
  color: #fff;
}
</style>