import { createApp } from 'vue'
import App from './App.vue'
import components from './plugins/index'

import './assets/main.scss'

createApp(App).use(components).mount('#app')
