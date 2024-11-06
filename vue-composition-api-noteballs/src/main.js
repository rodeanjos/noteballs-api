import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import ViewsNote from "./views/ViewsNote.vue";
import ViewsStats from "./views/ViewsStats.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
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
  ],
});

createApp(App).use(router).mount("#app");
