<template>
		
		<div class="coach-page page">
			<div class="content">
				<my-schedule></my-schedule>
				<br>
				<my-player></my-player>
				<br>

				<my-team></my-team>
				<my-course-list></my-course-list>
				<my-course-pic></my-course-pic>
				<!-- <div class="coach-crumb">
					我的排课
					<div class="coach-crumb-right">
						<button class="coach-blue">新增排课</button>
						<button  class="coach-red">上传装备文件</button>
					</div>
				</div>
				<div class="coach-page-arrang">
					<el-row>
					  <el-col :span="12">
						  <el-calendar v-model="value">
              </el-calendar>
					  </el-col>
					  <el-col :span="12">
						    <template>
							  <el-table
								:data="tablepaike"
								stripe
								style="width: 100%">
								<el-table-column
								  prop="date"
								  label="日期"
								  width="180">
								</el-table-column>
								<el-table-column
								  prop="name"
								  label="姓名"
								  width="180">
								</el-table-column>
								<el-table-column
								  prop="address"
								  label="地址">
								</el-table-column>
							  </el-table>
							</template>
					  </el-col>
					</el-row>
					
				</div>
				<div class="coach-crumb">
					我的球员 (9)
					<div class="coach-crumb-right">
						<button class="coach-blue">分组管理</button>
						<button class="coach-blue">移除球员</button>
						<button  class="coach-red">球员审核列表</button>
					</div>
				</div>
				<div class="coach-page-players">
					
					
					
					
				</div>
				<div class="coach-crumb">
					我的球队 (9)
					<div class="coach-crumb-right">
						<button class="coach-blue">新增球队</button>
						<button class="coach-blue">移除球队</button>
					</div>
				</div>
				<div>
					
					
					
					
				</div>
				<div class="coach-crumb">
					我的课程 (9)
					<div class="coach-crumb-right">
						<button class="coach-blue">新增课程</button>
						<button class="coach-blue">结束课程</button>
					</div>
				</div>
				<div class="">
					
					
					
					
					
				</div>
				<div class="coach-crumb">
					我的课程 (9)
					<div class="coach-crumb-right">
						<button class="coach-blue">查看详情</button>
					</div>
				</div>
				<div class="hasbuy display-flex-row">
					<img src="/images/hasbuyl.png" class="hasbuy-prev">
					<img src="/images/hasbuyr.png" class="hasbuy-next">
					<div class="hasbut-item">
						<img src="/images/hasbuy01.jpg">
						<p>足球基础技巧</p>
					</div>
					<div class="hasbut-item">
						<img src="/images/hasbuy02.jpg">
						<p>足球基础技巧</p>
					</div>
					<div class="hasbut-item">
						<img src="/images/hasbuy01.jpg">
						<p>足球基础技巧</p>
					</div>

				</div>
				<div class="coach-crumb">
					已购课程 (9)
				</div>
				<div class="hasbuy display-flex-row">
					<img src="/images/hasbuyl.png" class="hasbuy-prev">
					<img src="/images/hasbuyr.png" class="hasbuy-next">
					<div class="hasbut-item">
						<img src="/images/hasbuy01.jpg">
						<p>足球基础技巧</p>
					</div>
					<div class="hasbut-item">
						<img src="/images/hasbuy02.jpg">
						<p>足球基础技巧</p>
					</div>
					<div class="hasbut-item">
						<img src="/images/hasbuy01.jpg">
						<p>足球基础技巧</p>
					</div>

				</div> -->
				
			</div>
		</div>
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	</template>
	
	<script>
		import MySchedule from '../../components/coach/MySchedule'
		import MyPlayer from '../../components/coach/MyPlayer'
		import MyTeam from '../../components/coach/MyTeam'
		import MyCourseList from '../../components/coach/MyCourseList'
		import MyCoursePic from '../../components/coach/MyCoursePic'

		export default {
			components: { MySchedule, MyPlayer, MyTeam, MyCourseList, MyCoursePic },
		  data() {
		  	return {
		  		 value: new Date(),
				 tablepaike:"",
		  	}
		  },
		}
	</script>
	
	<style scoped>
		@import url("P-coach.css");
	</style>