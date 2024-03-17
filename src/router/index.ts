import type { RouteRecordRaw } from "vue-router";

import type { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import { BasicRoute } from "./routes";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: BasicRoute as unknown as RouteRecordRaw[],
});

export const setupRouter = (app: App) => {
  app.use(router);
};
