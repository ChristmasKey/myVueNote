<template>
    <label>
        <input type="text" v-model="keyword">
    </label>
    <h3>{{keyword}}</h3>
</template>

<script>
    import {customRef} from 'vue'

    export default {
        name: "App",
        setup() {

            //自定义一个ref，名为：myRef
            function myRef(value, delay) {
                let timer
                return customRef((track, trigger) => {
                    return {
                        get() {
                            console.log(`有人从myRef这个容器中读取数据了，我把${value}给他了`)
                            track() //通知Vue追踪数据的变化（提前和get商量一下，让他认为这个value是有用的）
                            return value
                        },
                        set(newVal) {
                            console.log(`有人把myRef这个容器中数据改为了：${newVal}`)
                            clearTimeout(timer)
                            timer = setTimeout(() => {
                                value = newVal
                                trigger() //通知Vue去重新解析模板
                            }, 1000)
                        }
                    }
                })
            }

            // let keyword = ref('hello') //使用Vue提供的ref
            let keyword = myRef('hello', 500)

            return {
                keyword
            }
        }
    }
</script>

<style scoped>

</style>
