<template>
    <h1>个人信息</h1>

    <!--<h2>姓名：{{name}}</h2>-->
    <!--<h2>年龄：{{age}}</h2>-->
    <!--<h3>工作种类：{{job.type}}</h3>-->
    <!--<h3>工作薪资：{{job.salary}}</h3>-->
    <!--<h3>爱好：{{hobby}}</h3>-->
    <!--<h3>测试数据c：{{job.a.b.c}}</h3>-->

    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h3>工作种类：{{person.job.type}}</h3>
    <h3>工作薪资：{{person.job.salary}}</h3>
    <h3>爱好：{{person.hobby}}</h3>
    <h3>测试数据c：{{person.job.a.b.c}}</h3>

    <button @click="changeInfo">修改个人信息</button>
</template>

<script>
    import {ref, reactive} from 'vue'

    export default {
        name: 'App',
        setup() {
            //ref函数处理：基本类型
            // let name = ref("张三")
            // let age = ref(18)

            //注意：reactive函数无法用来处理基本类型
            // let number = reactive(666)

            //reactive函数处理：对象类型
            /*let job = reactive({
                type: '前端工程师',
                salary: '30K',
                a: {
                    b: {
                        c: 666
                    }
                }
            })*/

            //reactive函数处理：数组类型
            // let hobby = ['抽烟', '喝酒', '烫头']
            // let hobby = reactive(['抽烟', '喝酒', '烫头'])

            //将以上的数据综合在一起
            let person = reactive({
                name: '张胜男',
                age: 18,
                job: {
                    type: '前端工程师',
                    salary: '30K',
                    a: {
                        b: {
                            c: 666
                        }
                    }
                },
                hobby: ['抽烟', '喝酒', '烫头']
            })

            function changeInfo() {
                // name.value = "李四"
                // age.value = 48
                //
                // console.log(job)
                // job.type = 'UI设计师'
                // job.salary = "40K"
                // job.a.b.c = 999
                //
                // hobby[0] = '学习'

                person.name = '李四'
                person.age = 48
                person.job.type = 'UI设计师'
                person.job.salary = '40K'
                person.job.a.b.c = 999
                person.hobby[0] = '学习'
            }

            return {
                // name,
                // age,
                // job,
                // hobby,

                person,

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
