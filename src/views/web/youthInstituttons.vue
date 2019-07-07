<template>
  <div class="page coach-page youth-instituttons">
    <div class="banner">
      <div class="banner-image" style="background-image: url('/images/coach_training_banner.jpg')">
        <span>青训机构</span>
        <p>YOUTH INSTITUTIONS</p>
      </div>
    </div>
    <div class="content">
      <div class="tabs">
        <div class="training-content-header">
          <span>已入驻机构</span>
          <div class="training-content-line"></div>
        </div>
      </div>
      <div class="tabs-container">
        <div class="tabs-con-item" v-for="(item,index) in datalist.list">
          <div class="instituttons-container">
            <div class="instituttons-title">{{item.name }}</div>
            <img :src="item.homeImgs " />
            <div class="instituttons-details">{{item.info  }}</div>
            <div class="instituttons-information">地址：{{item.infoAddress   }}</div>
            <div class="instituttons-information">联系方式：{{item.infoPhone   }}</div>
          </div>
          <router-link class="tabs-button" :to="'/instituttonsDetails/'+item.id">查看详情<img src="/images/right_arrow.png" /></router-link>
        </div>
       
      </div>
    </div>
  </div>
</template>

<script>
 	import {mechanismGetSettledInList} from "../../api/api/web.js"
 export default {
 	data() {
 		return {
 			datalist: {}
 		}
 	},
 	created(){
 		mechanismGetSettledInList({"pageNum": 0,"pageSize": 10}).then((res) => {
 			this.datalist=res.data
 		}).catch((res) => {
 			this.$message({
 				message: res.message,
 				type: 'error',
 				duration: 5 * 1000
 			});
 		})
 	}
 }
</script>

<style scoped>
	@import url("css/D-coach-training.css");
</style>