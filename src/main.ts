import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "./router";
import { setupStore } from "@/store";
import { setupElIcons } from "@/plugins";
import "normalize.css";
import "uno.css";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);

setupStore(app);

setupElIcons(app);

setupRouter(app);

app.use(ElementPlus);

app.mount("#app");
