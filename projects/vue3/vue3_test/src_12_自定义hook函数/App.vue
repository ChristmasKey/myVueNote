<template>
    <button @click="isShowDemo = !isShowDemo">显示/隐藏</button>
    <Demo v-if="isShowDemo"></Demo>
    <hr>
    <Test></Test>
</template>

<script>
    import {ref} from 'vue'
    import Demo from "./components/Demo";
    import Test from "./components/Test";

    export default {
        name: "App",
        components: {Test, Demo},
        setup() {
            let isShowDemo = ref(true)

            return {
                isShowDemo
            }
        }
    }
</script>

<style scoped>

</style>
