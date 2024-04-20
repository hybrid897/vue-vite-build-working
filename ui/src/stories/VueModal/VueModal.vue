<template>
  <div>
    <div class="fixed inset-0 z-40 bg-gray-900 bg-opacity-50 dark:bg-opacity-80" />
    <div
      ref="modalRef"
      class="fixed top-1/4 z-50 flex w-full items-center justify-center overflow-y-auto overflow-x-hidden
        md:h-full"
      tabindex="0"
      @click.self="clickOutside"
      @keyup.esc="closeWithEsc"
    >
      <div
        class="relative h-full w-full p-4"
        :class="`${modalSizeClasses[size]}`"
      >
        <!-- Modal content -->
        <div class="relative rounded-lg bg-white shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-center justify-between rounded-t p-4"
            :class="$slots.header ? 'border-b border-gray-200 dark:border-gray-600' : ''"
          >
            <slot name="header" />
            <button
              v-if="!persistent"
              class="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400
                hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              aria-label="close"
              type="button"
              @click="closeModal"
            >
              <slot name="close-icon">
                <svg
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    fill-rule="evenodd"
                  />
                </svg>
              </slot>
            </button>
          </div>
          <!-- Modal body -->
          <div
            class="p-6"
            :class="$slots.header ? '' : 'pt-0'"
          >
            <slot name="body" />
          </div>
          <!-- Modal footer -->
          <div
            v-if="$slots.footer"
            class="rounded-b border-t border-gray-200 p-6 dark:border-gray-600"
          >
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, type Ref } from 'vue'

type ModalPosition =
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center'
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'center-left'
  | 'center'
  | 'center-right'
type ModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
interface ModalProps {
  notEscapable?: boolean
  persistent?: boolean
  size?: ModalSize
}

const props = withDefaults(defineProps<ModalProps>(), {
  notEscapable: false,
  persistent: false,
  size: '2xl'
})

const emit = defineEmits(['close', 'click:outside'])
const modalSizeClasses = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl'
}

function closeModal() {
  emit('close')
}
function clickOutside() {
  if (!props.persistent) {
    emit('click:outside')
    closeModal()
  }
}

function closeWithEsc() {
  if (!props.notEscapable && !props.persistent) closeModal()
}
const modalRef: Ref<HTMLElement | null> = ref(null)
onMounted(() => {
  if (modalRef.value) {
    modalRef.value.focus()
  }
})
</script>
