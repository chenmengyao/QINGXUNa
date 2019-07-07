<template>
  <div class="platform-page page">
    <img src="/images/training_detail_banner.jpg">
    <div class="content">
      
      <PlatformCrumb back="培训详情"></PlatformCrumb>
      <!-- 富文本区域 -->
      <div class="training-content">
        <div class="training-content-header">
          <span>链星培训机构</span>
          <div class="training-content-line"></div>
        </div>
        <div class="training-content-text">
          <div class="training-content-box display-flex-row">
            <div class="box-left">培训内容：</div>
            <div class="box-right">
              <p class="box-right-one">1.A+足球专业知识</p>
              <p class="box-right-one">2.A+足球专业知识</p>
              <p class="box-right-one">3.A+足球专业知识</p>
            </div>
          </div>
          <div class="training-content-box">
            <div class="box-left">课程内容：</div>
            <div class="box-right display-flex-row traning-content-item-row">
              <div class="traning-content-item">
                <span>第一部分</span>
                <img src="/images/traing_1.jpg" alt>
              </div>
              <div class="traning-content-item">
                <span>第二部分</span>
                <img src="/images/traing_1.jpg" alt>
              </div>
              <div class="traning-content-item">
                <span>第三部分</span>
                <img src="/images/traing_1.jpg" alt>
              </div>
              <div class="traning-content-item">
                <span>第四部分</span>
                <img src="/images/traing_1.jpg" alt>
              </div>
            </div>
          </div>
          <div class="training-content-box">
            <div class="box-left">机构介绍：</div>
            <div class="box-right">
              <div class="full-text-content">
                技能目标：让70%学生掌握原地双脚交替踩踏球和脚内侧来回推球。情感目标：让学生体验足球的快乐，培养学生参加足球课的睡得晚顶顶顶
                兴趣。准备部分 时间： 10分钟能目标：让70%学生掌握原地双脚交替踩踏球和脚内侧来回推球
                情感目标：让学生体验足球的快睡得晚顶顶顶
                乐，培养学生参加足球课的兴趣。准备部分 时间：
                10分钟能目标：让70%学生掌握原地双脚交替踩踏球和脚内侧来回推球。情睡得晚顶顶顶
                感目标：让学生体验足球的快乐，培养学生参加足球课兴趣。准备部分 时间： 10分钟
              </div>
            </div>
          </div>
          <div class="training-content-box display-flex-row">
            <div class="box-left">培训地点：</div>
            <div class="box-right">
              <p class="box-right-one">国家：中国</p>
              <p class="box-right-one">城市：深圳</p>
              <p class="box-right-one">地址：深圳市龙岗区大运体育中心207</p>
              <p class="box-right-one">Email：zgkafiej@163.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlatformCrumb from "@/components/PlatformCrumb.vue";
export default {
  components: {
    PlatformCrumb
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style lang="less" scoped>
@import url("platform.less");
.operation {
  margin-right: 25px;
}
</style>
