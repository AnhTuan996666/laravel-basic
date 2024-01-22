import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/

export default defineConfig(({ command, mode }) => {

  const env = loadEnv(mode, process.cwd(), '')
  return {
    define: {
      "process.env": env,
    },
    plugins: [vue()],
      resolve: {
        alias: {
          '@': resolve(__dirname, './src'),
        },
      },
    server: {
      port: process.env.PORT || 8083,
      host: 'localhost',
    }
  }
})