import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

export const constantRouterMap = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
		//注册模块
		{path: '/registered/GL',name: '/registered/GL',component: () => import('../views/web/registered/GL')},
		{path: '/registered/JG',name: '/registered/JG',component: () => import('../views/web/registered/JG')},
		{path: '/registered/JL',name: '/registered/JL',component: () => import('../views/web/registered/JL')},
		{path: '/registered/QY',name: '/registered/QY',component: () => import('../views/web/registered/QY')},
		
		//登录
		{path: '/login/login',name: '/login/login',component: () => import('../views/web/login/login')},
    
    // 教案
    {path: '/coach/mycourse',name: '/coach/mycourse',component: () => import('../views/coach/mycourse')},

    // 教案详情
		{path: '/coachTraining/lessonDetail',name: '/aboutUs',component: () => import('../views/coach/lessonDetail')},
		
		
    //WEB模块
		{path: '/coachTraining',name: '/coachTraining',component: () => import('../views/web/coachTraining')},
		{path: '/trainingAgency',name: '/trainingAgency',component: () => import('../views/web/trainingAgency')},
		{path: '/aboutUs',name: '/aboutUs',component: () => import('../views/web/aboutUs')},
		{path: '/information',name: '/information',component: () => import('../views/web/information')},
		{path: '/informationDetails/:id',name: '/informationDetails',component: () => import('../views/web/informationDetails')},
		{path: '/trainingDetail',name: '/trainingDetail',component: () => import('../views/web/trainingDetail')},
		{path: '/youthInstituttons',name: '/youthInstituttons',component: () => import('../views/web/youthInstituttons')},
		{path: '/instituttonsDetails/:id',name: '/instituttonsDetails',component: () => import('../views/web/instituttonsDetails')},
		{path: '/familyTeenagers',name: '/familyTeenagers',component: () => import('../views/web/familyTeenagers')},
		{path: '/myPost',name: '/myPost',component: () => import('../views/web/myPost')},
		{path: '/post',name: '/post',component: () => import('../views/web/post')},
		{path: '/familyTeenagersDetail/:id',name: '/familyTeenagersDetail',component: () => import('../views/web/familyTeenagersDetail')},
		{path: '/eventInformation',name: '/eventInformation',component: () => import('../views/web/eventInformation')},
		{path: '/eventInformationDetails/:id',name: '/eventInformationDetails',component: () => import('../views/web/eventInformationDetails')},
		{path: '/tournamentRegistration',name: '/tournamentRegistration',component: () => import('../views/web/tournamentRegistration')},
		{path: '/starsSettled',name: '/starsSettled',component: () => import('../views/web/starsSettled')},
		{path: '/businessCooperation',name: '/businessCooperation',component: () => import('../views/web/businessCooperation')},
		
		//家长/球员模块
		{path: '/parent/coachDetail',name: '/parent/coachDetail',component: () => import('../views/parent/coachDetail')},
		{path: '/parent/editor',name: '/parent/editor',component: () => import('../views/parent/editor')},
		{path: '/parent/index',name: '/parent/index',component: () => import('../views/parent/index')},
		{path: '/parent/parentsCoachDetail',name: '/parent/parentsCoachDetail',component: () => import('../views/parent/parentsCoachDetail')},
		{path: '/parent/uploadVideo',name: '/parent/uploadVideo',component: () => import('../views/parent/uploadVideo')},
		{path: '/parent/onlingInflation',name: '/parent/onlingInflation',component: () => import('../views/web/onlingInflation')},
		{path: '/parent/onlingInflationDetails',name: '/parent/onlingInflationDetails',component: () => import('../views/web/onlingInflationDetails')},
		//教练模块		
		{path: '/coach/auditDetail',name: '/coach/auditDetail',component: () => import('../views/coach/auditDetail')},						
    {path: '/coach/courseDetail',name: '/coach/courseDetail',component: () => import('../views/coach/courseDetail')},						
    {path: '/coach/index',name: '/coach/index',component: () => import('../views/coach/index')},						
    {path: '/coach/myDate',name: '/coach/myDate',component: () => import('../views/coach/myDate')},
    {path: '/coach/groupMan',name: '/coach/groupMan',component: () => import('../views/coach/groupMan')},
    {path: '/coach/auditList',name: '/coach/auditList',component: () => import('../views/coach/auditList')},
    {path: '/coach/lessonDetail',name: '/coach/lessonDetail',component: () => import('../views/coach/lessonDetail')},
    {path: '/coach/editorLesson',name: '/coach/editorLesson',component: () => import('../views/coach/editorLesson')},
    // 机构管理
    {path: '/organ/index',name: '/organ/index',component: () => import('../views/organ/index')}, 
    {path: '/organ/auditDetail',name: '/organ/auditDetail',component: () => import('../views/organ/auditDetail')},
    {path: '/organ/coachDetail',name: '/organ/coachDetail',component: () => import('../views/organ/coachDetail')},     
    {path: '/organ/equipApply',name: '/organ/equipApply',component: () => import('../views/organ/equipApply')},
    {path: '/organ/myIntrodu',name: '/organ/myIntrodu',component: () => import('../views/organ/myIntrodu')},
    {path: '/organ/organList',name: '/organ/organList',component: () => import('../views/organ/organList')}, 
    {path: '/organ/set',name: '/organ/set',component: () => import('../views/organ/set')},
    {path: '/organ/edit',name: '/organ/edit',component: () => import('../views/organ/WoDeJianJieEdit')},
    
    // 机构管理
    {path: '/platform/index',name: '/platform/index',component: () => import('../views/platform/index')},            
    {path: '/platform/edit',name: '/platform/edit',component: () => import('../views/platform/edit')},  
    {path: '/platform/listing',name: '/platform/listing',component: () => import('../views/platform/listing')}, 
    {path: '/platform/finance',name: '/platform/finance',component: () => import('../views/platform/finance')},       
    {path: '/platform/curriculum',name: '/platform/curriculum',component: () => import('../views/platform/curriculum')}, 
    {path: '/platform/reconciliation',name: '/platform/reconciliation',component: () => import('../views/platform/reconciliation')},  
    {path: '/platform/account',name: '/platform/account',component: () => import('../views/platform/account')},    
    {path: '/platform/match',name: '/platform/match',component: () => import('../views/platform/match')},    
    {path: '/platform/matchDetail',name: '/platform/matchDetail',component: () => import('../views/platform/matchDetail')},
    {path: '/platform/courseDetails',name: '/platform/courseDetails',component: () => import('../views/platform/courseDetails')},
    {path: '/platform/InstitutionalDetails',name: '/platform/InstitutionalDetails',component: () => import('../views/platform/InstitutionalDetails')},

    // {path: '/passwordReset',name: '/passwordReset',component: () => import('../components/nav/ResetPassWord')},

    // { 						
    // { 						
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/About.vue')
    // }

    // 教练账号
    {path: '/coach/playerDetail',name: 'playerDetail',component: () => import('../components/coach/PlayerDetail')},

    // 我的课程
    {path: '/coach/wodekecheng',name: 'wodekecheng',component: () => import('../components/coach/WoDeKeCheng')},
    {path: '/coach/onlyReadwodekecheng',name: 'onlyReadwodekecheng',component: () => import('../components/coach/OnlyReadKeCheng')}
  ]


export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/permission',
    // name: 'permissionhome',
    meta: {
      title: 'permission',
      icon: 'el-icon-setting',
      roles: ['admin']
    },
    component: resolve => require(['../views/Home.vue'], resolve),
    children: [
      {
        name: 'permission',
        path: '/permission',
        meta: {
          title: 'permission', icon: 'el-icon-menu', roles: ['admin']
        },
        component: resolve => require(['../views/Home.vue'], resolve)
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
