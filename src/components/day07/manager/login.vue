<template>
  <div class="login-container">
    <div class="login-box">
      <!-- 头像区域 -->
      <div class="text-center avatar-box">
        <img src="@/assets/logo.png" class="img-thumbnail avatar" alt="" />
      </div>

      <!-- 表单区域 -->
      <div class="form-login p-4">
        <!-- 登录名称 -->
        <div class="form-group form-inline">
          <label for="username">登录名称</label>
          <input
            type="text"
            class="form-control ml-2"
            id="username"
            v-model.trim="user.username"
            placeholder="请输入登录名称"
            autocomplete="off"
          />
        </div>
        <!-- 登录密码 -->
        <div class="form-group form-inline">
          <label for="password">登录密码</label>
          <input
            type="password"
            class="form-control ml-2"
            id="password"
            v-model.trim="user.password"
            placeholder="请输入登录密码"
          />
        </div>
        <!-- 登录和重置按钮 -->
        <div class="form-group form-inline d-flex justify-content-end">
          <button type="button" class="btn btn-secondary mr-2" @click="reset">
            重置
          </button>
          <button type="button" class="btn btn-primary" @click="login">
            登录
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loginURL } from "../../../apis/manager";
export default {
  data() {
    return {
      user: {
        username: "admin",
        password: "1234",
      },
    };
  },
  methods: {
    login() {
      loginURL(this.user)
        .then((res) => {
          console.log(res);
          if (res.data.message === "登录成功") {
            //必须先储存再跳转
            localStorage.setItem("token", res.data.data.token);
            this.$router.push({ name: "index" });
          } else if (res.data.message === "用户不存在") {
            alert("账号密码错误！");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    reset() {
      this.user.username = "";
      this.user.password = "";
    },
  },
};
</script>

<style lang="less" scoped>
.login-container {
  background-color: #35495e;
  height: 100vh;
  .login-box {
    width: 400px;
    height: 250px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.5);
    .form-login {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      box-sizing: border-box;
    }
  }
}

.form-control {
  flex: 1;
}

.avatar-box {
  position: absolute;
  width: 100%;
  top: -65px;
  left: 0;
  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50% !important;
    box-shadow: 0 0 6px #efefef;
  }
}
</style>