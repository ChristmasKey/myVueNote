<template>
    <h2>当前sum的值为：{{sum}}</h2>
    <button @click="sum++">sum+1</button>
    <!--<hr>-->
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>薪资：{{job.salary}}</h2>
    <button @click="name+='~'">改名</button>
    <button @click="age++">改岁</button>
    <button @click="job.salary++">升职加薪</button>
</template>

<script>
    import {ref, reactive, toRefs, readonly, shallowReadonly} from 'vue'

    export default {
        name: "Demo",
        setup() {
            let sum = ref(0)
            let person = reactive({
                name: '张三',
                age: 18,
                job: {
                    salary: 20
                }
            })

            // person = readonly(person)
            person = shallowReadonly(person)

            return {
                sum,
                ...toRefs(person)
            }
        }
    }
</script>

<style scoped>

</style>
