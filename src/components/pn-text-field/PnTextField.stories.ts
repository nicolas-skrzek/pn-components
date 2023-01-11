import PnTextField from "./PnTextField.vue";
import { COLOR_STATUS } from "../../const/colors.const";
import { SIZE } from "../../const/size.const";

export default {
  title: "Nicolas Skrzek/UI Components/Form/TextField",
  component: PnTextField,
  args: {
    status: 'primary',
    disabled: false,
    size: 'medium',
    placeholder: 'Text Field',
    prepend: false,
    append: false,
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
    placeholder: {
      control: { type: "text" },
    },
    prepend: {
      options: [true, false],
      control: { type: "boolean" },
    },
    append: {
      options: [true, false],
      control: { type: "boolean" },
    },
  }
}

const Template = (args: any) => ({
  components: { PnTextField },
  setup() {
    return { args };
  },
  template: `
  <pn-text-field v-bind="args">
    <template #prepend v-if="args.prepend">
      <button>pre</button>
    </template>

    <template #append v-if="args.append">
      <button>ap</button>
    </template>
  </pn-text-field>
  `
})

export const Default = Template.bind({})
