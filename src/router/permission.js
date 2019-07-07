// permission.js
import router from './router'
import store from './store'
import { Message } from 'element-ui'

const whiteList = ['/login', '/authredirect'] // 不重定向白名单

let getToken=()=>{
	return localStorage.getItem('token');
}
let =localStorage.getItem('Routers')

router.beforeEach((to, from, next) => {
  if (getToken()) { // 判断是否有token
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (store.getters.roles.length === 0) {
            router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
      } else {
        console.log('====1')
        next() // 当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的全面会自动进入404页面
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})