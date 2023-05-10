import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import components from './plugins/index'

import './assets/main.scss'

createApp(App)
  .use(components)
  .use(router)
  .mount('#app')
