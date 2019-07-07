<template>

	<div class="P-parents page">
		<div class="content">
			<div class="parents-crumb">
				<a href="" class="back-btn"></a>
				教练资料
			</div>
			<div class="p-parcoach-detail">
				<p class="title">基本资料</p>
				<div class="p-parcoach-data display-flex-row">
					<img :src="'http://139.155.113.181/file'+use.imgs[0]" />
					<div class="coach-con-center">
						<div class="coach-con-center-item">
							<p><span>姓名</span>{{use.name}}</p>
							<p><span>年龄</span>{{use.name}}</p>
							<p><span>毕业院校</span>{{use.graduatedFrom}}</p>
							<p><span>联系电话</span>{{use.phone}}</p>
							<p><span>微信</span>{{use.weChatNo}}</p>
							<p><span>邮箱</span>{{use.mail}}</p>
						</div>
						<div class="coach-con-center-item">
							<p><span>等级</span>{{use.coachLevel}}</p>
							<p><span>证件号码</span>{{use.leaderNo}}</p>
							<p><span>联系地址</span>{{use.address}}</p>
							<p><span>语言能力</span>{{use.yyName}}</p>
							<p><span>鞋码</span>{{use.shoeSize}}</p>
							<p><span>所属足协</span>{{use.football}}</p>
						</div>

					</div>



				</div>

				<p class="title">证书</p>
				<div class="p-parcoach-book display-flex-row">
					<div class="parcoach-book-item" v-for="(item,index) in (use.certificate||'').split(/[,，]/)" :key="index">
						<img :src="'http://139.155.113.181/file'+item" />
					</div>
				</div>
				<!-- <div class="p-parcoach-book display-flex-row">
					<div class="parcoach-book-item">
						<img src="/images/book01.jpg" />
					</div>
					<div class="parcoach-book-item">
						<img src="/images/book02.jpg" />
					</div>
					<div class="parcoach-book-item">
						<img src="/images/book03.jpg" />
					</div>
				</div> -->




			</div> 



		</div>
	</div>


</template>

<script>
import {getMyInfo} from "../../api/api/coach.js";
import { mapActions, mapState } from 'vuex'

	export default {
		data() {
			return {
				use:"use",
				key: "value"
			}
		},
		computed: {
                ...mapState('Login', [
                    'userStatus'
                ]),
            },
		created(){
			this.init();
		},
		methods:{
			init(){
				getMyInfo({"id" :Number(this.userStatus.statusId)}).then(res=>{
					const { code, data,message } = res
					if(code === 200 && data){
						this.use = data;
					}else{
						this.$message.error(message);
					}
				});
				
			}
		}
	}
</script>

<style scoped>
@import url("P-parents.css");
</style>
