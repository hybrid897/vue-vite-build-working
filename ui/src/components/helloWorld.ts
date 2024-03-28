import { defineCustomElement } from 'vue'
import HelloWorld from './HelloWorld.ce.vue'

// Vue generates a new HTML element class from the component definition.
const helloWorld = defineCustomElement(HelloWorld)

// Register the custom element so that it can be used as <dark-mode-switch>.
export default () => {
  customElements.define('hello-world', helloWorld)
}
