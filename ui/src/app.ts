import TheWelcome from './components/TheWelcome.vue'
import HelloWorld from './components/HelloWorld.vue'
import WelcomeItem from './components/WelcomeItem.vue'

import { createApp, defineComponent } from 'vue'

const componentsToRegister = defineComponent({
  components: {
    TheWelcome,
    HelloWorld,
    WelcomeItem
  },
  setup() {}
})

export default createApp(componentsToRegister)
