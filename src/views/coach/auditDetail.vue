<template>

		<div class="P-parents page">
			<div class="content">
				<div class="parents-crumb">
					<a href="" class="back-btn"></a>
					审核详情
				</div>
				<div class="p-parcoach-detail my-deta-con">
					<p class="title">基本资料</p>
					<div class="p-parcoach-data display-flex-row">
						<div class="display-flex-column">
							<img src="/images/parcoach01.jpg"/>
						</div>
						
						<div class="coach-con-center">
							<div class="coach-con-center-item">
								<p><span>姓名</span>萨拉赫</p>
								<p><span>申请机构</span>深圳青年足协</p>
								<p><span>在读学校</span>深圳南山小学</p>
								<p><span>监护人</span>王国中</p>
								<p><span>联系电话</span>134967897465</p>
								<p><span>微信</span>134967897465</p>
							</div>
							<div class="coach-con-center-item">
								<p><span>证件号码</span>465464153154712301</p>
								<p><span>联系地址</span>广东省深圳市</p>
								<p><span>所属教练</span>麦哲伦</p>
								<p><span>鞋码</span>40</p>
								<p><span>服装尺码</span>M</p>
							</div>
	
						</div>
						
						
						
					</div>
					
					<div class="coach-btn">
						<button class="pass">审核通过</button>
						<button class="del">删除记录</button>
					</div>
				</div>
			</div>
		</div>

</template>

<script>
	export default {
	  data() {
	  	return {
	  		key: "value"
	  	}
	  },
	}
</script>

<style scoped>
	@import url("P-coach.css");
</style>