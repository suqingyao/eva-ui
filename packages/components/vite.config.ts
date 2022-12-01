import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import UnoCss from 'unocss/vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './', 'packages')
    }
  },
  plugins: [vue(), vueJsx(), UnoCss()],
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
    minify: 'terser',
    sourcemap: true,
    reportCompressedSize: true,
    lib: {
      entry: './entry.ts',
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
