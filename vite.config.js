import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base:'./',
  devServer: {
    proxy: {
      '/api': { // 请求的代称，写在Axios里的BaseUrl
        target: 'http://8.130.123.78:7001', // 真实请求URl
        ws: true,
        changeOrigin: true, // 允许跨域
        pathRewrite: { 
          '^/api': '' 
        }
      }
    },
  },
})
