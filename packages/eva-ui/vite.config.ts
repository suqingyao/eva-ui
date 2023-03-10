import { resolve } from 'pathe'
import vue from '@vitejs/plugin-vue'
import { defineConfig, ResolvedConfig } from 'vite'
import { copyFile } from 'fs-extra'

let config: ResolvedConfig = undefined!

export default defineConfig({
  build: {
    emptyOutDir: false,
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'eva-ui',
      fileName: 'eva-ui'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [
    vue(),
    {
      name: 'vite-plugin-copy-style',
      apply: 'build',
      enforce: 'post',
      configResolved(_config) {
        config = _config
      },
      async closeBundle() {
        const { build, root } = config
        const { outDir } = build
        const styleFile = resolve(__dirname, 'src/style.css')
        await copyFile(styleFile, resolve(root, outDir, 'style.css'))
      }
    }
  ]
})
