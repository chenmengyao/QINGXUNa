<template>
  <div>
    <el-form size="small">
      <el-form-item>
        <el-button class="theme-blue" @click="onSuccess(null)">审核通过</el-button>
        <el-button type="primary" @click="onDelete(null)">删除记录</el-button>
      </el-form-item>
    </el-form>
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

    <el-table-column label="操作">
      <template slot-scope="scope">
        <span class="inDetail" @click="onSuccess(scope)">通过审核</span>&nbsp;&nbsp;
        <span @click="onDelete(scope)" style="cursor:pointer;color:red;">删除记录</span>
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

    <div style="clear:both"></div>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

const header = [
  { prop: 'name', label: '球员' },
  { prop: 'leaderNo', label: '身份证号码' },
  { prop: 'guardianName', label: '监护人' },
  { prop: 'guardianPhone', label: '监护人手机' },
]

export default {
  data () {
    return {
      header,
      addDialog: false,
      deleteDialog: false,
      tableList: [
        {id :1, name: 'asdf'},
      ],

      options: [

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
      'userStatus',

    ]),

    dateHeader () {
      const date = this.activeDate
    }
  },

  methods: {
    ...mapActions('coachTraining', [
      'fetchExamineList',
      'fetchSelectList',
      'onExaminepass',
      'onExamineDelete'
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

      this.fetchExamineList(this.searchForm).then(res => {
        const { code, data: {list, total}} = res
        console.log(list)
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

    onSuccess (scope = null) {
      if (this.selectList.length === 0) return false

      let ids = []
      if (scope) {
        ids.push(Number(scope.row.id))
      } else {
        this.selectList.forEach(item => {
          ids.push(item.id)
        })
      }
      
      this.onExaminepass({ids}).then(res => {
        const { code } = res
        if (code === 200) {
          this.$message({
            message: '新增成功',
            type: 'success'
          })
          this.searchForm.pageNum = 1
          this.fetchList()
        }
      })
    },

    onDelete (scope = null) {
      if (this.selectList.length === 0) return false

      this.$confirm(`是否删除${name}？`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.fetchDelete(scope)
      })
    },

    fetchDelete (scope) {
      if (this.selectList.length === 0) return false

      let ids = []
      if (scope) {
        ids.push(Number(scope.row.id))
      } else {
        this.selectList.forEach(item => {
          ids.push(item.id)
        })
      }

      this.onExamineDelete({ids}).then(res => {
        const { code } = res
        if (code === 200) {
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



