import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import path from 'path'

export default defineConfig({
  plugins: [
    uni({
      vueOptions: {
        ssr: false
      }
    }),
  ],
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  build: {
    target: 'es6',
    minify: 'terser',
    sourcemap: false,
    ssr: false
  },
  define: {
    'process.env.UNI_PLATFORM': JSON.stringify('h5')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './')
    }
  },
  // 指定uniapp配置文件位置
  optimizeDeps: {
    entries: ['./manifest.json', './pages.json']
  }
})
