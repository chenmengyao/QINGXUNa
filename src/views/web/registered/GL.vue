<template>
	<div class="GL">
			  <div class="content">
		        <div class="training-content coach-page" style="margin-top: 120px;">
		                <div class="aboutus-header display-flex-row justify-content-between">
		                        <div class="aboutus-header-left display-flex-row align-items-center">
		                                <img src="/images/ball.png" alt="">
		                                <div class="aboutus-title">
		                                        <div class="title">INSTITUTION<span>ENTRY</span></div>
		                                        <p>创建管理员</p>
		                                </div>
		                        </div>
		                        <div class="aboutus-crumb display-flex-row align-items-bottom">
		                                当前位置：<router-link to="/">首页></router-link><a href="#">创建管理员</a>
		                        </div>
		                </div>
		                <div class="about-box">
							<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
								<el-form-item label="昵称" prop="nikename">
									<el-input v-model="ruleForm.nikename"></el-input>
								</el-form-item>
								<el-form-item label="密码" prop="password">
									<el-input type="password" v-model="ruleForm.password"></el-input>
								</el-form-item>
					<!-- 			<el-form-item label="重复密码" prop="name">
									<el-input v-model="ruleForm.passwords"></el-input>
								</el-form-item> -->
								<el-form-item label="手机号码" prop="phone">
									<el-input v-model="ruleForm.phone"></el-input>
								</el-form-item>
								<el-form-item>
									<el-button class="btn-color-red" type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
									<!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
								</el-form-item>
							</el-form>
		                </div>
		
		        </div>
		</div>
		
	</div>
</template>

<script>
	import {userAddGL} from "../../../api/api/reg.js"
	export default {
		data() {
			return {
				ruleForm: {
					"nikename": "",
					"password": "",
					"phone": ""
				},
				rules: {
          nikename: [
            { required: true, message: '请输入昵称', trigger: 'blur' }
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
					password: [
					  { required: true, message: '请输入密码', trigger: 'blur' },
					   { max: 6, message: '长度在6个字符以上', trigger: 'blur' }
					],
					phone: [
					  { required: true, message: '请输入手机号码', trigger: 'blur' },
					   { min: 11, max: 11, message: '请输入符合格式的手机号码', trigger: 'blur' }
					],
					}
			}
		},
		 methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //alert('submit!');
						userAddGL(this.ruleForm).then((res)=>{
							this.$message({
							  message: "创建成功",
							  type: 'error',
							  duration: 5 * 1000
							});
							this.router.push("/")
						}).catch((res)=>{
							this.$message({
							  message: res.message,
							  type: 'error',
							  duration: 5 * 1000
							});
						})
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
	}
</script>
<style>
	.el-input__inner{
		max-width: 400px;
	}
</style>
<style scoped>
@import url("../css/D-coach-training.css");

</style>
