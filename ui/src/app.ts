import TheWelcome from './components/TheWelcome.vue'
import HelloWorld from './components/HelloWorld.vue'
import WelcomeItem from './components/WelcomeItem.vue'
import MyButton from './components/MyButton.vue'

import { createApp, defineComponent } from 'vue'

const components = defineComponent({
  components: {
    TheWelcome,
    HelloWorld,
    WelcomeItem
  },
  setup() {}
})

export default createApp(components)
