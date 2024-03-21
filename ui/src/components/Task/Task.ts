import type App from '../../app'

import Task from './Task.vue'

export default (app: typeof App) => {
  app.component('task', Task)
}
