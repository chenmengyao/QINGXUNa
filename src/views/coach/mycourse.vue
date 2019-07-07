<template>
    <div class="P-parents page">
      <div class="content">
        <div class="parents-crumb">
          <a href="" class="back-btn"></a>
          我的教案
        </div>
        <div class="p-upload-video">
          <h5></h5>

          <div class="p-upload-video-con">

            <div class="p-uploadcon-item" v-for="(item, index) in courseList" :key="index">
              <div class="p-imgvideo">
                <div class="videoimg-div">
                  <img :src='item.imgs'/>
                </div>
                <div class="course-btn display-flex-column" v-if="loginDis">
                  <img src="/images/delect.png" class="delect"/>
                  <img src="/images/p-alter.png" class="p-alter" @click="toDetail(item.id)"/>
                </div>
              </div>
              <p class="look">{{item.name}}</p>
            </div>

          </div>

          <el-pagination
            @current-change="onChange"
            layout="prev, pager, next"
            :total="searchData.total">
          </el-pagination>

          <button class="new-course" @click="addCourse" v-if="loginDis">新增教案</button>

        </div>
      </div>
    </div>
  </template>
  
  <script>
    import { mapActions, mapState } from 'vuex'

    export default {
      data() {
        return {
          key: "value",
          searchData: {
            pageNum: 1,
            total: 0
          },
          courseList: [
            // {
            //   img: "/images/videoimg.jpg",
            //   name: 'title',
            //   id: 1
            // }
          ]
        }
      },

      computed: {
        ...mapState('Login', [
          'userStatus'
        ]),

        loginDis () {
          return this.userStatus && this.userStatus.id ? true : false
        },
      },

      methods: {
        ...mapActions('myCourse', [
          'fetchCourseList'
        ]),



        toDetail (id) {
          this.$router.push({path: '/coachTraining/lessonDetail', query: {id}})
        },

        addCourse () {
          this.$router.push('/coachTraining/lessonDetail')
        },

        onChange (val) {
          this.searchData.pageNum = val
          this.getList()
        },

        getList () {
          this.fetchCourseList(this.searchData).then(res => {
            const { code, data: { list } } = res

            if (code === 200) {
              this.courseList = list || []
            }
          })
        }
      },

      created () {
        this.getList()
      }
    }
  </script>
  
  <style scoped>
    @import url("P-coach.css");
  </style>