<template>
  <a
    class="absolute left-0 top-0 m-3 -translate-y-32 p-3 transition focus:translate-y-0"
    :href="props.id"
    >Skip to Content</a
  >
</template>

<script setup lang="ts">
let props = defineProps<{
  id: string
}>()
</script>
