import PnList from "./PnList.vue";

export default {
  title: "Nicolas Skrzek/UI Components/List",
  component: PnList,
  args: {
    disabled: false,
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
  },
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: "boolean" },
    },
    items: {
      control: { type: "object" },
    },
  }
}

const Template = (args: any) => ({
  components: { PnList },
  setup() {
    return { args };
  },
  template: `<pn-list v-bind="args" />`
})

export const Default = Template.bind({})
