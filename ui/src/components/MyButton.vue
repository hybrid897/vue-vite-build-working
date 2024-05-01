<template>
  <div
    ref="hoverZone"
    class="flex"
  >
    <div
      class="text-md m-2 flex cursor-pointer select-none content-center border-b-4 border-transparent font-medium
        text-white transition duration-0 hover:border-current focus:outline-none"
      @click="handleToggle(props.id)"
    >
      <slot name="button"></slot>
    </div>
    <div
      v-if="isVisible"
      class="absolute left-1/2 -translate-x-1/2"
      :style="{ top: height + 18 + 'px' }"
    >
      <div
        class="min-h-[20vh] w-screen max-w-md flex-auto overflow-hidden bg-blue-400 text-sm leading-6 shadow-lg
          ring-1 ring-gray-900/5 lg:max-w-3xl"
      >
        <div class="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2">
          <slot name="hovercontent"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useElementHover } from '@vueuse/core'
import { watch, ref, computed, inject } from 'vue'

const { activeId, mouseEnter, mouseLeave, handleToggle } = inject('toggleTimeout') as any

const props = defineProps<{
  id: number
  height: number
}>()

defineSlots<{
  button(props: {}): any
  hovercontent(props: {}): any
}>()

const hoverZone = ref(null)
const isHovered = useElementHover(hoverZone)

watch(isHovered, (currentVal) => {
  currentVal ? mouseEnter(props.id) : mouseLeave()
})

const isVisible = computed(() => {
  return activeId.value == props.id
})
</script>
