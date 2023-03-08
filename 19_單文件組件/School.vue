<template>
    <div>
        <h2>學校名字: {{schoolName}}</h2>
        <h2>學校地址: {{address}}</h2>
        <button @click="show">按一下加年齡</button>   
    </div>
</template>

<style>
h2{
    color: rgb(142, 21, 163);

}
</style>

<script>
// 可以精簡成:
export default {
    name: "School",
    data(){
        return{
            schoolName: "台大",
            address: "大安區"
        }
    },

    methods: {
        show(){
            alert("學校名字: " + this.schoolName)
        }
    },
}
</script>