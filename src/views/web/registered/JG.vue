<template>
  <div class="">
	  <div class="content">
	          <div class="training-content coach-page" style="margin-top: 120px;">
	                  <div class="aboutus-header display-flex-row justify-content-between">
	                          <div class="aboutus-header-left display-flex-row align-items-center">
	                                  <img src="/images/ball.png" alt="">
	                                  <div class="aboutus-title">
	                                          <div class="title">INSTITUTION<span>ENTRY</span></div>
	                                          <p>机构入驻</p>
	                                  </div>
	                          </div>
	                          <div class="aboutus-crumb display-flex-row align-items-bottom">
	                                  当前位置：<router-link to="/">首页></router-link><a href="">机构入驻</a>
	                          </div> 
	                  </div>
	                  <div class="about-box">
				 <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
					<el-form-item label="机构名称" prop="name">
						<el-input v-model="ruleForm.name"></el-input>
					</el-form-item>
					<el-form-item label="营业执照" prop="nikename">
							<el-upload
								action="/"
								list-type="picture-card"
								:auto-upload="false"
								:on-change="licenseChange"
								:on-remove="licenseRemove"
							>
								<i class="el-icon-plus"></i>
							</el-upload>
							<!-- <el-dialog :visible.sync="dialogVisible1">
								<img width="100%" :src="dialogIhomeImgs1" alt="">
							</el-dialog> -->
					</el-form-item>
					<el-form-item label="机构地址" prop="addressInfo">
             <el-select v-model="ruleForm.value1" placeholder="请选择">
								<el-option
									v-for="(item, index) in province"
									:key="item.index"
									:label="item.label"
									:value="item.label">
								</el-option>
							</el-select>
							
							<el-select v-model="ruleForm.value2" placeholder="请选择">
								<el-option
									v-for="(item, index) in city"
									:key="item.index"
									:label="item.label"
									:value="item.label">
								</el-option>
							</el-select>
							
              <el-select v-model="ruleForm.value3" placeholder="请选择">
								<el-option
									v-for="(item, index) in area"
									:key="item.index"
									:label="item.label"
									:value="item.label">
								</el-option>
			        </el-select>
						<el-input style="margin-top: 10px;" v-model="ruleForm.address"></el-input>
					</el-form-item>
					<el-form-item label="上传机构LOGO" prop="nikename">
							<el-upload
								action="/file/upload/1"
								list-type="picture-card"
								:auto-upload="true"
								:on-change="bcPicChange"
								:on-remove="bcPicRemove"
							>
								<i class="el-icon-plus"></i>
							</el-upload>
							<!-- <el-dialog :visible.sync="dialogVisible2">
								<img width="100%" :src="dialogIhomeImgs2" alt="">
							</el-dialog> -->
					</el-form-item>
					
					<el-form-item label="负责人" prop="leaderName">
						<el-input v-model="ruleForm.leaderName"></el-input>
					</el-form-item>
					<el-form-item label="联系电话" prop="leaderPhone">
						<el-input v-model="ruleForm.leaderPhone"></el-input>
					</el-form-item>
					<el-form-item label="固定电话" prop="phone">
						<el-input v-model="ruleForm.phone"></el-input>
					</el-form-item>
					<el-form-item label="证件号码" prop="leaderNo">
						<el-input v-model="ruleForm.leaderNo"></el-input>
					</el-form-item>
					<el-form-item label="微信" prop="weChatNo">
						<el-input v-model="ruleForm.weChatNo"></el-input>
					</el-form-item>
					<el-form-item label="邮箱" prop="mail">
						<el-input v-model="ruleForm.mail"></el-input>
					</el-form-item>
					
					
					<el-form-item label="设置密码" prop="password">
						<el-input type="password" v-model="ruleForm.password"></el-input>
					</el-form-item>
		 			<el-form-item label="重复密码">
						<el-input v-model="ruleForm.respassword"></el-input>
					</el-form-item>
					<el-form-item label="验证码" prop="valiCode">
						<el-input v-model="ruleForm.valiCode"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button class="btn-color-red" type="primary" @click="submitForm('ruleForm')">申请入驻</el-button>
						<!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
					</el-form-item>
				</el-form>
	          </div>
	  
	          </div>
	  </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import {userAddJG} from "../../../api/api/reg.js"
