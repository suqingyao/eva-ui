import UnoCss from 'unocss/vite'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import { genApiDoc } from '@ruabick/vite-plugin-gen-api-doc'

export default defineConfig({
  plugins: [
    UnoCss(),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      vueTemplate: true,
      dts: 'auto-imports.d.ts'
    }),
    genApiDoc()
  ]
})
