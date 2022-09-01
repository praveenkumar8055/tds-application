import Vue from "vue";
import VueRouter from "vue-router";
import CardsPage from "../views/CardsPage.vue";
import TablesPage from "../views/TablesPage.vue";
import SettingsPage from "../views/SettingsPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "tables",
    component: TablesPage,
  },
  {
    path: "/cards",
    name: "cards",
    component: CardsPage,
  },
  {
    path: "/settings",
    name: "settings",
    component: SettingsPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
