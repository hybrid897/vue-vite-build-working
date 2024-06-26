// CardGrid.stories.ts
import CardGrid from './CardGrid.vue'
import SingleCard from './SingleCard.vue'
import Button from '../Button.vue'
const html = String.raw
export default {
  title: 'Components/CardGrid',
  component: { CardGrid, SingleCard }
}

export const Default: any = () => ({
  components: { CardGrid, SingleCard },
  setup() {
    // Simulated data
    const cards = [
      {
        id: 1,
        title: 'Card 1',
        description: 'Description for card 1',
        image: 'https://via.placeholder.com/150'
      },
      {
        id: 2,
        title: 'Card 2',
        description: 'Description for card 2',
        image: 'https://via.placeholder.com/150'
      },
      {
        id: 3,
        title: 'Card 3',
        description: 'Description for card 3',
        image: 'https://via.placeholder.com/150'
      }
    ]

    return { cards }
  },
  template: html`
    <card-grid>
      <single-card
        v-for="card in cards"
        :key="card.id"
        :title="card.title"
        :description="card.description"
        :image="card.image"
      />
    </card-grid>
  `
})
