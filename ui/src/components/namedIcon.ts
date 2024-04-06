import type App from '../app'

import icon from './NamedIcon.vue'

export default (app: typeof App) => {
  app.component('named-icon', icon)
}
