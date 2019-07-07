<template>
  <div class="">
	  <div class="content">
	          <div class="training-content coach-page" style="margin-top: 120px;">
	                  <div class="aboutus-header display-flex-row justify-content-between">
	                          <div class="aboutus-header-left display-flex-row align-items-center">
	                                  <img src="/images/ball.png" alt="">
	                                  <div class="aboutus-title">
	                                          <div class="title">INSTITUTION<span>ENTRY</span></div>
	                                          <p>球员注册</p>
	                                  </div>
	                          </div>
	                          <div class="aboutus-crumb display-flex-row align-items-bottom">
	                                  当前位置：<router-link to="/">首页></router-link><a href="">球员注册</a>
	                          </div> 
	                  </div>
	                  <div class="about-box">
				 <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
					<el-form-item label="球员姓名" prop="name">
						<el-input v-model="ruleForm.name" placeholder="请输入球员名称"></el-input>
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
								<el-dialog :visible.sync="ruleForm.dialogVisible1">
									<img width="100%" :src="dialogIhomeImgs1" alt="">
								</el-dialog>
								<div>(仅支持JPG格式，图片仅支持5M大小)</div>
						</el-form-item>
            
						<el-form-item label="年龄" prop="age">
							<el-input v-model="ruleForm.age" placeholder="请输入年龄"></el-input>
						</el-form-item>

						<el-form-item label="在读学校" prop="school">
							<el-input v-model="ruleForm.school" placeholder="请输入毕业院校"></el-input>
						</el-form-item>

						<el-form-item label="在读年级" prop="zd">
					    <el-select v-model="ruleForm.zd" placeholder="请选择">
								<el-option
									v-for="(item, index) in classList"
									:key="item.index"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
					</el-form-item>

					<el-form-item label="在读班级">
						<el-input></el-input>
					</el-form-item>
				
					<el-form-item label="申请机构" prop="nikename">
						 <el-select v-model="ruleForm.mechanismId" placeholder="请选择">
								<el-option
									v-for="(item, index) in Agency"
									:key="item.index"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
							<span class="tagColor"> 找不到机构？</span>
					</el-form-item>

					<el-form-item label="所属教练" prop="nikename">
						 <el-select placeholder="请选择" v-model="test">
								<el-option
									v-for="(item, index) in Agency"
									:key="item.index"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
							<span class="tagColor"> 找不到教练？</span>
					</el-form-item>
					
					<el-form-item label="身份证号" prop="leaderNo">
						<el-input v-model="ruleForm.leaderNo"></el-input>
					</el-form-item>
					
					
					<el-form-item label="监护人姓名" prop="guardianName">
						<el-input v-model="ruleForm.guardianName"></el-input>
					</el-form-item>
					<el-form-item label="监护人电话" prop="guardianPhone">
						<el-input v-model="ruleForm.guardianPhone "></el-input>
					</el-form-item>
					<!-- <el-form-item label="证件号码" prop="leaderNo">
						<el-input v-model="ruleForm.leaderNo"></el-input>
					</el-form-item> -->
					<el-form-item label="监护人微信" prop="guardianWeChatNo">
						<el-input v-model="ruleForm.guardianWeChatNo"></el-input>
					</el-form-item>
					<!-- <el-form-item label="邮箱" prop="email">
						<el-input v-model="ruleForm.email"></el-input>
					</el-form-item> -->

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

					<el-form-item label="服装尺码">
              <el-select v-model="ruleForm.fz" placeholder="请选择">
								<el-option
									v-for="(item, index) in fz"
									:key="item.index"
									:label="item.label"
									:value="item.label">
								</el-option>
			        </el-select>
					</el-form-item>
					
					<el-form-item label="鞋码" prop="password">
						<el-input type="password" v-model="ruleForm.shoeSize"></el-input>
					</el-form-item>

					<el-form-item label="设置密码" prop="password">
						<el-input type="password" v-model="ruleForm.password"></el-input>
					</el-form-item>
		 			<el-form-item label="重复密码" prop="password">
						<el-input v-model="ruleForm.password"></el-input>
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
import {userAddQY} from "../../../api/api/reg.js"
import { classList, isNumber, Agency, province, city, area, fz } from '../../../utils/utils'
	export default {
		data() {
			return {
				dialogIhomeImgs1:[],
				classList,
				Agency,
				province,
				city,
				area,
				fz,

				ruleForm: {
					value1: '',
					value2: '',
					value3: '',
					//球员名称
					name:'',
					//照片
					// dialogVisible1:false,
					//年龄
					age:'',
					//在读学校
					school:'',
					//在读年级
					"nikename": "",
					"password": "",
					"phone": ""
				},

				rules: {
          name: [
            { required: true, message: '请输入球员名称', trigger: 'blur' },
					],
					age: [
            { required: true, message: '请输入年龄', trigger: 'blur' },
					],
					school: [
            { required: true, message: '请输入毕业院校', trigger: 'blur' },
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
			 ...mapActions('Login', [
				 'addQY'
			 ]),

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
						this.onSumbit()
          } else {
            return false;
          }
        });
			},

			setData () {
				const {value1, value2, value3 } = this.ruleForm
				if (value1 && value2 && value3) {
					this.ruleForm.addressInfo = `${value1},${value2},${value3}`
				}
				this.ruleForm.age = Number(this.ruleForm.age)
			},

			onSumbit () {
				this.setData()
				let form = new FormData()
				form.append('params', this.ruleForm)
				
				this.addQY(form).then(res => {
					console.log(res)
				})
			},

			//照片
			picChange (file, fileList) {
				let lists = []
				
				fileList.forEach(item => {
					lists.push(item.raw)
				})

				this.ruleForm.imgs = lists
				console.log(this.ruleForm.license)
			},

			picRemove (file, fileList) {
				this.ruleForm.imgs = fileList
				console.log(this.ruleForm.imgs)
			},

      resetForm(formName) {
        this.$refs[formName].resetFields();
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
		.tagColor {
			color:#409EFF;
		}
</style>
