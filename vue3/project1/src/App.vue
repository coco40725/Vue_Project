<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h2>姓名: {{ name }}</h2>
  <h2>年齡: {{ age }}</h2>
  <h2>響應式姓名: {{ nameRef }}</h2>
  <h2>響應式年齡: {{ ageRef }}</h2>
  <h2>響應式title Ref: {{ jobRef.title }}</h2>
  <h2>響應式salary Ref: {{ jobRef.salary }}</h2>
  <h2>響應式title Reactive: {{ jobReactive.title }}</h2>
  <h2>響應式salary Reactive: {{ jobReactive.salary }}</h2>
  <button @click="sayHello">按鈕 MyHello</button>
  <button @click="change1">按鈕 更換非響應式資料</button>
  <button @click="change2">按鈕 更換響應式資料</button>
</template>

<script>
import {ref, reactive} from 'vue'
export default {
  name: 'App',
  // 在 Vue3 中，所有數據方法皆寫在 setup function，
  // 而setup所返回的數據與方法可以直接在 template 使用

  setup(){
    // 非響應式 data
    let name = '張三'
    let age = 18

    // 響應式 data，當資料更新了，vue 也要同時重新 render 頁面
    // ref : 可應用至 基本數據類型與對象，ref 是去抓 RefImp value 的值，所以你更改要去改 .value 的值
    // reactive : 只能用於對象
    let nameRef = ref('張四')
    let ageRef = ref(20)
    let jobRef = ref({
      title: '後端工程師',
      salary: 26000 
    })
    let jobReactive = reactive({
      title: '前端工程師',
      salary: 16000 
    })



    // function
    function sayHello(){
      alert(`我叫 ${name} 今年 ${age} 歲`)
    }

    function change1(){
      name = '張三更改'
      age = 188
    }

    function change2(){
      nameRef.value = '張四更改'
      ageRef.value = 120
      // 輸出 jobRef 你會看到 RefImp
      // 輸出 jobRef.value 你會看到 Proxy({title: '後端工程師', salary: 26000}) 代表這兩個數據已經是響應式數據
      jobRef.value.title = '資深web 仔'
      jobRef.value.salary = 36000

      jobReactive.title = '資深輪班'
      jobReactive.salary = 69000


    }

    return{
      name: name,
      age: age,
      nameRef: nameRef,
      ageRef: ageRef,
      jobRef: jobRef,
      jobReactive: jobReactive,
      sayHello: sayHello,
      change1: change1,
      change2: change2
    }
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
