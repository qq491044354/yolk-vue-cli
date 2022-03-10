import Vue from 'vue'
import VueRouter from 'vue-router'
import { defaultRoute } from './routeConfig'

Vue.use(VueRouter)

let moduleRouter = []
const reqRouter = require.context('./module', false, /\.js$/)
reqRouter.keys().forEach(file => {
  moduleRouter.push(...reqRouter(file).default)
})

let routes = [...defaultRoute, ...moduleRouter]
const router = new VueRouter({
  routes
})
// 全局路由拦截守卫
router.beforeEach((to, from, next) => {
  // 控制标题栏名称变化，读取路由配置
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router
