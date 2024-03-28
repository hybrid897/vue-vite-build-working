import { defineCustomElement } from 'vue'
import MyButton from './MyButton.ce.vue'

// Vue generates a new HTML element class from the component definition.
const button = defineCustomElement(MyButton)

// Register the custom element so that it can be used as <dark-mode-switch>.
export default () => {
  customElements.define('my-button', button)
}
