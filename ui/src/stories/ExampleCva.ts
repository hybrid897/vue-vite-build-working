import type App from '../app'

import ExampleCva from './ExampleCva.vue'

export default (app: typeof App) => {
  app.component('example-cva', ExampleCva)
}
