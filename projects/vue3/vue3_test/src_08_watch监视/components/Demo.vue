<template>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="sum++">sum+1</button>
    <hr>
    <h2>当前信息为：{{msg}}</h2>
    <button @click="msg += '!'">修改信息</button>
    <hr>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2>薪资：{{person.job.salary}}K</h2>
    <button @click="person.name+='~'">修改姓名</button>
    <button @click="person.age++">修改年龄</button>
    <button @click="person.job.salary++">升职加薪</button>
</template>

<script>
    import {ref, watch, reactive} from 'vue'

    export default {
        name: "Demo",
        setup() {
            //数据
            let sum = ref(0)
            let msg = ref('Hello There!')
            let person = reactive({
                name: '张三',
                age: 18,
                job: {
                    salary: 20
                }
            })

            //监视
            //情况一：监视ref所定义的响应式数据
            /*watch(sum, (newVal, oldVal) => {
                console.log('sum变了', newVal, oldVal)
            }, {immediate: true})*/

            //情况二：监视ref所定义的多个响应式数据
            /*watch([sum, msg], (newVal, oldVal) => {
                console.log('sum或msg变了', newVal, oldVal)
            }, {immediate: true})*/

            /*
                情况三：监视reactive所定义的一个响应式数据的全部属性
                    1.注意：此处无法正确的获取oldValue
                    2.注意：强制开启了深度监视（deep配置无效）
            */
            /*watch(person, (newVal, oldVal) => {
                console.log('person变化了', newVal, oldVal)
            }, {deep: false})*/

            //情况四：监视reactive所定义的一个响应式数据中的某个属性
            /*watch(() => person.name, (newVal, oldVal) => {
                console.log('person的name变化了', newVal, oldVal)
            })*/

            //情况五：监视reactive所定义的一个响应式数据中的某些属性
            /*watch([() => person.name, () => person.age], (newVal, oldVal) => {
                console.log('person的name或age变化了', newVal, oldVal)
            })*/

            //特殊情况：此处由于监视的是reactive所定义的对象中的某个对象类型属性，所以deep配置有效
            //但是oldVal仍然获取不到
            watch(() => person.job, (newVal, oldVal) => {
                console.log('person的job变化了', newVal, oldVal)
            }, {deep: true})

            //返回一个对象
            return {
                sum,
                msg,
                person,
            }
        },

        //Vue2中属性监视写法
        /*watch: {
            //简写
            /!*sum(newVal, oldVal) {
                console.log('sum的值变化了', newVal, oldVal)
            }*!/

            //完整写法
            sum: {
                immediate: true, //即刻监视
                deep: true, //深度监视
                handler(newVal, oldVal) {
                    console.log('sum值变化了', newVal, oldVal)
                }
            }
        }*/
    }
</script>

<style scoped>

</style>
