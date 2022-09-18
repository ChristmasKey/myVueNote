<template>
    <h1>个人信息</h1>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <button @click="test">测试一下触发Demo组件的Hello事件</button>
    <br>
    <slot name="qwe"></slot>
    <br>
    <slot name="asd"></slot>
</template>

<script>
    import {reactive} from 'vue'

    export default {
        name: "Demo",
        props: ['msg', 'school'],
        emits: ['hello'], //此处用来声明绑定了哪些自定义事件
        beforeCreate() {
            console.log('---beforeCreate---')
        },
        setup(props, context) {
            // console.log('---setup---', this)
            console.log('setup: props', props)
            console.log('setup: context', context)
            console.log('context.attrs: ', context.attrs) //相当于vue2中的$attrs
            console.log('context.emits: ', context.emit) //触发自定义事件的
            console.log('context.slots', context.slots)
            //数据
            let person = reactive({
                name: '张三',
                age: 18
            })

            function test() {
                context.emit('hello', 666)
            }
            return {
                person,
                test
            }
        }
    }
</script>

<style scoped>

</style>