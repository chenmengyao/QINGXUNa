<template>
  <div>
    <div>
      <el-row class="titleBackground">
        <el-col :span="14">
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

        <el-col :span="8" v-if="buttonDis">
          <el-form inline size="small">
            <el-form-item>
              <el-input size="small" style="inline-block" v-model="addInputVal"></el-input>
            </el-form-item>

            <el-form-item>
            <el-button class="theme-blue" size="small" @click="onAddGroup">新建分组</el-button>
            <!-- <el-button class="theme-blue" size="small" @click="deletePlayerfromGroup" :disabled="!selectList.length">移除球员</el-button> -->
            <el-button type="primary" size="small" @click="onClose" style="display:inline-block">球员审核列表</el-button>
            </el-form-item>
          </el-form>

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
            :key="index"
          />

          <el-table-column label="伤病备注">
            <template slot-scope="scope">
              <span class="SBBZ">{{scope.row.wound}}</span>
            </template>
          </el-table-column>

          <el-table-column label="操作">
            <template slot-scope="scope">
              <span class="inDetail" @click="toDetail(scope)">查看详情</span>&nbsp;
              <span class="inDetail" @click="deletePlayerfromGroup(scope)">移除分组</span>
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

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ExamineList from './ExamineList'

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
  components: { ExamineList },
  data () {
    return {
      header,
      addInputVal: '',
      groupDialog: false,
      addGroupDialog: false,
      examineDialog: false,
      addPKDialog: false,
      deleteDialog: false,
      tableList: [
        {id: 1, name: 'asdf'}
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
      'fetchSelectList',
      'removePlayerfromGroup',
      'addGroup'
    ]),

    onClose () {
      this.$emit('close')
    },

    onAddGroup () {
      console.log(this.addInputVal)
      let data = this.addInputVal
      this.addGroup({name: data}).then(res => {
        const { code } = res
        if (code === 200) {
          this.$message({
            message: '添加成功',
            type: 'success'
          })
        this.addInputVal = ''
        this.getSelect()
        }
      })
    },

    toDetail (scope) {
      const { row: { id } } = scope
      this.$router.push({name: 'playerDetail', query:{ id }})
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
          console.log(list)
          this.tableList = list || []
          this.searchForm.total = Number(total)
        }
      })
    },

    deletePlayerfromGroup (scope) {
      const { row: {id}} = scope

      this.removePlayerfromGroup({id}).then(res => {
        const { code } = res
        if (code === 200) {
          this.searchForm.pageNum = 1
          this.fetchList()
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



