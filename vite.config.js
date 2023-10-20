import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@demo': fileURLToPath(new URL('./src/view/demo', import.meta.url)),
    }
  },
  server: {
    host: '127.0.0.1',
    port: '5173',
    https: false,
  },
  proxy: {
    '/login': {
      target: 'http://localhost:8080/',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/login/, '') // 不可以省略rewrite
    }
  }
})