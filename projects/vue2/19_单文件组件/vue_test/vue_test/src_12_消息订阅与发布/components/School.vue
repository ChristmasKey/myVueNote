<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'

    export default {
        name: "School",
        data() {
            return {
                name: 'Spring',
                address: 'CHINA'
            }
        },
        methods: {
            demo(msgName, data) {
                console.log(this)
                console.log('hello消息收到了', data)
            }
        },
        mounted() {
            // this.pubId = pubsub.subscribe('hello', (msgName, data) => {
            //     console.log(this)
            //     console.log('有人发布了hello消息，hello消息的回调执行了', msgName, data)
            // })

            this.pubId = pubsub.subscribe('hello', this.demo)
        },
        beforeDestroy() {
            pubsub.unsubscribe(this.pubId)
        }
    }
</script>

<style scoped>
    .school {
        background-color: skyblue;
        padding: 5px;
    }
</style>
