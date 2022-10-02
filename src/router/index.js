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
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/journey",
      name: "journey",
      component: () => import("../views/JourneyView.vue"),
    },
    {
      path: "/letter",
      name: "letter",
      component: () => import("../views/LetterView.vue"),
    },
    {
      path: "/gallery",
      name: "gallery",
      component: () => import("../views/GalleryView.vue"),
    },
    {
      path: "/gifts",
      name: "gifts",
      component: () => import("../views/GiftsView.vue"),
    },
  ],
});

export default router;
