import components from './components'

export default {
  install: (app) => {
    Object.keys(components).forEach((k) => {
      const component = components[k]
      app.component(component.name, component)
    })
  },
}
