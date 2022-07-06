<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)">
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input v-show="todo.isEdit"
                   type="text" :value="todo.title" @blur="handleBlur($event, todo)"
                   ref="inputTitle">
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <!--新增编辑功能-->
        <button class="btn btn-edit" v-show="!todo.isEdit" @click="handleEdit(todo)">编辑</button>
    </li>
</template>

<script>
    import pubsub from 'pubsub-js'

    export default {
        name: "TodoItem",
        methods: {
            handleCheck(id) {
                //通知App组件将对应的todo对象的done值取反
                this.$bus.$emit('checkTodo', id)
            },
            handleDelete(id) {
                if (confirm('确定删除吗？')) {
                    // this.$bus.$emit('deleteTodo', id)

                    //消息发布
                    pubsub.publish('deleteTodo', id)
                }
            },
            handleEdit(todo) {
                if (todo.hasOwnProperty('isEdit')) {
                    todo.isEdit = true
                } else {
                    this.$set(todo, 'isEdit', true)
                }

                this.$nextTick(function () {
                    //聚焦编辑输入框
                    this.$refs.inputTitle.focus()
                })
            },
            //失去焦点回调（真正执行修改逻辑）
            handleBlur(e, todo) {
                todo.isEdit = false
                if (!e.target.value) return alert('输入不能为空')
                this.$bus.$emit('updateTodo', todo.id, e.target.value)
            }
        },
        props: ['todo']
    }
</script>

<style scoped>
    /*item*/
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }

    li:hover {
        background-color: #ddd;
    }

    li:hover button {
        display: block;
    }
</style>