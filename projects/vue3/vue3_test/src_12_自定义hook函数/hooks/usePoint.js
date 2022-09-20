import {onBeforeUnmount, onMounted, reactive} from "vue";

export default function() {
    //实现鼠标“打点”
    //数据
    let point = reactive({
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
        //绑定“页面点击”事件监听（相同的事件监听会重复绑定）
        window.addEventListener('click', savePoint)
    })

    onBeforeUnmount(() => {
        //移除事件监听
        window.removeEventListener('click', savePoint)
    })

    return point
}
