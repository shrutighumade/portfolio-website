import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    mimeTypes: {
      ".pdf": "application/pdf", // <-- This line ensures PDFs are served correctly
    },
  },
});
