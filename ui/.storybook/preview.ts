/// <reference types="vite/client" />
import type { Preview } from '@storybook/vue3'
import '../src/main.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    docs: {
      source: {
        transform: (code: string) => {
          return code.replace(/^.*_.*$\n/gm, "")
        }
      }
    }
  }
  
}

export default preview
