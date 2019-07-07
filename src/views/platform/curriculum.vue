<template>
  <div class="platform-page page">
    <div class="content">
      <PlatformCrumb back="返回">
        <el-button type="primary" size="mini" slot="right">新增培训</el-button>
      </PlatformCrumb>
      <div class="curriculum">
        <div class="curriculum-title">
          <div class="hove">新增培训</div><div>新增培训</div>
        </div>
        <div class="content-con">
          <div class="box-con">
            <img src="/images/box.jpg" class="box-img"  />
            <p>足球个人技术知识</p>
            <img src="/images/delect.png" class="box-delect"  />
            <img src="/images/p-alter.png" class="box-alter"  />
          </div>
          <div class="box-con">
            <img src="/images/box.jpg" class="box-img"  />
            <p>足球个人技术知识</p>
            <img src="/images/delect.png" class="box-delect"  />
            <img src="/images/p-alter.png" class="box-alter"  />
          </div>
          <div class="box-con">
            <img src="/images/box.jpg" class="box-img"  />
            <p>足球个人技术知识</p>
            <img src="/images/delect.png" class="box-delect"  />
            <img src="/images/p-alter.png" class="box-alter"  />
          </div>
          <div class="box-con">
            <img src="/images/box.jpg" class="box-img"  />
            <p>足球个人技术知识</p>
            <img src="/images/delect.png" class="box-delect"  />
            <img src="/images/p-alter.png" class="box-alter"  />
          </div>
          <div class="box-con">
            <img src="/images/box.jpg" class="box-img"  />
            <p>足球个人技术知识</p>
            <img src="/images/delect.png" class="box-delect"  />
            <img src="/images/p-alter.png" class="box-alter"  />
          </div>
          <div class="box-con">
            <img src="/images/box.jpg" class="box-img"  />
            <p>足球个人技术知识</p>
            <img src="/images/delect.png" class="box-delect"  />
            <img src="/images/p-alter.png" class="box-alter"  />
          </div>
          <div class="box-con">
            <img src="/images/box.jpg" class="box-img"  />
            <p>足球个人技术知识</p>
            <img src="/images/delect.png" class="box-delect"  />
            <img src="/images/p-alter.png" class="box-alter"  />
          </div>
          <div class="box-con">
            <img src="/images/box.jpg" class="box-img"  />
            <p>足球个人技术知识</p>
            <img src="/images/delect.png" class="box-delect"  />
            <img src="/images/p-alter.png" class="box-alter"  />
          </div>
        </div>
        <div class="publish-btn">发布培训信息</div>
      </div>
 
    </div>
  </div>
</template>

<script>
import PlatformCrumb from "@/components/PlatformCrumb.vue";
export default {
  components:{
    PlatformCrumb,
  },
 
};
</script>

<style lang="less" scoped>
@import url("platform.less");
.operation{
  margin-right: 25px;
}
.pass-btn{
    background-color: #2d64b3;
    border-color: #2d64b3;
    &:hover{
      background-color: #2d64b3;
    border-color: #2d64b3;
    }
  }
  .curriculum{
    background-color: #fff;
    padding: 40px 0 80px 0;
  }
.curriculum-title{
  width: 100%;
  text-align: center;
}
.curriculum-title div{
  width: 100px;
  height: 28px;
  line-height: 28px;
  display: inline-block;
  font-size: 16px;
	color: #333333;
}
.curriculum-title .hove{
  background-color: #c60818;
  border-radius: 2px;
  color: #fff;
}
.content-con{
  margin-bottom: 85px;
}
.box-con{
  width: 200px;
  display: inline-block;
  position: relative;
  margin: 35px 41px 0 41px;
  
}
.box-con .box-img{
  width: 200px;
	height: 156px;
}
.box-con p{
  font-size: 14px;
  color: #333333;
  margin-top: 20px;
}
.box-delect{
  width: 16px;
  height: 19px;
  position: absolute;
  top: 0;
  right: -28px;
}
.box-alter{
  width: 18px;
  height: 17px;
  position: absolute;
  top: 33px;
  right: -30px;
}
.publish-btn{
  width: 110px;
  height: 28px;
  line-height: 28px;
	background-color: #2d64b3;
  border-radius: 2px;
  color: #ffffff;
  text-align: center;
  margin: 0 auto;
}
</style>
