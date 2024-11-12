import { createRouter, createWebHashHistory } from "vue-router";
import ViewsNote from "@/views/ViewsNote.vue";
import ViewsStats from "@/views/ViewsStats.vue";
import ViewEditNote from "@/views/ViewEditNote.vue";
import ViewAuth from "@/views/ViewAuth.vue";

const routes = [
  {
    path: "/",
    name: "notes",
    component: ViewsNote,
  },
  {
    path: "/edit-note/:id",
    name: "edit-note",
    component: ViewEditNote,
  },
  {
    path: "/stats",
    name: "stats",
    component: ViewsStats,
  },
  {
    path: "/auth",
    name: "auth",
    component: ViewAuth,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
