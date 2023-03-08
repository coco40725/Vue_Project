<template>
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>

<style>
    div{
        background-color: beige;
    }
</style>

<script>
// 引入組件
    import School from './School.vue'
    import Student from './Student.vue'

    export default{
        name: 'App',
        components:{
            School,
            Student
        }

    }
</script>