<template>
  <div>
    <div>
      <!-- <el-row class="titleBackground">
        <el-col :span="16">
          <el-form inline size="small" style="margin-bottom:-20px">
            <el-form-item>
              <el-button size="small" class="title">我的课程</el-button>
            </el-form-item>

            <el-form-item>
              <el-select v-model="searchForm.courseType" size="small" clearable @change="onSelectChange">
                <el-option
                  v-for="item in options"
                  :label="item.dictName"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </el-col>

        <el-col :span="8" style="text-align:right">
          <el-button class="theme-blue" size="small" @click="toWodeKeCheng">新增课程</el-button>
        </el-col>
      </el-row> -->

      <el-row style="margin-top:10px">
        <el-col :span="24">
          <el-table
            ref="multipleTable"
            stripe
            :data="tableList"
            style="width: 100%"
            @selection-change="selectChange"
          >

          <el-table-column type="selection" width="55"/>

          <el-table-column
            label="序号"
            type="index"
            width="50"
            align="center"/>

          <el-table-column
            v-for="(item, index) in header"
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
            :key="index"
          >
            <template slot-scope="scope" v-if="item.prop==='startTime'">
              <span>{{forDate(scope.row.startTime,'Y-M-D h:m:s')}}</span>
            </template>
          </el-table-column>
          <el-table-column label="当前状态">
            <template slot-scope="scope">
              <span>{{scope.row.type==='0'?'待开课':scope.row.type==='1'?'开课中':'已完成'}}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <span class="inDetail" @click="editDetail(scope)">查看详情</span>&nbsp;
              <!-- <span class="inDetail" @click="removeKecheng(scope.row)">移除课程</span> -->
            </template>
          </el-table-column>
          </el-table>

          <br>
          <el-pagination
            background
            style="float:right"
            @current-change="pageChange"
            layout="prev, pager, next"
            :total="searchForm.total">
          </el-pagination>

          <span style="float:right;padding-top:6px;">共{{searchForm.total}}门课程，每页{{searchForm.pageSize}}门课程</span>

          <div style="clear:both"></div>
          <br>
        </el-col>
      </el-row>
    </div>

    <el-dialog title="结束课程" :visible.sync="deleteDialog">
          <el-table
            ref="multipleTable"
            stripe
            :data="selectList"
            style="width: 100%"
          >
          <el-table-column label="当前状态">
            <template slot-scope="scope">
              <span>{{scope.row.type==='0'?'待开课':scope.row.type==='1'?'开课中':'已完成'}}</span>
            </template>
          </el-table-column>
          <el-table-column
            v-for="(item, index) in header"
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
            :key="index"
          />

          </el-table>

          <br>
          <span style="padding:10px;"><strong>是否移除以上球队？</strong></span>
          <el-button size="small" type="primary" @click="onDelete">确定</el-button>
          <el-button size="small" @click="deleteDialog = false">取消</el-button>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import {forDate} from '../../utils/utils.js'

const header = [
  { prop: 'name', label: '课程' },
  { prop: 'startTime', label: '上课时间' },
  { prop: 'address', label: '上课地点' }
]

export default {
  components: {  },
  data () {
    return {
      header,
      addPKDialog: false,
      deleteDialog: false,
      tableList: [],

      options: [
        { label: '全部', value: 1 }
      ],

      searchForm: {
        courseType: '',
        pageNum:1,
        pageSize: 10,
        total: 0
      },

      selectList: []
    }
  },

  computed: {
    ...mapState('Login', [
      'userStatus'
    ]),

    dateHeader () {
      const date = this.activeDate
    }
  },

  methods: {
    ...mapActions('coachTraining', [
      'fetchCourseList',
      'fetchSelectList',
      'removeKeCheng'
    ]),

    ...mapActions('ScheduleCard', [
      'fetchMyInfo3'
    ]),
    forDate,

    clickDay (val) {
      this.activeDate = new Date(val).valueOf()
    },

    toWodeKeCheng () {
      this.$router.push({name: 'wodekecheng'})
    },

    onSearch () {
      this.searchForm.pageNum = 1
      this.fetchList()
    },

    fetchList () {
      this.searchForm.id = Number(this.userStatus.statusId)

      this.fetchMyInfo3(this.searchForm).then(res => {
        const { code, data: {list, total}} = res
        if (code === 200) {
          this.tableList = list || []
          this.searchForm.total = Number(total)
        }
      })
    },

    selectChange (val) {
      this.selectList = val
      console.log(this.selectList)
    },

    pageChange (val) {
      this.searchForm.pageNum = val
      this.fetchList()
    },

    getSelect () {
      this.fetchSelectList({type:'CT'}).then(res => {
        const { code, data: {list} } = res
        if (code === 200) {
          this.options = list || []
        }
      })
    },

    // removeKecheng (scope) {
    //   const id = scope.row.id
    //   const name = scope.row.name
    //   console.log(scope,99)
    //   this.$confirm(`是否移除${name}？`, '提示', {
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //     type: 'warning'
    //   }).then(() => {
    //     this.fetchRemoveKeCheng(Number(id))
    //   })
    // },

    // fetchRemoveKeCheng (id) {
    //   this.removeKeCheng({id}).then(res => {
    //     const { code } = res
    //     if (code === 200) {
    //       this.searchForm.pageNum = 1
    //       this.fetchList()
    //     }
    //   })
    // },

    onSelectChange (val) {
      this.fetchList()
    },

    editDetail (scope) {
      const { row: {id}} = scope
      this.$router.push({name: '/parent/coachDetail', query:{id}})
    },

    onDelete () {
      console.log(this.selectList)
    }
  },

  created () {
    this.fetchList()
    this.getSelect()
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

.inDetail {
  cursor: pointer;
  color:#2d64b3;
}

.SBBZ {
  color:#c60818;
}
</style>



