export const defaultRoute = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "洞察猫-内容电商数智化决策工具",
      isOneFloor: true,
      belong: "home",
    },
    component: () => import("@/views/home/Home.vue"),
  },
];
