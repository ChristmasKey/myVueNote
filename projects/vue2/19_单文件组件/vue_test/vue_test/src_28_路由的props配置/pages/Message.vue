<template>
    <div>
        <ul>
            <li v-for="msg in messageList" :key="msg.id">
                <!--跳转路由并携带params参数，to的字符串写法-->
                <!--<router-link :to="`/home/message/detail/${msg.id}/${msg.title}`">{{msg.title}}</router-link>&nbsp;&nbsp;-->

                <!--跳转路由并携带params参数，to的对象写法-->
                <router-link :to="{
                    //此处只能使用name，不能使用path指定路由
                    name: 'xiangqing', //通过命名指定路由
                    query: {
                        id: msg.id,
                        title: msg.title
                    }
                }">
                    {{msg.title}}
                </router-link>&nbsp;&nbsp;
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
                    {id: "001", title: "消息001"},
                    {id: "002", title: "消息002"},
                    {id: "003", title: "消息003"},
                ]
            }
        }
    }
</script>

<style scoped>

</style>
