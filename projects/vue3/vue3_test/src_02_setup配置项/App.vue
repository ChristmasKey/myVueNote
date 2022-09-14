<template>
    <h1>个人信息</h1>
    <h2>{{name}}</h2>
    <h2>{{age}}</h2>
    <button @click="sayHello">打招呼——sayHello</button>
    <br><br>
    <button @click="welcome">打招呼——welcome</button>
    <br><br>
    <button @click="test1">测试一下在Vue2的配置中去读取Vue3中的数据、方法</button>
    <br><br>
    <button @click="test2">测试一下在Vue3的setup的配置中去读取Vue2中的数据</button>
</template>

<script>
    import {h} from 'vue'

    export default {
        name: 'App',
        data() {
            return {
                sex: '男',
            }
        },
        methods: {
            welcome() {
                alert('Welcome to Here!')
            },
            test1() {
                console.log(this.sex)
                console.log(this.name)
                console.log(this.age)
                console.log(this.sayHello)
                // this.sayHello()
            }
        },
        //此处只是测试一下setup，暂时不考虑响应式的问题
        setup() {
            //数据
            let name = "张三"
            let age = 18

            //方法
            function sayHello() {
                alert(`我叫${name}，我${age}岁了，你好啊！`)
            }


            function test2() {
                console.log(name)
                console.log(age)
                console.log(sayHello)
                console.log(this.sex)
                console.log(this.welcome)
            }

            //返回一个对象（常用）
            return {
                name,
                age,
                sayHello,
                test2
            }

            //返回一个函数（渲染函数）
            // return () => h('h1', 'SpringStone')
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
