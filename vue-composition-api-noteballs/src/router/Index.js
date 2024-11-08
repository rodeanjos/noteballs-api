import { createRouter, createWebHashHistory } from "vue-router";
import ViewsNote from "@/views/ViewsNote.vue";
import ViewsStats from "@/views/ViewsStats.vue";
import ViewEditNote from "@/views/ViewEditNote.vue";

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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
