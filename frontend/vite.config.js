// import path from "path";
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "src"),
//     },
//   },
// });

// vite.config.js
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimizeDeps: {
    include: [
      "clsx",
      "tailwind-merge",
      "@radix-ui/react-checkbox",
      "@radix-ui/react-toast",
    ],
  },
  server: {
    watch: {
      ignored: ["**/node_modules/**", "**/dist/**"],
      usePolling: false
    },
  },
});
