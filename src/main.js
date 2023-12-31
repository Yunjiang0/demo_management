import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router as router } from './router'

const app = createApp(App);
app.use(router).mount('#app')
import 'element-plus/theme-chalk/dark/css-vars.css'

