// 商品
export default [
  {
    path: '/test',
    name: 'test',
    meta: {
      title: '测试路由页面'
    },
    component: () => import('@/views/test/index')
  }
]
