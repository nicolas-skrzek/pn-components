import PnMenu from "./PnMenu.vue"
import PnButton from "./../PnButton/PnButton.vue"
import PnList from "./../PnList/PnList.vue";

export default {
  title: "Ponion Components/Menu",
  component: PnMenu,
    args: {
        isOpen: false,
    },
  argTypes: {
    isOpen: {
      control: { type: "boolean" },
    },
  }
}

const Template = (args: any) => ({
  components: { PnMenu, PnButton, PnList },
  setup() {
    return { args };
  },
  data: () => ({
    isOpen: false,
    items: [
      {
        title: 'Item 1',
        disabled: false,
        link: true,
        value: 1,
      },
      {
        title: 'Item 2',
        disabled: false,
        link: true,
        value: 2,
      },
      {
        title: 'Not a link',
        disabled: false,
        link: false,
      },
      {
        title: 'Item disable',
        disabled: true,
        link: true,
      },
    ]
  }),
  template: `
    <pn-menu>
      <template #activator>
        <pn-button @open="isOpen">open</pn-button>
      </template>
      <template #content>
        <pn-list :items="items" />
      </template>
    </pn-menu>
  `
})

export const Default = Template.bind({})
