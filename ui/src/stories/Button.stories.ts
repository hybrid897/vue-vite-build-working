import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './Button.vue'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  FingerPrintIcon,
  SquaresPlusIcon
} from '@heroicons/vue/24/outline'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/HeaderDoc',
  parameters: { layout: 'fullscreen' },
  component: Button,
  decorators: [
    () => ({
      template:
        '<div class="flex flex-col min-h-[60vh]"><div class="flex min-h-[80px] items-center bg-lime-900 justify-center"><story/></div></div>'
    })
  ],
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {  }
}
