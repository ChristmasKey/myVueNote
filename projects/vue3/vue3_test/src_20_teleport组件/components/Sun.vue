<template>
    <div class="sun">
        <h3>我是孙组件</h3>
        <Dialog></Dialog>
    </div>
</template>

<script>
    import Dialog from "./Dialog";
    export default {
        name: "Sun",
        components: {Dialog}
    }
</script>

<style scoped>
    .sun {
        background-color: orange;
        padding: 10px;
    }
</style>
