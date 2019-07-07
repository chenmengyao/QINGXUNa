<template>
  <div class="platform-page page">
    <img src="/images/coach_training_banner.jpg" />
    <div class="content">
      <PlatformCrumb back="返回" style="    margin-top: 0;" >
        <el-button type="primary" size="mini" slot="right">新增赛事</el-button>
      </PlatformCrumb>
      <div class="content event-detail">
      <div class="tabs" style="    margin-top: 0;">
        <div class="training-content-header">
          <span>赛事详情</span>
          <div class="training-content-line"></div>
          <a href="#" class="look-team">查看参赛队伍</a>
        </div>
      </div>
      <div class="tabs-container display-flex-row">
        <img src="/images/event-informatton.jpg" />
        <div class="flex1">
          <p class="headline-title">U19级 夏季常规对抗赛</p>
          <p class="headline-detail">参赛年龄：12-16岁</p>
          <p class="headline-detail">时间：2019.06.11-06.13</p>
          <p class="headline-detail">场馆：浩昇足球公园     深圳市南山区沙河东路111号</p>
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
