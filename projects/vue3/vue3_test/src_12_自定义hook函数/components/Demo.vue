<template>
    <h2>当前点击时鼠标的坐标为：x({{point.x}})， y({{point.y}})</h2>
</template>

<script>
    import {reactive, onMounted, onBeforeUnmount} from 'vue'
    import usePoint from "../hooks/usePoint";

    export default {
        name: "Demo",
        setup() {
            //数据
            let point = usePoint()

            /*let point = reactive({
                x: 0,
                y: 0
            })

            //方法
            function savePoint(event) {
                point.x = event.pageX
                point.y = event.pageY
                console.log(event.pageX, event.pageY)
            }

            //生命周期
            onMounted(() => {
                //绑定“页面点击”事件监听
                window.addEventListener('click', savePoint)
            })

            onBeforeUnmount(() => {
                //移除事件监听
                window.removeEventListener('click', savePoint)
            })*/

            //返回一个对象
            return {
                point
            }
        }
    }
</script>

<style scoped>

</style>
