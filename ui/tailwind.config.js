/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/components/MyButton.ce.vue'],
  theme: {
    extend: {},
    colors: {
      white: '#FFF',
      green: {
        DEFAULT: '#47665E',
        dark: '#194036',
        hover: '#517F3A'
      },

      brown: {
        DEFAULT: '#80331A',
        dark: '#4D240A',
        hover: '#746429'
      }
    }
  },
  plugins: []
}
