<template>
  <div class="page coach-page">
    <div class="banner">
      <div class="banner-image" style="background-image: url('/images/coach_training_banner.jpg')"></div>
    </div>
    <div class="content event-detail">
      <div class="tabs" style="    margin-top: 0;">
        <div class="training-content-header" style="position:relative">
          <span>赛事详情</span>
          <div class="training-content-line"></div>
          <a class="matchTeam" @click="dialog = true">查看参赛队伍</a>
        </div>
      </div>
      <div class="tabs-container display-flex-row">
        <img :src="dataForm.imgs"/>
        <div class="flex1">
          <p class="headline-title">{{dataForm.name}}</p>
          <p class="headline-detail">参赛年龄：{{dataForm.age}}</p>
          <p class="headline-detail">时间：{{Moment(dataForm.time).format('YYYY-MM-DD')}}</p>
          <p class="headline-detail">场馆：{{dataForm.address}}</p>
          <br>
          <!-- <el-button type="primary">立即报名</el-button> -->
          <!-- <el-button @click="dialog = true">查看参赛队伍</el-button> -->
          <div to="tournamentRegistration" class="headline-button"  @click="signUp(id)">立即报名</div>
        </div>

      </div>
    </div>

    <el-dialog title="查看参赛队伍" :visible.sync="dialog" width="40%">
      <div style="width:100%">
        <el-table :data="matchTeamList" style="width:100%">
          <el-table-column
            label="序号"
            type="index"
            width="350">
          </el-table-column>

          <el-table-column
            prop="name"
            label="参赛队伍"
            width="350">
          </el-table-column>
        </el-table>
      </div>

    </el-dialog>
		</div>
   </template>
   
   <script>
   import {matchGetList} from "../../api/api/web.js"
   import { mapActions } from 'vuex'
   
 export default {
 	data() {
 		return {
       dataForm: {},
       dialog: false,
       matchTeamList: [
         {name: 1},
         {name: 1},
         {name: 1},
         {name: 1},
       ]
 		}
   },

   computed: {
     id () {
       return this.$route.params.id
     }
   },
   
   methods: {
     ...mapActions('eventInformation', [
       'getDetail',
       'fetchMatchTeam'
     ]),

     signUp (id) {
        this.$router.push({path: '/tournamentRegistration', query: {id}})
     },

     getList () {
       let id = this.id
       this.getDetail({ id }).then(res => {
         const { code, data } = res
         if (code === 200) {
           this.dataForm = data || {}
         }
       })

     },

     getMatchTeam () {
       let id = this.id
       this.fetchMatchTeam({id}).then(res => {
         const { code, data: { list } } = res
         if (code === 200) {
           this.matchTeamList = list || []
         }
       })
     }
   },

 	created(){
     this.getList()
     this.getMatchTeam()
 	}
 }
   </script>
   
   <style scoped>
   	@import url("css/D-coach-training.css");

    .matchTeam {
      position:absolute;
      top:100px;
      right:200px;
      cursor: pointer;
      color:#409EFF;
    }
   </style>