import { App } from 'vue'
import WButton from './button/index'
import JsxButton from './JsxButton'
import 'unocss'

export default {
  install(app: App) {
    app.component(JsxButton.name, JsxButton)
    app.component(WButton.name, WButton)
  }
}
