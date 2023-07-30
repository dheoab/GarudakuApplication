import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeViews.vue";
import DetailNewsView from "@/views/DetailNewsViews.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/category/:name",
    name: "news",
  },
  {
    path: "/detail",
    name: "detail",
    component: DetailNewsView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
