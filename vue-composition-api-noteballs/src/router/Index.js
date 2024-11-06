import { createRouter, createWebHashHistory } from "vue-router";
import ViewsNote from "@/views/ViewsNote.vue";
import ViewsStats from "@/views/ViewsStats.vue";

const routes = [
  {
    path: "/",
    name: "notes",
    component: ViewsNote,
  },
  {
    path: "/stats",
    name: "stats",
    component: ViewsStats,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
