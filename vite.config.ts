import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require("path");
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      //配置别名
      { find: "@", replacement: path.resolve(__dirname, "src") },
    ],
  },
  publicDir: "/public/",
  plugins: [react()],
});
