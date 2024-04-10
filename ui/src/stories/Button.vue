<template>
  <div class="flex h-full max-h-11 justify-center gap-x-10">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { toggleTimeout } from './butt-composables'

provide('toggleTimeout', toggleTimeout())
</script>

<style scoped></style>
