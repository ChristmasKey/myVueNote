<template>
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    import School from "./components/School";
    import Student from "./components/Student";

    export default {
        name: "App",
        components: {Student, School}
    }
</script>

<style lang="css">
    .title {
        color: red;
    }
</style>