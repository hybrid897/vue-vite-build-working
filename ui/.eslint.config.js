/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

export default [{
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting",
    "plugin:storybook/recommended"
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}]
