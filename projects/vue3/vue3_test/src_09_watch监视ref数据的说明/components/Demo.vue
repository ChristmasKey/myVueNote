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
    import {ref, watch} from 'vue'

    export default {
        name: "Demo",
        setup() {
            //数据
            let sum = ref(0)
            let msg = ref('你好啊')
            //此处使用ref定义person
            let person = ref({
                name: '张三',
                age: 18,
                job: {
                    salary: 20
                }
            })

            //监视
            watch(sum, (newVal, oldVal) => {
                console.log('sum的值变化了', newVal, oldVal)
            })

            /*
                如果使用ref去定义person对象，那么直接监视person其实是监视一个RefImpl对象
                真正的person对象是它的value
                所以我们要正确的监视person有两种方法：
                1、监视person.value
                2、开启深度监视
             */
            watch(person, (newVal, oldVal) => {
                console.log('person改变了', newVal, oldVal)
            }, {deep: true})

            //返回一个对象
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
