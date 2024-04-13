<!-- CardGrid.vue -->
<template>
  <div class="card-grid">
    <Card
      v-for="card in cards"
      :key="card.id"
      :title="card.title"
      :description="card.description"
      :image="card.image"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import Card from './SingleCard.vue'

const props = defineProps({
  cards: Array as any
})
</script>
