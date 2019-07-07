<template>
	<div class="P-parents page">
		<div class="content">
			<div class="parents-crumb">课程表</div>
			<div>
				<my-ke-cheng-list/>
			</div>

			<div class="parents-crumb">
				我的资料
			</div>
			<p style="text-align:right;padding-right: 44px;padding-top: 20px;" @click="$router.push({path:'/parent/editor'})">编辑资料</p>
			<div class="coach-con">
				<img :src="'http://139.155.113.181/file'+myInfo.imgs" style="width:180px;"/>
				<div class="coach-con-center">
					<div class="coach-con-center-item">
						<p><span>姓名</span>{{myInfo.name}}</p>
						<p><span>年龄</span>{{myInfo.age}}</p>
						<p><span>性别</span>{{myInfo.sex==='1'?'男':myInfo.sex==='2'?'女':'未知'}}</p>
						<p><span>身高</span>{{myInfo.height}}</p>
						<p><span>体重</span>{{myInfo.weight}}</p>
						<p><span>教练</span>{{myInfo.coachName}}</p>
						<p><span>机构</span>{{myInfo.mechanismName}}</p>
					</div>
					<div class="coach-con-center-item">
						<p><span>梯队</span></p>
						<p><span>伤病</span><span>{{myInfo.woundLogs}}</span></p>
						<p><span>球员技巧</span>{{myInfo.skillName}}</p>
						<p><span>球员风格</span>{{myInfo.styleName}}</p>
						<p><span>队伍</span><span>{{myInfo.teamName}}</span></p>
					</div>

				</div>
				<div class="coach-con-right" style="padding-right:0;">
					<p>综合能力{{myInfo.sumScoure}}</p>
			<div id="myChart" style="height:300px;width:500px"></div>
				</div>
			</div>
			<div class="parents-crumb">
				我的资料
			</div>
			<div class="parents-score">
				<div v-for="(item,index) in remarks" :key="index">
					<div class="parents-score-num">
						<span class="power">{{item.name}}</span>
						<span class="num-name">得分</span>
						<span class="num">{{item.score}}</span>
					</div>
					<div class="parents-score-speed" style="display:flex;flex-wrap:wrap;">
						<div class="num-item"  v-for="(res,indexs) in item.list" :key="indexs">
							<div class="display-flex-row">
								{{res.name}}
								<div class="display-flex-column" style="font-size:0;">
									<input type="text" :value="res.score" readonly="" />
									<div class="progress">
										<el-progress text-inside="true" :percentage="Number(res.score)"></el-progress>
									</div>
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</div>

			<div class="parents-crumb">我的课程</div>
			<div><my-course-list/></div>

			<div class="parents-crumb">已购课程</div>
			<div>
				<MyCoursePic/>
			</div>
			<div class="parents-crumb">我的建议</div>
			<div class="parent-advice" v-for="(item,index) in sugList" :key="index">
				<h5>饮食建议</h5>
				<pre class="parent-advice-con">
					{{item.content}}
				</pre>
				<p class="parent-advice-time">{{forDate(item.updateTime,'Y-M-D h:m:s')}}</p>
			</div>
			<el-pagination
				background
				style="float:right"
				@current-change="pageChange"
				layout="prev, pager, next"
				:total="suggestionsData.total">
			</el-pagination>
			<div class="clear"></div>

		</div>

	</div>
</template>

<script>
		import { mapActions, mapState } from 'vuex'
		import {getTbility} from "../../api/api/coach.js";
		import MyKeChengList from '../../components/player/MyKeChengList'
		import MyCourseList from '../../components/player/MyCourseList'
		import MyCoursePic from '../../components/player/MyCoursePic'
		import {forDate} from '../../utils/utils.js'
		export default {
			components: { MyKeChengList, MyCourseList, MyCoursePic },
			data() {
					return {
						tableData: [],
						value: '',
						multipleSelection: [],
						myInfo: {

						},
						remarks:[],

						// 饮食 分页数据
						suggestionsData: {
							pageSize:10,
							pageNum:1,
							total:0
						},

						sugList: []   // 饮食建议
					}
			},

			computed: {
				...mapState('Login', [
					'userStatus'
				]),
			},
			created () {
				this.getMyInfo()
				this.getMyInfo2()
				this.getsuggestions()
				this.getTbilitys()
			},
	    methods: {
			forDate,
				...mapActions('ScheduleCard', [
					'fetchMyInfo',
					'fetchMyInfo2',
					'suggestions'
				]),
				getTbilitys(){				
					getTbility({id:7,pageSize:0,pageNum:0}).then(res=>{
						console.log(res,7877)
						const { code, data:{list} } = res;
						if (code === 200 && list) {
							console.log(list,666)
							this.remarks=list || [];
						}
					})
				},
				//我的资料 表
				getMyInfo () {
					let id = Number(this.userStatus.statusId)
					this.fetchMyInfo2({id}).then(res => {
						const { code, data } = res
						if (code === 200 && data) {
							this.myInfo = data;
							this.drawLine()
						}
					})
				},

				getpingfen () {
					let id = this.id
					this.huoqupingfen({id}).then(res => {
						this.pingfen = res.data.list
					})
				},

				// 饮食建议
				getsuggestions () {
					this.suggestionsData.playerId = Number(this.userStatus.statusId)
					this.suggestions(this.suggestionsData).then(res => {
						const { code, data, data:{list, total}} = res
						if (code === 200 && data) {
							this.sugList = list
							this.suggestionsData.total = Number(total)
						}
					})
				},

				getMyInfo2 () {
					let id = Number(this.userStatus.statusId)
					this.fetchMyInfo2({id}).then(res => {

						const { code, data } = res
						if (code === 200 && data) {

						}
					})
				},

				pageChange (val) {
					this.suggestionsData.pageNum = val
					this.getsuggestions()
				},
				// 图表
				drawLine(){
					let valueList =[];
					let nameList=[];
					let myChart = this.$echarts.init(document.getElementById('myChart'));
					this.myInfo.list.forEach(element => {
						let obj ={
							text:element.name,
							max:100
						}
						nameList.push(obj)
						valueList.push(element.score)
					});
					let data = {
						tooltip : {
							trigger: 'axis'
						},
						legend: {
							orient : 'vertical',
							x : 'right',
							y : 'bottom',
							data:['预算分配（Allocated Budget）','实际开销（Actual Spending）']
						},
						toolbox: {
							show : true,
							feature : {
								// mark : {show: true},
								// dataView : {show: true, readOnly: false},
								// restore : {show: true},
								saveAsImage : {show: true}
							}
						},
						polar : [{
							indicator: nameList
						}],
						calculable : true,
						series : [{
							name: '预算 vs 开销（Budget vs spending）',
							type: 'radar',
							data : [{
								value : valueList,
								name : '速度'
							}]		
						}]
					};
					myChart.setOption(data);
				}
			},

			

			

	  }
</script>

<style scoped>
	@import url("P-parents.css");
</style>