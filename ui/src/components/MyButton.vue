<template>
  <div
    ref="hoverZone"
    className="flex"
  >
    <div
      class="text-md m-2 flex cursor-pointer select-none content-center border-b-4 border-transparent font-medium
        text-white transition duration-0 hover:border-current focus:outline-none"
      @click="handleClick"
    >
      <slot name="button"></slot>
    </div>
    <div
      v-if="isVisible"
      className="absolute top-20 left-1/2 -translate-x-1/2"
    >
      <div
        class="min-h-[20vh] w-screen max-w-md flex-auto overflow-hidden bg-white text-sm leading-6 shadow-lg ring-1
          ring-gray-900/5 lg:max-w-3xl"
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
import type { Ref } from 'vue'

const handleToggle = inject('handleToggle') as (id: number) => void
const mouseEnter = inject('mouseEnter') as (id: number) => void
const mouseLeave = inject('mouseLeave') as () => void
const activeId = inject('activeIndex') as Ref<number>

const props = defineProps<{
  id: number
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

function handleClick() {
  handleToggle(props.id)
}
</script>
