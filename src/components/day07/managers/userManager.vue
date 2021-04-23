<template>
  <div class="userManager">
    <h3>用户管理</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">姓名</th>
          <th scope="col">年龄</th>
          <th scope="col">头衔</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, index) in userlist" :key="value.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ value.name }}</td>
          <td>{{ value.age }}</td>
          <td>{{ value.position }}</td>
          <td>
            <button
              type="button"
              class="btn btn-link"
              @click="toinfo(value.id)"
            >
              详情
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userlist: [
        { id: 1, name: "嬴政", age: 18, position: "始皇帝" },
        { id: 2, name: "李斯", age: 35, position: "丞相" },
        { id: 3, name: "吕不韦", age: 50, position: "商人" },
        { id: 4, name: "赵姬", age: 48, position: "王太后" },
      ],
    };
  },
  methods: {
    toinfo(id) {
      //   this.$router.push({ name: `userinfo/${id}` });
      //动态路由传参
      //   this.$router.push({ path: `userinfo/${id}` });
      //命名路由传参
      //   this.$router.push({ name: `userinfo`, query: { id: id } });
      //   this.$router.push({ name: `userinfo`, params: { id: id } });
      this.$router.push({ path: `userinfo`, query: { id: id } });
    },
  },
};
</script>

<style lang="less" scoped>
.userManager {
  text-align: center;
  .table {
    text-align: center;
  }
}
</style>