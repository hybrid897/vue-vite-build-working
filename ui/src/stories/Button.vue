<template>
  <div class="flex h-full max-h-11 justify-center gap-x-10">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'

let activeId = ref(-1)
const activeTimeout = ref<NodeJS.Timeout>()

provide('handleToggle', handleToggle)
provide('mouseEnter', mouseEnter)
provide('mouseLeave', mouseLeave)
provide('activeIndex', activeId)

function handleToggle(activeIndex: number) {
  clearActiveTimeout()
  if (activeId.value === activeIndex) {
    activeId.value = -1
  } else {
    activeId.value = activeIndex
  }
}

function mouseEnter(activeIndex: number) {
  clearActiveTimeout()
  activeTimeout.value = setTimeout(() => {
    activeId.value = activeIndex
  }, 300)
}

function mouseLeave() {
  clearActiveTimeout()
  activeTimeout.value = setTimeout(() => {
    activeId.value = -1
  }, 300)
}

function clearActiveTimeout() {
  clearTimeout(activeTimeout.value)
}
</script>

<style scoped></style>
