import { createRouter, createWebHashHistory } from "vue-router";
import ViewsNote from "@/views/ViewsNote.vue";
import ViewsStats from "@/views/ViewsStats.vue";
import ViewEditNote from "@/views/ViewEditNote.vue";
import ViewAuth from "@/views/ViewAuth.vue";
import { useAuthStore } from "@/stores/storeAuth";

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

router.beforeEach(async (to, from) => {
  const authStore = useAuthStore();
  if (!authStore.user.id && to.name !== "auth") {
    return { name: "auth"}
  }
  if (authStore.user.id && to.name === "auth") {
    return false
  }
});

export default router;
