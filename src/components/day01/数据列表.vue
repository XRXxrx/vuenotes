<template>
  <div id="app">
    <div class="add">
      品牌名称:<input type="text" v-model="bname" ref="bnm" /> 添加日期:<input
        type="datetime-local"
        v-model="date"
      />
      <input type="button" value="添加" @click="add" />
    </div>
    <div class="add">
      品牌名称:<input type="text" placeholder="请输入搜索条件" />
    </div>
    <div>
      <table class="tb">
        <tbody>
          <tr>
            <th>编号</th>
            <th>品牌名称</th>
            <th>创立时间</th>
            <th>操作</th>
          </tr>
          <tr v-for="value in brandList" :key="value.id">
            <td>{{ value.id }}</td>
            <td>{{ value.bname }}</td>
            <td>{{ value.date }}</td>
            <td>
              <a href="#" @click.prevent="del(value.id)">删除</a>
            </td>
          </tr>
          <tr v-show="(flag = brandList.length == 0 ? true : false)">
            <td colspan="4">没有数据了，请先添加数据</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brandList: [
        { id: 1, bname: "QQ", date: "2021-4-7" },
        { id: 2, bname: "Weibo", date: "2021-4-8" },
      ],
      bname: "",
      date: "",
      id: 3,
    };
  },
  methods: {
    add() {
      this.brandList.push({
        id: this.id,
        bname: this.bname,
        date: this.date,
      });
      this.id++;
      this.bname = "";
      this.date = "";
    },
    del(id) {
      this.brandList = this.brandList.filter((v) => {
        return v.id !== id;
      });
    },
  },
  // 生命周期，钩子函数,相当于window.onload,缺点：不方便重复调用
  mounted() {
    this.$refs.bnm.focus();
  },
};
</script>

<style lang="less" scoped>
#app {
  width: 600px;
  margin: 10px auto;

  .add {
    padding: 5px;
    border: 1px solid black;
    margin-bottom: 10px;
  }
  .tb {
    border-collapse: collapse;
    width: 100%;

    th {
      background-color: #0094ff;
      color: white;
    }

    td,
    th {
      padding: 5px;
      border: 1px solid black;
      text-align: center;
    }
  }
}
</style>