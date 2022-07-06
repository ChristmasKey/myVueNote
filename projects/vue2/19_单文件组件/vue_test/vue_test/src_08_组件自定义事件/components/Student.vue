<template>
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{sex}}</h2>
        <button @click="sendStudentName">把学生名给App</button>
        <button @click="unbindSpring">解绑spring事件</button>
        <h2>当前求和为：{{number}}</h2>
        <button @click="add">number+1</button>
        <button @click="death">销毁当前Student组件的实例（vc）</button>
    </div>
</template>

<script>
    export default {
        name: "Student",
        data() {
            return {
                name: 'Tom',
                sex: 'male',
                number: 0
            }
        },
        methods: {
            sendStudentName() {
                //触发Student组件实例身上的spring事件
                this.$emit('spring', this.name, 666, 888, 900)
                // this.$emit('demo')
            },
            unbindSpring() {
                this.$off('spring') //解绑单个自定义事件
                // this.$off(['spring', 'demo']) //解绑多个自定义事件
                // this.$off() //解绑所有自定义事件
            },
            add() {
                console.log('add被调用了')
                this.number++
            },
            death() {
                this.$destroy() //销毁了当前Student组件的实例，销毁后所有Student实例的自定义事件全部失效
            }

        }
    }
</script>

<style scoped>
    .student {
        background-color: pink;
        padding: 5px;
        margin-top: 30px;
    }
</style>