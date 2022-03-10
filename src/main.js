import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.scss'
import * as filters from './utils/filters'
import plugins from './plugins'
// 按需引入element-ui  样式
import './styles/element-variables.scss' // 注意新增引入element-ui组件时，需要在本文件引入相关的scss文件
// 按需引入element-ui
import element from './element'

Vue.config.productionTip = false

Vue.use(element)
Vue.use(plugins)
// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 关闭生产模式的消息提示
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
