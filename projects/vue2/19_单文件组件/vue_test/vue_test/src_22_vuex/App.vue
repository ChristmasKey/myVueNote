<template>
    <div>
        <Count/>
        <hr>
        <Person/>
    </div>
</template>

<script>
    import Count from "./components/Count";
    import Person from "./components/Person";
    export default {
        name: "App",
        components: {Person, Count},
        mounted() {
            // console.log('App', this.$store)
        }
    }
</script>

<style scoped>

</style>