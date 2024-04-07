<template>
  <div class="flex h-full max-h-11 justify-center gap-x-10">
    <slot
      name="content"
      :currentActive="currentActive"
    ></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'

let currentActive = ref(-1)
const activeTimeout = ref<NodeJS.Timeout>()

provide('handleToggle', handleToggle)
provide('mouseEnter', mouseEnter)
provide('mouseLeave', mouseLeave)

function handleToggle(activeIndex: number) {
  clearActiveTimeout()
  if (currentActive.value === activeIndex) {
    currentActive.value = -1
  } else {
    currentActive.value = activeIndex
  }
}

function mouseEnter(activeIndex: number) {
  clearActiveTimeout()
  activeTimeout.value = setTimeout(() => {
    currentActive.value = activeIndex
  }, 300)
}

function mouseLeave() {
  clearActiveTimeout()
  activeTimeout.value = setTimeout(() => {
    currentActive.value = -1
  }, 300)
}

function clearActiveTimeout() {
  clearTimeout(activeTimeout.value)
}
</script>

<style scoped></style>

<!-- <Popover
      v-for="(button, index) in buttonsz"
      :key="index"
      :keyval="index"
      :solutions="solutionsz"
      :is-active="currentActive === index"
      :msg="button.text"
      @toggle-button="handleToggle"
      @mouse-enter="mouseEnter"
      @mouse-leave="mouseLeave"
    >
      <template v-slot:button="{ isVisible }">
        <button>{{ button.text }}</button>
        <a
          class="content-center"
          href="#"
        >
          <ChevronDownIcon
            class="h-6 w-6 cursor-pointer"
            :class="{ 'scale-y-[-1]': isVisible }"
          >
          </ChevronDownIcon>
        </a>
      </template>

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
            class="font-semibold text-gray-900"
            :href="item.href"
          >
            {{ msg }}
            <span class="absolute inset-0" />
          </a>
          <p class="mt-1 text-gray-600">{{ item.description }}</p>
        </div>
      </template>
    </Popover> -->
