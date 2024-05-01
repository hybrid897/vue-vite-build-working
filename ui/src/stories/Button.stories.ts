import type { Meta, StoryObj } from '@storybook/vue3'
import PopOverContainer from './Button.vue'
import PopoverContent from '../components/MyButton.vue'
const html = String.raw

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/HeaderDoc',
  parameters: { layout: 'fullscreen' },
  component: PopOverContainer,
  decorators: [
    () => ({
      template:
        '<div class="flex flex-col min-h-[60vh]"><div class="flex min-h-[80px] items-center bg-lime-900 justify-center"><story/></div></div>'
    })
  ],
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof PopOverContainer>

export default meta
type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {},
  render: (args) => ({
    components: { PopOverContainer, PopoverContent },
    setup() {
      var buttons = ['Parks & recreation', 'Nature', 'Get involved', 'Our work', 'MyDemo']
      var contents = [
        'Content1',
        'Content2',
        'Content3',
        'Content4',
        'Content5',
        'Content6',
        'Content7',
        'Content8'
      ]
      return { args, buttons, contents }
    },
    // V-Bind necessary for args to bind to template correctly
    template: html`
      <PopOverContainer v-slot="{ height }">
        <PopoverContent v-for="item in buttons" :height>
          <template #button>
            <button>{{ item }}</button>
          </template>

          <template #hovercontent>
            <a v-for="content in contents" href="#">{{ item }} {{ content }}</a>
          </template>
        </PopoverContent>
      </PopOverContainer>
    `
  })
}
