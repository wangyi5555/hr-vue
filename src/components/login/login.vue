<template>
  <div class="login-container">
    <div class="login-box">
      <div class="avatar-box">
        <img src="../../assets/images/logo.png"/>
      </div>
      <div class="login-form">
<!--        .native阻止vue封装的事件-->
        <el-form ref="loginForm" :model="form" :rules="rules" @keyup.enter.native="checkForm">
          <el-form-item prop="account">
            <el-input v-model="form.account" prefix-icon="el-icon-user-solid" id="account"/>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.password" prefix-icon="el-icon-lock" show-password/>
          </el-form-item>
          <el-form-item class="btn-toolbar">
            <el-button type="primary" @click="checkForm">登录</el-button>
            <el-button type="info" @click="resetForm" >重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    // 验证账号
    const validateAccount = (rule, value, callback) => {
      if (/^\d{11}$/.test(value) === false) {
        callback(new Error('账号长度错误，请重试'))
      } else if (/^1(3|4|5|6|7|8|9)\d{9}$/.test(value) === false) {
        callback(new Error('请输入正确的电话号'))
      } else {
        callback()
      }
    }
    return {
      form: {
        account: '13427479705',
        password: '123'
      },
      rules: {
        account: [
          {
            required: true,
            message: '请输入账号',
            trigger: 'blur'
          },
          {
            validator: validateAccount,
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  // 文档一加载好账号框就自动获取焦点
  mounted () {
    document.getElementById('account').focus()
  },
  methods: {
    // 表单提交
    checkForm: function () {
      this.$refs.loginForm.validate((result) => {
        if (result) {
          this.$router.push('/index')
        }
      })
    },
    // 重置按钮
    resetForm: function () {
      this.$refs.loginForm.resetFields()
    }
  }
}
</script>

<style scoped lang="less">
  .login-container{
    height: 100%;
    background-color: #005caf;//#00294e
    .login-box {
      width: 450px;
      height: 300px;
      background-color: #eeeeee;
      position: absolute;
      left: 50%;
      top: 50%;
      box-shadow: 0 0 5px #cac6c6;
      border-radius: 15px;
      transform: translate(-50%, -50%);

      .avatar-box {
        width: 125px;
        height: 125px;
        border: 1px solid #faf6ee;
        border-radius: 50%;
        padding: 10px;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #faf6ee;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 1px solid #faf6ee;
          background-color: #faf6ee;
        }
      }

      .login-form {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 50px;
        box-sizing: border-box;

        .btn-toolbar {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
</style>
