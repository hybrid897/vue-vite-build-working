<template>
  <component
    :is="props.as"
    :class="buttonClass"
    :disabled
  >
    <component
      :is="props.leftIcon"
      class="mr-2 h-5 w-5"
    />
    <slot name="center">DEFAULT</slot>
    <component
      :is="props.rightIcon"
      class="ml-2 h-5 w-5"
    />
  </component>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { cva } from 'class-variance-authority'

const props = defineProps({
  leftIcon: Object,
  rightIcon: Object,
  disabled: Boolean,
  as: {
    type: [String, Object],
    default: 'button'
  },
  intent: {
    type: String,
    validator: (val: string) => ['primary', 'secondary', 'danger'].includes(val),
    default: 'primary'
  }
})

const buttonClass = computed(() => {
  return cva(
    // Base classes
    'flex min-h-[32px] items-center rounded bg-black px-3 py-0.5 text-sm font-semibold text-white',
    {
      variants: {
        intent: {
          primary: 'bg-black text-white hover:bg-gray-800',
          secondary: 'bg-gray-500 hover:bg-gray-600',
          danger: 'bg-red-500 hover:bg-red-600'
        },
        disabled: {
          true: '!bg-gray-100 !text-gray-400 cursor-not-allowed'
        }
      },
      defaultVariants: {
        intent: 'primary'
      }
    }
  )({
    intent: props.intent as 'primary' | 'secondary' | 'danger' | null | undefined,
    disabled: props.disabled
  })
})
</script>

<style scoped></style>
