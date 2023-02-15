import PnModal from './PnModal.vue'

export default {
  title: 'Ponion Components/Modal',
  component: PnModal,
}

const Template = (args: any) => ({
  components: { PnModal },
  setup() {
    return { args }
  },
  template: `
    <h2>Modal</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis est finibus, bibendum lectus ut,
    dapibus nunc. Nullam neque nunc, semper a consectetur et, mollis vitae eros. Cras porttitor suscipit libero
    sit amet lobortis. Integer molestie, lorem sed sodales gravida, neque lorem ullamcorper leo, eget vestibulum
    nisi dolor vel lectus. Nunc gravida volutpat purus, ac viverra dolor luctus nec. Sed dignissim eleifend
    sapien eget ultrices. Nam porta augue ut odio rhoncus tincidunt. Fusce at pellentesque quam,
    et vestibulum nisi.</p>
    <p>Proin nec dolor feugiat, laoreet arcu quis, dictum erat. Vestibulum rhoncus lectus sit amet ante
    porttitor efficitur. Etiam aliquet metus et eros interdum semper. In hac habitasse platea dictumst.
    Curabitur aliquam risus ac justo aliquet, ac elementum ante pulvinar. Curabitur in felis ornare orci
    molestie eleifend. Pellentesque pretium libero ut lectus tempus convallis. Mauris vel mi ipsum.
    Morbi eu placerat dui, quis tincidunt tortor. Nunc velit risus, luctus sit amet lacus nec,
    consectetur maximus sapien. Nunc vel fermentum dui. Sed iaculis, enim vitae fringilla congue,
    metus lacus cursus justo, nec sagittis diam lacus in felis. Praesent sagittis, nulla et vulputate 
    sodales, ante massa porta enim, eu congue metus metus consectetur arcu. Sed consequat suscipit dolor,
    quis mollis tellus. Aenean eu urna turpis.</p>
    <pn-modal>
      <template #card-title>
        Card title
      </template>

      <template #card-subtitle>
        Card subtitle
      </template>

      <template #card-content>
        <div>Card content</div>
      </template>
    </pn-modal>
  `,
})

export const Default = Template.bind({})
