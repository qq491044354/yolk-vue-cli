// 全局注册组件， 只针对baseCpn文件下的vue文件

export default {
  install(Vue) {
    const requireComponent = require.context('@/components/baseCpn', false, /\.(vue)$/)
    console.log(requireComponent)
    requireComponent.keys().forEach(file => {
      const componentConfig = requireComponent(file)
      const componentName = file
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
      Vue.component(componentName, componentConfig.default)
    })
  }
}
