export const defaultRoute = [
  {
    path: "/",
    name: "home",
    meta: {},
    component: () => import("@/views/home/Home.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/error/404.vue"),
  },
];
