import { ref, readonly } from 'vue'

export function toggleTimeout(timeoutMs = 300) {
  const activeId = ref(-1)
  const activeTimeout = ref<NodeJS.Timeout>()

  function handleToggle (activeIndex: number) {
    clearActiveTimeout()
    if (activeId.value === activeIndex) {
      activeId.value = -1
    } else {
      activeId.value = activeIndex
    }
  }
  
  function mouseEnter (activeIndex: number) {
    clearActiveTimeout()
    activeTimeout.value = setTimeout(() => {
      activeId.value = activeIndex
    }, timeoutMs)
  }
  
  function mouseLeave (){
    clearActiveTimeout()
    activeTimeout.value = setTimeout(() => {
      activeId.value = -1
    }, timeoutMs)
  }
  
  function clearActiveTimeout () {
    clearTimeout(activeTimeout.value)
  }

  return { activeId: readonly(activeId), handleToggle, mouseEnter, mouseLeave }
}