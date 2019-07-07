<template>
  <div class="page coach-page ">
    <div class="banner">
      <div class="banner-image" style="background-image: url('./images/coach_training_banner.jpg')"></div>
    </div>
    <div class="content event-detail">
      <div class="tabs" style="margin-top: 0;">
        <div class="training-content-header">
          <span>赛事报名</span>
          <div class="training-content-line"></div>
        </div>

        <el-form inline label-width="120px" style="width:400px;margin:0 auto" size="medium" :model="dataForm" :rules="rules" ref="ruleForm">
          <el-form-item label="参赛队伍" >
            <el-input></el-input>
          </el-form-item>

          <el-form-item label="负责人姓名">
            <el-input v-model="dataForm.name"></el-input>
          </el-form-item>

          <el-form-item label="身份证号码">
            <el-input v-model="dataForm.leaderNo"></el-input>
          </el-form-item>

          <el-form-item label="联系方式">
            <el-input v-model="dataForm.leaderPhone"></el-input>
          </el-form-item>

          <el-form-item label="邮箱">
            <el-input v-model="dataForm.mail"></el-input>
          </el-form-item>

          <el-form-item label="微信号">
            <el-input v-model="dataForm.weChatNo"></el-input>
          </el-form-item>

          <el-form-item label="第一联系人姓名">
            <el-input></el-input>
          </el-form-item>

          <el-form-item label="第二联系人姓名">
            <el-input></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="checkForm">确定</el-button>
          </el-form-item>
        </el-form>

        <el-dialog :visible.sync="dialog" title="在线支付" width:>
          <h4>报名本赛事您需要支付￥199.00，扫描二维码支付，即可报名</h4>
          <br>
          <img src="/images/qrcode.jpg" alt="">
          <br>
          <br>
          <el-button type="primary" size="small"@click="onSumbit">提交</el-button>
        </el-dialog>
      </div>
    </div>
  </div>
   </template>
   
   <script>
   import { mapActions } from 'vuex'
   import { isNumber } from '../../utils/utils'
   	export default {
   	  data() {
   	  	return {
           key: "value",
           dialog: false,

           dataForm: {

           },

            rules: {
              leaderNo: [
                { validator: isNumber, trigger: 'blur' }
              ]
            }
   	  	}
      },
      
      methods: {
        ...mapActions('eventInformation', [
          'matchSignUp'
        ]),

			checkForm () {
				this.$refs.ruleForm.validate((valid) => {
					if (valid) {
            this.dialog = true
					} else {
						return false
					}
				})
			},

        onSumbit () {
          this.matchSignUp(this.dataForm).then(res => {
            const { code } = res
            if (code === 200) {
              this.$message({
                message: '报名成功',
                type: 'success'
              })
              this.dialog = false
              this.$router.back()
            }
          })
        }
      }
   	}
   </script>
   
   <style scoped>
   	@import url("css/D-coach-training.css");
   </style>