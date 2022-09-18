<template>
    <h1>个人信息</h1>
    姓：<input type="text" v-model="person.firstName">
    <br>
    名：<input type="text" v-model="person.lastName">
    <br>
    <!--<span>全名：{{person.fullName}}</span>-->
    全名：<input type="text" v-model="person.fullName">
</template>

<script>
    import {reactive, computed} from 'vue'

    export default {
        name: "Demo",
        setup() {
            //数据
            let person = reactive({
                firstName: 'Spring',
                lastName: 'Stone',
            })

            //计算属性
            //简写，没有考虑被修改的情况
            /*person.fullName = computed(() => {
                return person.firstName + '-' + person.lastName
            })*/
            //完整写法，考虑读和写
            person.fullName = computed({
                get() {
                    return person.fullName + '-' + person.lastName
                },
                set(value) {
                    const nameArr = value.split('-')
                    person.firstName = nameArr[0]
                    person.lastName = nameArr[1]
                }
            })

            //返回一个对象
            return {
                person
            }
        },
        //计算属性vue2写法
        /*computed: {
            fullName() {
                return this.person.firstName + '-' + this.person.lastName
            }
        }*/
    }
</script>

<style scoped>

</style>