import type { Meta, StoryObj } from '@storybook/vue3'
import FwbCarousel from './FwbCarousel.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof FwbCarousel> = {
  title: 'Example/Carousel',
  component: FwbCarousel,
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
    pictures: [
      { alt: 'hey', src: 'https://picsum.photos/380/300' },
      { alt: 'you', src: 'https://picsum.photos/280/300' }
    ]
  }
}
