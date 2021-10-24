import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import './assets/global.css'

createApp(App).use(router).mount('#app')
