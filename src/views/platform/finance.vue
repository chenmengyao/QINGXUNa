<template>
  <div class="platform-page page">
    <div class="content">
      <PlatformCrumb back="返回">
        <el-button type="primary" size="mini" slot="right">设置收款二维码</el-button>
      </PlatformCrumb>
      <div class="finance-info">
        <div class="finance-item">
          <div class="title">今日新增支付</div>
          <div class="total red">￥124520.00</div>
          <div class="all-total">累计支付 ￥2613465.00</div>
          <div class="icon user-icon"></div>
        </div>
        <div class="finance-item">
          <div class="title">今日流水</div>
          <div class="total">￥124520.00</div>
          <div class="all-total">累计支付 ￥2613460.00</div>
          <div class="icon user-right-icon"></div>
        </div>
      </div>
      <div class="finance-crumb display-flex-row align-items-center">
        <div class="crumb-item">
          <span>用户列表（52）</span>
          <el-select v-model="value" size="mini" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="crumb-item display-flex-row align-items-center">
          <span>快速查询</span>
          <el-input v-model="search" placeholder="请输入手机号或姓名" size="mini"></el-input>
        </div>
        <div class="button-wrap flex1 display-flex-row align-items-center justify-content-between">
          <el-button type="primary" size="mini">查询</el-button>
          <el-button type="primary" size="mini">对账</el-button>
        </div>
      </div>
      <div class="table">
        <el-table
          :header-cell-style="{background:'#F7F7F7',color:'#333333'}"
          ref="multipleTable"
          :data="tableData"
          stripe
          tooltip-effect="dark"
          style="width: 100%"
        >
          <el-table-column label="序号" width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="nameid" label="用户ID" show-overflow-tooltip></el-table-column>
          <el-table-column prop="name" label="用户姓名" width="120"></el-table-column>
          <el-table-column prop="roles" label="用户角色" show-overflow-tooltip></el-table-column>
          <el-table-column prop="affiliate" label="所属机构" show-overflow-tooltip></el-table-column>
          <el-table-column prop="rnover" label="流水金额" show-overflow-tooltip></el-table-column>
          <el-table-column prop="type" label="流水类型" show-overflow-tooltip></el-table-column>
          <el-table-column prop="datetime" label="产生日期" show-overflow-tooltip></el-table-column>
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
  components: {
    PlatformCrumb
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
      search: "",
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
          nameid: "JL000125",
          name: "王小虎",
          roles: "教练",
          affiliate: "链星青训",
          datetime: "2019.04.10 14:14:14",
          rnover: "￥382.00",
          type: "教练进修"
        },
        {
          date: "02",
          nameid: "JL000125",
          name: "王小虎",
          roles: "教练",
          affiliate: "链星青训",
          datetime: "2019.04.10 14:14:14",
          rnover: "￥382.00",
          type: "教练进修"
        },
        {
          date: "03",
          nameid: "JL000125",
          name: "王小虎",
          roles: "教练",
          affiliate: "链星青训",
          datetime: "2019.04.10 14:14:14",
          rnover: "￥382.00",
          type: "教练进修"
        },
        {
          date: "04",
          nameid: "JL000125",
          name: "王小虎",
          roles: "教练",
          affiliate: "链星青训",
          datetime: "2019.04.10 14:14:14",
          rnover: "￥382.00",
          type: "教练进修"
        },
        {
          date: "05",
          nameid: "JL000125",
          name: "王小虎",
          roles: "教练",
          affiliate: "链星青训",
          datetime: "2019.04.10 14:14:14",
          rnover: "￥382.00",
          type: "教练进修"
        },
        {
          date: "06",
          nameid: "JL000125",
          name: "王小虎",
          roles: "教练",
          affiliate: "链星青训",
          datetime: "2019.04.10 14:14:14",
          rnover: "￥382.00",
          type: "教练进修"
        },
        {
          date: "07",
          nameid: "JL000125",
          name: "王小虎",
          roles: "教练",
          affiliate: "链星青训",
          datetime: "2019.04.10 14:14:14",
          rnover: "￥382.00",
          type: "教练进修"
        }
      ],
      multipleSelection: []
    };
  }
};
</script>

<style lang="less" scoped>
@import url("platform.less");
.finance-crumb {
  height: 58px;
  padding: 0 20px;
  .crumb-item {
    margin-right: 20px;
    > span {
      display: inline-block;
      min-width: 90px;
    }
  }
}
.finance-info {
  padding: 40px;
  background-color: #fff;
  .finance-item {
    display: inline-block;
    width: 365px;
    height: 161px;
    background-color: #fff;
    margin-right: 40px;
    vertical-align: top;
    box-shadow: 0px 3px 18px 0px rgba(178, 175, 175, 0.22);
    padding: 18px 17px;
    border-bottom: 25px solid #116ce4;
    position: relative;
    .title {
      font-size: 16px;
      color: #333333;
    }
    .total {
      font-size: 24px;
      color: #333333;
      margin-top: 15px;
      &.red{
        color: #c60818;
      }
    }
    .all-total {
      font-size: 16px;
      color: #666666;
      margin-top: 17px;
    }
    .icon{
      position: absolute;
      width: 44px;
      height: 44px;
      border-radius: 100%;
      top: 26px;
      right: 26px;
      &.user-icon{
        background: #e3efff url('/images/user-icon.png') center center no-repeat;
      }
      &.user-right-icon{
        background: #e3efff url('/images/user-right.png') center center no-repeat;
      }
    }
  }
}
</style>
