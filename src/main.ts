import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./routes";
import { setupStore } from "@/store";
import { setupElIcons, setupPermission } from "@/plugins";
import "normalize.css";
import "uno.css";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);

setupStore(app);

setupElIcons(app);

setupPermission();

app.use(router);
app.use(ElementPlus);

app.mount("#app");
