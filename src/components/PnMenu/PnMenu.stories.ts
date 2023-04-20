import PnMenu from './PnMenu.vue'
import PnButton from '../PnButton/PnButton.vue'
import PnList from '../PnList/PnList.vue'

export default {
  title: 'Ponion Components/Menu',
  component: PnMenu,
  args: {
    disabled: false,
    closeOnClickContent: true,
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    closeOnClickContent: {
      control: { type: 'boolean' },
    },
  },
}

const Template = (args: any) => ({
  components: { PnMenu, PnButton, PnList },
  setup() {
    return { args }
  },
  data: () => ({
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
        value: 3,
      },
      {
        title: 'Item disable',
        disabled: true,
        link: true,
        value: 4,
      },
    ],
  }),
  template: `
    <pn-menu :disabled="args.disabled" :closeOnClickContent="args.closeOnClickContent">
      <template #activator>
        <pn-button>open</pn-button>
      </template>
      <template #content>
        <pn-list :items="items" />
      </template>
    </pn-menu>
  `,
})

export const Default = Template.bind({})
