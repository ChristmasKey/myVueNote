<template>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <!--用toRef时，用下面这行-->
    <!--<h2>薪资：{{salary}}</h2>-->
    <!--用toRefs时，用下面这行-->
    <h2>薪资：{{job.salary}}</h2>

    <button @click="name+='~'">改名</button>
    <button @click="age++">改岁</button>
    <!--用toRef时，用下面这行-->
    <!--<button @click="salary++">升职加薪</button>-->
    <!--用toRefs时，用下面这行-->
    <button @click="job.salary++">升职加薪</button>
</template>

<script>
    import {reactive, toRef, toRefs} from 'vue'

    export default {
        name: "Demo",
        setup() {
            let person = reactive({
                name: '张三',
                age: 18,
                job: {
                    salary: 20
                }
            })

            /*const name1 = person.name
            console.log('$$$$', name1)

            const name2 = toRef(person, 'name')
            console.log('####', name2)*/

            const x = toRefs(person)
            console.log('****', x)

            return {
                /*name: toRef(person, 'name'),
                age: toRef(person, 'age'),
                salary: toRef(person.job, 'salary')*/

                ...toRefs(person)
            }
        }
    }
</script>

<style scoped>

</style>
