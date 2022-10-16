import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import Unocss from './config/unocss'
import { genApiDoc } from '@ruabick/vite-plugin-gen-api-doc'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './', 'src')
    }
  },
  plugins: [vue(), vueJsx(), Unocss(), genApiDoc()],
  build: {
    rollupOptions: {
      external: ['vue', 'vue-router'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    minify: false,
    lib: {
      entry: './src/entry.ts',
      name: 'WowUI',
      fileName: 'wow-ui',
      formats: ['esm', 'umd', 'iife']
    }
  }
})
