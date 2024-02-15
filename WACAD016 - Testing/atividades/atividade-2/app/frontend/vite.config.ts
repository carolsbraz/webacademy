import { defineConfig } from "vite";
import dotenv from "dotenv";
import react from "@vitejs/plugin-react";

dotenv.config();

const PORT = parseInt(process.env.PORT) || 3366;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: PORT,
    watch: {
      usePolling: true,
    },
  },
});
