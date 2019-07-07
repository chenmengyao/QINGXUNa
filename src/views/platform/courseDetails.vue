<template>
  <div class="platform-page page">
    <div class="content">
      <PlatformCrumb back="培训详情"></PlatformCrumb>
      <!-- 富文本区域 -->
      <div class="training-content">
        <div class="training-content-header" style="border-bottom:0;">
          <span>足球基本知识</span>
        </div>
        <div class="training-content-text">
          <div class="platform-video" style="margin-bottom:20px">
            <video src poster="/images/home_4.jpg"></video>
            <div class="play">
              <img src="/images/play_icon.png">
            </div>
          </div>
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
