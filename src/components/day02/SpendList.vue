<template>
  <div id="app">
    <div class="tol box">
      <span class="title">总金额</span>
      <input
        type="number"
        v-model.trim.number="total"
        @change="cpu()"
        @keyup="cpu()"
        v-num
        ref="nem"
      />
      <br />
      <span class="txt">今天吃饭用了 {{ total }} 元</span>
    </div>
    <div class="join box">
      <span class="title">用餐参与人</span>
      <input
        type="text"
        ref="addPer"
        v-model.trim="person"
        placeholder="用餐人的名子"
      />
      <button @click="add()">添加人数</button>
      <span v-show="meals.length == 0 ? true : false">请添加用餐人</span>
    </div>

    <ul v-for="(value, index) in meals" :key="value.id">
      <li>
        第{{ index + 1 }}位: {{ value.name }}, 需要支付 {{ avg }} 元
        <button @click="del(value.id)">&times;</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      total: 0,
      person: "",
      meals: [],
      avg: "",
    };
  },
  methods: {
    //   添加用餐人数
    add() {
      //   let id = meals.length + 1;
      //   初始 id 为 null
      let id = null;
      //   如果 用餐人数 为 0 ，初始化 id 为 1
      if (this.meals.length == 0) {
        id = 1;
      } else {
        //   如果 用餐人数不为 0，将最后一个用餐人的 id+1 赋值给 id
        id = this.meals[this.meals.length - 1].id + 1;
      }
      //   添加到数组中
      this.meals.push({ id: id, name: this.person });
      //   console.log(this.meals);
      //   重新计算平均值
      this.cpu();
      //   console.log(this.$refs);
      //   添加用餐人员成功后，重新聚焦添加输入框
      this.$refs.addPer.focus();
      this.person = "";
    },
    // 根据用餐人员的id，对数组进行删除数据
    del(id) {
      this.meals = this.meals.filter((v) => v.id != id);
      this.cpu();
    },
    // 计算平均值
    cpu() {
      //   如果总金额值为负数，总金额赋值为 0
      //   console.log(this.total);
      if (this.total < 0) {
        this.total = 0;
      }
      if (this.total !== 0) {
        this.$refs.nem.value = this.total;
      }
      this.avg = parseFloat(this.total / this.meals.length).toFixed(2);
    },
  },
  //页面一加载，就让总金额输入框聚焦
  directives: {
    num: {
      inserted(el) {
        el.focus();
      },
    },
  },
};
</script>
<style lang="less" scoped>
* {
  box-sizing: border-box;
}
button {
  border: 0;
  //   outline: 0;
  font-size: 18px;
  cursor: pointer;
}

#app {
  width: 500px;
  margin: 10px auto;
  background: skyblue;
  display: flex;
  justify-content: end;
  align-content: start;
  flex-wrap: wrap;
  .box {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .txt {
      width: 100%;
      text-align: center;
    }
    button {
      height: 30px;
    }
    .title {
      width: 100px;
    }
    input {
      border: 0;
      flex: 1;
      //   outline: 0;
      height: 27px;
      width: 250px;
      padding-left: 10px;
      margin-right: 15px;
      font-size: 17px;
    }
  }

  .join {
    margin-top: 50px;
  }

  ul {
    li {
      margin-left: 80px;
      list-style: none;
      margin-bottom: 5px;
      button {
        margin-left: 15px;
      }
    }
  }
}
</style>