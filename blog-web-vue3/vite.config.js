import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    server: {
      port: parseInt(process.env.VITE_APP_PORT) || 8083,
      host: parseInt(process.env.VITE_APP_RESOURCE_HOST) || "localhost",
    },
    compilerOptions: {
      baseUrl: ".",
      paths: {
        "@/*": ["src/*"],
      },
    },
  });
};
