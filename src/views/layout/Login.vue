<template>
  <div class="login">
    <a-form-model
      ref="loginForm"
      :model="loginForm"
      :rules="rules"
      v-bind="layout"
    >
      <a-form-model-item has-feedback label="邮箱" prop="email">
        <a-input v-model="loginForm.email" />
      </a-form-model-item>
      <a-form-model-item has-feedback label="密码" prop="password">
        <a-input
          v-model="loginForm.password"
          type="password"
          autocomplete="off"
        />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="submitForm('loginForm')">
          {{ isLoading ? "登陆中..." : "登录" }}
        </a-button>
        <a-button style="margin-left: 10px" @click="resetForm('loginForm')">
          重置
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
import login from '@/api/login';

export default {
  data() {
    // 登录校验
    const emailReg = /^[\w-]+@[\w.-]+.com$/;
    const checkEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入邮箱'));
      }
      if (emailReg.test(value)) {
        return callback();
      }
      return callback(new Error('请输入正确的邮箱'));
    };
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('请输入密码'));
      }
      return callback();
    };
    return {
      loginForm: {
        password: '',
        email: '',
      },
      isLoading: false,
      rules: {
        password: [{ validator: validatePass, trigger: 'change' }],
        email: [{ validator: checkEmail, trigger: 'change' }],
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.isLoading = true;
          login(this.loginForm)
            .then((r) => {
              this.isLoading = false;
              // console.log(r);
              this.$store.dispatch('login/userLogin', r);
              this.$router.push({
                name: 'Home',
              });
            })
            .catch((error) => {
              this.isLoading = false;
              this.$message.error(error);
              this.resetForm(formName);
            });
          return true;
        }
        console.log('error submit!!');
        return false;
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 100px 0;
}
</style>
