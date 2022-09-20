<template>
    <h4>当前的sum值是：{{sum}}</h4>
    <button @click="sum++">sum+1</button>
    <hr>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>薪资：{{job.salary}}</h2>
    <button @click="name+='~'">改名</button>
    <button @click="age++">改岁</button>
    <button @click="job.salary++">升职加薪</button>
</template>

<script>
    import {shallowReactive, toRefs, shallowRef} from 'vue'

    export default {
        name: "Demo",
        setup() {
            //shallowReactive只考虑第一层数据的响应式
            let person = shallowReactive({
                name: '张三',
                age: 18,
                job: {
                    salary: 20
                }
            })

            let sum = shallowRef(0)

            let x = shallowRef({
                y: 0
            })
            console.log('*****', x)

            return {
                sum,
                ...toRefs(person)
            }
        }
    }
</script>

<style scoped>

</style>
