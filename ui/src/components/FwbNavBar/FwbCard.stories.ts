import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from '@storybook/test'
import FwbCard from './FwbCard.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof FwbCard> = {
  title: 'Example/Card',
  component: FwbCard,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    imgSrc: 'https://picsum.photos/380/300'
  }
}
