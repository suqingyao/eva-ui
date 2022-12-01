import Theme from 'vitepress/theme'
import WowUI from '@cully/wow-ui'
import DemoBlock from '@ruabick/vitepress-demo-block'
import '@ruabick/vitepress-demo-block/dist/style.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(WowUI)
    app.component('demo', DemoBlock)
  }
}
