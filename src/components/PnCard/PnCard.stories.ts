import PnCard from "./PnCard.vue"
export default {
  title: "Ponion Components/Card",
  component: PnCard,
}

const Template = (args: any) => ({
  components: { PnCard },
  setup() {
    return { args };
  },
  template: `
    <pn-card>
      <template #title>
        Card title
      </template>

      <template #subtitle>
        Card subtitle
      </template>

      <template #content>
        <div>Card content</div>
      </template>
    </pn-card>
  `
})

export const Default = Template.bind({})
