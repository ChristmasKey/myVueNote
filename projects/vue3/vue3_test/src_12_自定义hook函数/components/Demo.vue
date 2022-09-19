<template>
    <h2>当前点击时鼠标的坐标为：x({{point.x}})， y({{point.y}})</h2>
</template>

<script>
    import {reactive, onMounted} from 'vue'

    export default {
        name: "Demo",
        setup() {
            //数据
            let point = reactive({
                x: 0,
                y: 0
            })

            //生命周期
            onMounted(() => {
                window.addEventListener('click', even => {
                    point.x = even.pageX
                    point.y = even.pageY
                    console.log(even.pageX, even.pageY)
                })
            })

            //返回一个对象
            return {
                point
            }
        }
    }
</script>

<style scoped>

</style>