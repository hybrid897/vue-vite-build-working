import type { Meta, StoryObj } from '@storybook/vue3'
import PageLayout from './PageLayout.vue'
import HeroBanner from './HeroBanner.vue'
const html = String.raw

const meta = {
  title: 'Example/PageLayout',
  component: PageLayout,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  render: () => ({
    components: { PageLayout, HeroBanner },
    template: html`
      <page-layout>
        <template #hero>
          <hero-banner />
        </template>
      </page-layout>
    `
  }),
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof PageLayout>

export default meta
type Story = StoryObj<typeof meta>

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Primary: Story = {}
