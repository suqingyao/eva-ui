import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { genApiDoc } from '@ruabick/vite-plugin-gen-api-doc'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './', 'packages')
    }
  },
  plugins: [vue(), genApiDoc()]
})
