import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeViews.vue";
import DetailNewsView from "@/views/DetailNewsViews.vue";
import EditNewsView from "@/views/EditNewsViews.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/detail",
    name: "detail",
    component: DetailNewsView,
  },
  {
    path: "/edit",
    name: "edit",
    component: EditNewsView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
