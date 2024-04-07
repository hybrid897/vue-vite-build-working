import type App from '../app'

import MyButton from './MyButton.vue'

export default (app: typeof App) => {
  app.component('popover', MyButton)
}
