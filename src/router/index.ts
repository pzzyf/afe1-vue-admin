import type { RouteRecordRaw } from "vue-router";

import type { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import { BasicRoute } from "./routes";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: BasicRoute as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export const setupRouter = (app: App) => {
  app.use(router);
};
