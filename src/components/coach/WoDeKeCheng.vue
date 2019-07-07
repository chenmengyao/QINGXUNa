<template>
  <div style="padding-top:120px;padding-left:20px;width:1150px;margin:0 auto;background:#fff;">
    <el-form size="medium" label-width="120">
          <el-form-item label="课程名称" label-width="80px">
            <el-input v-model="detailForm.name"></el-input>
          </el-form-item>

          <el-form-item label="地点" label-width="80px">
            <el-input v-model="detailForm.address"></el-input>
          </el-form-item>

					<el-form-item label="课程配图" prop="nikename" label-width="80px">
							<el-upload
								action="/"
								list-type="picture-card"
								:auto-upload="false"
								:on-change="bcPicChange"
								:on-remove="bcPicRemove"
							>
								<i class="el-icon-plus"></i>
							</el-upload>
							<!-- <el-dialog :visible.sync="dialogVisible2">
								<img width="100%" :src="dialogIhomeImgs2" alt="">
							</el-dialog> -->
					</el-form-item>

          <el-form-item label="排课" label-width="80px">
            <el-select v-model="detailForm.main" placeholder="请选择" multiple>
                <el-option
                  v-for="item in optionsKC"
                  :key="item.dictName"
                  :label="item.dictName"
                  :value="item.id">
                </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="课程类型" label-width="80px">
            <el-select v-model="detailForm.type" placeholder="请选择" multiple>
                <el-option
                  v-for="item in optionsKC"
                  :key="item.dictName"
                  :label="item.dictName"
                  :value="item.id">
                </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="一周排课" label-width="80px">
            <el-date-picker
              v-model="detailForm.startTime"
              type="date"
              format="timestamp"
              placeholder="选择日期">
            </el-date-picker>
            至
            <el-date-picker
              v-model="detailForm.endTime"
              format="timestamp"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>

          <el-form-item>
            <div id="wang"></div>
          </el-form-item>

          <el-form-item class="table">
            <ul class="title">
                <li class="liStyle">
                    日期
                </li>
                <li v-for='i in addTable.data' class="liStyle">
                    {{i.time}}
                </li>
            </ul>
            <div class="df">
                <div>
                    <ul v-for='i in addTable.data[0].day'>
                        <li class="liStyle">
                            {{i.name}}
                        </li>
                    </ul>
                </div>
                <div class="t_body df">
                    <ul v-for='i in addTable.data'>
                        <li v-for='j in i.day' class="liStyle">
                            <!-- {{j.reason}} -->
                            <el-input size="mini" v-model="j.reason"></el-input>
                            <!-- <input type="text" v-model="j.reason"/> -->
                        </li>
                    </ul>
                </div>
            </div>
          </el-form-item>

          <el-form-item>
            <el-button @click="get" type="primary">确定</el-button>
          </el-form-item>

          <br>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Wang from 'wangeditor'

export default {
  data () {
    return {
      optionsKC: [],
      detailForm: {},
      editor: null,
      addTable: {
                    "code": 200,
                    "message": "成功",
                    "data": [{
                        "time": 20190613,
                        "day": [{
                            "id": 5,
                            "name": " 9点-10点",
                            "startTime": 1559886152000,
                            "endTime": 1559454152000,
                            "courseId": 1,
                            "coachId": 1,
                            "index": 1,
                            "status": 0,
                            "createTime": 1559454769000,
                            "updateTime": 1559454769000,
                            "reason": ""
                        }, {
                            "id": 1,
                            "name": " 三点-四点",
                            "startTime": 1559897654000,
                            "endTime": 1559206454000,
                            "courseId": 1,
                            "index": 4,
                            "coachId": 1,
                            "status": 0,
                            "createTime": 1559206825000,
                            "updateTime": 1559206825000,
                            "reason": ""
                        }, ]
                    }, {
                        "time": 20190614,
                        "day": [{
                            "id": 5,
                            "name": "14 9点-10点",
                            "startTime": 1559886152000,
                            "endTime": 1559454152000,
                            "courseId": 1,
                            "coachId": 1,
                            "index": 1,
                            "status": 0,
                            "createTime": 1559454769000,
                            "updateTime": 1559454769000,
                            "reason": ""
                        }, {
                            "id": 1,
                            "name": "14 三点-四点",
                            "startTime": 1559897654000,
                            "endTime": 1559206454000,
                            "courseId": 1,
                            "index": 4,
                            "coachId": 1,
                            "status": 0,
                            "createTime": 1559206825000,
                            "updateTime": 1559206825000,
                            "reason": ""
                        }]
                    }, {
                        "time": 20190615,
                        "day": [{
                            "id": 5,
                            "name": "15 9点-10点",
                            "startTime": 1559886152000,
                            "endTime": 1559454152000,
                            "courseId": 1,
                            "coachId": 1,
                            "index": 1,
                            "status": 0,
                            "createTime": 1559454769000,
                            "updateTime": 1559454769000,
                            "reason": ""
                        }, {
                            "id": 1,
                            "name": "15 三点-四点",
                            "startTime": 1559897654000,
                            "endTime": 1559206454000,
                            "courseId": 1,
                            "index": 4,
                            "coachId": 1,
                            "status": 0,
                            "createTime": 1559206825000,
                            "updateTime": 1559206825000,
                            "reason": ""
                        }]
                    }, ]
                }
    }
  },

  computed: {
    id () {
      return this.$route.query.id
    }
  },

  methods: {
    ...mapActions('coachTraining', [
      'fetchSelectList',
      'addKeCheng',
      'getKeCheng'
    ]),

			bcPicChange (file, fileList) {
				let lists = []
				
				fileList.forEach(item => {
					lists.push(item.raw)
				})

				this.detailForm.bcPic = lists
				console.log(this.detailForm.bcPic)
				
      },
      
			bcPicRemove (file, fileList) {
				this.detailForm.bcPic = fileList
				console.log(this.detailForm.bcPic)
			},

    getSelectKC () {
      this.fetchSelectList({type:'CT'}).then(res => {
        const { code, data: {list} } = res
        if (code === 200) {
          this.optionsKC = list || []
        }
      })
    },

    get () {
      let id = Number(this.id)
      let startTime = this.detailForm.startTime
      let endTime = this.detailForm.endTime

      let arr = []
      this.addTable.data.forEach(item => {
        item.day.forEach(j => {
          j.coachId = id
          j.startTime = addStartTime
          arr.push(j)
        })
      })

      this.detailForm.doc = this.editor.txt.html()
      this.detailForm.times = arr
      let data = new FormData()
      data.append('params', this.detailForm)

      this.addKeCheng(data).then(res => {
        const { code } = res
        if (code === 200) {
          this.$message({
            message: '成功',
            type: 'success'
          })
        }
      })
  }
  },

  created () {
    this.getSelectKC()

    if (this.id) {
      console.log(this.id)
      const id = this.id

      console.log(this.getKeCheng)
      this.getKeCheng({id}).then(res => {
        const { code, data = null } = res
        if (code === 200 && data) {
          this.detailForm = data
          this.editor.txt.html(this.detailForm.doc)
        }

      })
    }
  },

  mounted () {
    this.editor = new Wang('#wang')
    this.editor.create()
  }
}
</script>

<style scoped>
    .table .title {
        display: flex;
    }
    
    .df {
        display: flex;
        background:none;
    }

    .liStyle {
        border: 1px solid;
        width: 120px;
        height: 50px;
        line-height: 50px;
        text-align: center;
    }
</style>




