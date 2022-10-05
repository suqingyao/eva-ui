import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import Unocss from "./config/unocss";

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './', 'src')
    }
  },
  plugins: [
    vue(),
    vueJsx({}),
    Unocss()
  ],
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
      formats: ['es', 'umd', 'iife']
    }
  }
})
