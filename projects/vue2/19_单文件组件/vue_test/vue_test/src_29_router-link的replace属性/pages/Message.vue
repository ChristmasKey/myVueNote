<template>
    <div>
        <ul>
            <li v-for="msg in messageList" :key="msg.id">
                <router-link replace :to="{
                    path: '/home/message/detail',
                    query: {
                        id: msg.id,
                        title: msg.title
                    }
                }">
                    {{msg.title}}
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Message",
        data() {
            return {
                messageList: [
                    {id: '001', title: '消息001'},
                    {id: '002', title: '消息002'},
                    {id: '003', title: '消息003'},
                ]
            }
        }
    }
</script>

<style scoped>

</style>