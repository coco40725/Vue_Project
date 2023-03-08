import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // 因為我們import 的 vue 版本是 runtime vue，而非完整的 vue，因此他無法解析template option 裡面的任何 tag，也就是看不懂 <h1></h1>，
  // 如果要解析 tag，那麼需要 render function，
  // render(createElement) : {
  //   return('h1','你好')
  // }
  // 等價於解析 <h1>你好</h1>
  // 而這個又可以簡寫:  render: h => h('h1', '你好'),
  render: h => h(App),
}).$mount('#app')
