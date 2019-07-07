<template>
        <div class="page coach-page">
                <div class="banner">
                        <div class="banner-image" style="background-image: url('/images/coach_training_banner.jpg')">
                                <span>教练进修</span>
                                <p>COACH TRAINING</p>
                        </div>
                </div>

                <div class="content">

                  <div style="margin-top:20px">
                    <el-radio-group v-model="online" @change="changeOnline">
                      <el-radio-button :label="1">在线学习</el-radio-button>
                      <el-radio-button :label="2">线下进修</el-radio-button>
                    </el-radio-group>
                  </div>

                  <div class="tabs" v-if="online === 1">
                          <div class="tabs-con">
                            <el-radio-group v-model="searchData.type" @change="changeForFreeType">
                              <el-radio-button :label="1">免费</el-radio-button>
                              <el-radio-button :label="2">收费</el-radio-button>
                            </el-radio-group>
                          </div>
                  </div>
                  <div class="tabs-container">
                    <div class="tabs-con-item" v-for="(item, index) in lists" :key="index">
                      <div class="image"><img :src="item.imgs" alt="">
                        <p class="tabs-item-title">{{item.name}}</p>
                      </div>
                      <div class="tabs-button" @click="toDetail(item.id)">查看详情<img src="/images/right_arrow.png" alt="异常"/></div>
                    </div>
                  </div>

                  <el-pagination
                    @current-change="onChange"
                    layout="prev, pager, next"
                    :total="searchData.total">
                  </el-pagination>
                </div>
        </div>
  </div>
  
  </div>
 </template>
 
 <script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      searchData: {
        type: 1,
        pageNum: 1,
        total: 0
      },

      online: 1,

      lists: []
    }
  },

  methods: {
    ...mapActions('coachTraining', [
      'fetchOnlineList',
      'fetchUnderList'
    ]),

    onChange (val) {
      this.searchData.pageNum = val
      this.getList()
    },

    getList () {
      if (this.online === 1) {
        this.fetchOnLine()
      }

      if (this.online === 2) {
        this.fetchUnderLine()
      }

      return false
    },

    fetchOnLine () {
      this.fetchOnlineList(this.searchData).then(res => {
        const { code, data: { list, total } } = res
        if (code === 200) {
          this.searchData.total = Number(total)
          this.lists = list || []
        }
      })
    },

    fetchUnderLine () {
      this.fetchUnderList(this.searchData).then(res => {
        const { code, data: { list, total } } = res
        if (code === 200) {
          this.searchData.total = Number(total)
          this.lists = list || []
        }
      })
    },

    changeOnline (val) {
      this.online = val
      
      if (val === 1) {
        this.searchData.type = 1
      }
      if (val === 2) {
        this.searchData.type = ''
      }

      this.getList()
    },

    changeForFreeType (val) {
      this.searchData.type = val
      this.getList()
    },

    toDetail (id) {
      this.$router.push({path: '/trainingDetail', query: {id}})
    }
  },

  created () {
    this.getList()
  }
}
 </script>
 
 <style scoped>
 @import url("./css/coachTraining.css");
 </style>