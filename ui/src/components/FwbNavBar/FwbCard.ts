import type App from '../../app'

import FwbCard from './FwbCard.vue'

export default (app: typeof App) => {
  app.component('fwb-card', FwbCard)
}
