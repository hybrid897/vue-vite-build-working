
import PopoverContainer from './stories/Button.vue'
import { createApp, defineComponent } from 'vue'

const componentsToRegister = defineComponent({
  components: {
    PopoverContainer,
  },
  setup() {}
})

export default createApp(componentsToRegister)
