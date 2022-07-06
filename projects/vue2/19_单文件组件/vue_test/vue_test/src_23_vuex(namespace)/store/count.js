export default {
    namespaced: true,
    actions: {
        jia(context, value) {
            context.commit('JIA', value)
        },
        jian(context, value) {
            context.commit("JIAN", value)
        },
        jiaOdd(context, value) {
            if (context.state.sum % 2)
                context.commit('JIA', value)
        },
        jiaWait(context, value) {
            setTimeout(() => {
                context.commit('JIA', value)
            }, 1000)
        }
    },
    mutations: {
        JIA(state, value) {
            state.sum += value
        },
        JIAN(state, value) {
            state.sum -= value
        },
    },
    state: {
        sum: 9,
        school: 'SpringStone',
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}
