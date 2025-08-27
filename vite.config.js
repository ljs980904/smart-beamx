import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

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
  }
})
