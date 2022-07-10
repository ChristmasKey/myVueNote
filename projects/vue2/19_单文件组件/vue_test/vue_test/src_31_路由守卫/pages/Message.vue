<template>
    <div>
        <ul>
            <li v-for="msg in messageList" :key="msg.id">
                <router-link :to="{
                    name: 'xiangqing',
                    params: {
                        id: msg.id,
                        title: msg.title
                    }
                }">
                    {{msg.title}}
                </router-link>
                <button @click="pushShow(msg)">push查看</button>
                <button @click="replaceShow(msg)">replace查看</button>
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
        },
        methods: {
            pushShow(msg) {
                this.$router.push({
                    name: 'xiangqing',
                    params: {
                        id: msg.id,
                        title: msg.title
                    }
                }, () => {}, () => {})
            },
            replaceShow(msg) {
                this.$router.replace({
                    name: 'xiangqing',
                    params: {
                        id: msg.id,
                        title: msg.title
                    }
                })
            }
        },
    }
</script>

<style scoped>

</style>