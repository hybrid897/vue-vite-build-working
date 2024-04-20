import type App from '../app'

import PageLayout from './PageLayout.vue'

export default (app: typeof App) => {
  app.component('page-layout', PageLayout)
}
