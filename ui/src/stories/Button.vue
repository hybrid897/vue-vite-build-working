<template>
  <div class="flex h-full max-h-11 justify-center gap-x-10">
    <Popover
      v-for="(button, index) in buttons"
      :key="index"
      :keyval="index"
      :solutions="solutions"
      :isActive="currentactive === index"
      :msg="button.text"
      @toggle-button="handleToggle"
      @mouse-enter="mouseEnter"
      @mouse-leave="mouseLeave"
    >
      <template v-slot:content="{ msg, item }">
        <div
          class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50"
        >
          <component
            :is="item.icon"
            class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
            aria-hidden="true"
          />
        </div>
        <div>
          <a
            :href="item.href"
            class="font-semibold text-gray-900"
          >
            {{ msg }}
            <span class="absolute inset-0" />
          </a>
          <p class="mt-1 text-gray-600">{{ item.description }}</p>
        </div>
      </template>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import Popover from '../components/MyButton.vue'

import { ref } from 'vue'

const props = defineProps<{
  buttons: any
  /**
   * Solution type
   */
  solutions: any
}>()

let currentactive = ref(-1)
const activeTimeout = ref(null)

function handleToggle(activeIndex) {
  clearActiveTimeout()
  if (currentactive.value === activeIndex) {
    currentactive.value = -1
  } else {
    currentactive.value = activeIndex
  }
}

function mouseEnter(activeIndex) {
  clearActiveTimeout()
  activeTimeout.value = setTimeout(() => {
    currentactive.value = activeIndex
  }, 300)
}

function mouseLeave() {
  clearActiveTimeout()
  activeTimeout.value = setTimeout(() => {
    currentactive.value = -1
  }, 300)
}

function clearActiveTimeout() {
  clearTimeout(activeTimeout.value)
}
</script>

<style scoped></style>
