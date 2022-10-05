import Theme from 'vitepress/dist/client/theme-default'
import WowUI from '../../../src/entry'

// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
// 插件的组件，主要是demo组件
// @ts-ignore
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
// @ts-ignore
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'


export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(WowUI)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  }
}