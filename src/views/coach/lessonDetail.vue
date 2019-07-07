<template>

<div class="coach-page page">
	<div class="content">
		<div class="coach-crumb">
			<a href="" class="back-btn"></a>
			教案详情
			<div class="coach-crumb-right">
				<button class="coach-blue">下载教程</button>
			</div>
		</div>
		<div class="coach-lesson-con">
			<p class="lesson-con-title">{{dataForm.name}}</p>
			
			<el-form size="medium" class="detailForm" :model="dataForm" :rules="rules" ref="ruleForm">
				<el-form-item label="教练员">
					<el-input v-model="dataForm.coachName"/>
				</el-form-item>

				<el-form-item label="训练主题">
					<el-input v-model="dataForm.theme"/>
				</el-form-item>

				<el-form-item label="日期">
					<br>
					<el-date-picker
						v-model="dataForm.time"
						type="date"
						value-format="timestamp"
						placeholder="选择日期">
					</el-date-picker>
				</el-form-item>

				<el-form-item label="训练时间">
					<br>
					<el-time-picker
						value-format="timestamp"
						v-model="dataForm.duration"
						placeholder="任意时间点">
					</el-time-picker>
				</el-form-item>

				<el-form-item label="器材">
					<el-input v-model="dataForm.equipment"/>
				</el-form-item>

				<el-form-item label="出席人数" prop="count">
					<el-input v-model="dataForm.count"/>
				</el-form-item>

				<el-form-item label="组织方法">
					<el-input v-model="dataForm.method "/>
				</el-form-item>

				<el-form-item label="练习要求，要点">
					<el-input v-model="dataForm.practice"/>
				</el-form-item>

				<el-form-item>
					<el-button type="primary" @click="checkForm" v-if="!courseId">添加教案</el-button>
					<el-button type="primary" @click="checkForm" v-else>修改教案</el-button>
				</el-form-item>
			</el-form>
			
			
			
			
			
			
		</div>
		
	</div>
</div>

</template>

<script>
	import { mapActions } from 'vuex'
	import { isNumber } from '../../utils/utils'
	export default {
	  data() {
	  	return {
				key: "value",
				dataForm: {
					time: '',
					coachName: '',
					practice: '',
					method: '',
					count: '',
					equipment: '',
					theme: '',
					duration: ''
				},

				rules: {
					count: [
						{ validator: isNumber, trigger: 'blur' }
					]
				}
	  	}
		},

		computed: {
			courseId () {
				return this.$route.query.id
			}
		},

		methods: {
			...mapActions('myCourse', [
				'fetchCourseDetail',
				'addCourse',
				'editCourse'
			]),

			checkForm () {
				this.$refs.ruleForm.validate((valid) => {
					if (valid) {
						if (this.courseId) {
							this.onEdit()
						} else {
							this.onAdd()
						}

					} else {
						return false
					}
				})
			},

			getDetail () {
				const id = this.courseId
				this.fetchCourseDetail({id}).then(res => {
					const { code, data } = res
					if (code === 200) {
						this.dataForm = data || {}
						console.log(this.dataForm)
					}
				})
			},

			onAdd () {
				this.setData()
				this.addCourse(this.dataForm).then(res => {
					const { code, message } = res
					if (code === 200) {
						this.$message({
							message: message,
							type: 'success'
						})
						this.$router.push('/coach/mycourse')
					}
				})
			},

			setData () {
				Number(this.dataForm.count)
				Number(this.dataForm.duration)
				Number(this.dataForm.time)
			},

			onEdit () {
				this.setData()
				this.editCourse(this.dataForm).then(res => {
					const { code, message } = res
					if (code === 200) {
						this.$message({
							message: message,
							type: 'success'
						})
						this.$router.push('/coach/mycourse')
					}
				})
			}
		},
		
		created () {
			if (this.courseId) {
				this.getDetail()
			}
		}
	}
</script>

<style scoped>
	@import url("P-coach.css");

	.detailForm {
		width:600px;
		margin:0 auto;
	}
</style>