// 引入一個名為 createApp 的 工廠函數
import { createApp } from 'vue'
import App from './App.vue'


// 等價於
// const app = createApp(App)
// app.mount('#app')
// app 的腳色類似於 vue2 的 vm，但更輕，去除掉了許多沒用到的屬性
createApp(App).mount('#app')
