<template>
    <ul>
        <li v-for="m in this.messageList" :key="m.id">
            <router-link :to="{
                name: 'messageDetail',
                // path: '/home/message/detail',
                query: {
                    id: m.id,
                    title: m.title
                },
                params: {
                    idParams:  'param:' + m.id,
                    titleParams: 'param:' + m.title
                }
            }">
            {{ m.title }} and {{ m.id }}
            </router-link>
        </li>
    </ul>
    <br>
    <router-view></router-view>

</template>

<script>
    export default{
        name: 'MessagePage',

        data(){
            return{
                messageList: [
                    {id: "001", title: "message1"},
                    {id: "002", title: "message2"},
                    {id: "003", title: "message3"}
                ]

            }
        }
    }
</script>