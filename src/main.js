// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 基础css样式导入
import '@/assets/style/reset.css'
// 字体图标css导入
import '@/assets/style/iconfont.css'
// 轮播图包导入
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 滚动
import vueScrollwatch from 'vue-scrollwatch'
// 懒加载
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)
Vue.use(vueScrollwatch)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

window.addEventListener('orientationchange', setRem)
window.addEventListener('resize', setRem)
setRem()
function setRem () {
  var html = document.getElementsByTagName('html')[0]
  var width = (window.orientation === 90 || window.orientation === -90) ? window.screen.height : window.screen.width
  if (width > 750) {
    width = 750
  }
  html.style.fontSize = width / 25 + 'px'
};
