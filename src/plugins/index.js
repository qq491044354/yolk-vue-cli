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
