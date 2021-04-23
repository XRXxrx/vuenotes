<template>
  <div id="app">
    <h2>总金额</h2>

    <input type="number" v-model.number.trim="money" />
    <br />
    <span>今天吃饭用了{{ money }}元</span>

    <h2>用餐参与人</h2>

    <input type="text" v-model.trim="nam" ref="btn" />
    <button @click="add">添加</button><br />
    <span v-show="user.length == 0 ? true : false">添加用餐人</span>

    <ul>
      <li v-for="value in user" :key="value.id">
        第{{ value.id }}位: {{ value.name }},
        <span>需要支付 {{ (money / user.length).toFixed(2) }} 元</span>
        <button @click="del(value.id)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      money: "",
      id: "",
      nam: "",
      user: [],
    };
  },
  methods: {
    add() {
      if (this.user.length === 0) {
        this.id = 1;
      } else {
        this.id = this.user[this.user.length - 1].id + 1;
      }
      this.user.push({ id: this.id, name: this.nam });
      this.id++;
      this.nam = "";
      this.$refs.btn.focus();
    },
    del(id) {
      this.user = this.user.filter((v) => {
        return v.id !== id;
      });
    },
  },
};
</script>

<style lang="less" scoped>
#app {
  width: 400px;
  margin: 10px auto;
  background-color: skyblue;
  text-align: center;
  button {
    cursor: pointer;
  }
  li {
    list-style: none;
    button {
      margin-left: 10px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
}
</style>