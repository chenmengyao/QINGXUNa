<template>

		<div class="P-parents page">
			<div class="content">
				<div class="parents-crumb">
					<a href="" class="back-btn"></a>
					课程详情
					<div class="read-deta">
						考勤
					</div>
				</div>
				<div class="coach-detail-con">
					<p>足球基本知识</p>
					<img src="/images/coach.jpg" />
					<pre>
小学一年级《熟悉球感》
技能目标：让70%学生掌握原地双脚交替踩踏球和脚内侧来回推球。
情感目标：让学生体验足球的快乐，培养学生参加足球课的兴趣。
准备部分 时间： 10分钟
热身（1）：教师召集学生集合，检查人数，安排见习生，布置本科任务并讲解注意事项。通过慢跑主要关节活动和肌肉伸展性活动，达到基本热身的目的。也可以
在游戏性活动中穿插上述内容。
热身（2）：
名称：“占领地盘”游戏。
器材：标志物、标志服、足球若干。
人数：约10人一组，可考虑指定一名小组长。
场地：约10米*10米，可视实际情况略作调整。
方法：
1.每人1球，在场地内进行自由（手或脚）运球，场地内标志物比运球人数少一个。
2.当教师举手示意，每名学生迅速靠近地面上的标志物，将球放置在标志物上，视为占领，标志物不能改变原有位置。
                        </pre>
                        <div class="tablebox">
							<el-table
						    :data="tableData"
						    :header-cell-style="{background:'#F7F7F7',color:'#333333'}"
						    stripe
						    style="width: 100%">
						    <el-table-column
						      type=""
						      width="55">
						    </el-table-column>
						    <el-table-column
						      prop="date"
						      label="时间"
						      width="180">
						    </el-table-column>
						    <el-table-column
						      prop="date1"
						      label="7月1日"
						      width="">
						    </el-table-column>
						    <el-table-column
						      prop="date2"
						      label="7月2日">
						    </el-table-column>
						    <el-table-column
						      prop="date3"
						      label="7月3日">
						    </el-table-column>
						    <el-table-column
						      prop="date4"
						      label="7月4日">
						    </el-table-column>
						    <el-table-column
						      prop="date5"
						      label="7月5日">
						    </el-table-column>
						    <el-table-column
						      prop="date6"
						      label="7月6日">
						    </el-table-column>
						    <el-table-column
						      prop="date7"
						      label="7月7日">
						    </el-table-column>
						  </el-table>
						  <div class="note">
								备注:
							</div>
				  </div>
				
                    



					<button class="read-course">编辑课程</button>
				</div>


			</div>
		</div>

</template>

<script>
	export default {
	  data() {
	  	return {
	  		tableData: [{
	          date: '09:00-10:00',
	          date1: '热身',
	          date2: '热身',
	          date3: '热身',
	          date4: '休息',
	          date5: '热身',
	          date6: '热身',
	          date7: '热身'
	        }, {
	          date: '10:00-11:00',
	          date1: '守门训练',
	          date2: '守门训练',
	          date3: '热身',
	          date4: '休息',
	          date5: '热身',
	          date6: '热身',
	          date7: '热身'
	        }, {
	          date: '09:00-10:00',
	          date1: '守门训练',
	          date2: '守门训练',
	          date3: '热身',
	          date4: '休息',
	          date5: '热身',
	          date6: '热身',
	          date7: '热身'
	        }, {
	          date: '10:00-11:00',
	          date1: '守门训练',
	          date2: '守门训练',
	          date3: '热身',
	          date4: '休息',
	          date5: '热身',
	          date6: '热身',
	          date7: '热身'
	        }]
	  	}
	  },
	}
</script>

<style scoped>
	@import url("P-coach.css");
</style>