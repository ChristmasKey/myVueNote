<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
        <h3>当前求和放大10倍为：{{bigSum}}</h3>
        <h3>我在{{school}}，学习{{subject}}</h3>
        <h3 style="color: red;">Person组件的总人数是：{{personList.length}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

    export default {
        name: "Count",
        data() {
            return {
                n: 1, //用户选择的数字
            }
        },
        computed: {
            //手写计算属性，获取vuex中的状态数据
            /*he() {
                return this.$store.state.sum
            },
            xuexiao() {
                return this.$store.state.school
            },
            xueke() {
                return this.$store.state.subject
            },

            bigSum() {
                return this.$store.getters.bigSum
            },*/

            //借助mapState生成计算属性，获取vuex中的状态数据
            //对象写法
            // ...mapState({he: 'sum', xuexiao: 'school', xueke: 'subject'}),
            //数组写法
            ...mapState(['sum', 'school', 'subject', 'personList']),

            //借助mapGetters生成计算属性，获取vuex中的状态数据
            //对象写法
            // ...mapGetters({bigSum: 'bigSum'}),
            //数组写法
            ...mapGetters(['bigSum'])
        },
        methods: {
            //手写方法，调用vuex中的commit去联系mutations
            /*increment() {
                // this.$store.dispatch('jia', this.n)
                this.$store.commit('JIA', this.n)
            },
            decrement() {
                // this.$store.dispatch('jian', this.n)
                this.$store.commit('JIAN', this.n)
            },*/

            //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations
            //对象写法
            ...mapMutations({increment: 'JIA', decrement: 'JIAN'}),
            //数组写法
            // ...mapMutations(['JIA', 'JIAN']),

            //**********************************************************

            //手写方法，调用vuex中的dispatch去联系actions
            /*incrementOdd() {
                // if (this.$store.state.sum % 2) {
                //     this.$store.dispatch('jia', this.n)
                // }

                this.$store.dispatch('jiaOdd', this.n)
            },
            incrementWait() {
                // setTimeout(() => {
                //     this.$store.dispatch('jia', this.n)
                // }, 1000)

                this.$store.dispatch('jiaWait', this.n)
            },*/

            //借助mapActions生成对应的方法，方法中会调用vuex中的dispatch去联系actions
            //对象写法
            ...mapActions({incrementOdd: 'jiaOdd', incrementWait: 'jiaWait'})
            //数组写法
            // ...mapActions(['jiaOdd', 'jiaWait'])
        },
        mounted() {
            // console.log('Count', this.$store)
            // const x = mapState({he: 'sum', xuexiao: 'school', xueke: 'subject'})
            // console.log(x)
        }
    }
</script>

<style scoped>
    button {
        margin-left: 5px;
    }
</style>
