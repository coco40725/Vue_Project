<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h2>目前的數字: {{store.state.count}}</h2>
  <br>
  <Calculator1/>
  <br>
  <Calculator2/>
</template>

<script>
import Calculator1 from './components/Calculator1.vue'
import Calculator2 from './components/Calculator2.vue'
import {useStore} from 'vuex'


export default {
  name: 'App',
  setup(){
    const store = useStore()
    // 不要這樣寫:
    // let count = store.state.count 然後 return count
    // 因為 count 不是響應式資料，另外，即使你寫 ref(store.state.count) ，
    // 那麼一樣沒用，因為大家改的是 store.state.count，而沒有去改 count，count 已經固定
    // 除非你又執行一次 count = store.state.count

    return {
      store
    }
    
  },
  components: {
    Calculator1,
    Calculator2
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
