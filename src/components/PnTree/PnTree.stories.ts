import PnTree from "./PnTree.vue"
export default {
  title: "Ponion Components/Tree",
  component: PnTree,
}

const Template = (args: any) => ({
  components: { PnTree },
  setup() {
    return { args };
  },
  data: () => ({
      list: [
          {
              label: "A cool folder",
              children: [
                {
                  label: "A cool sub-folder 1",
                  children: [
                    { label: "A cool sub-sub-folder 1" },
                    { label: "A cool sub-sub-folder 2" }
                  ]
                },
                { label: "This one is not that cool" }
            ],
        },
        {
            label: "A cool folder",
            children: [
              {
                label: "A cool sub-folder 1",
                children: [
                  { label: "A cool sub-sub-folder 1" },
                  { label: "A cool sub-sub-folder 2" }
                ]
              },
              { label: "This one is not that cool" }
          ],
      },
    ],
  }),
  template: `
    <pn-tree :data="list" />
  `
})

export const Default = Template.bind({})
