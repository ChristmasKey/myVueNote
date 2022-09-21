<template>
    <div class="sun">
        <h3>我是Sun组件（孙组件），{{car.name}}--{{car.price}}</h3>
    </div>
</template>

<script>
    import {inject} from 'vue'

    export default {
        name: "Sun",
        setup() {
            let car = inject('car')

            return {car}
        }
    }
</script>

<style scoped>
    .sun {
        background-color: orange;
        padding: 10px;
    }
</style>
