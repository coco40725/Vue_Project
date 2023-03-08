<template>
    <!-- query, parmas 的資料放在 $route -->
    <!-- 
        parmas 有幾點需要注意:
        1. router-link 只能採用 name 來指定對應的 url:
            name: 'messageDetail' -- okay
            path: '/home/message/detail' --not okay
        2.  routes 的 path 需要使用佔位符:
            path: '/home/message/detail/:id/:title',
     -->
    <ul>
        <li>消息編號: {{id}}</li>
        <li>消息訊息: {{title}}</li>
        <li>消息編號_parm: {{idParams}}</li>
        <li>消息訊息_parm: {{titleParams}}</li>
    </ul>
</template>

<script>
    export default{
        name: 'DetailPage',
        mounted(){
            console.log(this.$route)
        },
        // props 用於接收 route 那裏的資料
        props: ['id', 'title', 'idParams', 'titleParams']
    }
</script>