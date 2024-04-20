import type { Meta, StoryObj } from '@storybook/vue3'
import VueModal from './VueModal.vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { ref } from 'vue'
const html = String.raw

type VueModalProps = ComponentProps<typeof VueModal>

const meta = {
  title: 'VueModal',
  component: VueModal,
  args: {}
} satisfies Meta<VueModalProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (args) => ({
    components: { VueModal },
    setup() {
      const isShowModal = ref(false)

      function closeModal() {
        isShowModal.value = false
      }
      function showModal() {
        isShowModal.value = true
      }
      return { args, isShowModal, closeModal, showModal }
    },
    // V-Bind necessary for args to bind to template correctly
    template: html`
      <button @click="showModal">Open Modal</button>
      <VueModal v-if="isShowModal" @close="closeModal" class="dark:text-gray-400">
        <template #header>
          <div class="flex items-center text-lg">Terms of Service</div>
        </template>
        <template #body>
          <p class="leading-relaxe text-base">
            With less than a month to go before the European Union enacts new consumer privacy laws
            for its citizens, companies around the world are updating their terms of service
            agreements to comply.
          </p>
          <p class="text-base leading-relaxed">
            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on
            May 25 and is meant to ensure a common set of data rights in the European Union. It
            requires organizations to notify users as soon as possible of high-risk data breaches
            that could personally affect them.
          </p>
        </template>
        <template #footer>
          <div class="my-2 flex justify-between">
            <button
              class="rounded-lg bg-transparent p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              @click="closeModal"
            >
              Decline
            </button>
            <button
              class="rounded-lg bg-transparent p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              @click="closeModal"
            >
              I accept
            </button>
          </div>
        </template>
      </VueModal>
    `
  })
}
