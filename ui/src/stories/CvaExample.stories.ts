import type { Meta, StoryObj } from '@storybook/vue3'
import CvaExample from './CvaExample.vue'
import type { ComponentProps } from 'vue-component-type-helpers';
import { EnvelopeIcon, ChevronDoubleDownIcon } from '@heroicons/vue/20/solid'
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories

type CvaButtonAndProps = ComponentProps<typeof CvaExample> & { center?: string } & {href?: string};

const meta = {
  title: 'CvaButton',
  parameters: { layout: 'centered' },
  component: CvaExample,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {    
    intent: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
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

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
 export const UsingSlot: Story = {
  // Can do this per story to fill the slot with something
  render: (args) => ({
    components: { CvaExample },
    setup() {
      return { args };
    },
    template: `
      <cva-example v-bind="args">
        <template v-slot:center> ${args.center} </template>
      </cva-example>
    `,
  }),
  args: {
    center: '<a href="https://www.google.com">USING SLOT</a>', 
  },
}

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
 export const Secondary: Story = {
  args: {
    rightIcon: ChevronDoubleDownIcon,
    center: 'Secondary',
    intent: 'secondary'
  },
 }

 /*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
 export const AsLink: Story = {

  args: {
    as: 'a',
    leftIcon: EnvelopeIcon,
    center: 'Secondary',
    href: '#',
    intent: 'danger'
  },
 }

  /*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
 export const Disabled: Story = {

  args: {
    center: 'Disabled',
    disabled: true
  },
 }
