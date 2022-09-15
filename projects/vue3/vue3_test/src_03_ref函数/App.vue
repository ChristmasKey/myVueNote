<template>
    <h1>个人信息</h1>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h3>工作种类：{{job.type}}</h3>
    <h3>工作薪资：{{job.salary}}</h3>
    <button @click="changeInfo">修改个人信息</button>
</template>

<script>
    import {ref} from 'vue'

    export default {
        name: 'App',
        setup() {
            //ref函数处理：基本类型
            let name = ref("张三")
            let age = ref(18)
            //ref函数处理：对象类型
            let job = ref({
                type: 'Java工程师',
                salary: '30K'
            })

            function changeInfo() {
                // name.value = "李四"
                // age.value = 48
                // console.log(name, age)

                console.log(job.value)
                job.value.type = 'UI设计师'
                job.value.salary = "40K"
            }

            return {
                name,
                age,
                job,
                changeInfo
            }
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
