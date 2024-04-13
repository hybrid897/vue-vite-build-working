import type { Meta, StoryObj } from '@storybook/vue3'
import ExampleCva from './ExampleCva.vue'
import type { ComponentProps } from 'vue-component-type-helpers';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories

type CvaButtonAndProps = ComponentProps<typeof ExampleCva> & { center?: string } & {href?: string} & {items?: number[]};

const meta = {
  title: 'ExampleCva',
  parameters: { layout: 'centered' },
  component: ExampleCva,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    center: 'Primary'
  },
} satisfies Meta<CvaButtonAndProps>

export default meta
type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
}