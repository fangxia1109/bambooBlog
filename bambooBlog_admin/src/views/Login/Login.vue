<template>
  <div class="login-container">
    <el-form
      class="login-page"
      ref="loginForm"
      :model="loginForm"
      :rules="rulesLoginForm"
      label-width="80px"
    >
      <h1 class="loginTitle">溪竹树洞</h1>
      <el-form-item prop="username" label="用户名">
        <el-input
          type="text"
          v-model="loginForm.username"
          auto-complete="off"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input
          type="password"
          v-model="loginForm.password"
          auto-complete="off"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox
          class="rememberme"
          v-model="loginForm.ischeck"
          label="记住密码"
        ></el-checkbox>
      </el-form-item>
      <div style="width: 100%; text-align: center; margin: -10px 0 10px 0">
        <el-button type="primary" @click="handleSubmit" :loading="loading"
          >登录</el-button
        >
        <el-button type="primary" @click="handleRegister" :loading="loading"
          >注册</el-button
        >
      </div>
    </el-form>
    <!-- 引入粒子特效 -->
    <vue-particles
      class="vueParticles"
      color="#00FFFF"
      :particleOpacity="1"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="5"
      lineColor="#00FF00"
      :lineWidth="1"
      :lineLinked="true"
      :lineOpacity="1"
      :lineDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      loginForm: {
        username: 'admin',
        password: 'admin',
        ischeck: false,
      },
      rulesLoginForm: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    // 登录
    handleSubmit() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true
          if (
            this.loginForm.username === 'admin' &&
            this.loginForm.password === 'admin'
          ) {
            this.loading = false
            sessionStorage.setItem('user', this.loginForm.username)
            this.$router.push({
              path: '/Home',
            })
          } else {
            this.loading = false
            this.$alert('用户名或密码错误', 'info', {
              confirmButtonText: '确定',
            })
          }
        } else {
          return false
        }
      })
    },
    // 注册
    handleRegister() {},
  },
}
</script>

<style scoped lang="scss">
.login-container {
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url('../../assets/images/1.jpg');
  /* 背景图垂直、水平均居中 */
  background-position: center center;
  /* 背景图不平铺 */
  background-repeat: no-repeat;
  /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
  background-attachment: fixed;
  /* 让背景图基于容器大小伸缩 */
  background-size: cover;
  /* 设置背景颜色，背景图加载过程中会显示背景色 */
  background-color: $theme-color;
}
.loginTitle {
  text-align: center;
  font-size: 20px;
  margin: 10px 0;
  color: $theme-color;
}
.login-page {
  position: absolute;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin: 180px 550px;
  width: 400px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.el-form-item {
  margin-right: 20px;
  margin-bottom: 22px;
}
label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: right;
}
</style>
