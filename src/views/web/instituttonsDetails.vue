<template>
	<div class="page coach-page instituttons-details">
		<div class="banner">
			<div class="banner-image" style="background-image: url('/images/training_detail_banner.jpg')">
				<span>青训机构</span>
				<p>YOUTH INSTITUTIONS</p>
			</div>
		</div>
		<div class="content">
			<div class="training-detail-crumb">
				<a class="back-btn" href="javascript:history.back()">返回</a>
				<a>深圳市青年足球训练营</a>
			</div>
			<!-- 富文本区域 -->
			<div class="details-content">
				<div class="training-content-header">
					<span>{{mechanismData.name }}</span>
				</div>
				<div class="details-content-text">
					<img :src="mechanismData.homeImgs " style="margin:20px auto;display: block;width: 80%;" alt="">
					<div class="brief-introduction">
						<div class="brief-title">{{mechanismData.name }}简介</div>
						<div class="brief-detail">{{mechanismData.info }}</div>
						<div class="brief-address">
							<p>地址：{{mechanismData.infoAddress }} </p>
							<p>联系方式：{{mechanismData.infoPhone  }}</p>
						</div>
					</div>
					<div class="brief-introduction wheel-planting">
						<div class="brief-title">{{mechanismData.name }}简介</div>
						<div class="wheel-content">
							<ul>
								<a href="#"><img :src="mechanismData.banner" /></a>
								<a href="#"><img src="/images/wheel-planting.jpg" /></a>
								<a href="#"><img src="/images/wheel-planting.jpg" /></a>
								<a href="#"><img src="/images/wheel-planting.jpg" /></a>
							</ul>
							<div class="wheel-content-left"></div>
							<div class="wheel-content-right"></div>
						</div>
					</div>
					<div class="brief-introduction">
						<div class="brief-title">训练视频</div>
						<div class="platform-video" style="margin-bottom:20px">
							<video :src="mechanismData.trainingVideo" poster="/images/home_4.jpg"></video>
							<div class="play"><img src="/images/play_icon.png"></div>
						</div>
					</div>
					<div class="brief-introduction">
						<div class="brief-title">机构信息</div>
						<div class="organization-content">
							<p>在招队伍：12-18青训队伍</p>
							<p>联系邮箱：{{mechanismData.infoMail   }}</p>
							<p>地址：{{mechanismData.infoAddress  }}</p>
						</div>
					</div>
					<div class="brief-introduction wheel-planting">
						<div class="brief-title">机构课程</div>
						<div class="wheel-content">
							<ul>
								<a href="#"><img src="/images/wheel-planting.jpg" /></a>
								<a href="#"><img src="/images/wheel-planting.jpg" /></a>
								<a href="#"><img src="/images/wheel-planting.jpg" /></a>
								<a href="#"><img src="/images/wheel-planting.jpg" /></a>
							</ul>
							<div class="wheel-content-left"></div>
							<div class="wheel-content-right"></div>
						</div>
					</div>
					<div class="brief-introduction wheel-planting">
						<div class="brief-title">教练团队</div>
						<div class="wheel-content">
							<ul>
								<a href="#"><img src="/images/wheel-planting.jpg" /></a>
								<a href="#"><img src="/images/wheel-planting.jpg" /></a>
								<a href="#"><img src="/images/wheel-planting.jpg" /></a>
								<a href="#"><img src="/images/wheel-planting.jpg" /></a>
							</ul>
							<div class="wheel-content-left"></div>
							<div class="wheel-content-right"></div>
						</div>
					</div>
					<div class="brief-introduction wheel-planting">
						<div class="brief-title">赛事荣誉</div>
						<div class="wheel-content">
							<ul>
								<a href="#"><img src="/images/wheel-planting.jpg" /></a>
								<a href="#"><img src="/images/wheel-planting.jpg" /></a>
								<a href="#"><img src="/images/wheel-planting.jpg" /></a>
								<a href="#"><img src="/images/wheel-planting.jpg" /></a>
							</ul>
							<div class="wheel-content-left"></div>
							<div class="wheel-content-right"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
 import { mechanismGet } from '../../api/api/web.js';
 	export default {
 		data() {
 			return {
 				mechanismData: {}
 			}
 		},	
		created() {
		mechanismGet({
			id: this.$route.params.id
		}).then(res => {
			this.mechanismData = res.data;
			console.log(res.data);
		});
		//console.log(this.information)
	}
 	}
</script>

<style scoped>
	@import url("css/D-coach-training.css");
</style>
