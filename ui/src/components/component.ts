import App from '../app'

import registerMyButton from './myButton'
import registerHelloWorld from './helloWorld'
import registerMyTask from './Task/Task'

/**
 * Initialise Components
 * @param app - App framework
 */
export async function initialiseComponents(app: typeof App) {
  registerMyButton()
  registerHelloWorld()
  registerMyTask(app)
}
