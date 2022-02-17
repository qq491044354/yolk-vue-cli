import Vue from "vue";
import VueRouter from "vue-router";
import { defaultRoute } from "./routeConfig";

Vue.use(VueRouter);

let moduleRouter = [];
const reqRouter = require.context("./module", false, /\.js$/);
reqRouter.keys().forEach((file) => {
  moduleRouter.push(...reqRouter(file).default);
});

let routes = [...defaultRoute, ...moduleRouter];
const router = new VueRouter({
  routes,
});

export default router;
