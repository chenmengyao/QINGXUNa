<template>
	<div class="P-parents page parents ">
		<div class="content">
			<div class="parents-crumb">
				<a href="" class="back-btn"></a>编辑资料
			</div>
			<div class="p-editor-con">
				<el-form :label-position="labelPosition" label-width="90px" :model="formLabelAlign">

					<el-form-item label="照片" prop="nikename" class="p-editor-con-img">
						<div style="width: 180px; height:240px;margin-right:20px;" v-if="formLabelAlign.imgs"><img :src="'http://139.155.113.181/file'+formLabelAlign.imgs" style="width:100%;height:100%;"/></div>
						<el-upload
							class="el-upload el-upload--picture-card"
							action="/"
							:show-file-list="false"
							:before-upload='beforeUpload'
							:http-request="upload">
							<i class="el-icon-plus"></i>
						</el-upload>
					</el-form-item>
				<el-form-item label="姓名">
					<el-input v-model="formLabelAlign.name" placeholder="请输入姓名"></el-input>
				</el-form-item>
				<el-form-item label="身高">
					<el-input v-model="formLabelAlign.height" placeholder="请输入身高"></el-input>
				</el-form-item>
				<el-form-item label="体重">
					<el-input v-model="formLabelAlign.weight" placeholder="请输入体重"></el-input>
				</el-form-item>
				<el-form-item label="年龄">
					<el-input v-model="formLabelAlign.age" placeholder="请输入年龄"></el-input>
				</el-form-item>
				<el-form-item label="在读学校">
					<el-input v-model="formLabelAlign.school" placeholder="请输入在读学校"></el-input>
				</el-form-item>
				<el-form-item label="在读年级">
					<el-input v-model="formLabelAlign.zd" placeholder="请输入在读年级"></el-input>
				</el-form-item>
				<el-form-item label="在读班级">
					<el-input v-model="formLabelAlign.clas" placeholder="请输入在读班级"></el-input>
				</el-form-item>
				<el-form-item label="身份证号">
					<el-input v-model="formLabelAlign.leaderNo" placeholder="请输入身份证号"></el-input>
				</el-form-item>
				<el-form-item label="监护人姓名">
					<el-input v-model="formLabelAlign.guardianName" placeholder="请输入监护人姓名"></el-input>
				</el-form-item>
				<el-form-item label="监护人电话">
					<el-input v-model="formLabelAlign.guardianPhone" placeholder="请输入监护人电话"></el-input>
				</el-form-item>
				<el-form-item label="监护人微信">
					<el-input v-model="formLabelAlign.guardianWeChatNo" placeholder="请输入监护人微信"></el-input>
				</el-form-item>
				<el-form-item label="机构地址" prop="addressInfo">
					<el-select v-model="formLabelAlign.province" placeholder="省/直辖市" @change="changeshen(this)">
						<el-option
						v-for="item in ruleForm.province"
						:key="item.n"
						:label="item.n"
						:value="item.n">
					</el-option>
				</el-select>
				
				<el-select v-model="formLabelAlign.city" placeholder="市" @change="changeshi(this)">
					<el-option
					v-for="item in ruleForm.city"
					:key="item.n"
					:label="item.n"
					:value="item.n">
				</el-option>
			</el-select>
			
			<el-select v-model="formLabelAlign.district" placeholder="县/区">
				<el-option
				v-for="item in ruleForm.district"
				:key="item.n"
				:label="item.n"
				:value="item.n">
			</el-option>
		</el-select>
		<el-input style="margin-top: 10px;" v-model="formLabelAlign.address" placeholder="请输入详细地址"></el-input>
	</el-form-item>


	<el-form-item label="履历">
		<div v-for="(item,index) in list" :key="index">
			<div class="display-flex-row editor-cv">
				<span class="time">{{forDate(item.startTime,'Y-M-D h:m:s')}}至{{forDate(item.endTime,'Y-M-D h:m:s')}}</span>
				<span>{{item.position}}</span>
			</div>
			<div>
				{{item.经历}}
			</div>
		</div>
		<button class="editor-add" @click="add">添加</button>
	</el-form-item>

	<el-form-item label="" v-if="display">
		<div class="editor-add-con">
			<el-form :label-position="labelPosition" label-width="80px" :model="record">
				<el-form-item label="时间">
					<el-date-picker
					v-model="value1"
					type="daterange"
					range-separator="至"
					start-placeholder="开始日期"
					end-placeholder="结束日期">
				</el-date-picker>

			</el-form-item>
			<el-form-item label="地点">
				<el-input v-model="record.address" size="small" placeholder="请输入地点"></el-input>
			</el-form-item>
			<el-form-item label="球队位置">
				<el-input v-model="record.position" size="small" placeholder="请输入地点"></el-input>
			</el-form-item>
			<el-form-item label="经历">
				<el-input
				type="textarea"
				:autosize="{ minRows: 2, maxRows: 4}"
				placeholder="请输入内容"
				v-model="record.info">
			</el-input>
		</el-form-item>
		<el-form-item label="">
			<button class="editor-addbtn" @click="confirm">确定</button>
		</el-form-item>
		
	</el-form>




</div>
</el-form-item>





<el-form-item label="服装尺码">
	<el-input v-model="formLabelAlign.fzName" placeholder="XS"></el-input>
