<template>
    <div class="app">
        <h3>我是App组件（祖组件），{{name}}--{{price}}</h3>
        <Child></Child>
    </div>
</template>

<script>
    import {reactive, provide, toRefs} from 'vue'
    import Child from "./components/Child";

    export default {
        name: "App",
        components: {Child},
        setup() {
            let car = reactive({
                name: '奔驰',
                price: '40万'
            })

            //给自己的后代组件传递数据
            provide('car', car)

            return {
                ...toRefs(car)
            }
        }
    }
</script>

<style scoped>
    .app {
        background-color: gray;
        padding: 10px;
    }
</style>
