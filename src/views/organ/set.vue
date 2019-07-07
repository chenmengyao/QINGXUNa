<template>

	<div class="organ-page page">
			<div class="content">
				<div class="organ-crumb">
					<a href="" class="back-btn"></a>
					账号资料
				</div>
				<div class="organ-detail">
					<p class="title">基本资料</p>
					<form action="" class="">
						<div class="setform">
							<div class="setformdiv display-flex-row">
								<span>旧密码</span>
								<input type="text" v-model="dataForm.passWord" placeholder="请输入您的旧密码"/>
							</div>
							<div class="setformdiv display-flex-row">
								<span>新密码</span>
								<input type="text"  v-model="dataForm.newPassword" placeholder="请输入您的新密码"/>
							</div>
							<div class="setformdiv display-flex-row">
								<span>确认密码</span>
								<input type="text" placeholder="请确认您的密码"/>
							</div>
						</div>
						<div class="setbtn">
							<button class="save" @click="onSet">保存</button>
							<button class="cacel">取消</button>
						</div>
						
						
						
						
						
						
					</form>
					
					
					
					
				</div>
				
				
				
			</div>
		</div>

</template>

<script>
	import { mapActions } from 'vuex'
import { timingSafeEqual } from 'crypto';

	export default {
	  data() {
	  	return {
				key: "value",
				dataForm: {}
	  	}
		},
		
		methods: {
			...mapActions('organ', [
				'set'
			]),

			onSet () {
				this.set(this.dataForm).then(res => {
					const { code } = res
					if (code === 200) {
						this.$message({
							type: 'success',
							message: '成功'
						})
					}
				})
			}

			
		}
	}
</script>

<style scoped>
	@import url("porgan.css");
</style>