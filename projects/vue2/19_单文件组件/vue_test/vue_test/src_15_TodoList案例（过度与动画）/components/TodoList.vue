<template>
    <ul class="todo-main">
        <transition-group appear name="todo">
            <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo"/>
        </transition-group>
    </ul>
</template>

<script>
    import TodoItem from "./TodoItem";

    export default {
        name: "TodoList",
        props: ['todos'],
        components: {
            TodoItem
        }
    }
</script>

<style scoped>
    /*main*/
    .todo-main {
        margin-left: 0;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0;
    }

    /*.todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }*/

    .todo-enter-active {
        animation: spring 1s linear;
    }

    .todo-leave-active {
        animation: spring 1s linear reverse;
    }

    @keyframes spring {
        from {
            transform: translateX(100%);
        }

        to {
            transform: translateX(0%);
        }
    }
</style>