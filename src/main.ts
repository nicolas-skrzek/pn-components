import { createApp } from 'vue'
import App from './App.vue'

import plugin from './plugins'
import './assets/main.scss'

createApp(App).use(plugin).mount('#app')
