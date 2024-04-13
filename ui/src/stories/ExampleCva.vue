<template>
  <input
    :class="twMerge(buttonClasses({ intent, size, margin, fullWidth, hasError }))"
    :type="type"
    :value="modelValue"
    @input="onInput"
  />
</template>

<script setup lang="ts">
/**
 * Great documentation https://zenn.dev/shiori_hoshimi/articles/afad1f1e176a71
 *
 */
import { twMerge } from 'tailwind-merge'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonClasses = cva(
  'outline-0 pl-4 pr-11 text-base bg-color-surface-primary border-color-border-medium-emphasis focus:shadow-sm disabled:bg-color-surface-disabled disabled:text-color-text-disabled',
  {
    variants: {
      intent: {
        primary: 'bg-red-200 rounded-lg border',
        secondary: 'bg-blue-200 border-b',
        tertiary: 'bg-green-200 border-b rounded-sm'
      },
      size: {
        lg: 'min-h-[48px]',
        md: 'min-h-[40px]',
        sm: 'min-h-[36px]'
      },
      margin: {
        none: '',
        sm: 'mt-2',
        md: 'mt-4',
        lg: 'mt-6',
        xl: 'mt-8'
      },
      fullWidth: {
        true: 'w-full',
        false: ''
      },
      hasError: {
        true: 'bg-color-surface-caution-light border-color-border-caution',
        false: ''
      }
    },
    defaultVariants: {
      intent: 'primary',
      size: 'lg',
      margin: 'none',
      hasError: false,
      fullWidth: false
    }
  }
)

type ButtonClassProps = VariantProps<typeof buttonClasses>

interface Props {
  /**
   * Intent is an example class for my question.
   */
  intent?: ButtonClassProps['intent']

  /**
   * size is an example class for my question.
   */
  size?: ButtonClassProps['size']

  /**
   * margin is an example class for my question.
   */
  margin?: ButtonClassProps['margin']

  /**
   * hasError is an example class for my question.
   */
  hasError?: ButtonClassProps['hasError']

  /**
   * fullWidth is an example class for my question.
   */
  fullWidth?: ButtonClassProps['fullWidth']

  /**
   * type is an example class for my question.
   */
  type?: 'text' | 'email' | 'tel'

  /**
   * modelValue is an example class for my question.
   */
  modelValue?: string
}

withDefaults(defineProps<Props>(), {
  intent: 'primary',
  size: 'lg',
  margin: 'none',
  hasError: false,
  fullWidth: true,
  type: 'text',
  modelValue: ''
})

const emits = defineEmits<{ (e: 'update:modelValue', value: string): void }>()

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  emits('update:modelValue', target.value)
}
</script>
