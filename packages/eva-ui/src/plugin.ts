// import * as plugins from '@eva-ui/components'
import { version } from '../package.json'
import type { InstallOptions } from '../../utils'
import type { App, Plugin } from 'vue'

const INSTALLED_KEY = Symbol('EVAUI_Installed')

export const createInstaller = (components: Plugin[] = []) => {
  const install = (app: App, options?: InstallOptions) => {
    if (app[INSTALLED_KEY]) return

    app[INSTALLED_KEY] = true
    components.forEach((c) => app.use(c))

    // if (options) provideGlobalConfig(options, app, true)

    // plugin install
    // app.config.globalProperties.$message = plugins.EMessage
  }

  return {
    version,
    install
  }
}
