<template>
  <div class="platform-page page">
    <div class="content">
      <PlatformCrumb back="返回">
        <span slot="right" class="operation" >批量操作</span><el-button type="primary" class="pass-btn" size="mini" slot="right">审核通过</el-button><el-button type="primary" size="mini" slot="right">删除记录</el-button>
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
        <el-table-column type="selection" width="55">
          </el-table-column>
          <el-table-column prop="date" label="序号" show-overflow-tooltip></el-table-column>
          <el-table-column prop="organ" label="机构" show-overflow-tooltip></el-table-column>
          <el-table-column prop="post" label="营业执照" show-overflow-tooltip>
            <!--插入图片链接的代码-->
							    <template slot-scope="scope">
							    	<img  :src="scope.row.imgPath" alt="" style="width: 55px;height: 37px;margin:1px;border:1px solid #BBBDBF;vertical-align: middle;">
							      
							    </template>
          </el-table-column>
          <el-table-column prop="person" label="负责人" show-overflow-tooltip></el-table-column>
          <el-table-column prop="phone" label="负责人手机号" show-overflow-tooltip></el-table-column>
          <el-table-column prop="opera" label="操作" show-overflow-tooltip>
            <!-- <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">审核通过</el-button>
            </template> -->
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">审核通过</el-button>
              <el-button class="del-btn" type="text" size="small">删除记录</el-button>
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
          name: "王小虎",
          imgPath: "/images/listing-1.png",
          organ: "链星青训",
          post: "主教",
          person: "梅哲龙",
          phone: "13168014201",
          star: "4"
        },
        {
          date: "02",
          name: "王小虎",
          imgPath: "/images/listing-1.png",
          organ: "链星青训",
          post: "主教",
          person: "梅哲龙",
          phone: "13168014201",
          star: "4"
        },
        {
          date: "03",
          name: "王小虎",
          imgPath: "/images/listing-1.png",
          organ: "链星青训",
          post: "主教",
          person: "梅哲龙",
          phone: "13168014201",
          star: "4"
        },
        {
          date: "04",
          name: "王小虎",
          imgPath: "/images/listing-1.png",
          organ: "链星青训",
          post: "主教",
          person: "梅哲龙",
          phone: "13168014201",
          star: "4"
        },
        {
          date: "05",
          name: "王小虎",
          imgPath: "/images/listing-1.png",
          organ: "链星青训",
          post: "主教",
          person: "梅哲龙",
          phone: "13168014201",
          star: "4"
        },
        {
          date: "06",
          name: "王小虎",
          imgPath: "/images/listing-1.png",
          organ: "链星青训",
          post: "主教",
          person: "梅哲龙",
          phone: "13168014201",
          star: "4"
        },
        {
          date: "07",
          name: "王小虎",
          imgPath: "/images/listing-1.png",
          organ: "链星青训",
          post: "主教",
          person: "梅哲龙",
          phone: "13168014201",
          star: "4"
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

</style>
