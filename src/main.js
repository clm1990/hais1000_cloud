import Vue from 'vue'
import App from './App.vue'
import ElmentUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon/font_style_a/iconfont.css'
import "./mock/index.js"
import router from "./router"

Vue.use(ElmentUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
