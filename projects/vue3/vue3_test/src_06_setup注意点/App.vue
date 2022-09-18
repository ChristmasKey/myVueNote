<template>
    <Demo msg="Hello" school="SpringStone" @hello="showHelloMsg">
        <template v-slot:qwe>
            <span>Spring Stone</span>
        </template>
        <template v-slot:asd>
            <span>Spring Stone</span>
        </template>
    </Demo>
</template>

<script>
    import Demo from "./components/Demo";

    export default {
        name: "App",
        components: {Demo},
        setup() {
            function showHelloMsg(value) {
                alert(`你好啊，你触发了hello事件，我收到的参数是：${value}！`)
            }

            return {
                showHelloMsg
            }
        }
    }
</script>

<style scoped>

</style>