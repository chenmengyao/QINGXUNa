<template>
  <div style="margin:0 auto;width:1000px;padding-top:100px;background:#fff;padding-right:40px;padding-left:40px">
    <el-form>
      <el-form-item>
        <span class="border">LOGO（只支持jpg格式、上传图片大小2M内）</span>
        <el-upload
          action="/"
          list-type="picture-card"
          :auto-upload="false"
          :on-change="picChange"
          :on-remove="picRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>

      <el-form-item>
        <span class="border">轮播图（只支持jpg格式、上传图片大小2M内）</span>
        <div>
          <p><strong>第一张</strong></p>
          <el-upload
            action="/"
            list-type="picture-card"
            :auto-upload="false"
            :on-change="picChange"
            :on-remove="picRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <span>URL</span>
          <el-input></el-input>
        </div>

        <div>
          <p><strong>第二张</strong></p>
          <el-upload
            action="/"
            list-type="picture-card"
            :auto-upload="false"
            :on-change="picChange"
            :on-remove="picRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <span>URL</span>
          <el-input></el-input>
        </div>

        <div>
          <p><strong>第三张</strong></p>
          <el-upload
            action="/"
            list-type="picture-card"
            :auto-upload="false"
            :on-change="picChange"
            :on-remove="picRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <span>URL</span>
          <el-input></el-input>
        </div>

        <div>
          <p><strong>第四张</strong></p>
          <el-upload
            action="/"
            list-type="picture-card"
            :auto-upload="false"
            :on-change="picChange"
            :on-remove="picRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <span>URL</span>
          <el-input></el-input>
        </div>

      </el-form-item>

      <el-form-item>
        <span class="border">机构修改</span>
        <p><strong>机构名称</strong></p>
        <el-input></el-input>

        <p><strong>机构图片</strong></p>

        <el-upload
          action="/"
          list-type="picture-card"
          :auto-upload="false"
          :on-change="picChange"
          :on-remove="picRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>

        <p><strong>机构简介</strong></p>
        <div id="wang1"></div>
      </el-form-item>

      <el-form-item>
        <span class="border">训练设施</span>
        <p><strong>上传封面</strong></p>
        <el-upload
          action="/"
          list-type="picture-card"
          :auto-upload="false"
          :on-change="picChange"
          :on-remove="picRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
          <span>主标题</span>
          <el-input v-model="dataForm.trainingFacilities"></el-input>
      </el-form-item>

      <el-form-item>
        <span class="border">训练视频</span>
        <p><strong>上传封面</strong></p>
        <el-upload
          action="/"
          list-type="picture-card"
          :auto-upload="false"
          :on-change="picChange"
          :on-remove="picRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
          <span>主标题</span>
          <el-input v-model="dataForm.trainingVideo"></el-input>
      </el-form-item>

      <el-form-item>
        <span class="border">机构信息</span>
        <div id="wang2"></div>
      </el-form-item>

      <el-form-item>
        <span class="border">机构课程</span>
        <p><strong>上传封面</strong></p>
        <el-upload
          action="/"
          list-type="picture-card"
          :auto-upload="false"
          :on-change="picChange"
          :on-remove="picRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
          <span>主标题</span>
          <el-input v-model="dataForm.courses"></el-input>
      </el-form-item>

      <el-form-item>
        <span class="border">教练团队</span>
        <p><strong>上传封面</strong></p>
        <el-upload
          action="/"
          list-type="picture-card"
          :auto-upload="false"
          :on-change="picChange"
          :on-remove="picRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
          <span>主标题</span>
          <el-input v-model="dataForm.teams"></el-input>
      </el-form-item>

      <el-form-item>
        <span class="border">赛事荣誉</span>
        <p><strong>上传封面</strong></p>
        <el-upload
          action="/"
          list-type="picture-card"
          :auto-upload="false"
          :on-change="picChange"
          :on-remove="picRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
          <span>主标题</span>
          <el-input v-model="dataForm.matchs"></el-input>
      </el-form-item>

      <el-form-item>
        <span class="border">界面底部栏</span>
        <p><strong>更换二维码</strong></p>
        <el-upload
          action="/"
          list-type="picture-card"
          :auto-upload="false"
          :on-change="picChange"
          :on-remove="picRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
          <span>二维码地址</span>
          <el-input v-model="dataForm.publicImg"></el-input>
          <span>联系方式</span>
          <el-input v-model="dataForm.leaderPhone"></el-input>
          <span>地址</span>
          <el-input v-model="dataForm.infoAddress"></el-input>
          <span>邮箱</span>
          <el-input v-model="dataForm.infoMail"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSave">保存</el-button>
      </el-form-item>
    </el-form>
    <br>
  </div>

</template>

<script>
import Wang from 'wangeditor'
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      wang1: '',
      wang2: '',
      dataForm: {}
    }
  },

  computed: {
    ...mapState('Login', [
      'userStatus'
    ])
  },
  
  methods: {
    ...mapActions('organ', [
      'wodejianjieEdit'
    ]),

    onSave () {
      this.dataForm.id = Number(this.userStatus.id)
      this.dataForm.message = this.wang2.txt.html()
      this.dataForm.info = this.wang1.txt.html()
      this.wodejianjieEdit(this.dataForm).then(res => {
        const { code } = res
        if (code === 200) {
          this.$message({
            type: 'success',
            message: '保存成功'
          })
        }
      })
    }
  },

  mounted () {
    this.wang1 = new Wang('#wang1')
    this.wang1.create()
    this.wang2 = new Wang('#wang2')
    this.wang2.create()
  }



}
</script>


<style scoped>
.border{
  border-left:3px solid #c60818;
  padding-left:10px;
  font-size:16px;
}
</style>

