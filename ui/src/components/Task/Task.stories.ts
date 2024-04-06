import Task from './Task.vue'

export default {
  component: Task,
  title: 'Task',
  tags: ['autodocs'],
  //👇 Our events will be mapped in Storybook UI
  argTypes: {
    onPinTask: {},
    onArchiveTask: {}
  },
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
}

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}
