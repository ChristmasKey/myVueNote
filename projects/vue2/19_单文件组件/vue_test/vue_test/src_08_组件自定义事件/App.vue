<template>
    <div class="app">
        <h1>{{msg}}，学生的姓名是：{{stuName}}</h1>
        <!--通过父组件给子组件传递函数类型的props实现：子给父传递数据-->
        <School :getSchoolName="getSchoolName"></School>

        <!--通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（写法一：使用@或v-on）-->
        <Student v-on:spring="getStudentName" @demo="m1"></Student>
        <!--<Student @spring.once="getStudentName"></Student>-->

        <!--通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（写法一：使用ref 灵活！！！）-->
        <Student ref="student" @click.native="show"></Student>
        <!--注意点二：给自定义组件绑定原生事件，需要使用native修饰符-->
    </div>
</template>

<script>
    import School from "./components/School";
    import Student from "./components/Student";

    export default {
        name: "App",
        data() {
            return {
                msg: 'Hello Vue!',
                stuName: ''
            }
        },
        methods: {
            getSchoolName(name) {
                console.log('App收到了学校名：', name)
            },
            getStudentName(name, ...params) {
                console.log('App收到了学生名：', name, params)
                this.stuName = name
            },
            m1() {
                console.log('demo事件被触发了！')
            },
            show() {
                alert(123)
            }
        },
        mounted() {
            //绑定自定义事件
            this.$refs.student.$on('spring', this.getStudentName)

            //延迟3秒后给Student组件绑定spring事件
            // setTimeout(() => {
            //     this.$refs.student.$on('spring', this.getStudentName)
            // }, 3000)

            //绑定spring事件，并且只能触发一次
            // this.$refs.student.$once('spring', this.getStudentName)

            //注意点一：
            //有效写法：this是App组件实例对象
            // this.$refs.student.$on('spring', (name, ...params) => {
            //     console.log('App收到了学生名：', name, params)
            //     this.stuName = name
            // })

            //无效写法：this是Student组件实例对象
            // this.$refs.student.$on('spring', function (name, ...params) {
            //     console.log('App收到了学生名：', name, params)
            //     this.stuName = name
            // })
        },
        components: {Student, School}
    }
</script>

<style scoped>
    .app {
        background-color: gray;
        padding: 5px;
    }
</style>