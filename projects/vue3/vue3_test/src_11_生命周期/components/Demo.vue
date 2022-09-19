<template>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="sum++">sum+1</button>
</template>

<script>
    import {ref} from 'vue'

    export default {
        name: "Demo",
        setup() {
            //形式
            let sum = ref(0)

            //通过组合式API的形式去使用生命周期钩子
            
            //返回一个对象
            return {
                sum
            }
        },
        //通过配置项的形式使用生命周期钩子
        /*beforeCreate() {
            console.log('---beforeCreate---')
        },
        created() {
            console.log('---created---')
        },
        beforeMount() {
            console.log('---beforeMount---')
        },
        mounted() {
            console.log('---mounted---')
        },
        beforeUpdate() {
            console.log('---beforeUpdate---')
        },
        updated() {
            console.log('---updated---')
        },
        beforeUnmount() {
            console.log('---beforeUnmount---')
        },
        unmounted() {
            console.log('---unmounted---')
        }*/
    }
</script>

<style scoped>

</style>
