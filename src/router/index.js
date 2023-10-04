import Vue from "vue";
import VueRouter from "vue-router";
import DefaultView from "../views/DefaultView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "default-page",
    component: DefaultView,
  },
  {
    path: "/employee",
    name: "employee-page",
    component: () => import("../views/EmployeeView.vue"),
  },
];

const router = new VueRouter({
  historyMode: true,
  routes,
});

export default router;
