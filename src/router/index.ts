import type { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import { BasicRoute } from "./routes";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: BasicRoute, // `routes: routes` 的缩写
});

export const setupRouter = (app: App) => {
  app.use(router);
};
