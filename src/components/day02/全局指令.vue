<template>
  <div id="app">
    <div class="add">
      品牌名称:<input type="text" v-model="bname" v-myfocus v-mycolor="'red'" />
      添加日期:<input type="datetime-local" v-model="date" />
      <input type="button" value="添加" @click="add" />
    </div>
    <div class="add">
      品牌名称:<input
        type="text"
        placeholder="请输入搜索条件"
        v-mycolor="'blue'"
        v-model.trim="sea"
      />
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
          <tr v-for="value in search" :key="value.id">
            <td>{{ value.id }}</td>
            <td>{{ value.bname }}</td>
            <td>{{ value.date | dataForm("-") }}</td>
            <td>
              <a href="#" @click.prevent="del(value.id)">删除</a>
            </td>
          </tr>
          <tr v-show="(flag = search.length == 0 ? true : false)">
            <td colspan="4">没有数据了，请先添加数据</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// 引入全局指令
// import "../../utils/mydirective.js";
//引入全局指令,使用解构
import { myfocus, mycolor } from "../../utils/mydirective";
//引入全局过滤器
// import "../../utils/myfilters";
import { dataForm } from "../../utils/myfilters";
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
      sea: "",
      temp: [],
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
  //添加局部指令，方便调用
  directives: {
    // mybname: {
    //   inserted(el) {
    //     el.focus();
    //   },
    // },
    myfocus,
    mycolor,
  },
  //添加过滤器
  // filters: {
  //   //默认有一个参数，该参数指数据源
  //   dataForm(param, sp) {
  //     //将param转化为日期类型
  //     param = new Date(param);
  //     let y = param.getFullYear();
  //     let m = param.getMonth() + 1;
  //     let d = param.getDate();
  //     return `${y}${sp}${(m = m >= 10 ? m : "0" + m)}${sp}${(d =
  //       d >= 10 ? d : "0" + d)}`;
  //   },
  // },
  // 添加并注册过滤器
  filters: {
    dataForm,
  },
  //定义计算属性
  computed: {
    search() {
      return this.brandList.filter((v) => {
        //任何字符串都包含空字符串，所以没输任何值的时候返回所有数据
        return v.bname.indexOf(this.sea.toUpperCase()) !== -1;
      });
    },
  },
  //添加侦听器
  // watch: {
  //   sea: {
  //     handler() {
  //       this.temp = this.brandList.filter((v) => {
  //         //任何字符串都包含空字符串，所以没输任何值的时候返回所有数据
  //         return v.bname.indexOf(this.sea.toUpperCase()) !== -1;
  //       });
  //     },
  //     immediate: true,
  //   },
  // },
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