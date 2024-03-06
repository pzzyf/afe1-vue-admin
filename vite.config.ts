import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";
import Unocss from "unocss/vite";
import { presetUno, presetAttributify, presetIcons } from "unocss";

const root = process.cwd();
const pathResolve = (pathname: string) => resolve(root, ".", pathname);

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
  },
  plugins: [
    vue(),
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
  ],
  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: pathResolve("src") + "/",
      },
    ],
  },
});