</el-form-item>
<el-form-item label="鞋码">
	<el-input v-model="formLabelAlign.shoeSize" placeholder="请输入鞋码"></el-input>
</el-form-item>
<el-form-item label="旧密码">
	<el-input v-model="formLabelAlign.password" placeholder="请输入旧密码"></el-input>
</el-form-item>
<el-form-item label="新密码">
	<el-input v-model="formLabelAlign.passwordNew2" placeholder="请输入新密码"></el-input>
</el-form-item>
<el-form-item label="确认密码">
	<el-input v-model="formLabelAlign.passwordNew1" placeholder="请再次输入密码"></el-input>
</el-form-item>
<el-form-item label="">
	<div class="editorbtn-box">
		<button class="save" @click="onSave">保存</button>
		<button class="cacel">取消</button>
	</div>
</el-form-item>
</el-form>









</div>



</div>
</div>



</template>

<script>
import { mapActions,mapState } from 'vuex';
import {coachGet,addResume,getResume} from "../../api/api/coach.js";
import { getChunk } from '../../api/api/index.js';
import  citydata  from '../../assets/cityData.min.json';
import {forDate} from '../../utils/utils.js'

export default {
	data() {
		return {
			labelPosition: 'right',
			formLabelAlign: {
				name: '',
				region: '',
				type: '',
				password:'',
				passwordNew2:'',
				passwordNew:'',
				imgs:'',
				address:''
			},
			record:{
				startTime:'',
				endTime:'',
				address :'',
				position:'',
				info:''
			},

			list:[],
			ruleForm: {
				province:[],
				city:[],
				district:[],
			},
			value1: '',
			display: false
		};
	},
	created() {
		this.init()
	},
	computed: {
		...mapState('Login', [
			'userStatus'
		]),
	},
	methods: {
		...mapActions('ScheduleCard', [
			'editorData',
			'fetchMyInfo'
		]),
		forDate,
		init(){
			this.fetchMyInfo({id:Number(this.userStatus.statusId)}).then(res=>{
				const { code, data } = res
				if(code === 200 && data){
					this.formLabelAlign = {...data};
					this.formLabelAlign.province=(data.addressInfo||'').split(/[,，]/)[0]
					this.formLabelAlign.city=(data.addressInfo||'').split(/[,，]/)[1]
					this.formLabelAlign.district=(data.addressInfo||'').split(/[,，]/)[2]
				}
			});
			// 获取机构
			this.ruleForm.province = citydata;
			this.getResume()
		},
		add(){
			this.display=true
		},
		confirm(){
			let data={
				startTime:this.value1[0].getTime(),
				endTime:this.value1[1].getTime(),
				address :this.record.address,
				position:this.record.position,
				info:this.record.info,
				userId:this.userStatus.id,
				id:this.userStatus.statusId
			}
			addResume(data).then(res=>{
				this.display=false;
				this.record=[]
				this.getResume()
			})
			
		},
		getResume(){
			getResume({id:Number(this.userStatus.statusId),pageNum:0,pageSize:0}).then(res=>{
				const { code,data:{list} } = res
				if(code === 200 && list){
					let arr={}
					// list.forEach(element => {
					// 	element.startTime=new Date(element.startTime)
					// 	element.endTime==new Date(element.endTime)
					// });
					this.list=list
					// this.value1=[]
					
				}
			})
		},
		onSave () {
			this.formLabelAlign.addressInfo=`${this.formLabelAlign.province},${this.formLabelAlign.city},${this.formLabelAlign.district}`
			if((this.formLabelAlign.password&&this.formLabelAlign.passwordNew2&&this.formLabelAlign.passwordNew1)||(!this.formLabelAlign.password&&!this.formLabelAlign.passwordNew2&&!this.formLabelAlign.passwordNew1)){
				this.editorData(this.formLabelAlign).then(res => {
					const { code } = res
					if (code === 200) {
						this.$message({
							message: '保存成功',
							type: 'success'
						})
						this.init()
					}
				})
			}else{
				 this.$message.error('如需更改密码请填写完整，不需更改则不填写密码信息');
				return;
			}
			
		},
		getcityData(list,key){
			let data;
			list.forEach(item => {
				if(item.n == key){
					data =item.s;
				}
			});
			return data;
		},
		selectTime(){

		},
		changeshen(){
				this.ruleForm.city = this.getcityData(this.ruleForm.province,this.formLabelAlign.province);
				//this.formLabelAlign.city = "";
		},
		changeshi(){
				this.ruleForm.district = this.getcityData(this.ruleForm.city,this.formLabelAlign.city);
				//this.formLabelAlign.district = "";
		},
		// 上传图片
		handlePictureCardPreview1(file){
			console.log(file,999)
		},
		// 图片移除
		handleRemove(file, fileList){
			console.log(file, fileList,8888)
		},
		// 上传之前
		beforeUpload(file){
			console.log(file,333333)
		},
		upload(item){
			let formData = new FormData()
			formData.append('file', item.file)
			getChunk(formData,1).then(res => {
				console.log(res,55)
				this.formLabelAlign.imgs = res.path
			})
		}
	}
	}
</script>

<style scoped>
	@import url("P-parents.css");
</style>
<style>
.parents .el-upload--text{
	width:100%;
	height: 100%;
}
.p-editor-con-img .el-form-item__content{
	display: flex;
	height: 240px;
    align-items: flex-end;
}
	
</style>
