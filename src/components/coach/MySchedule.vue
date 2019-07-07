<template>
  <div>
    <div>
      <el-row class="titleBackground">
        <el-col :span="18">
          <el-button size="small" class="title">我的排课</el-button>
        </el-col>

        <el-col :span="6" style="text-align:right">
          <el-button class="theme-blue" size="small" @click="tianjiapaike">新增排课</el-button>
          <el-button type="primary" size="small" @click="upLoadDialog = true">上传装备文件</el-button>
        </el-col>
      </el-row>

      <el-row style="margin-top:10px">
        <el-col :span="11">
          <!-- <el-calendar @change="onChange" v-model="calendarValue"/> -->
          <Calendar
            v-on:choseDay="clickDay"
          ></Calendar>
        </el-col>

        <el-col :span="13">
          <!-- <el-row>
            <el-col :span="24">
              <ul>
                <li class="li">日期</li>
                <li class="li" v-for="item in tableData">
                  {{item.time}}
                </li>
              </ul>
            </el-col>
          </el-row> -->

          <el-row>
            <!-- <el-col :span="24">
              <ul v-for="item in tableData[0].day" style="padding:6px 10px;border:1px solid #333">
                <li class="li">{{item.name}}</li>
                <li class="li" v-for="i in tableData">
                    <el-input  v-for="j in i.day" v-model="j.reason" style="width:80px;"></el-input>
                </li>
              </ul>
            </el-col> -->
            <el-col :span="24" class="table">
            <ul class="title">
                <li class="liStyle">
                    日期
                </li>
                <li v-for='i in tableData.data' class="liStyle">
                    {{i.time}}
                </li>
            </ul>
            <div class="df">
                <div>
                    <ul v-for='i in tableData.data[0].day'>
                        <li class="liStyle">
                            {{i.name}}
                        </li>
                    </ul>
                </div>
                <div class="t_body df">
                    <ul v-for='i in tableData.data'>
                        <li v-for='j in i.day' class="liStyle">
                            <!-- {{j.reason}} -->
                            <el-input size="mini" v-model="j.reason"></el-input>
                            <!-- <input type="text" v-model="j.reason"/> -->
                        </li>
                    </ul>
                </div>
            </div>
            </el-col>
          </el-row>


          <!-- <el-table
            stripe
            :data="tableList"
            style="width: 100%"
          >

          <el-table-column
            prop="date"
            label="日期"
            width="130px"
          >
          </el-table-column>
          <el-table-column
            prop="one"
            label="前2天"
          >
          </el-table-column>
          <el-table-column
            prop="two"
            label="前1天">
          </el-table-column>
          <el-table-column
            prop="three"
            label="今天">
          </el-table-column>
          <el-table-column
            prop="four"
            label="后1天">
          </el-table-column>
          </el-table> -->
        </el-col>
      </el-row>
    </div>

    <el-dialog title="新增排课" :visible.sync="addPKDialog" width="70%" v-if="addPKDialog">
          <el-row>
            <el-col :span="8">
              <Calendar v-on:choseDay="addChoseDay" v-if="!addStartTime"></Calendar>
            </el-col>

            <!-- <el-col :span="24">
              <ul v-for="item in tableData[0].day" style="padding:6px 10px;border:1px solid #333">
                <li class="li">{{item.name}}</li>
                <li class="li" v-for="i in tableData">
                    <el-input  v-for="j in i.day" v-model="j.reason" style="width:80px;"></el-input>
                </li>
              </ul>
            </el-col> -->
            <el-col :span="16" class="table" v-if="addStartTime">
            <ul class="title">
                <li class="liStyle">
                    日期
                </li>
                <li v-for='i in dayList' class="liStyle">
                    {{i.time}}
                </li>
            </ul>
            <div class="df">
                <div>
                    <ul v-for='i in periodList'>
                        <li class="liStyle">
                            {{i.period}}
                        </li>
                    </ul>
                </div>
                <div class="t_body df">
                    <ul v-for='i in dayList'>
                        <li v-for='j in i.periodList' class="liStyle">
                            <!-- {{j.reason}} -->
                            <!-- <el-input size="mini" v-model="j.reason"></el-input> -->
                            <el-input size="mini" v-model="j.reason"></el-input>
                            <!-- <input type="text" v-model="j.reason"/> -->
                        </li>
                        <!-- <li>ttt</li> -->
                    </ul>
                </div>
            </div>
            </el-col>
          </el-row>
          <br>
          <el-button @click="onAddPaiKe" type="primary" style="margin-left:20px;">确定</el-button>
    </el-dialog>

    <el-dialog title="上传装备" :visible.sync="upLoadDialog" width="20%">
      <el-form size="small" label-width="80px" style="margin:0 auto;width:300px;">
        <el-form-item label="申请人">
          <el-input v-model="upLoadForm.applyName"></el-input>
        </el-form-item>
        <el-form-item label="申领日期">
            <el-date-picker
              v-model="upLoadForm.applyTime"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="upLoadForm.reason"></el-input>
        </el-form-item>
        <el-form-item label="上传文件">
          <el-upload
            class="upload-demo"
            action="1"
            :auto-upload="false"
            :on-change="fileChange"
            :on-remove="fileRemove"
            :limit="1"
            :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">上传</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>


