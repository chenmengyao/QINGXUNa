<template>
  <div style="padding-top:120px;padding-left:20px;width:1150px;margin:0 auto;background:#fff;">
    <el-button style="float:right;margin-right:30px;" size="mini" type="primary" @click="dialog = true">考勤</el-button>
    <div style="clear:both"></div>
    <h3 style="text-align:center">{{formData.name}}</h3>

    <br>
    <br>
    <img :src="formData.imgs" alt="">

    <div>
      {{formData.doc}}
    </div>

    <div class="table">
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
                    {{j.reason}}
                    <!-- <input type="text" v-model="j.reason"/> -->
                </li>
            </ul>
        </div>
    </div>
    </div>


    <div style="text-align:center">
      <el-button type="primary" @click="toDetail">编辑课程</el-button>
    </div>

    <br>

    <el-dialog title="考勤" :visible.sync="dialog" width="80%" v-if="dialog">
      <kao-qin/>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import KaoQin from './Kaoqin'
export default {
  components: {KaoQin},
  data () {
    return {
      dialog: false,
      formData: {

      },

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
      'getKeCheng'
    ]),

    toDetail () {
      let id = this.id
      this.$router.push({name: 'wodekecheng', query:{id}})
    },

    getInfo () {
      let id = this.id

      this.getKeCheng({id}).then(res => {
        const { code, data } = res
        if (code === 200 && data) {
          this.formData = data
          // this.addTable = 
        }
      })
    }
  },

  created () {
    this.getInfo()
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


