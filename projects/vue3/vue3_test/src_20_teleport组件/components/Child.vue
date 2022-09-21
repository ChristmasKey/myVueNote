<template>
    <div class="child">
        <h3>我是Child组件</h3>
        <Sun></Sun>
    </div>
</template>

<script>
    import Sun from "./Sun";
    export default {
        name: "Child",
        components: {Sun}
    }
</script>

<style scoped>
    .child {
        background-color: skyblue;
        padding: 10px;
    }
</style>
