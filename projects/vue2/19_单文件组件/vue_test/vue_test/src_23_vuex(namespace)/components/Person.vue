<template>
    <div>
        <h1>人员列表</h1>
        <h3 style="color: red;">Count组件求和为：{{sum}}</h3>
        <h3>列表中第一个人的名字是：{{firstPersonName}}</h3>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加</button>
        <button @click="addWang">添加王姓</button>
        <button @click="addPersonServer">添加随机姓</button>
        <ul>
            <li v-for="person in personList" :key="person.id">{{person.name}}</li>
        </ul>
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'

    export default {
        name: "Person",
        data() {
            return {
                name: ''
            }
        },
        computed: {
            sum: {
                get() {
                    return this.$store.state.countAbout.sum;
                }
            },
            personList: {
                get() {
                    return this.$store.state.personAbout.personList;
                }
            },
            firstPersonName() {
                return this.$store.getters["personAbout/firstPersonName"]
            }
        },
        methods: {
            add() {
                const personObj = {id: nanoid(), name: this.name}
                this.$store.commit('personAbout/ADD_PERSON', personObj)
                this.name = ''
            },
            addWang() {
                const personObj = {id: nanoid(), name: this.name}
                this.$store.dispatch('personAbout/addPersonWang', personObj)
                this.name = ''
            },
            addPersonServer() {
                this.$store.dispatch('personAbout/addPersonServer')
            }
        }
    }
</script>

<style scoped>

</style>
