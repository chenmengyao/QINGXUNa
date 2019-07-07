<template>
  <div class="reset-password">
    <el-form size="medium">
      <el-form-item label="请输入手机号">
        <el-input v-model="formData.phone"/>
      </el-form-item>

      <el-form-item label="验证码">
        <el-input v-model="formData.valiCode">
          <el-button slot="append">获取验证码</el-button>
        </el-input>
      </el-form-item>

      <el-form-item label="新密码">
        <el-input v-model="formData.newPassword" type="password"/>
      </el-form-item>

      <el-form-item label="确认密码">
        <el-input v-model="formData.passWord" type="password"/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onReset">确定</el-button>
        <!-- <el-button>取消</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formData: {
        newPassword: "",
        passWord: "",
        phone: "",
        valiCode: ""
      }
    }
  },

  methods: {
    ...mapActions('Login', [
      'passwordReset'
    ]),

    onReset () {
      this.passwordReset(this.formData).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>
</style>


