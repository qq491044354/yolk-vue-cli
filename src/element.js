import { Message, Button } from 'element-ui'

const element = {
  install(Vue) {
    // Vue.use(Message)
    Vue.use(Button)
    Vue.prototype.$message = Message
  }
}

export default element
