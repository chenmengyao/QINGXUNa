<template>

<div class="coach-page page">
	<div class="content">
		<div class="coach-crumb">
			<a href="" class="back-btn"></a>
			审核列表
			<div class="coach-crumb-right">
				<button class="batchbtn">批量操作</button>
				<button class="coach-blue">审核通过</button>
				<button  class="coach-red">审核通过</button>
			</div>
		</div>
		<div class="coach-group-con auditList">
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
		      width="120">
		      <template slot-scope="scope">{{ scope.row.date }}</template>
		    </el-table-column>
		    <el-table-column
		      prop="players"
		      label="球员"
		      width="200">
		      <!--插入图片链接的代码-->
				    <template slot-scope="scope">
				    	<img  :src="scope.row.imgPath" alt="" style="width: 36px;height: 36px;margin:1px;border:1px solid #BBBDBF;vertical-align: middle;">
				      {{ scope.row.players }}
				    </template>
		    </el-table-column>
		    <el-table-column
		      prop="id"
		      label="身份证号"
		      show-overflow-tooltip>
		    </el-table-column>
		    <el-table-column
		      prop="guardian"
		      label="监护人"
		      show-overflow-tooltip>
		    </el-table-column>
		    <el-table-column
		      prop="guardianphone"
		      label="监护人手机"
		      show-overflow-tooltip>
		    </el-table-column>
		    <el-table-column
		      prop="handle"
		      label="操作"
		      show-overflow-tooltip>
		      <template slot-scope="scope">
				    	<a href="#" class="pass">审核通过</a>
				    	<a href="#" class="del">删除记录</a>
			    </template>
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
	          players: '梅哲龙',
	          imgPath:'/images/jlimg.jpg',
	          editorimgpath:'/images/p-alter.png',
	          id: '4205855544555887444',
	          guardian: '梅哲龙',
	          guardianphone: '13778859950',
	          handle: '3'
	        }, {
	          date: '02',
	          players: '梅哲龙',
	          imgPath:'/images/jlimg.jpg',
	          editorimgpath:'/images/p-alter.png',
	          id: '4205855544555887444',
	          guardian: '梅哲龙',
	          guardianphone: '13778859950',
	          handle: '3'
	        }, {
	          date: '03',
	          players: '梅哲龙',
	          imgPath:'/images/jlimg.jpg',
	          editorimgpath:'/images/p-alter.png',
	          id: '4205855544555887444',
	          guardian: '梅哲龙',
	          guardianphone: '13778859950',
	          handle: '3'
	        }, {
	          date: '04',
	          players: '梅哲龙',
	          imgPath:'/images/jlimg.jpg',
	          editorimgpath:'/images/p-alter.png',
	          id: '4205855544555887444',
	          guardian: '梅哲龙',
	          guardianphone: '13778859950',
	          handle: '3'
	        }, {
	          date: '05',
	          players: '梅哲龙',
	          imgPath:'/images/jlimg.jpg',
	          editorimgpath:'/images/p-alter.png',
	          id: '4205855544555887444',
	          guardian: '梅哲龙',
	          guardianphone: '13778859950',
	          handle: '3'
	        }, {
	          date: '06',
	          players: '梅哲龙',
	          imgPath:'/images/jlimg.jpg',
	          editorimgpath:'/images/p-alter.png',
	          id: '4205855544555887444',
	          guardian: '梅哲龙',
	          guardianphone: '13778859950',
	          handle: '3'
	        }, {
	          date: '07',
	          players: '梅哲龙',
	          imgPath:'/images/jlimg.jpg',
	          editorimgpath:'/images/p-alter.png',
	          id: '4205855544555887444',
	          guardian: '梅哲龙',
	          guardianphone: '13778859950',
	          handle: '3'
	        }],
	        multipleSelection: []
	      }
	    },

	    
	  }
</script>

<style scoped>
	@import url("P-coach.css");
</style>