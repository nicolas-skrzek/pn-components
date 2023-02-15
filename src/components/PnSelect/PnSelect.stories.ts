import PnSelect from './PnSelect.vue'
import { COLOR_STATUS } from '@/const/colors.const'
import { SIZE } from '@/const/size.const'
import { TRUE_FALSE } from '@/const/common.const'

export default {
  title: 'Ponion Components/Form/Select',
  component: PnSelect,
  args: {
    status: 'primary',
    size: 'medium',
    placeholder: 'Select an option',
    disabled: false,
    multiple: false,
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
    ],
  },
  argTypes: {
    status: {
      options: COLOR_STATUS,
      control: { type: 'select' },
    },
    size: {
      options: SIZE,
      control: { type: 'select' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    disabled: {
      options: TRUE_FALSE,
      control: { type: 'boolean' },
    },
    multiple: {
      options: TRUE_FALSE,
      control: { type: 'boolean' },
    },
    items: {
      control: { type: 'object' },
    },
  },
}

const Template = (args: any) => ({
  components: { PnSelect },
  setup() {
    return { args }
  },
  template: '<pn-select v-bind="args" />',
})

export const Default = Template.bind({})
