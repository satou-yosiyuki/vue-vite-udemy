import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/children",
      name: "children",
      component: () => import("../views/Children.vue"),
    },
    {
      path: "/teleport-test",
      name: "TeleportTest",
      component: () => import("../views/TeleportTest.vue"),
    },
    {
      path: "/composition-test",
      name: "CompositionTest",
      component: () => import("../views/CompositionTest.vue"),
    },
    {
      path: "/props-emit-test",
      name: "PropsEmitTest",
      component: () => import("../views/PropsEmitTest.vue"),
    },
    {
      path: "/function-test",
      name: "functionTest",
      component: () => import("../views/FunctionTest.vue"),
    },
  ],
});

export default router;
