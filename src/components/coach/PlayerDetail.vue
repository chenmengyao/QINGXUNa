<template>
  <div class="playerDetail">
    <h2 style="padding:20px 0 10px 40px;">基本资料</h2>

    <el-row>
      <el-col :span="12" style="padding-left:40px;">
        <el-form size="small" label-width="80px" style="margin-top:40px">
          <el-form-item>
            <h3>照片</h3>
            <img :src="detailForm.imgs" alt="" style="display:block;background:red;width:300px;height:300px">
          </el-form-item>
          <el-form-item label="姓名" >
            <el-input v-model="detailForm.name"></el-input>
          </el-form-item>

          <el-form-item label="年龄" >
            <el-input v-model="detailForm.age"></el-input>
          </el-form-item>

          <el-form-item label="性别">
            <el-select v-model="detailForm.sex" placeholder="请选择">
              <el-option :value="1" label="男"></el-option>
              <el-option :value="2" label="女"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="擅长位置">
            <el-input v-model="detailForm.goodLocation"></el-input>
          </el-form-item>

          <el-form-item label="伤病史">
            <el-select v-model="detailForm.shangbing" placeholder="请选择" multiple>
              <el-option :value="1" label="韧带拉伤"></el-option>
              <el-option :value="2" label="韧带拉伤"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="分组">
            <el-select v-model="detailForm.grouping" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.dictName"
                  :label="item.dictName"
                  :value="item.id">
                </el-option>
            </el-select>
          </el-form-item>

          <!-- <el-form-item label="课程">
            <el-select v-model="detailForm.main" placeholder="请选择" multiple>
                <el-option
                  v-for="item in optionsKC"
                  :key="item.dictName"
                  :label="item.dictName"
                  :value="item.id">
                </el-option>
            </el-select>
          </el-form-item> -->

          <el-form-item label="13~18岁球员才可以贴标签" label-width="200px"/>

          <el-form-item label="球员技巧">
            <el-select v-model="detailForm.skill" placeholder="请选择">
                <el-option
                  v-for="item in optionsJQ"
                  :key="item.dictName"
                  :label="item.dictName"
                  :value="item.id">
                </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="球员风格">
            <el-select v-model="detailForm.style" placeholder="请选择">
                <el-option
                  v-for="item in optionsFG"
                  :key="item.dictName"
                  :label="item.dictName"
                  :value="item.id">
                </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-col>

      <el-col :span="12">
        <br>
        <br>
        <br>
        <div id="myChart" style="height:300px;width:500px"></div>

        <el-form size="small" style="padding:40px 0 0 170px;">
          <el-form-item label="逆足">
            <el-rate v-model="detailForm.weakFoot" style="margin-top:6px;" disabled></el-rate>
          </el-form-item>

          <el-form-item label="惯用脚">
            <img src="/images/leftfoot.jpg" alt="" v-if="detailForm.foot === 1">
            <img src="/images/rightfoot.jpg" alt="" v-else>
          </el-form-item>
        </el-form>

      </el-col>
    </el-row>
    <br>
    <el-row>
      <el-col :span="12">

      </el-col>

      <el-col :span="12">
      </el-col>
    </el-row>

    <h2 style="margin-left:20px;">核心能力 综合得分：{{detailForm.sumScoure}}</h2>

    <div v-for="(item, index) in pingfen" style="margin-left:20px">
      <p style="margin-top:10px"><strong>{{item.name}}</strong></p>
      <el-form inline size="mini" style="margin-top:10px;" label-width="120px">
        <el-form-item :label="item1.name" v-for="(item1, index) in item.list">
          <el-input v-model="item1.score"></el-input>
          <el-progress :percentage="item1.score" :show-text="false" style="margin-top:10px;"></el-progress>
        </el-form-item>
      </el-form>
    </div>
    
    <br>
    <h2 style="margin-left:20px;">其他</h2>
    <br>
    <el-form  label-width="80px" size="small">
      <el-form-item label="逆足">
        <el-rate v-model="detailForm.weakFoot" style="margin-top:6px;"></el-rate>
      </el-form-item>

      <el-form-item label="惯用脚">
        <el-radio-group v-model="detailForm.foot">
          <el-radio :label="1"><img src="/images/leftfoot.jpg" alt=""></el-radio>
          <el-radio :label="2"><img src="/images/rightfoot.jpg" alt=""></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="教练意见">
        <el-select v-model="detailForm.ttt" placeholder="请选择">
          <el-option :value="1" label="教练意见"></el-option>
          <el-option :value="1" label="教练意见"></el-option>
          <el-option :value="1" label="教练意见"></el-option>
          <el-option :value="1" label="教练意见"></el-option>
        </el-select>
      </el-form-item>
      
      <el-form-item>
        <el-input style="resize:none;width:500px" type="textarea" :autosize="{ minRows: 6, maxRows: 8}"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="editDetail">保存</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      detailForm: {
        name: '',
        age: ''
      },

      radio: '',
      options: '',
      optionsKC: '',
      optionsJQ: '',
      optionsFG: '',
      pingfen: null

    }
  },

  methods: {
    ...mapActions('coachTraining', [
      'getPlayerDetail',
      'fetchSelectList',
      'editPlayerInfo',
      'huoqupingfen'
    ]),

    onCancel () {
      this.$router.back()
    },

    fetchDetail () {
      const id = this.id
      this.getPlayerDetail({id}).then(res => {
        console.log(res)
        const { code, data } = res
        if (code === 200 && data) {
          this.detailForm = data
        }
      })
    },

    getSelect () {
      this.fetchSelectList({type:'FZ'}).then(res => {
        const { code, data: {list} } = res
        if (code === 200) {
          this.options = list || []
        }
      })
    },

    getpingfen () {
      let id = this.id
      this.huoqupingfen({id}).then(res => {
        this.pingfen = res.data.list
        console.log(this.pingfen)
      })
    },

    getSelectKC () {
      this.fetchSelectList({type:'CT'}).then(res => {
        const { code, data: {list} } = res
        if (code === 200) {
          this.optionsKC = list || []
        }
      })
    },

    getSelectJQ () {
      this.fetchSelectList({type:'JQ'}).then(res => {
        const { code, data: {list} } = res
        if (code === 200) {
          this.optionsJQ = list || []
        }
      })
    },

    getSelectFG () {
      this.fetchSelectList({type:'FG'}).then(res => {
        const { code, data: {list} } = res
        if (code === 200) {
          this.optionsFG = list || []
        }
      })
    },

    editDetail () {
      this.detailForm.age = Number(this.detailForm.age)
      this.editPlayerInfo(this.detailForm).then(res => {
        const { code } = res
        if (code === 200) {
          this.$message({
            message: '修改成功',
            type: 'success'
          })
        }
      })
    }
  },

  computed: {
    id () {
      return this.$route.query.id
    }
  },

  created () {
    this.fetchDetail()
    this.getSelect()
    this.getSelectKC()
    this.getSelectJQ()
    this.getSelectFG()
    this.getpingfen()
  },

  mounted () {
    let myChart = this.$echarts.init(document.getElementById('myChart'))
    let data = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        orient : 'vertical',
        x : 'right',
        y : 'bottom',
        data:['预算分配（Allocated Budget）','实际开销（Actual Spending）']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    polar : [
       {
           indicator : [
               { text: '速度', max: 100},
               { text: '力量', max: 100},
               { text: '射门', max: 100},
               { text: '防守', max: 100},
               { text: '盘带', max: 100},
               { text: '传球', max: 100}
            ]
        }
    ],
    calculable : true,
    series : [
        {
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            data : [
                {
                    value : [50, 70, 50, 50, 50, 98],
                    name : '速度'
                }
            ]
        }
    ]
};
    myChart.setOption(data);
  }

}
</script>

<style scoped>
.playerDetail{
  margin:0 auto;
  margin-top:100px;
  width:1160px;
  background:#fff;
  padding:10px;
}

</style>


