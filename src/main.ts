import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { clickOutside } from './utils/directives.utils'

createApp(App)
  .use(router)
  .directive('clickOutside', clickOutside)
  .mount('#app')
