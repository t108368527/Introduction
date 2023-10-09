import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Ant Design
import Antd from "ant-design-vue"; 
import * as Icons from '@ant-design/icons-vue'

const icons: any = Icons

const app = createApp(App)

app.use(Antd)
for (const i in icons) {
    app.component(i, icons[i])
}

app.use(createPinia())
app.use(router)

app.mount('#app')
