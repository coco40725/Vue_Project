<template>
    <div>
        <h1>這是子元件，當前數字: {{ count2 }}</h1>
        <button @click="add">增加</button>
    </div>
</template>

<script>
    import {ref} from "vue";

    export default{
        name: 'SonButton',

        // emit 是指將子組件的資料傳給父組件， emit("emit 名稱", "傳回的值")
        // 為了讓父組件可以接收，父組件可以透過使用 子組件的 attribute 
        // https://guiblogs.com/vue-emit/
        setup(props, target) {
            let count2 = ref(1)

            function add(){    
                count2.value ++
                target.emit("sonButton", count2.value)
            }

            return {
                count2 : count2,
                add : add
            }

        }
    }


   
</script>

<style>
    div{
        background-color: rgb(178, 246, 147);
    }
</style>