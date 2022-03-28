import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
const { resolve } = require('path') 
// rollup.config.js

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
  resolve:{
    alias:{
      '@': resolve(__dirname, 'src'),
      'vue': 'vue/dist/vue.esm-bundler.js' // 定义vue的别名，如果使用其他的插件，可能会用到别名
    }
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 引入 var.scss 这样就可以在全局中使用 var.scss中预定义的变量了
        additionalData: '@import "./src/assets/scss/var.scss";'
      }
    }
  },
})
