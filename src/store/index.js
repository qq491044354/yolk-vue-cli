import Vue from 'vue'
import Vuex from 'vuex'

import test from './module/test'

Vue.use(Vuex)

// 主文件， 注册模块
export default new Vuex.Store({
  modules: {
    test
  }
})
