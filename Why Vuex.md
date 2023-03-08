## Vuex 介紹
### 1. Vuex 用途
當元件之間需要共用資料或是互相觸發事件，例如: A 元件要傳資料給 B 元件，或者按下 A 元件中的按鈕後，B 元件要顯示視窗等等，這種跨元件的交流會需要一個類似**公用容器**來進行管理。

### 2. Vuex 結構
Vuex 的基本架構：
- state：存放資料狀態。
- actions：負責**觸發 mutation** 來改變 state 的資料。Actions 會以非同步方式執行程式碼。
- mutations：修改 state 資料，只能同步執行程式。
- getters：取得資料。也可以像 computed 一樣，自定義運算處理資料。
- modules：按專案功能需求，分拆為不同 module。每個 module 裏都有自己的 state、actions、mutations、getters，也可以設定巢狀 modules。

當你建立一個有 Vuex 的 Vue CLI 專案，在 store/index.js 就會出現以下的結構，並先利用 createStore 來建立一個 store 的實體。並 export 回到 main.js 裏使用。


```vue
import { createStore } from 'vuex'

export default createStore({
  state: {
      // 所有在 store 裏的資料
  },
  actions: {
      // 負責觸發 mutations
      // 可處理非同步程式（e.g: 打 API）
  },
  mutations: {
      // 負責改變 state 裏的資料
  },
  getters: {
      // 像 computed 一樣，運算處理 state 資料
  },
  modules: {
      // 按需求分拆 module
      // 每個 module 都有自己的state, actions, mutations, getters, modules
  }
})
```
Vuex 遵從單一資料流。
由畫面觸發事件 --> 觸發 actions --> 觸發 mutations --> 修改 state --> 更新畫面
<img src="https://i.imgur.com/QYaiKyo.png">

#### reference
https://ithelp.ithome.com.tw/m/articles/10270600
