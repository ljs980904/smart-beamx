import { defineConfig } from '@dcloudio/uni-app'

export default defineConfig({
  // 使用根目录作为源码目录，避免强制要求 src/
  sourceRoot: '.',
  // 可按需指定输出目录
  outputDir: 'unpackage/dist/build/h5'
})
