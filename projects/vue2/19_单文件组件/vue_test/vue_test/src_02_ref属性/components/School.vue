<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="showName">提示学校名称</button>
    </div>
</template>

<script>
    export default {
        name: "School",
        data() {
            return {
                name: 'Spring',
                address: 'CHINA'
            }
        },
        methods: {
            showName() {
                alert(this.name)
            }
        }
    }
</script>

<style scoped>
    .school {
        background-color: skyblue;
    }
</style>