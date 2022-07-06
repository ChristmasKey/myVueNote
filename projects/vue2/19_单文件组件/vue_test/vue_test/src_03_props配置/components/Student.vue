<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>学生年龄：{{myAge+1}}</h2>
        <button @click="updateAge">尝试修改收到的年龄</button>
    </div>
</template>

<script>
    export default {
        name: "Student",
        data() {
            return {
                msg: "Spring Stone from World",
                myAge: this.age
            }
        },
        methods: {
            updateAge() {
                this.myAge++
            }
        },
        props: ['name', 'sex', 'age'] //简单接收

        //接收的同时对数据进行类型限制
        /*props: {
            name: String,
            age: Number,
            sex: String
        }*/

        //接收的同时对数据进行类型限制、指定默认值、指定必填性
        /*props: {
            name: {
                type: String,
                required: true
            },
            sex: {
                type: String,
                required: true
            },
            age: {
                type: Number,
                default: 99
            }
        }*/
    }
</script>
