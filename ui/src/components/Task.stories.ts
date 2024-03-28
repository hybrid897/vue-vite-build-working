import Button from './MyButton.ce.vue'
import { action } from '@storybook/addon-actions'

export default {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  //👇 Our events will be mapped in Storybook UI
  argTypes: {
    onPinTask: {},
    onArchiveTask: {}
  },
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
}

export const actionsData = {
  onPinTask: action('pin-task'),
  onArchiveTask: action('archive-task')
}

export const Default = {
  args: {
    task: {
      message: 'Hello me button'
    }
  }
}
