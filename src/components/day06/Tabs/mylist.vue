<template>
  <div class="mylist">
    <mytable :arrList="arr">
      <template #thd>
        <th scope="col">#</th>
        <th scope="col">商品名称</th>
        <th scope="col">商品价格</th>
        <th scope="col">商品标签</th>
        <th scope="col">操作</th>
      </template>
      <template #tbd="{ value, index }">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ value.goods_name }}</td>
        <td>{{ value.goods_price }}</td>
        <td>
          <input
            type="text"
            class="ipt"
            v-if="value.inputVisible"
            @blur="changeinput(value, $event)"
            @keyup.13="changeinput(value, $event)"
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
          <button type="button" class="btn btn-danger" @click="del(value.id)">
            删除
          </button>
        </td>
      </template>
    </mytable>
  </div>
</template>

<script>
import { getList } from "../../../apis/tabslist";
import mytable from "./mytable";
import { myfocus } from "../../../utils/mydirective";
export default {
  components: {
    mytable,
  },
  data() {
    return {
      arr: [],
    };
  },
  mounted() {
    getList()
      .then((res) => {
        console.log(res);
        if (res.data.message === "获取商品列表成功") {
          this.arr = res.data.data;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    changeinput(value, e) {
      value.inputVisible = false;
      if (value.tags.indexOf(e.target.value) !== -1) {
        return;
      }
      value.tags.unshift(e.target.value);
    },
    del(id) {
      this.arr = this.arr.filter((v) => v.id !== id);
    },
  },
  directives: {
    myfocus,
  },
};
</script>

<style lang="less" scoped>
.mylist {
  .ipt {
    width: 60px;
  }
  .badge {
    margin-left: 10px;
  }
}
</style>