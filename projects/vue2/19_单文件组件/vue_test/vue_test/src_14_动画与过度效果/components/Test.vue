<template>
    <div>
        <button @click="isShow = !isShow">Switch</button>
        <!--<transition name="hello" appear>
            <h1 v-show="isShow">Hello Vue</h1>
        </transition>-->
        <!--多元素过度-->
        <transition-group name="hello" appear>
            <h1 v-show="isShow" key="1">Hello Vue</h1>
            <h1 v-show="!isShow" key="2">Hello Spring</h1>
        </transition-group>
    </div>
</template>

<script>
    export default {
        name: "Test",
        data() {
            return {
                isShow: true,
            }
        },
    }
</script>

<style scoped>
    h1 {
        background-color: orange;
    }

    .hello-enter-active {
        animation: spring 0.3s linear;
    }

    .hello-leave-active {
        animation: spring 0.3s linear reverse;
    }

    @keyframes spring {
        from {
            transform: translateX(-100%);
        }

        to {
            transform: translateX(0%);
        }
    }
</style>