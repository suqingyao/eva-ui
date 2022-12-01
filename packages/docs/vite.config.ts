import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { genApiDoc } from '@ruabick/vite-plugin-gen-api-doc'
import UnoCss from 'unocss/vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './', 'packages')
    }
  },
  plugins: [vue(), vueJsx(), UnoCss(), genApiDoc()]
})
