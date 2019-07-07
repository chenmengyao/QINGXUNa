<template>
        <div class="page coach-page">
                <div class="banner">
                        <div class="banner-image" style="background-image: url('/images/training_detail_banner.jpg')">
                                <span>信息详情</span>
                                <p>INFORMATION DETAILS</p>
                        </div>
                </div>
                <div class="content">
                        <div class="training-detail-crumb">
                          <a class="back-btn" href="javascript:history.back()">返回</a>
                          <a>{{information.title}}</a>
                        </div>
                        <!-- 富文本区域 -->
                        <div class="training-content">
                          <div class="training-content-header">
                              <span>{{information.title}}</span>
                              <p>时间 : {{information.createTime}} </p>
                          </div>
                          <div class="training-content-text">
							  {{information.content}}
<!--                              <pre>
                                  5月1日下午，2019年中国足协杯第四轮比赛继续进行，凭借补时阶段金敬道和田鑫的进球，山东鲁能泰山主场2：1逆转战胜浙江绿城，晋级足协杯16强。开场第
                                  2分钟，浙江绿城前场发动攻势，界外球掷入禁区，黄世博头球摆渡，谈扬凌空抽射取得进球，浙江绿城1：0领先。第30分钟，金敬道内切左脚传中，球被对方门将张
                                  磊将球没收。随后，山东鲁能断球反击，成源晃开防守后射门，球被对方门将没收。第33分钟，段刘愚边路传中，黄聪抢点头球攻门偏出。上半场比赛结束，山东鲁能
                                  暂时0:1落后。
                              </pre>
                              <img src="/images/home_4.jpg" style="margin:20px auto;display: block" alt="">
                              <pre>
                                  5月1日下午，2019年中国足协杯第四轮比赛继续进行，凭借补时阶段金敬道和田鑫的进球，山东鲁能泰山主场2：1逆转战胜浙江绿城，晋级足协杯16强。开场第
                                  2分钟，浙江绿城前场发动攻势，界外球掷入禁区，黄世博头球摆渡，谈扬凌空抽射取得进球，浙江绿城1：0领先。第30分钟，金敬道内切左脚传中，球被对方门将张
                                  磊将球没收。随后，山东鲁能断球反击，成源晃开防守后射门，球被对方门将没收。第33分钟，段刘愚边路传中，黄聪抢点头球攻门偏出。上半场比赛结束，山东鲁能
                                  暂时0:1落后。
                              </pre> -->
                          </div>
                        </div>
                </div>
        </div>
 </template>
 
 <script>
 import { informationGetOne } from '../../api/api/index.js';
 	export default {
 		data() {
 			return {
 				information: {}
 			}
 		},	
		created() {
		informationGetOne({
			id: this.$route.params.id
		}).then(res => {
			this.information = res.data;
			console.log(res.data);
		});
		//console.log(this.information)
	}
 	}
 </script>
 
 <style scoped>
 @import url("./css/coachTraining.css");
 </style>