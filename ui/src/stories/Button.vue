<template>
  <div
    ref="container"
    class="relative flex h-full max-h-11 justify-center gap-x-10"
  >
    <slot :height></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import { toggleTimeout } from './butt-composables'
import { useElementSize } from '@vueuse/core'

provide('toggleTimeout', toggleTimeout())

let container = ref(null)
let { height } = useElementSize(container)
</script>

<style scoped></style>
