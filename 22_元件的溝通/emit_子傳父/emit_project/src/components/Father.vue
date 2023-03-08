<template>
    <div>
        <h1>這是父元件，來自子元素當前數字: {{ sonValue }}</h1>
        <br>
        <Son @sonButton="sonEvent"></Son>
    </div>
</template>

<script>
    import Son from './Son.vue'
    import {ref} from 'vue'


    export default{
        name: 'FatherValue',

        setup(){
            let sonValue = ref(0);
            function sonEvent(value){
                console.log(value)
                sonValue.value = value
            }

            return{
                sonValue,
                sonEvent
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