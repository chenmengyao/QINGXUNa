import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Moment from 'moment'
import './global.less'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import echarts from 'echarts'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
console.log(echarts)
Vue.use(VueAwesomeSwiper)
Vue.use(VueVideoPlayer)

Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.prototype.Moment = Moment
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
