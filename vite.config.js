import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "/Lanh/" khi build (cho GitHub Pages), "/" khi chạy local dev
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/Lanh/" : "/",
  plugins: [react()],
}));
