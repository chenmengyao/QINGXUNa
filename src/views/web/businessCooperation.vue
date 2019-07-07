<template>
	<div>
	
        <div class="page coach-page">
                <div class="banner">
                        <div class="banner-image" style="background-image: url('/images/training_detail_banner.jpg')">
                                <span>商务合作</span>
                                <p>BUSINESS COOPERATION</p>
                        </div>
                </div>
        </div>
        <div class="content busines-cooperation">

                <div class="training-content coach-page" style="padding-top: 0;">
                        <div class="aboutus-header display-flex-row justify-content-between">
                                <div class="aboutus-header-left display-flex-row align-items-center">
                                        <img src="/images/ball.png" alt="">
                                        <div class="aboutus-title">
                                                <div class="title">BUSINESS<span>COOPERATION</span></div>
                                                <p>商务合作</p>
                                        </div>
                                </div>
                                <div class="aboutus-crumb display-flex-row align-items-bottom">
                                        当前位置：<router-link to="/">首页></router-link><a href="#">商务合作</a>
                                </div>
                        </div>
                        <div class="message-map display-flex-row">
                            <div class="busines-map">
                                <div style="width:100%;height:100%;" id="dituContent"></div>
                            </div>
                            <div class="busines-content flex1">
                              <div class="busines-name">链星青训平台办事处</div>
                              <div class="busines-con">
                                <div class="busines-info display-flex-row">
                                    <img src="/images/phone.png" alt="">
                                    <div class="busines-memo flex1">
                                      <p class="strong">{{datalist.phone}}</p>
                                    </div>
                                </div>
                                <div class="busines-info display-flex-row">
                                    <img src="/images/phone.png" alt="">
                                    <div class="busines-memo flex1">
                                      <p class="strong">{{datalist.landline}}</p>
                                      <p>周一至周五8：30-12:00，14:30-18:00（节假日除外）</p>
                                    </div>
                                </div>
                                <div class="busines-info display-flex-row bottom-line">
                                    <img src="/images/email.png" alt="">
                                    <div class="busines-memo flex1">
                                      <p>邮编：{{datalist.code }}</p>
                                    </div>
                                </div>
                                <div class="busines-info display-flex-row">
                                    <img src="/images/location.png" alt="">
                                    <div class="busines-memo flex1">
                                      <p>学校地址：{{datalist.schoolAddress }}</p>
                                    </div>
                                </div>
                                <div class="busines-info display-flex-row">
                                    <img src="/images/car.png" alt="">
                                    <div class="busines-memo flex1">
                                      <p>乘车路线：{{datalist.bus }}</p>
                                      <p>自驾车：{{datalist.sedan }}</p>
                                    </div>
                                </div>
                              </div>
                            </div>
                        </div>
                        <div class="micro-blog display-flex-row">
                          <div class="micro-code display-flex-row">
                            <img :src="datalist.leftImg" />
                            <div class="flex1">
                                <p class="micro-name">{{datalist.leftImgName }}</p>
                                <p class="micro-synopsis">扫一扫关注我们</p>
                                <p class="micro-synopsis">了解最新资讯</p>
                            </div>
                          </div>
                          <div class="micro-code busines-content flex1 display-flex-row">
                            
                              <img :src="datalist.rightImg " />
                              <div class="flex1">
                                  <p class="micro-name">{{datalist.rightImgName }}</p>
                                  <p class="micro-synopsis">扫一扫关注我们</p>
                                  <p class="micro-synopsis">了解最新资讯</p>
                              </div>
                          </div>
                        </div>
                </div>
        </div>
 	
 </div>
 </template>
<script>
 //    //创建和初始化地图函数：
 //    function initMap(){
 //        createMap();//创建地图 
 //        addMapControl();//向地图添加控件
 //    }
 //    
 //    //创建地图函数：
 //    function createMap(){
 //        var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
 //        var point = new BMap.Point(114.042878,22.642199);//定义一个中心点坐标
 //        map.centerAndZoom(point,12);//设定地图的中心点和坐标并将地图显示在地图容器中
 //        window.map = map;//将map变量存储在全局
 //    }
 //    
 //    //地图事件设置函数：
 //    function setMapEvent(){
 //        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
 //        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
 //        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
 //        map.enableKeyboard();//启用键盘上下左右键移动地图
 //    }
 //    
 //    //地图控件添加函数：
 //    function addMapControl(){
 //                        //向地图中添加比例尺控件
	// var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
	// map.addControl(ctrl_sca);
 //    }
 //    
 //    
 //    initMap();//创建和初始化地图
 
 
 
 	import {configGetBusinessAffairs} from "../../api/api/web.js"
 export default {
 	data() {
 		return {
 			datalist: {}
 		}
 	},
 	created(){
 		configGetBusinessAffairs().then((res) => {
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