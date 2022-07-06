//该文件用于创建Vuex中最为核心的store

//引入Vuex
import Vuex from 'vuex'
import Vue from "vue"

Vue.use(Vuex)

//准备actions——用于响应组件中的动作
const actions = {
    jia(context, value) {
        // console.log('actions中的jia被调用了', context, value)
        context.commit('JIA', value)
    },
    jian(context, value) {
        context.commit("JIAN", value)
    },
    jiaOdd(context, value) {
        console.log('jiaOdd处理了一些事情')
        context.dispatch('demo1', value)
    },
    demo1(context, value) {
        console.log('demo1处理了一些事情')
        context.dispatch('demo2', value)
    },
    demo2(context, value) {
        console.log('demo2处理了一些事情')

        if (context.state.sum % 2)
            context.commit('JIA', value)
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit('JIA', value)
        }, 1000)
    }
}
//准备mutations——用于操作状态数据
const mutations = {
    JIA(state, value) {
        // console.log('mutations中的JIA被调用了', state, value)
        state.sum += value
    },
    JIAN(state, value) {
        state.sum -= value
    },
    ADD_PERSON(state, value) {
        console.log('mutations中的ADD_PERSON被调用了')
        state.personList.unshift(value)
    },
}
//准备state——用于存储数据
const state = {
    sum: 9,
    school: 'SpringStone',
    subject: '前端',
    personList: [
        {id: '001', name: '张三'}
    ]
}
//准备getters——用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
