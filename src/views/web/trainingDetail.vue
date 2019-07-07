<template>
        <div class="page coach-page">
                <div class="banner">
                        <div class="banner-image" style="background-image: url('/images/training_detail_banner.jpg')">
                                <span>培训详情</span>
                                <p>TRAINING DETAILS</p>
                        </div>
                </div>
                <div class="content">
                        <div class="training-detail-crumb">
                          <a href="javascript:history.back()">
                            <img src="/images/left-arrow.png" alt="" style="padding-left:20px;"> 返回
                          </a>
                        </div>
                        <!-- 富文本区域 -->
                        <div class="training-content">
                          <div class="training-content-header">
                              <span>中小学实用足球技能</span>
                              <p>时间:{{Moment(dataForm.createTime).format('YYYY-MM-DD')}} </p>
                          </div>
                          <div class="training-content-text">
                              <div class="platform-video" style="margin-bottom:20px">
                                  <video :src="dataForm.video" poster="/images/home_4.jpg"></video>
                                  <div class="play"><img src="/images/play_icon.png"></div>
                              </div>
                              <pre v-html="dataForm.doc">

                              </pre>
                              <img :src="dataForm.imgs" style="margin:20px auto;display: block;color:red" alt="图片错误">
                              <pre>
                                  小学一年级《熟悉球感》
                                  技能目标：让70%学生掌握原地双脚交替踩踏球和脚内侧来回推球。
                                  情感目标：让学生体验足球的快乐，培养学生参加足球课的兴趣。
                                  准备部分 时间： 10分钟
                                  热身（1）：教师召集学生集合，检查人数，安排见习生，布置本科任务并讲解注意事项。通过慢跑主要关节活动和肌肉伸展性活动，达到基本热身的目的。也可以
                                  在游戏性活动中穿插上述内容。
                                  热身（2）：
                                  名称：“占领地盘”游戏。
                                  器材：标志物、标志服、足球若干。
                                  人数：约10人一组，可考虑指定一名小组长。
                                  场地：约10米*10米，可视实际情况略作调整。
                                  方法：
                                  1.每人1球，在场地内进行自由（手或脚）运球，场地内标志物比运球人数少一个。
                                  2.当教师举手示意，每名学生迅速靠近地面上的标志物，将球放置在标志物上，视为占领，标志物不能改变原有位置。
                              </pre>
                          </div>
                        </div>
                </div>
        </div>
 </template>
 
 <script>
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        key: "value",
        dataForm: {

        }
      }
    },

    computed: {
      id () {
				return this.$route.query
      }
    },

    methods: {
      ...mapActions('coachTraining', [
        'fetchTrainingDetail'
      ]),

      getDetail () {

        this.fetchTrainingDetail(this.id).then(res => {
          const { code, data } = res
          if (code === 200) {
            console.log(data)
            this.dataForm = data || {}
          }
        })
      }
    },

    created () {
      this.getDetail()
    }
  }
 </script>
 
 <style scoped>
 @import url("./css/coachTraining.css");
 </style>