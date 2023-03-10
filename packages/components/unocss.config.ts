import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: [
    ['xs', 'sm', 'md', 'lg', 'xl'].map(s => [
      'e-primary',
      'e-secondary',
      'e-success',
      'e-danger',
      'e-warning',
      'e-info',
      `e-button-${s}`
    ])
  ].flat(2) as string[]
})
