<template>
		<div class="P-parents page">
			<div class="content">
				<div class="parents-crumb">
					<a href="" class="back-btn"></a>
					  教练资料
					<div class="read-deta">
						编辑资料
					</div>
				</div>
				<div class="p-parcoach-detail my-deta-con">
					<p class="title">基本资料</p>
					<div class="p-parcoach-data display-flex-row">
						<div class="display-flex-column">
							<img :src="datalist.imgs"/>
							<div class="display-flex-row star-rate">
								<div>星级：</div>
								<div class="date-star">
									<!-- <el-rate v-model="value1"></el-rate> -->
								</div>
							</div>
							
						</div>
						
						<div class="coach-con-center">
							<div class="coach-con-center-item">
								<p><span>姓名</span>{{datalist.name }}</p>
								<p><span>学历</span>{{datalist.xl  }}</p>
								<p><span>毕业院校</span>{{datalist.graduatedFrom }}</p>
								<p><span>联系电话</span>{{datalist.phone }}</p>
								<p><span>微信</span>{{datalist.weChatNo}}  <strong>已绑定</strong></p>
								<p><span>教练等级</span>{{datalist.coachLevel}} </p>
							</div>
							<div class="coach-con-center-item">
								<p><span>邮箱</span>{{datalist.mail}} </p>
								<p><span>证件号码</span>{{datalist.leaderNo}} </p>
								<p><span>联系地址</span>{{datalist.address}} </p>
								<p><span>语言能力</span>{{datalist.yy}}  </p>
								<p><span>机构</span>{{datalist.mechanismId}} </p>
								<p><span>座右铭</span>接受失败，但不选择放弃</p>
							</div>
	
						</div>
						
						
						
					</div>
					
					<div class="mydate-cv">
						履历:
					</div>
					
					<div class="mydate-cv-list">
						<div class="mydate-cv-item" v-for="item in 6">
							<span>{{item.startTime }}至2{{item.createTime}}</span>
							{{item.address}} {{item.position}}
						</div>
					</div>
					
				</div>
				
				
				
			</div>
		</div>
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	</template>
	
	<script>
	import { mapActions, mapState } from 'vuex'
	export default {
		data () {
			return {
				datalist: {},
				value1: ''
			}
		},

		computed: {
			...mapState('Login', [
				'userStatus'
			]),

			id () {
				return this.userStatus.id
			}
		},

		methods:{
			...mapActions('coachTraining', [
				'fetchMydate'
			]),

			fetchDate () {
				let id = this.id
				this.fetchMydate({id}).then(res => {
					const { code } = res
					if (code === 200) {
						this.datalist = data
					}
				})
			}
		},

		created () {
			this.fetchDate()
		}
	}
	</script>
	
	
	<style scoped>
		@import url("P-coach.css");
	</style>