<template>
    <div class="app">
        <h1>{{msg}}</h1>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    import School from "./components/School";
    import Student from "./components/Student";
    export default {
        name: "App",
        data() {
            return {
                msg: 'Hello Vue!'
            }
        },
        components: {Student, School}
    }
</script>

<style scoped>
    .app {
        background-color: gray;
        padding: 5px;
    }
</style>
