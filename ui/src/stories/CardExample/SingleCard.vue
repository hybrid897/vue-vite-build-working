<!-- Card.vue -->
<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <img
      :src="image"
      alt="Card Image"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  title: String,
  description: String,
  image: String
})
</script>
