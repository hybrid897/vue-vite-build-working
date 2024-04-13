import type App from '../../app'

import SingleCard from './SingleCard.vue'

export default (app: typeof App) => {
  app.component('single-card', SingleCard)
}
