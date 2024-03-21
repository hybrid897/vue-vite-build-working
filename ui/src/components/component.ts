import App from '../app'

import registerMyButton from './myButton'
import registerMyTask from './Task/Task'

/**
 * Initialise Components
 * @param app - App framework
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function initialiseComponents(app: typeof App) {
  registerMyButton(app)
  registerMyTask(app)
}
