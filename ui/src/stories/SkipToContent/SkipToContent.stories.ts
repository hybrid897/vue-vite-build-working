import type { Meta, StoryObj } from '@storybook/vue3'
import SkipToContent from './SkipToContent.vue'
import type { ComponentProps } from 'vue-component-type-helpers'
const html = String.raw

type SkipToContentProps = ComponentProps<typeof SkipToContent>

const meta = {
  title: 'SkipToContent',
  component: SkipToContent,
  decorators: [
    () => ({
      template: html`
        <story />
        <main id="main-content" class="container mx-auto mt-20 min-h-screen max-w-3xl align-bottom">
          <span>Content Start</span><button>I'm a tabable thing</button><span>Content End</span>
        </main>
      `
    })
  ],
  args: {
    id: '#main-content'
  }
} satisfies Meta<SkipToContentProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
