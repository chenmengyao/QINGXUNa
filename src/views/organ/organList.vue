<template>

<div class="organ-page page">
			<div class="content">
				<div class="organ-crumb">
					<!-- <a href="" class="back-btn"></a>
					审核列表 -->
					<div class="organ-crumb-right">
						<button class="batchbtn">批量操作</button>
						<button class="organ-blue" @click="tongguo">审核通过</button>
						<button  class="organ-red" @click="shanchu">删除记录</button>
					</div>
				</div>
				
				<div>
					<el-radio-group v-model="dataForm.type" style="margin: 50px 0 50px 500px" @change="typeChange">
						<el-radio-button label="coach">教练</el-radio-button>
						<el-radio-button label="player">球员</el-radio-button>
					</el-radio-group>
				</div>


          <el-table
            ref="multipleTable"
            stripe
            :data="tableList"
            style="width: 100%"
						@selection-change="selectChange"
          >

          <el-table-column type="selection"width="55"/>
          
          <el-table-column
            label="序号"
            type="index"
            width="50"
            align="center"/>

          <el-table-column
            v-for="(item, index) in header"
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
          />

          <el-table-column label="操作">
            <template slot-scope="scope">
              <span class="inDetail organ-blue" @click="onSUccess(scope)" style="color:#2D64B3">审核通过</span>&nbsp;
              <span class="inDetail organ-red" @click="onDelete(scope)" style="color:#C60818">删除记录</span>
            </template>
          </el-table-column>
          </el-table>
					
					<br>
					<br>

					<br>

				          <el-pagination
            background
            style="float:right"
            @current-change="pageChange"
            layout="prev, pager, next"
            :total="dataForm.total">
          </el-pagination>
				
				
			</div>
		</div>

</template>


<script>
import { mapActions } from 'vuex'
import { isString } from 'util';
const header3 = [
  { prop: 'name', label: '教练' },
  { prop: 'imgs', label: '足球教练证书' },
  { prop: 'leaderNo', label: '证件号码' },
  { prop: 'phone', label: '联系电话' },
]

const header1 = [
  { prop: 'name', label: '球员' },
  { prop: 'guardianName', label: '监护人' },
  { prop: 'leaderNo', label: '证件号码' },
  { prop: 'guardianPhone', label: '监护人电话' },
]

	  export default {
    data() {
      return {
				activeName: 'second',
				header: null,
				header1,
				header3,
				tableList: [
					// {id: 1, name: 'adsfsd'}
				],
				dataForm: {
					type:'',
					pageNum: 1,
					pageSize:10,
					total:0
				},

				selectList:[]
      };
		},
		
		created () {
			this.header = header3
		},

    methods: {
			...mapActions('organ', [
				'typeListJL',
				'typeListQY',
				'successJL',
				'successQY',
				'deleteJL',
				'deleteQY'
			]),

			tongguo () {
				if (!this.dataForm.type || this.selectList.length === 0) return false
				const { type } = this.dataForm
				let ids = this.selectList
				if (type === 'coach') {
					this.successJL({ids}).then(res => {
						const { code } = res
						if (code === 200) {
							this.$message({
								message: '成功',
								type: 'success'
							})

							this.dataForm.pageNum = 1
							this.getCoach()
						}
					})
				} else {
					this.successQY({ids}).then(res => {
						const { code } = res
						if (code === 200) {
							this.$message({
								message: '成功',
								type: 'success'
							})

							this.dataForm.pageNum = 1
							this.getCoach()
						}
					})
				}
			},

			shanchu () {
				if (!this.dataForm.type || this.selectList.length === 0) return false
				const { type } = this.dataForm
				let ids = this.selectList

      this.$confirm(`是否删除？`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
				if (type === 'coach') {
					this.deleteJL({ids}).then(res => {
						const { code } = res
						if (code === 200) {
							this.$message({
								message: '成功',
								type: 'success'
							})

							this.dataForm.pageNum = 1
							this.getCoach()
						}
					})
				} else {
					this.deleteQY({ids}).then(res => {
						const { code } = res
						if (code === 200) {
							this.$message({
								message: '成功',
								type: 'success'
							})

							this.dataForm.pageNum = 1
							this.getCoach()
						}
					})
				}
			})


			},

			selectChange (val) {
				let arr = []
				val.forEach(item => {
					arr.push(item.id)
				})
				this.selectList = arr
			},


			typeChange (val) {
				this.dataForm.pageNum = 1
				if (val === 'coach') {
					this.getCoach()
				} else {
					this.getPlay()
				}
			},

			pageChange (val) {
				this.dataForm.pageNum = val
				if (this.dataForm.type === 'coach') {
					this.getCoach()
				} else {
					this.getPlay()
				}
			},

			onSUccess (scope) {
				const { id } = scope.row
				const { type } = this.dataForm
				let ids = [id]
				if (type === 'coach') {
					this.successJL({ids}).then(res => {
						const { code } = res
						if (code === 200) {
							this.$message({
								message: '成功',
								type: 'success'
							})

							this.dataForm.pageNum = 1
							this.getCoach()
						}
					})
				} else {
					this.successQY({ids}).then(res => {
						const { code } = res
						if (code === 200) {
							this.$message({
								message: '成功',
								type: 'success'
							})

							this.dataForm.pageNum = 1
							this.getCoach()
						}
					})
				}
			},

			onDelete (scope) {
				const { id } = scope.row
				const { type } = this.dataForm
				let ids = [id]

				this.$confirm(`是否删除？`, '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
				if (type === 'coach') {
					this.deleteJL({ids}).then(res => {
						const { code } = res
						if (code === 200) {
							this.$message({
								message: '成功',
								type: 'success'
							})

							this.dataForm.pageNum = 1
							this.getCoach()
						}
					})
				} else {
					this.deleteQY({ids}).then(res => {
						const { code } = res
						if (code === 200) {
							this.$message({
								message: '成功',
								type: 'success'
							})

							this.dataForm.pageNum = 1
							this.getCoach()
						}
					})
				}
				})


			},

			getCoach () {
				this.header = header3
				this.typeListJL(this.dataForm).then(res => {
					const { code, data, data:{list, total}} = res
					if (code === 200 && data) {
						this.tableList = list
						this.tableList.total = Number(total)
					}
				})
			},

			getPlay () {
				this.header = header1
				this.typeListQY(this.dataForm).then(res => {
					const { code, data, data:{list, total}} = res
					if (code === 200 && data) {
						this.tableList = list
						this.tableList.total = Number(total)
					}
				})
			},

      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style scoped>
	@import url("porgan.css");
</style>