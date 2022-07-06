<template>
    <div id="app">
        <h1>Hello Vue!</h1>
        <hr>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    import School from "../src_01_分析脚手架/components/School";
    import Student from "../src_01_分析脚手架/components/Student";

    export default {
        name: 'App',
        components: {
            Student,
            School,
        }
    }
</script>

