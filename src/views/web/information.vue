<template>
	<div class="page coach-page">
		<div class="banner">
			<div
				class="banner-image"
				style="background-image: url('/images/training_detail_banner.jpg')"
			>
				<span>新闻资讯</span>
				<p>NEWS AND INFORMATION</p>
			</div>
		</div>
		<div class="content">
			<div class="training-content">
				<div class="aboutus-header display-flex-row justify-content-between">
					<div class="aboutus-header-left display-flex-row align-items-center">
						<img src="/images/ball.png" alt="" />
						<div class="aboutus-title">
							<div class="title">
								NEWS &
								<span>IFORMAtTION</span>
							</div>
							<p>新闻信息</p>
						</div>
					</div>
					<div class="aboutus-crumb display-flex-row align-items-bottom">
						当前位置：
						<router-link to="/">首页></router-link>
						<a>新闻信息</a>
					</div>
				</div>
				<div class="information-conter">
					<router-link
						class="information-item display-flex-row"
						v-for="(item, index) in information.list"
						:key="index"
						:to="'/informationDetails/'+item.id"
					>
						<img :src="item.showImg" />
						<div class="information-memo flex1">
							<span>{{ item.title }}</span>
							<p class="desc">{{ item.content }}</p>
							<p class="time">{{ item.createTime }}</p>
						</div>
					</router-link>
            
					<el-pagination
						background
						layout="prev, pager, next"
						@current-change="handleCurrentChange"
						:total="information.total"
					></el-pagination>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { informationGetList } from '../../api/api/index.js';
export default {
	data() {
		return {
			information: {}
		};
	},
	methods: {
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
			informationGetList({
				pageNum: val,
				pageSize: 4
			}).then(res => {
				this.information = res.data;
				//console.log(res.data);
			});
		}
	},
	created() {
		informationGetList({
			pageNum: 0,
			pageSize: 4
		}).then(res => {
			this.information = res.data;
			console.log(res.data);
		});
		//console.log(this.information)
	}
};
</script>

<style scoped>
@import url('./css/coachTraining.css');
.el-pagination{
	text-align: center;
}
</style>
