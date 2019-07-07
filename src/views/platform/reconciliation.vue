<template>
  <div class="platform-page page">
    <div class="content">
      <PlatformCrumb back="对账">
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
          <el-table-column prop="time" label="日期" show-overflow-tooltipv></el-table-column>
          <el-table-column prop="name" label="名称" show-overflow-tooltip></el-table-column>
          <el-table-column prop="total" label="合计" show-overflow-tooltip></el-table-column>
          <el-table-column prop="operation" label="操作" show-overflow-tooltip></el-table-column>
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
           time: "2019-04-30",
          name: "2019年4月对账单",
          total: "￥126432.00",
          operation: "查看详情"
        },
        {
          time: "2019-04-30",
          name: "2019年4月对账单",
          total: "￥126432.00",
          operation: "查看详情"
        },
        {
          time: "2019-04-30",
          name: "2019年4月对账单",
          total: "￥126432.00",
          operation: "查看详情"
        },
        {
          time: "2019-04-30",
          name: "2019年4月对账单",
          total: "￥126432.00",
          operation: "查看详情"
        },
        {
          time: "2019-04-30",
          name: "2019年4月对账单",
          total: "￥126432.00",
          operation: "查看详情"
        },
        {
          time: "2019-04-30",
          name: "2019年4月对账单",
          total: "￥126432.00",
          operation: "查看详情"
        },
        {
           time: "2019-04-30",
          name: "2019年4月对账单",
          total: "￥126432.00",
          operation: "查看详情"
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
</style>
