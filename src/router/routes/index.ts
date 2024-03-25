import type { RouteRecordRaw } from "vue-router";
import { PageEnum } from "@/enums/pageEnum";

export const RootRoute: RouteRecordRaw = {
  path: "/",
  name: "Root",
  redirect: PageEnum.BASE_HOME,
};

export const LoginRoute: RouteRecordRaw = {
  path: "/login",
  name: "Login",
  component: () => import("@/views/sys/login/Login.vue"),
};

export const basicRoute = [LoginRoute, RootRoute];
