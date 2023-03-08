<template>
    <div>
        <h2>學生名字: {{studentName}}</h2>
        <h2>學生年齡: {{age}}</h2>
        <button @click="change">按一下加年齡</button>   
    </div>
</template>

<style>
h2{
    color: aquamarine;

}
</style>

<script>
// const student = Vue.extend({
//     data(){
//         return{
//             studentName: "張三",
//             age: 14
//         }
//     },

//     methods: {
//         change(){
//             this.age ++
//         }
//     },
// })

// export default student

// 可以精簡成:
export default {
    name: "Student",
    data(){
        return{
            studentName: "張三",
            age: 14
        }
    },

    methods: {
        change(){
            this.age ++
        }
    },
}
</script>