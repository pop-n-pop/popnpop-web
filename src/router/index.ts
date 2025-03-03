import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import StoreDetailView from "@/views/StoreDetailView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/introduce",
    children: [
      {
        path: "home",
        component: () => import("@/views/HomeView.vue"),
      },
      {
        path: "category",
        component: () => import("@/views/CategoryView.vue"),
      },
      {
        path: "map",
        component: () => import("@/views/MapView.vue"),
      },
      {
        path: "store/:id",
        component: StoreDetailView,
      },
      {
        path: "introduce",
        component: () => import("@/views/IntroduceView.vue"),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
})

export default router
