<template>
	<div class="page home-page">
		<div class="banner">
			<div
				class="banner-image"
				style="background-image: url('/images/home_banner.jpg')"
			></div>
		</div>
		<div class="content">
			<div class="news">
				<div class="content-title news-left">
					<div class="title">News & Events</div>
					<div class="desc">新闻动态</div>
					<div class="line"></div>
					<!-- <router-link :to="item.url"></router-link> -->
					<router-link to="/information">
						<div class="button">
							查看更多
							<img src="/images/right_arrow.png" />
						</div>
					</router-link>
				</div>
				<div class="news-con">
					<div class="new-control">
						<img src="images/arrow-top_hover.png" class="new-control-first" />
						<img src="images/arrow-bottom.png" />
					</div>
					<div v-for="(item, index) in information.list" :key="index" class="news-item">
						<div class="time">{{ item.createTime }}</div>
						<div class="title">{{ item.title }}</div>
						<div class="desc">
							{{ item.content }}
						</div>
					</div>
				</div>
			</div>
			<div class="coach-training">
				<div class="coach-training-fixed" style="background-image:url(/images/home_1.jpg)">
					<div class="title">教练进修</div>
					<a href="/coachTraining" class="button">查看更多</a>
				</div>
				<div class="coach-training-con" style="background-image:url(/images/home_2.jpg)">
					<div class="title">
						<img src="/images/arrow_bottom_circle.png" alt="" />
						<div class="title-memo">
							<span>在线涨球</span>
							<P>足球基础技巧（脚部对抗）</P>
						</div>
					</div>
				</div>
			</div>
			<div class="platform-advantage">
				<div class="content-title platform-advantage-title">
					<div class="title">Platform advantage</div>
					<div class="desc">平台优势</div>
					<div class="line"></div>
				</div>
				<div class="platform-advantage-con">
					<div class="platform-advantage-item">
						<img src="/images/platform_1.png" alt="" />
						<div class="memo">
							<span>提升管理效率</span>
							<P>致力于为青训机构、俱乐部提 供一站式内部管理系统，提升 内部效率。</P>
						</div>
					</div>
					<div class="platform-advantage-item">
						<img src="/images/platform_2.png" alt="" />
						<div class="memo">
							<span>提升管理效率</span>
							<P>致力于为青训机构、俱乐部提 供一站式内部管理系统，提升 内部效率。</P>
						</div>
					</div>
					<div class="platform-advantage-item">
						<img src="/images/platform_3.png" alt="" />
						<div class="memo">
							<span>提升管理效率</span>
							<P>致力于为青训机构、俱乐部提 供一站式内部管理系统，提升 内部效率。</P>
						</div>
					</div>
					<div class="platform-advantage-item">
						<img src="/images/platform_4.png" alt="" />
						<div class="memo">
							<span>提升管理效率</span>
							<P>致力于为青训机构、俱乐部提 供一站式内部管理系统，提升 内部效率。</P>
						</div>
					</div>
				</div>
			</div>

			<div class="platform-info">
				<div class="content-title platform-info-title">
					<div class="title">平台简介</div>
					<div class="desc">Platform introduction</div>
					<div class="line"></div>
				</div>

				<div style="margin:0 auto">
					<video
						style="width:700px;"
						src="http://139.155.113.181/file/videos/1560740986211m.mp4"
						poster="/images/home_4.jpg"
						controls>
					</video>
					<!-- <div class="play"><img src="/images/play_icon.png" /></div> -->
				</div>
			</div>

			<div class="cooperative-partner">
				<div class="content-title cooperative-partner-title">
					<div class="title">Cooperative partner</div>
					<div class="desc">合作伙伴</div>
					<div class="line"></div>
				</div>
				<div class="cooperative-partner-con-title">
					<img src="/images/trigle.png" alt="" />
					<span>政府机关/大型企业/国企</span>
					Government units
				</div>
				<div class="cooperative-partner-con">
					<div class="cooperative-partner-item">
						<img src="/images/company_1.jpg" alt="" />
					</div>
					<div class="cooperative-partner-item">
						<img src="/images/company_2.jpg" alt="" />
					</div>
					<div class="cooperative-partner-item">
						<img src="/images/company_3.jpg" alt="" />
					</div>
					<div class="cooperative-partner-item">
						<img src="/images/company_4.jpg" alt="" />
					</div>
					<div class="cooperative-partner-item">
						<img src="/images/company_5.jpg" alt="" />
					</div>
					<div class="cooperative-partner-item">
						<img src="/images/company_6.jpg" alt="" />
					</div>
					<div class="cooperative-partner-item">
						<img src="/images/company_7.jpg" alt="" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import { bannerGetAll, informationGetList } from '../api/api/index.js';
export default {
	name: 'home',
	data() {
		return {
			information: [],
			banner: []
		};
	},
	created() {
		bannerGetAll().then(res => {
			this.banner = res;
		});
		informationGetList({
			pageNum: 0,
			pageSize: 4
		}).then(res => {
			this.information = res.data;
			//console.log(res.data);
		});
		//console.log(this.information)
	}
};
</script>
<style scoped>
@import url("web/css/index.css");
</style>
