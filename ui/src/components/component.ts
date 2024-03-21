import App from '../app'

import registerMyButton from './myButton'

/**
 * Initialise Components
 * @param app - App framework
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function initialiseComponents(app: typeof App) {
  registerMyButton(app)
}
