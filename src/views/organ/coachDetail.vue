<template>

<div class="organ-page page">
	<div class="content">
		<div class="organ-crumb">
			<a href="" class="back-btn"></a>
			教练员详情

		</div>
		<div class="organ-detail corgannopaddingb">
			<p class="title">基本资料</p>
			<div class="organ-data display-flex-row">
				<img src="/images/parcoach01.jpg"/>
				<div class="organ-con-center">
					<div class="organ-con-center-item">
						<p><span>姓名</span>萨拉赫</p>
						<p><span>学历</span>本科</p>
						<p><span>毕业院校</span>广东工业大学</p>
						<p><span>联系电话</span>134967897465</p>
						<p><span>微信</span>134967897465</p>
						
					</div>
					<div class="organ-con-center-item">
						<p><span>邮箱</span>13496789746@163.com</p>
						<p><span>证件号码</span>465464153154712301</p>
						<p><span>联系地址</span>广东省深圳市</p>
						<p><span>语言能力</span>英语 听说良好 书写良好</p>
						<p><span>鞋码</span>43</p>
					</div>

				</div>
				
				
				
			</div>
			
			<p class="title">证书</p>
			<div class="organ-book display-flex-row">
				<div class="organ-book-item">
					<img src="/images/book01.jpg"/>
				</div>
				<div class="organ-book-item">
					<img src="/images/book02.jpg"/>
				</div>
				<div class="organ-book-item">
					<img src="/images/book03.jpg"/>
				</div>
			</div>
			
			<p class="title">课程</p>
			<div class="hasbuy display-flex-row">
				<img src="/images/hasbuyl.png" class="hasbuy-prev">
				<img src="/images/hasbuyr.png" class="hasbuy-next">
				<div class="hasbut-item">
					<img src="/images/hasbuy01.jpg">
				</div>
				<div class="hasbut-item">
					<img src="/images/hasbuy02.jpg">
				</div>
				<div class="hasbut-item">
					<img src="/images/hasbuy01.jpg">
				</div>
			</div>
			<p class="title">教案</p>
			<div class="hasbuy display-flex-row">
				<img src="/images/hasbuyl.png" class="hasbuy-prev">
				<img src="/images/hasbuyr.png" class="hasbuy-next">
				<div class="hasbut-item">
					<img src="/images/hasbuy01.jpg">
				</div>
				<div class="hasbut-item">
					<img src="/images/hasbuy02.jpg">
				</div>
				<div class="hasbut-item">
					<img src="/images/hasbuy01.jpg">
				</div>
			</div>
			<p class="title">球员</p>
			</div>
			<el-table
				:header-cell-style="{background:'#F7F7F7',color:'#333333'}"
			    ref="multipleTable"
			    :data="tableData"
			    stripe
			    tooltip-effect="dark"
			    style="width: 100%"
			    @selection-change="handleSelectionChange">
			    <el-table-column
			      width="55">
			    </el-table-column>
			    <el-table-column
			      label="序号"
			      width="120">
			      <template slot-scope="scope">{{ scope.row.date }}</template>
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="教练"
			      width="200">
			      <!--插入图片链接的代码-->
					    <template slot-scope="scope">
					    	<img  :src="scope.row.imgPath" alt="" style="width: 36px;height: 36px;margin:1px;border:1px solid #BBBDBF;vertical-align: middle;">
					      {{ scope.row.name }}
					      
					    </template>
			    </el-table-column>
			    <el-table-column
			      prop="level"
			      label="年龄"
			      show-overflow-tooltip>
			    </el-table-column>
			    <el-table-column
			      prop="post"
			      label="擅长位置"
			      show-overflow-tooltip>
			    </el-table-column>
			    <el-table-column
			      prop="course"
			      label="伤病"
			      show-overflow-tooltip>
			    </el-table-column>
			    <el-table-column
			      prop="team"
			      label="课程"
			      show-overflow-tooltip>
			    </el-table-column>
			    <el-table-column
			      prop="star"
			      label="分组"
			      show-overflow-tooltip>
			    </el-table-column>
			  </el-table>
			  <div class="organ_pagination">
				  	<el-pagination
				  	:hide-on-single-page="value"
					background
				      @size-change="handleSizeChange"
				      @current-change="handleCurrentChange"
				      :current-page="currentPage4"
				      :page-size="5"
				      layout="total, prev, pager, next"
				      :total="462">
				    </el-pagination>
			  </div>
			
			
			
		</div>
		
		
		
</div>

</template>
<script>
	export default {
		methods: {
		handleClick(row) {
	        console.log(row);
	      },
	      handleSizeChange(val) {
	        console.log(`每页 ${val} 条`);
	      },
	      handleCurrentChange(val) {
	        console.log(`当前页: ${val}`);
	      }
	    },
		data() {
	      return {
	        tableData: [{
	          date: '01',
	          name: '王小虎',
	          imgPath:'/images/jlimg.jpg',
	          level: '22',
	          post: '前锋',
	          course: '韧带拉伤',
	          team: '3',
	          star: 'U9'
	        }, {
	          date: '02',
	          name: '王小虎',
	          imgPath:'/images/jlimg.jpg',
	          level: '22',
	          post: '前锋',
	          course: '韧带拉伤',
	          team: '3',
	          star: 'U9'
	        }, {
	          date: '03',
	          name: '王小虎',
	          imgPath:'/images/jlimg.jpg',
	          level: '22',
	          post: '前锋',
	          course: '韧带拉伤',
	          team: '3',
	          star: 'U9'
	        }, {
	          date: '04',
	          name: '王小虎',
	          imgPath:'/images/jlimg.jpg',
	          level: '22',
	          post: '前锋',
	          course: '韧带拉伤',
	          team: '3',
	          star: 'U9'
	        }, {
	          date: '05',
	          name: '王小虎',
	          imgPath:'/images/jlimg.jpg',
	          level: '22',
	          post: '前锋',
	          course: '韧带拉伤',
	          team: '3',
	          star: 'U9'
	        }, {
	          date: '06',
	          name: '王小虎',
	          imgPath:'/images/jlimg.jpg',
	          level: '22',
	          post: '前锋',
	          course: '韧带拉伤',
	          team: '3',
	          star: 'U9'
	        }, {
	          date: '07',
	          name: '王小虎',
	          imgPath:'/images/jlimg.jpg',
	          level: '22',
	          post: '前锋',
	          course: '韧带拉伤',
	          team: '3',
	          star: 'U9'
	        }],
	        multipleSelection: []
	      }
	    },

	    
	  }
</script>

<style scoped>
	@import url("porgan.css");
	@import url("/css/swiper.min.css");
	
</style>