<template>
    <ul>
        <h2 :style="{opacity}">Welcome Vue!</h2>
        <li>News001 <input type="text"></li>
        <li>News002 <input type="text"></li>
        <li>News003 <input type="text"></li>
    </ul>
</template>

<script>
    export default {
        name: "News",
        data() {
            return {
                opacity: 1
            }
        },
        activated() {
            console.log('News组件被激活了')
            this.timer = setInterval(() => {
                this.opacity -= 0.01
                if (this.opacity <= 0) this.opacity = 1
            }, 10)
        },
        deactivated() {
            console.log('News组件失活了')
            clearInterval(this.timer)
        }
    }
</script>

<style scoped>

</style>