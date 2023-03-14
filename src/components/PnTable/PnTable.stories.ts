export default {
  title: 'Ponion Components/Table',
  args: {
    bordered: false,
    headerFixed: false,
    density: 'medium',
    items: [
      {
        name: 'Frozen Yogurt',
        calories: 159,
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
      },
      {
        name: 'Eclair',
        calories: 262,
      },
      {
        name: 'Cupcake',
        calories: 305,
      },
      {
        name: 'Gingerbread',
        calories: 356,
      },
      {
        name: 'Jelly bean',
        calories: 375,
      },
      {
        name: 'Lollipop',
        calories: 392,
      },
      {
        name: 'Honeycomb',
        calories: 408,
      },
      {
        name: 'Donut',
        calories: 452,
      },
      {
        name: 'KitKat',
        calories: 518,
      },
    ],
  },
  argTypes: {
    bordered: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    headerFixed: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    density: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    items: {
      control: { type: 'object' },
    },
  },
}

const Template = (args: any) => ({
  setup() {
    return { args }
  },
  template: `
  <div :style="{
    height: args.headerFixed ? '300px' : 'auto',
    overflow: 'auto',
  }">
  <table :class="[
    'pn-table',
    'density-${args.density}',
    {
      'header-fixed': args.headerFixed,
      'bordered': args.bordered
    }
  ]">
    <thead class="pn-table-head">
      <tr>
        <th class="pn-table-cell text-left">
          Name
        </th>
        <th class="pn-table-cell text-left">
          Calories
        </th>
      </tr>
    </thead>
    <tbody class="pn-table-body">
      <tr
        v-for="item in args.items"
        :key="item.name"
      >
        <td class="pn-table-cell">{{ item.name }}</td>
        <td class="pn-table-cell">{{ item.calories }}</td>
      </tr>
    </tbody>
  </table>
  </div>
  `,
})

export const Default = Template.bind({})
