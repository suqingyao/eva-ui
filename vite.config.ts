/// <reference types="vitest" />
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import UnoCss from 'unocss/vite'
import { genApiDoc } from '@ruabick/vite-plugin-gen-api-doc'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './', 'src')
    }
  },
  plugins: [vue(), vueJsx(), UnoCss(), genApiDoc()],
  build: {
    rollupOptions: {
      external: ['vue', 'vue-router'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    cssCodeSplit: true,
    minify: false,
    lib: {
      entry: './src/entry.ts',
      name: 'WowUI',
      fileName: 'wow-ui',
      formats: ['esm', 'umd', 'iife']
    }
  },
  test: {
    global: true,
    environment: 'happy-dom',
    transformMode: {
      web: [/.[tj]sx/]
    }
  }
})
