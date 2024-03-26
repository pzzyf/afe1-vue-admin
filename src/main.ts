import "uno.css";
import "normalize.css";
import "element-plus/dist/index.css";

import { createApp } from "vue";

import { router, setupRouter } from "./router";
import { setupRouterGuard } from "./router/guard";
import { setupStore } from "@/store";

import App from "./App.vue";

import ElementPlus from "element-plus";

async function bootspring() {
  const app = createApp(App);

  setupStore(app);

  setupRouter(app);

  setupRouterGuard(router);

  app.use(ElementPlus);

  app.mount("#app");
}

bootspring();
