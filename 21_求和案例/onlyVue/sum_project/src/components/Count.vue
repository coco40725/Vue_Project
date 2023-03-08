<template>
    <div>
        <h2>當前數字為: {{ count }}</h2>
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
                count: 0 // 當前數字
            }
        },
        methods:{
            add() {
                this.count += this.n
            },
            minus() {
                this.count -= this.n
            },
            addWhenOdd() {
                if (this.count % 2 != 0) this.count += this.n
            },
            addLate() {
                setTimeout(() => this.count += this.n, 2000)
            }
        }
    }
</script>

<style>
    button{
        margin-left: 5px;
    }
</style>