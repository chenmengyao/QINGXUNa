<template>
  <div>
    <div>
      <el-row class="titleBackground">
        <el-col :span="16">
          <el-form inline size="small" style="margin-bottom:-20px">
            <el-form-item>
              <el-button size="small" class="title">我的球队</el-button>
            </el-form-item>

            <el-form-item>
              <el-select v-model="searchForm.grouping" clearable size="small" @change="fetchList">
                <el-option
                  v-for="(item) in options"
                  :label="item.dictName"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <!-- <el-form-item  label="快速查询">
              <el-input v-model="searchForm.namePhone"/>
            </el-form-item>

            <el-form-item>
              <el-button @click="onSearch">查询</el-button>
            </el-form-item> -->
          </el-form>



        </el-col>

        <el-col :span="8" style="text-align:right">
          <el-button class="theme-blue" size="small" @click="addDialog = true">新增球队</el-button>
          <!-- <el-button class="theme-blue" size="small" @click="deleteDialog = true" :disabled="!selectList.length">移除球队</el-button> -->
          <!-- <el-button type="primary" size="small">球员审核列表</el-button> -->
        </el-col>
      </el-row>

      <el-row style="margin-top:10px">
        <el-col :span="24">
          <el-table
            ref="multipleTable"
            stripe
            :data="tableList"
            style="width: 100%"
          >

          <!-- <el-table-column type="selection"width="55"/> -->

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
          />

          <el-table-column label="操作">
            <template slot-scope="scope">
              <span class="inDetail">查看详情</span>&nbsp;&nbsp;
              <span @click="onDelete(scope)" style="cursor:pointer;color:red;">移除球队</span>
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

          <span style="float:right;padding-top:6px;">共{{searchForm.total}}球队，每页{{searchForm.pageSize}}支球队</span>

          <div style="clear:both"></div>
          <br>
        </el-col>
      </el-row>
    </div>

    <el-dialog title="移除球队" :visible.sync="deleteDialog">
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

          </el-table>

          <br>
          <span style="padding:10px;"><strong>是否移除以上球队？</strong></span>
          <el-button size="small" type="primary" @click="onDelete">确定</el-button>
          <el-button size="small" @click="deleteDialog = false">取消</el-button>
    </el-dialog>

    <el-dialog title="新增球队" :visible.sync="addDialog" width="80%">
      <el-form size="small" inline>
        <el-form-item label="队名">
          <el-input :maxLength="10" v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="分组">
          <el-select v-model="addForm.grouping" clearable size="small">
            <el-option
              v-for="item in options"
              :key="item.dictName"
              :label="item.dictName"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>

      <my-player :buttonDis="false" @selectPlayer="selectPlayer"/>
      <el-form-item>
        <el-button @click="onAddTeam" type="primary">确定</el-button>
      </el-form-item>
      </el-form>

    </el-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import MyPlayer from './MyPlayer'

const header = [
  { prop: 'name', label: '队名' },
  { prop: 'imgs', label: '分组' },
  { prop: 'age', label: '人数' }
]

export default {
  components: { MyPlayer },
  data () {
    return {
      header,
      addDialog: false,
      deleteDialog: false,
      tableList: [
        {id :1, name: 'asdf'},
      ],

      options: [
        { label: 'U9', value: 'U9' },
        { label: 'U12', value: 'U12' },
        { label: 'U15', value: 'U15' },
      ],

      searchForm: {
        grouping: '',
        pageNum:1,
        pageSize: 10,
        total: 0
      },

      // 新增球队
      addForm: {
        ids: []
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
      'fetchTeamList',
      'deleteTeam',
      'addTeam',
      'fetchSelectList'
    ]),

    clickDay (val) {
      this.activeDate = new Date(val).valueOf()
    },

    onSearch () {
      this.searchForm.pageNum = 1
      this.fetchList()
    },

    selectPlayer (val) {
      let arr = []
      val.forEach(item => {
        arr.push(item.id)
      })
      this.addForm.ids = arr
      console.log(this.addForm.ids)
    },

    fetchList () {
      this.searchForm.coachId = this.userStatus.id
      
      for (let i in this.searchForm) {
        if (i !== 'grouping') {
          this.searchForm[i] = Number(this.searchForm[i])
        }
      }

      this.fetchTeamList(this.searchForm).then(res => {
        const { code, data: {list, total}} = res
        if (code === 200) {
          console.log(list)
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

    onDelete (scope) {
      const id = scope.row.id
      const name = scope.row.name
      this.$confirm(`是否删除${name}？`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteTeam({id}).then(res => {
          const { code } = res
          if (code === 200) {
            this.searchForm.pageNum = 1
            this.fetchList()
          }
        })
      })
    },

    // 添加球队
    onAddTeam () {
      this.addForm.coachId = Number(this.userStatus.id)

      this.addTeam(this.addForm).then(res => {
        const { code } = res
        if (code === 200) {
          this.$message({
            message: '新增成功',
            type: 'success'
          })
          this.addDialog = false
          this.searchForm.pageNum = 1
          this.fetchList()
        }
      })
    }
  },

  created () {
    this.fetchList()

    this.fetchSelectList({type:'FZ'}).then(res => {
      const { code, data: {list} } = res
      if (code === 200) {
        this.options = list || []
      }
    })
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



