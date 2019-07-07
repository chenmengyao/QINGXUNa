<template>
  <div class="platform-page page">
    <div class="content">
      <PlatformCrumb back="权限账号">
        <el-button type="primary" size="mini" slot="right">新增账户</el-button>
      </PlatformCrumb>
      <div class="table">
        <el-table
          :header-cell-style="{background:'#F7F7F7',color:'#333333'}"
          ref="multipleTable"
          :data="tableData"
          stripe
          tooltip-effect="dark"
          style="width: 100%"
        >
          <el-table-column prop="date" label="序号" show-overflow-tooltip></el-table-column>
          <el-table-column prop="account" label="账号" show-overflow-tooltip></el-table-column>
          <el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
          <el-table-column prop="position" label="职位" show-overflow-tooltip></el-table-column>
          <el-table-column prop="phone" label="手机号" show-overflow-tooltip></el-table-column>
          <el-table-column prop="department" label="部门" show-overflow-tooltip></el-table-column>
          <el-table-column prop="jurisdiction" label="权限" show-overflow-tooltip></el-table-column>
          <el-table-column prop="state" label="状态" show-overflow-tooltip></el-table-column>
          <el-table-column prop="opera" label="操作" show-overflow-tooltip>
            <!-- <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">审核通过</el-button>
            </template> -->
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
              <el-button class="del-btn" type="text" size="small">冻结</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="opera" label="" show-overflow-tooltip>
            <!-- <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">审核通过</el-button>
            </template> -->
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small" class="del-btnn">解除冻结</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination background :page-size="5" layout="total, prev, pager, next" :total="462"></el-pagination>
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
  methods: {
    handleClick(row) {
      console.log(row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  data() {
    return {
			search:'',
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      tableData: [
        {
          date: "01",
          account: "链星青训",
          name: "梅哲龙",
          position: "财务",
          phone: "13168014201",
          department: "财务",
          jurisdiction: "财务",
          state: "财务"
        },
        {
          date: "02",
          account: "链星青训",
          name: "梅哲龙",
          position: "财务",
          phone: "13168014201",
          department: "财务",
          jurisdiction: "财务",
          state: "财务"
        },
        {
          date: "03",
          account: "链星青训",
          name: "梅哲龙",
          position: "财务",
          phone: "13168014201",
          department: "财务",
          jurisdiction: "财务",
          state: "财务"
        },
        {
          date: "04",
          account: "链星青训",
          name: "梅哲龙",
          position: "财务",
          phone: "13168014201",
          department: "财务",
          jurisdiction: "财务",
          state: "财务"
        },
        {
          date: "05",
          account: "链星青训",
          name: "梅哲龙",
          position: "财务",
          phone: "13168014201",
          department: "财务",
          jurisdiction: "财务",
          state: "财务"
        },
        {
          date: "06",
          account: "链星青训",
          name: "梅哲龙",
          position: "财务",
          phone: "13168014201",
          department: "财务",
          jurisdiction: "财务",
          state: "财务"
        },
        {
          date: "07",
          account: "链星青训",
          name: "梅哲龙",
          position: "财务",
          phone: "13168014201",
          department: "财务",
          jurisdiction: "财务",
          state: "财务"
        }
      ],
      multipleSelection: []
    };
  }
};
</script>

<style lang="less" scoped>
@import url("platform.less");
.operation{
  margin-right: 25px;
}
.pass-btn{
    background-color: #2d64b3;
    border-color: #2d64b3;
    &:hover{
      background-color: #2d64b3;
    border-color: #2d64b3;
    }
  }
.table{
  .del-btn{
    color: #c60818;
  }
  
}
.del-btnn{
    color: #999999;
  }

</style>
