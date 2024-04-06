<template>
  <div
    className="flex"
    ref="hoverZone"
  >
    <div
      class="text-md m-2 flex cursor-pointer select-none content-center border-b-4 border-transparent font-medium
        text-white transition duration-0 hover:border-current focus:outline-none"
      @click="handleClick"
    >
      <button>{{ msg }}</button>
      <a
        href="#"
        class="content-center"
      >
        <ChevronDownIcon
          class="h-6 w-6 cursor-pointer"
          :class="{ 'scale-y-[-1]': isVisible }"
        >
        </ChevronDownIcon>
      </a>
    </div>
    <div
      v-show="isVisible"
      className="absolute top-20 left-1/2 -translate-x-1/2"
    >
      <div
        class="w-screen max-w-md flex-auto overflow-hidden bg-white text-sm leading-6 shadow-lg ring-1
          ring-gray-900/5 lg:max-w-3xl"
      >
        <div class="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2">
          <div
            v-for="item in solutions"
            :key="item.name"
            class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
          >
            <slot
              name="content"
              :msg="msg"
              :item="item"
            ></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useElementHover } from '@vueuse/core'
import { watch, ref, computed } from 'vue'
import type { Solution } from './MyButtonTypes'
import { ChevronDownIcon } from '@heroicons/vue/24/outline'

const props = defineProps<{
  msg: string
  isActive: boolean
  keyval: number
  solutions: Solution[]
}>()

const emit = defineEmits<{
  mouseEnter: [id: number]
  mouseLeave: []
  toggleButton: [id: number]
}>()

defineSlots<{
  content(props: { msg: string; item: Solution }): any
}>()

const hoverZone = ref(null)
const isHovered = useElementHover(hoverZone)

function handleClick() {
  //contentOpen.value = !contentOpen.value;
  emit('toggleButton', props.keyval)
}

watch(isHovered, (currentVal) => {
  currentVal ? emit('mouseEnter', props.keyval) : emit('mouseLeave')
})

const isVisible = computed(() => {
  return props.isActive
})
</script>
