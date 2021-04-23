<template>
  <div>
    <p>{{ msg }}</p>
    <p>{{ "就爱看啥叫看到" + msg }}</p>
    <p>{{ msg.toUpperCase() }}</p>
    <p>{{ msg.substr(0, 1).toUpperCase() + msg.substr(1).toLowerCase() }}</p>
    <p>{{ age > 10 ? "成年" : "未成年" }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "hello word",
      age: 23,
    };
  },
};
</script>
<style lang="less" scoped>
p {
  font-weight: 700;
  font-size: 25px;
  color: skyblue;
}
</style>