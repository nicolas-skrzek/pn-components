import components from './components'

const comps: any = components

export default {
  install: (app: any) => {
    Object.keys(comps).forEach((k) => {
      const component = comps[k]
      app.component(component.name, component)
    })
  },
}
