<template>
    <div>
        <h2>這是二號計算機，只會做乘法</h2>
        <select v-model="multipleValue">
            <option :value="1">1</option>
            <option :value="2">2</option>
        </select>
        <button @click="multiple">乘</button> 
    </div>

</template>

<script>
    import {useStore} from 'vuex'

    export default{
        name: 'CalMultiple',
        setup(){
            let multipleValue = 1
            const store = useStore()

            function multiple(){
                store.dispatch('multiple', this.multipleValue)
            }
            
            return {
                multipleValue,
                multiple
            }
        }

    }
</script>

<style>
    div{
        background-color: rgb(155, 214, 164);
    }
</style>