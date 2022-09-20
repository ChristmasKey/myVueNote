<template>
    <h2>当前sum的值为：{{sum}}</h2>
    <button @click="sum++">sum+1</button>
    <br>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>薪资：{{job.salary}}</h2>
    <h3 v-show="person.car">座驾：{{person.car}}</h3>
    <button @click="name+='~'">改名</button>
    <button @click="age++">改岁</button>
    <button @click="job.salary++">升职加薪</button>
    <br><br>
    <button @click="showRawPerson">输出原始的person</button>
    <button @click="addCar">给人加台车</button>
    <button v-show="person.car" @click="person.car.name+='！'">换车名</button>
    <button v-show="person.car" @click="changePrice">换车价</button>
</template>

<script>
    import {reactive, ref, toRaw, toRefs, markRaw} from 'vue'

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

            function showRawPerson() {
                const rawPerson = toRaw(person)
                rawPerson.age++
                console.log('rawPerson: ', rawPerson)

                //toRaw 试试ref定义的响应式对象
                // const rawSum = toRaw(sum)
                // console.log("rawSum", rawSum) //RefImpl
                // console.log(rawSum === sum) //true
            }

            function addCar() {
                let car = {name: '奔驰', price: 40}
                person.car = markRaw(car)
            }

            function changePrice() {
                person.car.price++
                console.log(person.car.price)
            }

            return {
                sum,
                person,
                ...toRefs(person),
                showRawPerson,
                addCar,
                changePrice,
            }
        }
    }
</script>

<style scoped>

</style>