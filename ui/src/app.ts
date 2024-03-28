import TheWelcome from './components/TheWelcome.vue'
import WelcomeItem from './components/WelcomeItem.vue'

import { createApp, defineComponent } from 'vue'

const componentsToRegister = defineComponent({
  components: {
    TheWelcome,
    WelcomeItem
  },
  setup() {}
})

export default createApp(componentsToRegister)
