import PopoverContainer from './stories/Button.vue'
import { createApp, defineComponent, onMounted } from 'vue'

const componentsToRegister = defineComponent({
  components: {
    PopoverContainer
  },
  setup() {
    onMounted(() => console.log('mounted'))
  }
})

export default createApp(componentsToRegister)
