import { defineConfig, presetAttributify, presetUno, presetIcons } from 'unocss'

const colors = [
  'white',
  'black',
  'gray',
  'red',
  'yellow',
  'green',
  'blue',
  'indigo',
  'purple',
  'pink'
]

const safelist = [
  ...colors.map((v) => `bg-${v}-500`),
  ...colors.map((v) => `hover:bg-${v}-700`),
  ...[
    'search',
    'edit',
    'check',
    'message',
    'star-off',
    'delete',
    'add',
    'share'
  ].map((v) => `i-ic-baseline-${v}`)
]

export default defineConfig({
  safelist,
  presets: [presetUno, presetAttributify, presetIcons]
})
