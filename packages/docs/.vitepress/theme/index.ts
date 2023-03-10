import Theme from 'vitepress/theme'
import * as EvaUI from '@eva-ui/components'
import DemoBlock from '@ruabick/vitepress-demo-block'
import '@ruabick/vitepress-demo-block/dist/style.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(EvaUI)
    app.component('demo', DemoBlock)
  }
}
