import PnButton from "./PnButton.vue"
import { COLOR_STATUS } from "../../const/colors.const";
import { SIZE } from "../../const/size.const";

export default {
  title: "Ponion Components/Button",
  component: PnButton,
  args: {
    status: 'primary',
    disabled: false,
    size: 'medium',
    href: undefined,
    target: undefined,
  },
  argTypes: {
    status: {
      options: COLOR_STATUS,
      control: { type: "select" },
    },
    disabled: {
      options: [true, false],
      control: { type: "boolean" },
    },
    size: {
      options: SIZE,
      control: { type: "select" },
    },
    href: {
      control: { type: "text" },
    },
    target: {
      control: { type: "text" },
    },
  }
}

const Template = (args: any) => ({
  components: { PnButton },
  setup() {
    return { args };
  },
  template: `
  <pn-button v-bind="args">test</pn-button>
  `
})

export const Default = Template.bind({})
