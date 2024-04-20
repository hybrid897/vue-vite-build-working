import type { Meta, StoryObj } from '@storybook/vue3'
import CvaExample from './CvaExample.vue'
import Button from './Button.vue'
import type { ComponentProps } from 'vue-component-type-helpers'
const html = String.raw
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories

type CvaButtonAndProps = ComponentProps<typeof CvaExample>

const meta = {
  title: 'CvaButton',
  parameters: { layout: 'centered' },
  component: CvaExample,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    intent: {
      control: 'select',
      options: ['primary', 'secondary']
    }
  }
} satisfies Meta<CvaButtonAndProps>

export default meta
type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {}

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const UsingSlot: Story = {
  render: (args) => ({
    components: { CvaExample },
    setup() {
      const cards = [
        {
          id: 111,
          title: 'Card 1',
          description: 'Description for card 1',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 222,
          title: 'Card 2',
          description: 'Description for card 2',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 333,
          title: 'Card 3',
          description: 'Description for card 3',
          image: 'https://via.placeholder.com/150'
        }
      ]
      return { args, cards }
    },
    // V-Bind necessary for args to bind to template correctly
    template: html`
      <cva-example v-for="card in cards">
        <template #center>
          <span class="align-center mr-2">{{card.id}} {{card.title}}</span>
          <a
            class="flex flex-col"
            :href="card.image"
          >
            <img
              :src="card.image"
              alt="Card Image"
            />
            <button>{{ card.title }}</button>
            <button>{{ card.description }}</button>
          </a>
        </template>
      </cva-example>
    `
  }),
  decorators: [
    (story) => ({
      components: { story, Button },
      template: '<Button><story /></Button>'
    })
  ]
}

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Secondary: Story = {
  args: {
    center: 'SecondaryTest',
    intent: 'secondary'
  }
}

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const AsLink: Story = {
  args: {
    as: 'a',
    center: 'AsDangerLink',
    href: '#',
    intent: 'danger'
  }
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
  }
}

export const ButtonGrid: Story = {
  render: (args) => ({
    components: { CvaExample },
    setup() {
      const cards = [
        {
          id: 1,
          title: 'Card 1',
          description: 'Description for card 1',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 2,
          title: 'Card 2',
          description: 'Description for card 2',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 3,
          title: 'Card 3',
          description: 'Description for card 3',
          image: 'https://via.placeholder.com/150'
        }
      ]
      return { args, cards }
    },
    // V-Bind necessary for args to bind to template correctly
    template: html`
      <template v-for="card in cards">
        <cva-example>
          <template v-slot:center> {{ card.title }} SLOT </template>
        </cva-example>
      </template>
    `
  }),
  args: {
    center: 'Button Grid Arg'
  }
}

/*
 *👇 Test reuse render function
 */
export const DisabledRenderReuse: Story = {
  args: {
    ...Disabled.args
  },
  render: (args) => {
    return {
      components: { CvaExample },
      setup() {
        const cards = [
          {
            id: 1,
            title: 'Card 1',
            description: 'Description for card 1',
            image: 'https://via.placeholder.com/150'
          },
          {
            id: 2,
            title: 'Card 2',
            description: 'Description for card 2',
            image: 'https://via.placeholder.com/150'
          },
          {
            id: 3,
            title: 'Card 3',
            description: 'Description for card 3',
            image: 'https://via.placeholder.com/150'
          }
        ]
        return { args, cards }
      },
      // V-Bind necessary for args to bind to template correctly
      template: html`
        <template v-for="card in cards">
          <cva-example v-bind="args">
            <template v-slot:center> {{ card.title }} SLOT </template>
          </cva-example>
        </template>
      `
    }
  }
}
