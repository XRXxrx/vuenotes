<template>
  <div>
    <!-- v-text指令 -->
    <p v-text="msg"></p>
    <!-- v-html指令 -->
    <p v-html="mgh"></p>
    <!-- v-for指令 -->
    <ul>
      <li v-for="(value, index) in arr" :key="index">
        {{ value + ":" + index }}
      </li>
    </ul>
    <p v-for="(value, key, index) in obj" :key="index">
      {{ value + ":" + key + ":" + index }}
    </p>
    <table width="500" border="1" cellspacing="0">
      <tr>
        <th>*</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>性别</th>
      </tr>
      <tr v-for="(value, index) in userList" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ value.name }}</td>
        <td>{{ value.age }}</td>
        <td>{{ value.gender == 1 ? "男" : "女" }}</td>
      </tr>
    </table>
    <!-- v-model指令，取值，只有input,textarea,select可以添加 -->
    用户名：<input type="text" v-model="user.username" /><br />
    密码： <input type="text" v-model="user.password" /><br />
    <button @click="login">登录</button><br />
    <!-- v-bind动态绑定元素属性 ,可以缩写-->
    <img :src="img" alt="" />
    <a :href="'/login?id=' + id">提交</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 12,
      img:
        "https://img.52z.com/upload/news/image/20190615/20190615073624_12262.jpg",
      msg: "电视剧的设备",
      mgh: `<hr/>sadsadas<br/>dfsdfs<hr/>`,
      obj: { id: 1, name: 2 },
      arr: [1, 2, 34, 5, 5],
      userList: [
        { id: 1, name: "sdsdas", age: 23, gender: 1 },
        { id: 2, name: "asdasda", age: 24, gender: 0 },
        { id: 3, name: "dsfds", age: 25, gender: 1 },
      ],
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      console.log(this.username, this.password);
    },
  },
};
</script>

<style>
</style>