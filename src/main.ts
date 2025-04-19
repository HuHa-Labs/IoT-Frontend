import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './plugins/Router'

createApp(App)
.use(router)
.mount('#app')
