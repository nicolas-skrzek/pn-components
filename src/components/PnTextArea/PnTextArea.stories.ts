import PnTextArea from './PnTextArea.vue'
import { COLOR_STATUS } from '@/const/colors.const'
import { SIZE } from '@/const/size.const'

export default {
  title: 'Ponion Components/Form/TextArea',
  component: PnTextArea,
  args: {
    status: 'primary',
    disabled: false,
    size: 'medium',
    placeholder: 'Text Area',
    name: 'exampleTextArea',
    rows: 5,
    displayDetails: false,
  },
  argTypes: {
    status: {
      options: COLOR_STATUS,
      control: { type: 'select' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    size: {
      options: SIZE,
      control: { type: 'select' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    name: {
      control: { type: 'text' },
    },
    rows: {
      control: { type: 'number' },
    },
    displayDetails: {
      options: [true, false],
      control: { type: 'boolean' },
    },
  },
}

const Template = (args: any) => ({
  components: { PnTextArea },
  setup() {
    return { args }
  },
  data: () => ({
    text: '',
  }),
  template: `
  <pn-text-area v-model="text" v-bind="args" />
  `,
})

export const Default = Template.bind({})
