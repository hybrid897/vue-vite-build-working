import type App from '../../app'

import CardGrid from './CardGrid.vue'

export default (app: typeof App) => {
  app.component('card-grid', CardGrid)
}