import { province, city, area } from '../../../utils/utils'

	export default {
		data() {
			return {
				province,
				city,
				area,

				ruleForm: {
					dialogIhomeImgs1: [],
					dialogIhomeImgs2:[],
					value1: '',
					value2: '',
					value3: '',
					name: "",
					password: "",
					phone: "",
					respassword: '',
					addressInfo: '123123',
				},

					dialogVisible1:false,
					dialogVisible2:false,

				rules: {
          name: [
            { required: true, message: '请输入机构昵称', trigger: 'blur' }
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
					],
					leaderName: [
            { required: true, message: '请输入机构负责人', trigger: 'blur' }
					],
					leaderPhone: [
						{ required: true, message: '机构负责人联系电话', trigger: 'blur' }
					],
					phone: [
						{ required: true, message: '机构负责人固定电话', trigger: 'blur' }
					],
					leaderNo: [
						{ required: true, message: '机构负责人证件', trigger: 'blur' }
					],
					weChatNo: [
						{ required: true, message: '机构负责人微信', trigger: 'blur' }
					],
					mail: [
            { required: true, message: '机构负责人邮箱', trigger: 'blur' }
					],
					password: [
					  { required: true, message: '请输入密码', trigger: 'blur' },
					   { max: 6, message: '长度在6个字符以上', trigger: 'blur' }
					],
					valiCode: [
					  { required: true, message: '请输入验证码', trigger: 'blur' },
					   { max: 6, message: '请输入符合格式的验证码', trigger: 'blur' }
					],
					}
			}
		},
		 methods: {
			...mapActions('Login', [
				'addJG'
			]),

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
						this.onSubmit()
          } else {
            return false;
          }
        });
			},


			onSubmit () {

				const { value1, value2, value3, respassword, password } = this.ruleForm
				if (respassword !== password) {
					this.$message({
						type:'warning',
						message: '密码不一致',
					})
					return false
				}
				if (value1 && value2 && value3) {
					this.ruleForm.addressInfo = `${value1},${value2},${value3}`
				}
				console.log(this.ruleForm)

				let data = new FormData()
				data.append('params', this.ruleForm)
				console.log(data)

				this.addJG(data).then(res => {
					const { code } = res
					if (code === 200) {
						this.$message({
							message: '入驻成功',
							type: 'success'
						})
						this.$roter.push('/login/login')
					}
				})
			},

			licenseChange (file, fileList) {
				let lists = []
				
				fileList.forEach(item => {
					lists.push(item.raw)
				})

				this.ruleForm.license = lists
				console.log(this.ruleForm.license)
			},

			licenseRemove (file, fileList) {
				this.ruleForm.license = fileList
				console.log(this.ruleForm.license)
			},

			bcPicChange (file, fileList) {
				let lists = []
				
				fileList.forEach(item => {
					lists.push(item.raw)
				})

				this.ruleForm.bcPic = lists
				console.log(this.ruleForm.bcPic)
				
			},

			bcPicRemove (file, fileList) {
				this.ruleForm.bcPic = fileList
				console.log(this.ruleForm.bcPic)
			}
    }
	}
</script>
<style>
	.avatar-uploader .el-upload {
	    border: 1px dashed #d9d9d9;
	    border-radius: 6px;
	    width: 100px;
	    height: 100px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	  }
</style>
<style scoped>
	
	@import url("../css/D-coach-training.css");
	  .avatar-uploader .el-upload:hover {
	    border-color: #409EFF;
	  }
	  .avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 100px;
	    height: 100px;
	    line-height: 100px;
	    text-align: center;
	  }
	  .avatar {
	    width: 100px;
	    height: 100px;
	    display: block;
	  }
</style>
