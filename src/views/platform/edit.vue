<template>
  <div class="platform-page page">
    <div class="content">
      <PlatformCrumb back="返回">
        <el-button type="primary" size="mini" slot="right">保存全部</el-button>
      </PlatformCrumb>
      <div class="upload">
        <div class="upload-item">
          <div class="title">
            <span class="name">LOGO</span>
            <span class="desc">（只支持jpg格式、上传图片大小2M内）</span>
          </div>
          <div class="upload-con">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
        </div>

        <div class="upload-item">
          <div class="title">
            <span class="name">轮播图</span>
            <span class="desc">（只支持jpg格式、上传图片大小2M内）</span>
          </div>
          <div class="upload-con display-flex-row">
            <div class="upload-con-item">
              <div class="sub-title">第一张图片：</div>
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
            <div class="upload-con-item">
              <div class="sub-title">URL</div>
              <el-input placeholder="请输入url"  size="mini"></el-input>
              <el-button type="primary" size="mini">添加</el-button>
            </div>
          </div>
          <div class="upload-con display-flex-row">
            <div class="upload-con-item">
              <div class="sub-title">第二张图片：</div>
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
            <div class="upload-con-item">
              <div class="sub-title">URL</div>
              <el-input placeholder="请输入url"  size="mini"></el-input>
              <el-button type="primary" size="mini">添加</el-button>
            </div>
          </div>
          <div class="upload-con display-flex-row">
            <div class="upload-con-item">
              <div class="sub-title">第三张图片：</div>
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
            <div class="upload-con-item">
              <div class="sub-title">URL</div>
              <el-input placeholder="请输入url"  size="mini"></el-input>
              <el-button type="primary" size="mini">添加</el-button>
            </div>
          </div>
          <div class="upload-con display-flex-row">
            <div class="upload-con-item">
              <div class="sub-title">第四张图片：</div>
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
            <div class="upload-con-item">
              <div class="sub-title">URL</div>
              <el-input placeholder="请输入url"  size="mini"></el-input>
              <el-button type="primary" size="mini">添加</el-button>
            </div>
          </div>
        </div>

        <div class="upload-item">
          <div class="title">
            <span class="name">平台资源优势</span>
            <span class="desc">（只支持jpg格式、上传图片大小2M内）</span>
            <el-button type="primary" size="mini" style="margin-left:185px">保存</el-button>
          </div>
          <div class="upload-con display-flex-row">
            <div class="upload-con-item">
              <div class="sub-title">优势一 ICON：</div>
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
            <div class="upload-con-item">
              <div class="sub-title">主标题：</div>
              <el-input placeholder="请输入标题内容"  size="mini"></el-input>
            </div>
            <div class="upload-con-item">
              <div class="sub-title">内容：</div>
              <el-input placeholder="请输入主题内容" type="textarea" resize="none" size="mini"></el-input>
            </div>
          </div>
          <div class="upload-con display-flex-row">
            <div class="upload-con-item">
              <div class="sub-title">优势二 ICON：</div>
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
            <div class="upload-con-item">
              <div class="sub-title">主标题：</div>
              <el-input placeholder="请输入标题内容"  size="mini"></el-input>
            </div>
            <div class="upload-con-item">
              <div class="sub-title">内容：</div>
              <el-input placeholder="请输入主题内容" type="textarea" resize="none" size="mini"></el-input>
            </div>
          </div>
          <div class="upload-con display-flex-row">
            <div class="upload-con-item">
              <div class="sub-title">优势三 ICON：</div>
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
            <div class="upload-con-item">
              <div class="sub-title">主标题：</div>
              <el-input placeholder="请输入标题内容"  size="mini"></el-input>
            </div>
            <div class="upload-con-item">
              <div class="sub-title">内容：</div>
              <el-input placeholder="请输入主题内容" type="textarea" resize="none" size="mini"></el-input>
            </div>
          </div>
          <div class="upload-con display-flex-row">
            <div class="upload-con-item">
              <div class="sub-title">优势四 ICON：</div>
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
            <div class="upload-con-item">
              <div class="sub-title">主标题：</div>
              <el-input placeholder="请输入标题内容"  size="mini"></el-input>
            </div>
            <div class="upload-con-item">
              <div class="sub-title">内容：</div>
              <el-input placeholder="请输入主题内容" type="textarea" resize="none" size="mini"></el-input>
            </div>
          </div>
        </div>

        <div class="upload-item">
          <div class="title">
            <span class="name">平台简介</span>
            <span class="desc">（只支持jpg格式、上传图片大小2M内）</span>
            <el-button type="primary" size="mini" style="margin-left:185px">保存</el-button>
          </div>
          <div class="upload-con display-flex-row">
            <div class="upload-con-item">
              <div class="sub-title">视频上传</div>
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
          </div>
        </div>
        <!-- 合作伙伴 -->
        <div class="upload-item">
          <div class="title">
            <span class="name">合作伙伴</span>
            <span class="desc">（只支持jpg格式、上传图片大小2M内）</span>
            <el-button type="primary" size="mini" style="margin-left:185px">保存</el-button>
          </div>
          <div class="upload-con display-flex-row">
            <div class="upload-con-item">
              <div class="sub-title">图片上传</div>
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
          </div>
        </div>
        <!-- 界面底部栏 -->
        <div class="upload-item">
          <div class="title">
            <span class="name">界面底部栏</span>
            <span class="desc">（只支持jpg格式、上传图片大小2M内）</span>
            <el-button type="primary" size="mini" style="margin-left:185px">保存</el-button>
          </div>
          <div class="upload-con display-flex-row">
            <div class="upload-con-item">
              <div class="sub-title">更换二维码</div>
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
            <div class="upload-con-item">
              <div class="sub-title">二维码名称：</div>
              <el-input placeholder="请输入二维码名称"  size="mini"></el-input>
            </div>
            <div class="upload-con-item">
              <div class="sub-title">地址：</div>
              <el-input placeholder="请输入地址" type="textarea" resize="none" size="mini"></el-input>
            </div>
          </div>
          <div class="upload-con display-flex-row">
            <div class="upload-con-item">
              <div class="sub-title">联系方式：</div>
              <el-input placeholder="请输入联系方式" type="textarea" resize="none" size="mini"></el-input>
            </div>
            <div class="upload-con-item">
              <div class="sub-title">邮箱：</div>
              <el-input placeholder="请输入邮箱" type="textarea" resize="none" size="mini"></el-input>
            </div>
          </div>
          <div class="upload-con display-flex-row">
            <div class="upload-con-item">
              <div class="sub-title">网站备案信息-1：</div>
              <el-input placeholder="请输入网站备案信息-1" type="textarea" resize="none" size="mini"></el-input>
            </div>
            <div class="upload-con-item">
              <div class="sub-title">网站备案信息-2：</div>
              <el-input placeholder="请输入网站备案信息-2" type="textarea" resize="none" size="mini"></el-input>
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
  components:{
    PlatformCrumb,
  },
  data() {
    return {
      imageUrl: ""
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style lang="less" scoped>
@import url("platform.less");
@deep: ~">>>";

.upload{
  background: #fff;
  padding: 30px 130px;
}
.upload-item {
  margin-bottom: 30px;
  > .title {
    &::before {
      width: 4px;
      height: 18px;
      background-color: #c60818;
      display: inline-block;
      content: " ";
      margin-right: 10px;
      vertical-align: -3px;
    }
    .name {
      font-size: 16px;
    }
    .desc {
      font-size: 12px;
      color: #999;
      margin-left: 15px;
    }
  }
}
.upload-con {
  margin-top: 24px;
  @{deep} {
    .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      &:hover {
        border-color: #409eff;
      }
    }
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 98px;
    height: 98px;
    line-height: 98px;
    text-align: center;
  }
  .avatar {
    width: 98px;
    height: 98px;
    display: block;
  }
  .sub-title{
    margin-bottom: 27px;
  }
  .upload-con-item{
    margin-right: 68px;
    @{deep}{
      .el-button{
        margin-top: 20px;
        float: right;
      }
    }
  }
}
</style>
