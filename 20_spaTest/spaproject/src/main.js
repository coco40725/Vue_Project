import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
// app.use 功能: 
// app.use([path], callback) 當 request指定到 path，調用 callback
// app.use(router) 則是將 router 所寫的所有 routes 全數加入
app.use(router)
app.mount("#app")

