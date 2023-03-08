<template>
    <div>
        <h2>當前數字為: {{ $store.state.count }}</h2>
        <select v-model="n">
            <!-- 注意: attribute 加了 : 代表 "" 裡面的資料將視為 js expression -->
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        
        <button @click="add">+</button>
        <button @click="minus">-</button>
        <button @click="addWhenOdd">當是奇數時加1</button>
        <button @click="addLate">等2秒再加</button>
    </div>
</template>

<script>
    export default{
        name: 'CountCalc',
        data(){
            return{
                n: 1, // 用戶選擇的數字
            }
        },
        methods:{
            add() {
                console.log(this.$store)
                this.$store.dispatch('add', this.n)
            },

            minus() {
                this.$store.dispatch('minus', this.n)
            },

            addWhenOdd() {
                this.$store.dispatch('addWhenOdd', this.n)
            },
            addLate() {
                this.$store.dispatch('addLate', this.n)
            }
        }
    }
</script>

<style>
    button{
        margin-left: 5px;
    }
</style>