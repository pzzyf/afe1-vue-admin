import { router } from "@/routes";
import NProgress from "@/utils/nprogress";

export function setupPermission() {
  router.beforeEach((to, from, next) => {
    NProgress.start();
    const hasToken = localStorage.getItem("token");
    if (!hasToken) {
      next({ path: "/" });
    }
  });
}
