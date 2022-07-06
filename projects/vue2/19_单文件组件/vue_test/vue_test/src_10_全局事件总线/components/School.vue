<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
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
        mounted() {
            this.$bus.$on('demo', data => {
                console.log('我是School组件，收到了数据', data)
            })
        },
        beforeDestroy() {
            this.$bus.$off('demo')
        }
    }
</script>

<style scoped>
    .school {
        background-color: skyblue;
        padding: 5px;
    }
</style>