</template>

<script>
import Calendar from 'vue-calendar-component'
import { mapActions, mapState } from 'vuex'

export default {
  components: { Calendar },
  data () {
    return {
      fileList: [],
      addPKDialog: false,
      dayList: [],
      periodList: [
        {period: '9点-10点', startTime: '', endTime: '', coachId: '', reason: '1'},
        {period: '10点-11点', startTime: '', endTime: '', coachId: '', reason: '2'},
        {period: '11点-12点', startTime: '', endTime: '', coachId: '', reason: '3'},
        {period: '13点-14点', startTime: '', endTime: '', coachId: '', reason: '4'},
        {period: '14点-15点', startTime: '', endTime: '', coachId: '', reason: '5'},
        {period: '15点-16点', startTime: '', endTime: '', coachId: '', reason: '6'},
        {period: '16点-17点', startTime: '', endTime: '', coachId: '', reason: '7'},
        {period: '17点-18点', startTime: '', endTime: '', coachId: '', reason: '8'},
      ],
      upLoadDialog: false,
      activeDate: new Date().valueOf(),
      tableList: [
        { date: '09:00-10:00', one: 1, two: 2, two: 3, three: 4, four: 4 },
        { date: '10:00-11:00', one: 1, two: 2, two: 3, three: 4, four: 4 },
        { date: '11:00-12:00', one: 1, two: 2, two: 3, three: 4, four: 4 },
        { date: '12:00-13:00', one: 1, two: 2, two: 3, three: 4, four: 4 },
        { date: '13:00-14:00', one: 1, two: 2, two: 3, three: 4, four: 4 },
        { date: '14:00-15:00', one: 1, two: 2, two: 3, three: 4, four: 4 },
        { date: '15:00-16:00', one: 1, two: 2, two: 3, three: 4, four: 4 },
        { date: '16:00-17:00', one: 1, two: 2, two: 3, three: 4, four: 4},
      ],

      addtableList: [
        { date: '09:00-10:00', one: 1, two: 2, two: 3, three: 4, four: 4 },
        { date: '10:00-11:00', one: 1, two: 2, two: 3, three: 4, four: 4 },
        { date: '11:00-12:00', one: 1, two: 2, two: 3, three: 4, four: 4 },
        { date: '12:00-13:00', one: 1, two: 2, two: 3, three: 4, four: 4 },
        { date: '13:00-14:00', one: 1, two: 2, two: 3, three: 4, four: 4 },
        { date: '14:00-15:00', one: 1, two: 2, two: 3, three: 4, four: 4 },
        { date: '15:00-16:00', one: 1, two: 2, two: 3, three: 4, four: 4 },
        { date: '16:00-17:00', one: 1, two: 2, two: 3, three: 4, four: 4},
      ],

      upLoadForm: {

      },
      
      addStartTime: '',

               tableData: {
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
                            "reason": "13 热身"
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
                            "reason": "13 休息"
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
                            "reason": "14 热身"
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
                            "reason": "14 守门训练"
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
                            "reason": "15 热身"
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
                            "reason": "15 休息"
                        }]
                    }, ]
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
  created () {
    var firstDay = {
        time: this.Moment(new Date()).format('YYYYMMDD'),
        periodList: [
          {period: '9点-10点', startTime: '', endTime: '', coachId: '', reason: '1'},
          {period: '10点-11点', startTime: '', endTime: '', coachId: '', reason: '2'},
          {period: '11点-12点', startTime: '', endTime: '', coachId: '', reason: '3'},
          {period: '13点-14点', startTime: '', endTime: '', coachId: '', reason: '4'},
          {period: '14点-15点', startTime: '', endTime: '', coachId: '', reason: '5'},
          {period: '15点-16点', startTime: '', endTime: '', coachId: '', reason: '6'},
          {period: '16点-17点', startTime: '', endTime: '', coachId: '', reason: '7'},
          {period: '17点-18点', startTime: '', endTime: '', coachId: '', reason: '8'},
        ]
      };
      var secondDay = {
        time: this.Moment(new Date()).add(1, 'days').format('YYYYMMDD'),
        periodList: [
          {period: '9点-10点', startTime: '', endTime: '', coachId: '', reason: '1'},
          {period: '10点-11点', startTime: '', endTime: '', coachId: '', reason: '2'},
          {period: '11点-12点', startTime: '', endTime: '', coachId: '', reason: '3'},
          {period: '13点-14点', startTime: '', endTime: '', coachId: '', reason: '4'},
          {period: '14点-15点', startTime: '', endTime: '', coachId: '', reason: '5'},
          {period: '15点-16点', startTime: '', endTime: '', coachId: '', reason: '6'},
          {period: '16点-17点', startTime: '', endTime: '', coachId: '', reason: '7'},
          {period: '17点-18点', startTime: '', endTime: '', coachId: '', reason: '8'},
        ]
      };
      var thirdDay = {
        time: this.Moment(new Date()).add(2, 'days').format('YYYYMMDD'),
        periodList: [
          {period: '9点-10点', startTime: '', endTime: '', coachId: '', reason: '1'},
          {period: '10点-11点', startTime: '', endTime: '', coachId: '', reason: '2'},
          {period: '11点-12点', startTime: '', endTime: '', coachId: '', reason: '3'},
          {period: '13点-14点', startTime: '', endTime: '', coachId: '', reason: '4'},
          {period: '14点-15点', startTime: '', endTime: '', coachId: '', reason: '5'},
          {period: '15点-16点', startTime: '', endTime: '', coachId: '', reason: '6'},
          {period: '16点-17点', startTime: '', endTime: '', coachId: '', reason: '7'},
          {period: '17点-18点', startTime: '', endTime: '', coachId: '', reason: '8'},
        ]
      };
      var fourthDay = {
        time: this.Moment(new Date()).add(3, 'days').format('YYYYMMDD'),
        periodList: [
          {period: '9点-10点', startTime: '', endTime: '', coachId: '', reason: '1'},
          {period: '10点-11点', startTime: '', endTime: '', coachId: '', reason: '2'},
          {period: '11点-12点', startTime: '', endTime: '', coachId: '', reason: '3'},
          {period: '13点-14点', startTime: '', endTime: '', coachId: '', reason: '4'},
          {period: '14点-15点', startTime: '', endTime: '', coachId: '', reason: '5'},
          {period: '15点-16点', startTime: '', endTime: '', coachId: '', reason: '6'},
          {period: '16点-17点', startTime: '', endTime: '', coachId: '', reason: '7'},
          {period: '17点-18点', startTime: '', endTime: '', coachId: '', reason: '8'},
        ]
      };
      this.dayList = [firstDay, secondDay, thirdDay, fourthDay];
  },

  computed: {
    dateHeader () {
      const date = this.activeDate
    },
    ...mapState('Login', [
      'userStatus'
    ]),
  },

  methods: {
    ...mapActions('coachTraining', [
      'upLoadApply',
      'getPaike',
      'addPaike'
    ]),

    tianjiapaike () {
      this.addPKDialog = true
      this.addStartTime = ''
    },

    clickDay (val) {
      // this.activeDate = this.Moment(val).utc().format()
      // this.activeDate = `${this.Moment(val).format('YYYY-MM-DD')}T07:24:51.531Z`
      let startTime = this.Moment(val).format('YYYY-MM-DD 08:00:00')
      let endTime = this.Moment(val).add(3, 'day').format('YYYY-MM-DD 22:00:00')
      startTime = new Date(startTime).valueOf()
      endTime = new Date(endTime).valueOf()
      
      this.activeDate = {startTime, endTime}

      this.fetchList()
    },

    addChoseDay (val) {

      this.addStartTime = this.Moment(val).utc().format()
      console.log(this.dayList)
      for (var i=0; i<=this.dayList.length; i++) {
        this.dayList[i].time = this.Moment(val).add(i, 'days').format('YYYY-MM-DD')
      }
    },

    fetchList () {
      let coachId = Number(this.userStatus.id)
      const { endTime , startTime } = this.activeDate
      this.getPaike({coachId, startTime, endTime}).then(res => {
        const { code, data = null } = res
        if (code === 200 && data) {
          this.tableData = res
        }
      })
    },

    onAddPaiKe () {
      let id = Number(this.userStatus.id)
      let arr = []
      this.dayList.forEach(item => {
        const { time } = item
        console.log(time)
        item.periodList.forEach(j => {
          // j.startTime = `${this.Moment(time).format('YYYY-MM-DD')}T07:24:51.531Z`
          // j.endTime = `${this.Moment(time).format('YYYY-MM-DD')}T08:24:51.531Z`
          j.startTime = new Date(time).valueOf()
          j.endTime = new Date(time).valueOf()
          j.coachId = id
          j.name = j.period
          // delete j.period
          arr.push(j)
        })
      })

      console.log(arr)



      // let addStartTime = this.addStartTime
      // let arr = []
      // this.addTable.data.forEach(item => {
      //   item.day.forEach(j => {
      //     j.coachId = id
      //     j.startTime = addStartTime
      //     arr.push(j)
      //   })
      // })

      this.addPaike(arr).then(res =>{
        const { code } = res
        if (code === 200) {
          this.$message({
            message: '成功',
            type: 'success'
          })
          this.addPKDialog = false
        }
      })
    },

    fileChange (val, list) {
      this.upLoadForm.file = val.raw
      console.log(this.upLoadForm.file)
    },

    fileRemove (val, list) {
      this.upLoadForm.file = ''
      console.log(this.upLoadForm.file)
      
    },

    onSubmit () {
      this.upLoadForm.coachId = this.userStatus.id
      console.log(this.upLoadForm)

      let data = new FormData()
      data.append('params', this.upLoadForm)

      this.upLoadApply(data).then(res => {
        console.log(res)
        const { code } = res
        if (code === 200) {
          this.$message({
            message: '上传成功',
            type: 'success'
          })
          this.upLoadDialog = false
        }
      })
    }
  }

}
</script>

<style scoped>
  .titleBackground {
    padding:10px;
    background:#f5f7fa;
    border:1px solid #f7f7f7;
  }
</style>

<style>
.wh_content_all[data-v-2ebcbc83]{
  background-color:#2d64b3;
}
.wh_content_item .wh_isToday[data-v-2ebcbc83] {
  background:#254d87;
}

.wh_content_item .wh_chose_day[data-v-2ebcbc83] {
  background:#254d87;
}

.title {
  background:none;
  border:none;
  color:#333;
  font-weight:bold;
  font-size:14px;
}

/* .li {
  padding:6px 30px;
  border:1px solid #333;
  display:inline-block;
} */

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



