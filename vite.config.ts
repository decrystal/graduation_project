import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
const { resolve } = require('path');
// rollup.config.js

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // resolvers: [ElementPlusResolver()],
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
        'types/**/*.d.ts', //
      ],
      dts: true,
      imports: ['vue', 'vue-router'],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],

  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
    ],
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 引入 var.scss 这样就可以在全局中使用 var.scss中预定义的变量了
        additionalData: '@import "./src/assets/scss/var.scss";',
      },
    },
  },

  server: {
    // host: '127.0.0.1',
    // port: 3001, // 设置服务启动端口号
    // open: false, // 设置服务启动时是否自动打开浏览器
    // cors: true, // 允许跨域

    // 设置代理，根据项目实际情况配置
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:4523/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace('/api', 'mock/840083/'),
      },
    },
  },
});
