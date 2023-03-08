<template>
    <div>
        <h2>這是一號計算機，只會做加法</h2>
        <select v-model="addValue">
            <option :value="1">1</option>
            <option :value="2">2</option>
        </select>
        <button @click="add">加</button> 
    </div>

</template>

<script>
    import {useStore} from 'vuex'

    export default{
        name: 'CalAdd',
        setup(){
            let addValue = 1
            const store = useStore()

            function add(){
                console.log(this)
                console.log("this.addValue:" + this.addValue)
                console.log("addValue:" + addValue)

                store.dispatch('add', this.addValue)
            }
            
            return {
                addValue,
                add
            }
        }

    }
</script>

<style>
    div{
        background-color: antiquewhite;
    }
</style>