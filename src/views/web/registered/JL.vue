<template>
  <div class="">
	  <div class="content">
	          <div class="training-content coach-page" style="margin-top: 120px;">
	                  <div class="aboutus-header display-flex-row justify-content-between">
	                          <div class="aboutus-header-left display-flex-row align-items-center">
	                                  <img src="/images/ball.png" alt="">
	                                  <div class="aboutus-title">
	                                          <div class="title">INSTITUTION<span>ENTRY</span></div>
	                                          <p>教练入驻</p>
	                                  </div>
	                          </div>
	                          <div class="aboutus-crumb display-flex-row align-items-bottom">
	                                  当前位置：<router-link to="/">首页></router-link><a href="">教练入驻</a>
	                          </div> 
	                  </div>
	                  <div class="about-box">
				 <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
					<el-form-item label="教练姓名" prop="name">
						<el-input v-model="ruleForm.name" placeholder="请输入教练员姓名"></el-input>
					</el-form-item>
					<el-form-item label="照片" prop="imgsA">
							<el-upload
								action="/"
								list-type="picture-card"
								:auto-upload="false"
								:on-change="picChange"
								:on-remove="picRemove"
							>
								<i class="el-icon-plus"></i>
							</el-upload>
							<!-- <el-dialog :visible.sync="ruleForm.dialogVisible1">
								<img width="100%" :src="ruleForm.dialogIhomeImgs1" alt="">
							</el-dialog> -->
							<div>(仅支持JPG格式，图片仅支持5M大小)</div>
					</el-form-item>
					<el-form-item label="申请机构" prop="nikename">
						 <el-select v-model="ruleForm.mechanismId" placeholder="请选择">
								<el-option
									v-for="item in Agency"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
					</el-form-item>
					<el-form-item label="学历" prop="nikename">
					    <el-select v-model="ruleForm.xl" placeholder="请选择">
								<el-option
									v-for="item in education"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
					</el-form-item>
					
					<el-form-item label="毕业院校" prop="graduatedFrom">
						<el-input v-model="ruleForm.graduatedFrom" placeholder="请输入毕业院校"></el-input>
					</el-form-item>
					<el-form-item label="手机号" prop="phone">
						<el-input v-model="ruleForm.phone" placeholder="请输入手机号"></el-input>
					</el-form-item>
					<el-form-item label="微信">
						<el-input v-model="ruleForm.weChatNo" placeholder="请输入微信账号"></el-input>
					</el-form-item>
			    <el-form-item label="邮箱" prop="mail">
						<el-input v-model="ruleForm.mail" placeholder="请输入邮箱地址"></el-input>
					</el-form-item>
					<el-form-item label="身份证号" prop="leaderNo">
						<el-input v-model="ruleForm.leaderNo" placeholder="请输入证件号码"></el-input>
					</el-form-item>
					<el-form-item label="联系地址" prop="address">
						<el-input v-model="ruleForm.address" placeholder="请输入联系地址"></el-input>
					</el-form-item>

					<el-form-item label="语言能力" prop="nikename">
					    <el-select v-model="ruleForm.yy" placeholder="请选择" multiple style="width:300px">
								<el-option
									v-for="item in languageCompetence"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
							<!-- <i class="el-icon-circle-plus-outline addFont"></i> -->
					</el-form-item>
					
					<el-form-item label="听说能力" prop="ts">
              <el-radio-group v-model="ruleForm.ts">
								<el-radio :label="1">一般</el-radio>
								<el-radio :label="2">良好</el-radio>
								<el-radio :label="3">精通</el-radio>
							</el-radio-group>
					</el-form-item>

					<el-form-item label="读写能力" prop="dx">
              <el-radio-group v-model="ruleForm.dx">
								<el-radio :label="1">一般</el-radio>
								<el-radio :label="2">良好</el-radio>
								<el-radio :label="3">精通</el-radio>
							</el-radio-group>
					</el-form-item>
					
					<el-form-item label="教练等级" prop="coachLevel">
					    <el-select v-model="ruleForm.coachLevel" placeholder="请选择">
								<el-option
									v-for="item in coachLeavelList"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
					</el-form-item>

				 <el-form-item label="教练证书" prop="certificate">
							<el-upload
								action="/"
								list-type="picture-card"
								:auto-upload="false"
								:on-change="ZSChange"
								:on-remove="ZSRemove"
							>
								<i class="el-icon-plus"></i>
							</el-upload>
							<!-- <el-dialog :visible.sync="ruleForm.certificateVisible">
								<img width="100%" :src="ruleForm.certificateImgs" alt="">
							</el-dialog> -->
							<div>(仅支持JPG格式，图片仅支持5M大小)</div>
					</el-form-item>

					<el-form-item label="所属足协" prop="football">
						<el-input v-model="ruleForm.football" placeholder="请输入该证书所属足协"></el-input>
					</el-form-item>
					<el-form-item label="证书名称" prop="certificateName">
						<el-input v-model="ruleForm.certificateName" placeholder="请输入该证书名称"></el-input>
					</el-form-item>
					<el-form-item label="证书编号" prop="certificateNo">
						<el-input v-model="ruleForm.certificateNo" placeholder="请输入该证书编号"></el-input>
					</el-form-item>

					<el-form-item label="其它证书" prop="elseCertificate">
							<el-upload
								action="/"
								list-type="picture-card"
								:auto-upload="false"
								:on-change="otherChange"
								:on-remove="otherRemove"
							>
								<i class="el-icon-plus"></i>
							</el-upload>
							<!-- <el-dialog :visible.sync="ruleForm.elseCertificateVisible">
								<img width="100%" :src="ruleForm.elseCertificateImgs" alt="">
							</el-dialog> -->
							<div>(仅支持JPG格式，图片仅支持5M大小)</div>
					</el-form-item>

					<el-form-item label="鞋码" prop="shoeSize">
						<el-input v-model="ruleForm.shoeSize" placeholder="请输入您的鞋码"></el-input>
					</el-form-item>

					<el-form-item label="设置密码" prop="password">
						<el-input type="password" v-model="ruleForm.password" placeholder="请输入您的密码"></el-input>
					</el-form-item>
		 			<el-form-item label="重复密码" prop="passwordAgain">
						<el-input type="password" v-model="ruleForm.passwordAgain" placeholder="请再次输入密码"></el-input>
					</el-form-item>
					<el-form-item label="验证码" prop="phone">
						<el-input v-model="ruleForm.phone" class="codeInput"></el-input>
						<el-button class="btn-color-red" type="primary">获取验证码</el-button>
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
import {userAddJL} from "../../../api/api/reg.js"
import { mapActions } from 'vuex'
import { Agency, languageCompetence, education, coachLeavelList, deepCopy } from '../../../utils/utils'

	export default {
		data() {
			return {
				Agency,
				education,
				languageCompetence,
				coachLeavelList,

				ruleForm: {
					//教练名称
					"name": "",
					//照片
					// dialogIhomeImgs1:[],
					// dialogVisible1:false,

					//毕业院校
					graduatedFrom:'',
					//手机号
					phone:'',
					//邮箱
					mail:'',
					//身份证号
					leaderNo:'',
					//联系地址
					address:'',


					//听说能力
					ts:[],
					//读写能力
					dx:[],
					//教练等级
					coachLevel:'',

					//教练证书

					//所属足协
					football:'',
					//证书名称
					certificateName:'',
					//证书编号
					certificateNo:'',
					//其它证书

					//鞋码
					shoeSize:'',
					//密码
					password:'',
					//重复密码
					passwordAgain:'',
				},
				rules: {
						name: [
							{ required: true, message: '请输入教练员姓名', trigger: 'blur' }
							// { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
						],
						graduatedFrom: [
							{ required: true, message: '请输入毕业院校', trigger: 'blur' }
						],
						phone:[
							{ required: true, message: '请输入手机号码', trigger: 'blur' }
						],
						mail:[
							{ required: true, message: '请输入邮箱地址', trigger: 'blur' }
						],
						leaderNo:[
							{ required: true, message: '请输入证件号码', trigger: 'blur' }
						],
						address:[
							{ required: true, message:'请输入联系地址', trigger: 'blur'}
						],
						ts:[
							{ required: true, message:'请勾选听说能力', trigger: 'change'}
						],
						dx:[
							{ required: true, message:'请勾选读写能力', trigger: 'change'}
						],
						coachLevel:[
							{ required: true, message:'请选择教练等级', trigger: 'change'}
						],
						football:[
							{ required: true, message:'请输入该证书所属足协', trigger: 'blur'}
						],
						certificateName:[
							{ required: true, message:'请输入该证书名称', trigger: 'blur'}
						],
						certificateNo:[
							{ required: true, message:'请输入该证书编号', trigger: 'blur'}
						],
						shoeSize:[
							{ required: true, message:'请输入您的鞋码', trigger: 'blur'}
						],
						password:[
							{ required: true, message:'请输入您的密码', trigger: 'blur'}
						],
						passwordAgain:[
							{ required: true, message:'请再次输入密码', trigger: 'blur'}
						]
					}
			}
		},
		 methods: {
			 ...mapActions('Login', [
				 'addJL'
			 ]),

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //alert('submit!');
						// userAddJL(this.ruleForm).then((res)=>{
						// 	this.$message({
						// 	  message: "创建成功",
						// 	  type: 'error',
						// 	  duration: 5 * 1000
						// 	});
						// 	this.router.push("/")
						// }).catch((res)=>{
						// 	this.$message({
						// 	  message: res.message,
						// 	  type: 'error',
						// 	  duration: 5 * 1000
						// 	});
						// })

						let params = this.setData()
						let form = new FormData()
						form.append('params', params)
						this.addJL(form).then(res => {
							console.log(res)
						})
          } else {
            console.log('error submit!!');
            return false;
          }
        });
			},
			
			//照片
			picChange (file, fileList) {
				let lists = []
				
				fileList.forEach(item => {
					lists.push(item.raw)
				})

				this.ruleForm.imgs = lists
			},

			picRemove (file, fileList) {
				this.ruleForm.imgs = fileList
			},

			// 证书
			ZSChange (file, fileList) {
				let lists = []
				
				fileList.forEach(item => {
					lists.push(item.raw)
				})

				this.ruleForm.ZSimgs = lists
			},

			ZSRemove (file, fileList) {
				this.ruleForm.ZSimgs = fileList
			},

			// 其他证书
			otherChange (file, fileList) {
				let lists = []
				
				fileList.forEach(item => {
					lists.push(item.raw)
				})

				this.ruleForm.otherimgs = lists
			},

			otherRemove (file, fileList) {
				this.ruleForm.otherimgs = fileList
			},

			setData () {
				let params = deepCopy(this.ruleForm)
				params.yy = this.ruleForm.yy.join(',') || ''
				return params
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
	.codeInput{
			width:270px;
			margin-right:15px;
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
		.addFont{
			font-size: 26px;
			margin-left:20px;
			margin-top:5px;
		}
</style>
