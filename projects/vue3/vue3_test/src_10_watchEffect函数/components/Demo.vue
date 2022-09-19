<template>
    <h2>求和的值为：{{sum}}</h2>
    <button @click="sum++">sum+1</button>
    <hr>
    <h2>信息内容为：{{msg}}</h2>
    <button @click="msg+='！'">修改信息</button>
    <hr>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2>薪资：{{person.job.salary}}K</h2>
    <button @click="person.name+='~'">改名</button>
    <button @click="person.age++">改岁</button>
    <button @click="person.job.salary++">升职加薪</button>
</template>

<script>
    import {ref, reactive, watchEffect} from 'vue'

    export default {
        name: "Demo",
        setup() {
            let sum = ref(0)
            let msg = ref('Hello There!')
            let person = reactive({
                name: '张三',
                age: 10,
                job: {
                    salary: 20
                }
            })

            watchEffect(() => {
                const x1 = sum.value
                const x2 = person.job.salary
                console.log('watchEffect配置的回调执行了')
            })

            return {
                sum,
                msg,
                person
            }
        }
    }
</script>

<style scoped>

</style>
