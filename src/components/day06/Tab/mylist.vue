<template>
  <div class="mylist">
    <mytable :info="getinfo">
      <template #thd>
        <th scope="col">#</th>
        <th scope="col">商品名称</th>
        <th scope="col">价格</th>
        <th scope="col">标签</th>
        <th scope="col">操作</th>
      </template>
      <template #tbd="{ value, index }">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ value.goods_name }}</td>
        <td>￥{{ value.goods_price }}</td>
        <td>
          <input
            type="text"
            class="iup"
            v-if="value.inputVisible"
            @blur="changeinpt(value, $event)"
            @keyup.13="changeinpt(value, $event)"
            v-myfocus
          />
          <button
            type="button"
            class="btn btn-primary btn-sm"
            v-else
            @click="value.inputVisible = !value.inputVisible"
          >
            +tag
          </button>
          <span class="badge badge-warning" v-for="v in value.tags" :key="v">{{
            v
          }}</span>
        </td>
        <td>
          <button type="button" class="btn btn-danger" @click="delt(value.id)">
            删除
          </button>
        </td>
      </template>
    </mytable>
  </div>
</template>

<script>
import { getList } from "../../../apis/tablist";
import mytable from "./mytable";
import { myfocus } from "../../../utils/mydirective";
export default {
  data() {
    return {
      getinfo: [],
    };
  },
  components: {
    mytable,
  },
  mounted() {
    getList()
      .then((res) => {
        console.log(res);
        if (res.data.message === "获取商品列表成功") {
          this.getinfo = res.data.data;
        }
        // console.log(this.getinfo);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    changeinpt(data, e) {
      //   data.inputVisible = !data.inputVisible;
      data.inputVisible = false;
      //利用事件对象e.target.value获取元素的值
      //   console.log(e.target.value);
      if (data.tags.indexOf(e.target.value) !== -1) {
        return;
      }
      data.tags.unshift(e.target.value);
      //   console.log(data.tags);
    },
    delt(id) {
      this.getinfo = this.getinfo.filter((v) => v.id !== id);
    },
  },
  directives: {
    myfocus,
  },
};
</script>

<style lang="less" scoped>
.mylist {
  .iup {
    width: 60px;
  }
  .badge {
    margin-left: 10px;
  }
}
</style>