import './assets/main.css'
import './index.css'

import * as components from './components/component'
import App from './app'

components.initialiseComponents(App)

App.mount('#app')
