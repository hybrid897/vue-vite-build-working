import PopoverContainer from './stories/Button.vue'
import { createApp, defineComponent, onMounted, ref } from 'vue'

const componentsToRegister = defineComponent({
  components: {
    PopoverContainer
  },
  setup() {
    let isMounted = ref(false)
    onMounted(() => {
      isMounted.value = true
      console.log('mounted')
    })
  }
})

export default createApp(componentsToRegister)
