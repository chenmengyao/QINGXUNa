<template>
  <div class="platform-page page">
    <div class="content">
      <div class="platform-crumb display-flex-row align-items-center">
        <div class="crumb-item">
          <span>用户列表（42）</span>
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
        <div class="button-wrap">
          <el-button type="primary" class="organ-red" size="mini">查询</el-button>
          <el-button type="primary" class="organ-red" size="mini">机构审核列表</el-button>
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
          <el-table-column prop="name" label="用户名" width="120">
            <!--插入图片链接的代码-->
            <template slot-scope="scope">
              <img
                :src="scope.row.imgPath"
                alt
                style="width: 36px;height: 36px;margin:1px;border:1px solid #BBBDBF;vertical-align: middle;"
              >
              {{ scope.row.name }}
            </template>
          </el-table-column>
          <el-table-column prop="level" label="角色" show-overflow-tooltip></el-table-column>
          <el-table-column prop="post" label="所属机构" show-overflow-tooltip></el-table-column>
          <el-table-column prop="course" label="最后登陆时间" show-overflow-tooltip></el-table-column>
          <el-table-column prop="team" label="累计消费" show-overflow-tooltip></el-table-column>
          <el-table-column prop="opera" label="操作" show-overflow-tooltip>
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
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
export default {
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
          imgPath: "/images/jlimg.jpg",
          editorimgpath: "/images/p-alter.png",
          level: "A+",
          post: "主教",
          course: "6",
          team: "3",
          star: "4"
        },
        {
          date: "02",
          name: "王小虎",
          imgPath: "/images/jlimg.jpg",
          editorimgpath: "/images/p-alter.png",
          level: "A+",
          post: "主教",
          course: "6",
          team: "3",
          star: "4"
        },
        {
          date: "03",
          name: "王小虎",
          imgPath: "/images/jlimg.jpg",
          editorimgpath: "/images/p-alter.png",
          level: "A+",
          post: "主教",
          course: "6",
          team: "3",
          star: "4"
        },
        {
          date: "04",
          name: "王小虎",
          imgPath: "/images/jlimg.jpg",
          editorimgpath: "/images/p-alter.png",
          level: "A+",
          post: "主教",
          course: "6",
          team: "3",
          star: "4"
        },
        {
          date: "05",
          name: "王小虎",
          imgPath: "/images/jlimg.jpg",
          editorimgpath: "/images/p-alter.png",
          level: "A+",
          post: "主教",
          course: "6",
          team: "3",
          star: "4"
        },
        {
          date: "06",
          name: "王小虎",
          imgPath: "/images/jlimg.jpg",
          editorimgpath: "/images/p-alter.png",
          level: "A+",
          post: "主教",
          course: "6",
          team: "3",
          star: "4"
        },
        {
          date: "07",
          name: "王小虎",
          imgPath: "/images/jlimg.jpg",
          editorimgpath: "/images/p-alter.png",
          level: "A+",
          post: "主教",
          course: "6",
          team: "3",
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
.platform-crumb{
        height: 58px;
        background-color: #fff;
        margin: 10px 0 8px;
        padding: 0 20px;
        .crumb-item{
            margin-right: 20px;
            > span{
                display: inline-block;
                min-width: 90px;
            }
        }
    }
</style>
