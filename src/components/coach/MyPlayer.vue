<template>
  <div>
    <div>
      <el-row class="titleBackground">
        <el-col :span="16">
          <el-form inline size="small" style="margin-bottom:-20px">
            <el-form-item>
              <el-button size="small" class="title">我的球员</el-button>
            </el-form-item>

            <el-form-item>
              <el-select v-model="searchForm.grouping" clearable size="small" @change="fetchList">
                <el-option
                  v-for="item in options"
                  :key="item.dictName"
                  :label="item.dictName"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="快速查询">
              <el-input v-model="searchForm.name"/>
            </el-form-item>

            <el-form-item>
              <el-button @click="onSearch">查询</el-button>
            </el-form-item>
          </el-form>



        </el-col>

        <el-col :span="8" style="text-align:right" v-if="buttonDis">
          <el-button class="theme-blue" size="small" @click="groupDialog = true">分组管理</el-button>
          <el-button class="theme-blue" size="small" @click="deleteDialog = true" :disabled="!selectList.length">移除球员</el-button>
          <el-button type="primary" size="small" @click="examineDialog = true">球员审核列表</el-button>
        </el-col>
      </el-row>

      <el-row style="margin-top:10px">
        <el-col :span="24">
          <el-table
            ref="multipleTable"
            stripe
            :data="tableList"
            style="width: 100%"
            @selection-change="selectChange"
          >

          <el-table-column type="selection"width="55"/>
          
          <el-table-column
            label="序号"
            type="index"
            width="50"
            align="center"/>

          <el-table-column label="照片">
            <template slot-scope="scope">
              <img :src="scope.row.imgs" alt="">
            </template>
          </el-table-column>

          <el-table-column
            v-for="(item, index) in header"
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
          />

          <el-table-column label="伤病备注">
            <template slot-scope="scope">
              <span class="SBBZ">{{scope.row.wound}}</span>
            </template>
          </el-table-column>

          <el-table-column label="操作">
            <template slot-scope="scope">
              <span class="inDetail" @click="toDetail(scope)">查看详情</span>
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

          <span style="float:right;padding-top:6px;">共{{searchForm.total}}名球员，每页{{searchForm.pageSize}}名球员</span>

          <div style="clear:both"></div>
          <br>
        </el-col>
      </el-row>
    </div>

    <el-dialog title="球员审核" :visible.sync="examineDialog" width="70%" v-if="examineDialog">
      <examine-list/>
    </el-dialog>

    <el-dialog title="移除球员" :visible.sync="deleteDialog">
          <el-table
            ref="multipleTable"
            stripe
            :data="selectList"
            style="width: 100%"
          >

          <el-table-column
            v-for="(item, index) in header"
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
          />

          <el-table-column label="伤病备注">
            <template slot-scope="scope">
              <span class="SBBZ">{{scope.row.wound}}</span>
            </template>
          </el-table-column>
          </el-table>
          
          <br>
          <span style="padding:0 10px"><strong>是否移除以上球员？</strong></span>
          <el-button size="small" type="primary" @click="onDelete">确定</el-button>
          <el-button size="small" @click="deleteDialog = false">取消</el-button>
    </el-dialog>

    <el-dialog title="分组管理" :visible.sync="groupDialog" width="90%" v-if="groupDialog" :modal-append-to-body="false">
      <group-list @close="onClose"/>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ExamineList from './ExamineList'
import GroupList from './GroupList'

const header = [
  { prop: 'name', label: '球员' },
  { prop: 'age', label: '年龄' },
  { prop: 'number', label: '号码' },
  { prop: 'goodLocation', label: '擅长位置' },
  { prop: 'sumScoure ', label: '综合能力' },
  { prop: 'count ', label: '课程' },
  { prop: 'grouping', label: '分组' }
]

export default {
  components: { ExamineList, GroupList },
  data () {
    return {
      header,
      groupDialog: false,
      examineDialog: false,
      addPKDialog: false,
      deleteDialog: false,
      tableList: [
        {id: 1, name: 'adsfsd'}
      ],

      options: [
        { label: '全部', value: 1 }
      ],

      searchForm: {
        name: '',
        grouping: '',
        pageNum:1,
        pageSize: 10,
        total: 0
      },

      selectList: []
    }
  },

  computed: {
    dateHeader () {
      const date = this.activeDate
    },

    ...mapState('Login', [
      'userStatus'
    ]),

  },

  props: {
    buttonDis: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    ...mapActions('coachTraining', [
      'fetchPlayerList',
      'deletePlayer',
      'fetchSelectList'
    ]),

    toDetail (scope) {
      console.log(scope.row)
      const { row: { id } } = scope
      this.$router.push({name: 'playerDetail', query:{ id }})
    },

    onClose () {
      this.groupDialog = false
      this.examineDialog = true
    },

    clickDay (val) {
      this.activeDate = new Date(val).valueOf()
    },

    onSearch () {
      this.searchForm.pageNum = 1
      this.fetchList()
    },

    fetchList () {

      this.searchForm.coachId = this.userStatus.id
      
      for (let i in this.searchForm) {
        if (i !== 'grouping' && i !== 'name') {
          this.searchForm[i] = Number(this.searchForm[i])
        }
      }

      this.fetchPlayerList(this.searchForm).then(res => {
        const { code, data: {list, total}} = res
        if (code === 200) {
          console.error(list)
          this.tableList = list || []
          this.searchForm.total = Number(total)
        }
      })
    },

    selectChange (val) {
      this.selectList = val
      
      this.$emit('selectPlayer', val)
    },

    pageChange (val) {
      this.searchForm.pageNum = val
      this.fetchList()
    },

    getSelect () {
      this.fetchSelectList({type:'FZ'}).then(res => {
        const { code, data: {list} } = res
        if (code === 200) {
          console.warn(list)
          this.options = list || []
        }
      })
    },

    onDelete () {
      let list = []
      this.selectList.forEach(item => {
        list.push(item.id)
      })
      
      this.deletePlayer({ids: list}).then(res => {
        const { code } = res
        if (code === 200) {
          this.deleteDialog = false
          this.searchForm.pageNum = 1
          this.fetchList()
        }
      })
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



