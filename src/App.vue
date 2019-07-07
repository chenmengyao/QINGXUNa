<template>
  <div id="app">
    <NavTop></NavTop>

    <router-view/>

    <NavFooter></NavFooter>
  </div>
</template>
<script>
// @ is an alias to /src
import NavTop from "./components/nav/top.vue";
import NavFooter from "./components/nav/footer.vue";
export default {
  name: "home",
  components: {
    NavTop,
    NavFooter
  }
};
</script>
<style lang="less">
@primary:#c60818;
//全局样式
@import url(./global.less);
// element默认样式
body {
  .el-button--primary {
    background-color: @primary;
    border-color: @primary;
    &:focus,
    &:hover {
      background: #b50816;
      border-color: #b50816;
      color: #fff;
    }
	}
	.el-pagination.is-background .el-pager li:not(.disabled).active{
		background-color: @primary;
	}
}
</style>
