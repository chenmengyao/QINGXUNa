<template>
	<div class="GL">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="昵称" prop="name">
				<el-input v-model="ruleForm.name"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="pasword">
				<el-input type="pasword" v-model="ruleForm.pasword"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
				<!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import {
		userLogin
	} from "../../../api/api/index.js"
	export default {
		data() {
			return {
				ruleForm: {
					"name": "",
					"pasword": "",
					type: 4
				},

				rules: {
					name: [{
							required: true,
							message: '请输入昵称',
							trigger: 'blur'
						}
						// { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
					],
					pasword: [{
							required: true,
							message: '请输入密码',
							trigger: 'blur'
						},
						{
							max: 6,
							message: '长度在6个字符以上',
							trigger: 'blur'
						}
					]
				}
			}
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						//alert('submit!');
						userLogin(this.ruleForm).then((res) => {
							this.$message({
								message: "登录成功",
								type: 'success',
								duration: 5 * 1000
							});
							localStorage.userData = JSON.stringify(res.data)
							this.$router.push("/")
						}).catch((res) => {
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
<style scoped>
	.GL {
		margin: 300px auto 30px auto;
		width: 500px;
	}
</style>
