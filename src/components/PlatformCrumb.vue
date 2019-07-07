<template>
  <div class="platform-crumb display-flex-row align-items-center justify-content-between">
    <a class="back" href="#">{{back || '返回'}}</a>
    <div class="crumb-con flex1"><slot></slot></div>
    <div class="crumb-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    back: String
  }
};
</script>

<style scoped lang="less">
.platform-crumb {
  height: 45px;
  background-color: #f5f7fa;
  border: solid 1px #eaeaea;
  padding: 0 20px;
  margin-top: 10px;
  .back {
    display: inline-block;
    cursor: pointer;
    color: #333;
    &::before {
      content: " ";
      display: inline-block;
      width: 8px;
      height: 14px;
      background: url(/images/left-arrow.png) no-repeat;
      vertical-align: -2px;
      margin-right: 10px;
    }
  }
}
</style>
