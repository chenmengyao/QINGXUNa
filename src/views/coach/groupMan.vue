<template>

	<div class="coach-page page">
			<div class="content">
				<div class="coach-crumb">
					<a href="" class="back-btn"></a>
					分组管理
					<div class="dowmzj">
						<el-select v-model="value" placeholder="默认排序">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						  </el-select>
					</div>
					快速查询
					<div class="dowmzj">
						<el-input v-model="input" placeholder="请输入手机号或姓名"></el-input>
					</div>
					<button class="groupQuery">查询</button>
					<div class="coach-crumb-right">
						<button class="coach-blue">移除球员</button>
						<button  class="coach-red">球员审核列表</button>
					</div>
				</div>
				<div class="coach-group-con">
					<el-table
			:header-cell-style="{background:'#F7F7F7',color:'#333333'}"
		    ref="multipleTable"
		    :data="tableData"
		    stripe
		    tooltip-effect="dark"
		    style="width: 100%"
		    @selection-change="handleSelectionChange">
		    <el-table-column
		      type="selection"
		      width="55">
		    </el-table-column>
		    <el-table-column
		      label="序号"
		      width="80">
		      <template slot-scope="scope">{{ scope.row.date }}</template>
		    </el-table-column>
		    <el-table-column
		      prop="players"
		      label="球员"
		      width="150">
		      <!--插入图片链接的代码-->
				    <template slot-scope="scope">
				    	<img  :src="scope.row.imgPath" alt="" style="width: 36px;height: 36px;margin:1px;border:1px solage #BBBDBF;vertical-align: middle;">
				      {{ scope.row.players }}
				    </template>
		    </el-table-column>
		    <el-table-column
		      prop="age"
		      label="年龄"
		      show-overflow-tooltip>
		    </el-table-column>
		    <el-table-column
		      prop="number"
		      label="号码"
		      show-overflow-tooltip>
		    </el-table-column>
		    <el-table-column
		      prop="good"
		      label="擅长位置"
		      show-overflow-tooltip>
		    </el-table-column>
		    <el-table-column
		      prop="comp"
		      label="综合能力"
		      show-overflow-tooltip>
		    </el-table-column>
		    <el-table-column
		      prop="course"
		      label="课程"
		      show-overflow-tooltip>
		    </el-table-column>
		    <el-table-column
		      prop="group"
		      label="分组"
		      show-overflow-tooltip>
		    </el-table-column>
		    <el-table-column
		      prop="injury"
		      label="伤病备注"
		      show-overflow-tooltip>
		      <template slot-scope="scope">
			    	<span style="color:#C60818;">{{ scope.row.injury }}</span>
			    </template>
		    </el-table-column>
		    <el-table-column
		      prop="handle"
		      label="操作"
		      show-overflow-tooltip>
		      <template slot-scope="scope">
				    	<a href="#" class="look">查看详情</a>
			    </template>
		    </el-table-column>
		  </el-table>
			 <div class="organ_pagination">
				  	<el-pagination
				  	:hagee-on-single-page="value"
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
	      	options: [{
	          value: '选项1',
	          label: '黄金糕'
	        }, {
	          value: '选项2',
	          label: '双皮奶'
	        }, {
	          value: '选项3',
	          label: '蚵仔煎'
	        }, {
	          value: '选项4',
	          label: '龙须面'
	        }, {
	          value: '选项5',
	          label: '北京烤鸭'
	        }],
	        tableData: [{
	          date: '01',
	          players: '梅哲龙',
	          imgPath:'/images/jlimg.jpg',
	          editorimgpath:'/images/p-alter.png',
	          age: '28',
	          number:'02',
	          good: '门将',
	          comp:'88',
	          course: '3',
	          group:'U9',
	          injury:'韧带拉伤'
	        }, {
	          date: '02',
	          players: '梅哲龙',
	          imgPath:'/images/jlimg.jpg',
	          editorimgpath:'/images/p-alter.png',
	          age: '28',
	          number:'02',
	          good: '门将',
	          comp:'88',
	          course: '3',
	          group:'U9',
	          injury:'韧带拉伤'
	        }, {
	          date: '03',
	          players: '梅哲龙',
	          imgPath:'/images/jlimg.jpg',
	          editorimgpath:'/images/p-alter.png',
	          age: '28',
	          number:'02',
	          good: '门将',
	          comp:'88',
	          course: '3',
	          group:'U9',
	          injury:'韧带拉伤'
	        }, {
	          date: '04',
	          players: '梅哲龙',
	          imgPath:'/images/jlimg.jpg',
	          editorimgpath:'/images/p-alter.png',
	          age: '28',
	          number:'02',
	          good: '门将',
	          comp:'88',
	          course: '3',
	          group:'U9',
	          injury:'韧带拉伤'
	        }, {
	          date: '05',
	          players: '梅哲龙',
	          imgPath:'/images/jlimg.jpg',
	          editorimgpath:'/images/p-alter.png',
	          age: '28',
	          number:'02',
	          good: '门将',
	          comp:'88',
	          course: '3',
	          group:'U9',
	          injury:'韧带拉伤'
	        }, {
	          date: '06',
	          players: '梅哲龙',
	          imgPath:'/images/jlimg.jpg',
	          editorimgpath:'/images/p-alter.png',
	          age: '28',
	          number:'02',
	          good: '门将',
	          comp:'88',
	          course: '3',
	          group:'U9',
	          injury:'韧带拉伤'
	        }, {
	          date: '07',
	          players: '梅哲龙',
	          imgPath:'/images/jlimg.jpg',
	          editorimgpath:'/images/p-alter.png',
	          age: '28',
	          number:'02',
	          good: '门将',
	          comp:'88',
	          course: '3',
	          group:'U9',
	          injury:'韧带拉伤'
	        }],
	        value: '',
	        multipleSelection: []
	      }
	    },

	    
	  }
</script>

<style scoped>
		@import url("P-coach.css");
</style>
