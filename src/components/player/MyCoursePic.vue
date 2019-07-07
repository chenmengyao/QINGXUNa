<template>
  <div>
    <div>
      <!-- <el-row class="titleBackground">
        <el-col :span="16">
          <el-form inline size="small" style="margin-bottom:-20px">
            <el-form-item>
              <el-button size="small" class="title">我的课程</el-button>
            </el-form-item>

          </el-form>
        </el-col>
        <el-col :span="8" style="text-align:right">
          <el-button class="theme-blue" size="small" @click="addCourse">新增课程</el-button>

        </el-col>
      </el-row> -->

      <swiper :options="swiperOption" style="height:260px;margin: 10px 34px 45px;">
        <swiper-slide v-for="(item,index) in piclist" :key="index">
          <img :src="'http://139.155.113.181/file'+item.imgs" class="imgWidth">
            <p style="width:100%;text-align:center;line-height:54px;">{{item.name}}</p>
          </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <!-- <br> -->
      <!-- <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in piclist" :key="index">
          <img :src="'http://139.155.113.181/file'+item.imgs" class="imgWidth">
            <p style="width:100%;text-align:center;">{{item.name}}</p>
          </swiper-slide>

        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper> -->

 
      <!-- <br> -->


    </div>

    <!-- <el-dialog title="移除球员" :visible.sync="deleteDialog">
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
    </el-dialog> -->
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

const header = [
  { prop: 'name', label: '队名' },
  { prop: 'imgs', label: '分组' },
  { prop: 'age', label: '人数' }
]

export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      header,
      addPKDialog: false,
      deleteDialog: false,
      tableList: [

      ],

      options: [
        { label: '全部', value: 1 }
      ],

      searchForm: {
        courseType: 1,
        pageNum:1,
        pageSize: 10,
        total: 0
      },

      swiperOption: {
        speed: 1000,
        slidesPerView: 5,
        spaceBetween:25,
        
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },

        piclist: [
         
        ],

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

  created(){
    this.init();
  },

  methods: {
    ...mapActions('coachTraining', [
      'fetchCourseList',
      'fetchCoursePic'
    ]),

    init(){
      new Swiper ('.swiper-container', {
        loop: true,
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
      })
    },

    addCourse () {
      this.$router.push('/coachTraining/lessonDetail')
    },

    clickDay (val) {
      this.activeDate = new Date(val).valueOf()
    },

    onSearch () {
      this.searchForm.pageNum = 1
      // this.fetchList()
    },

    fetchList () {
      console.log(this.userStatus,55555)
      let id = Number(this.userStatus.statusId)
      let params = {
        id,
        pageNum: 1,
        pageSize:10
      }
      this.fetchCoursePic(params).then(res => {
        const { code, data:{list} } = res
        if (code === 200) {
          console.log(list,999)
          this.piclist = list || []
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

    onDelete () {

    }
  },

  created () {
    this.fetchList()
  }

}
</script>

<style scoped>
  .titleBackground {
    padding:10px;
    background:#f5f7fa;
    border:1px solid #f7f7f7;
  }

  .imgWidth{
    display:block;
    width:100%;
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



