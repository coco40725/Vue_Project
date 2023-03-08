<template>
    <div>
        <h1>這是父元件，當前數字: {{ count }}</h1>
        <button @click="add">按鈕</button>
        <br>
        <Son :count="count"></Son>
    </div>
</template>

<script>
    import Son from './Son.vue'
    import {ref} from 'vue'

    export default{
        name: 'FatherButton',
        setup(){
            let count = ref(1)
            function add(){
                count.value ++ 
            }

            return{
                count: count,
                add : add
            }
        },
        components: {Son}
    }
</script>

<style>
    div{
        background-color: beige;
    }
</style>