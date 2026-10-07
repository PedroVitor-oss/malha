import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  // No GitHub Pages o site fica em /nome-do-repo/. O workflow define VITE_BASE.
  // Localmente (npm run dev) continua "/".
  base: "/malha/",
  plugins: [react(), tailwindcss()],
});