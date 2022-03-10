export const defaultRoute = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'yolk Vue demo'
    },
    component: () => import('@/views/home/Home.vue')
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '页面不见啦！'
    },
    component: () => import('@/views/error/404.vue')
  }
]
