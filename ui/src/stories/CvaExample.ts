import type App from '../app'

import CvaExample from './CvaExample.vue'

export default (app: typeof App) => {
  app.component('cva-example', CvaExample)
}
