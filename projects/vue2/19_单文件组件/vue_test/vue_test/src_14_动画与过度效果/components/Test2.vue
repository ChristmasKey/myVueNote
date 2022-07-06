<template>
    <div>
        <button @click="isShow = !isShow">Switch</button>
        <transition name="hello" appear>
            <h1 v-show="isShow">Hello Vue</h1>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "Test2",
        data() {
            return {
                isShow: true
            }
        },
    }
</script>

<style scoped>
    h1 {
        background-color: pink;
        /*transition: 0.5s linear;*/
    }

    .hello-enter-active, .hello-leave-active {
        transition: 0.5s linear;
    }

    /*进入的起点、离开的终点*/
    .hello-enter, .hello-leave-to {
        transform: translateX(-100%);
    }

    /*离开的起点、进入的终点*/
    .hello-enter-to, .hello-leave {
        transform: translateX(0%);
    }
</style>