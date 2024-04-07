import type App from '../app'

import Button from './Button.vue'

export default (app: typeof App) => {
  app.component('my-button', Button)
}
