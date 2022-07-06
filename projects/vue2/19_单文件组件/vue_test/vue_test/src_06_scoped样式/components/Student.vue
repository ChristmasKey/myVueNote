<template>
    <div class="student">
        <h2 class="title">学生姓名：{{name}}</h2>
        <h2>学生年龄：{{sex}}</h2>
    </div>
</template>

<script>
    export default {
        name: "Student",
        data() {
            return {
                name: 'Tom',
                sex: 'male'
            }
        }
    }
</script>

<style scoped>
    .student {
        background-color: orange;
    }
</style>