import Vue from 'vue'
import Vuex from 'vuex'
import count from './count'
import person from "./person";

Vue.use(Vuex)

//求和相关的配置
const countOptions = {
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

//人员管理相关的配置
const personOptions = {
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert('添加的人必须姓王')
            }
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            {id: '001', name: '张三'}
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}

//创建并暴露store
export default new Vuex.Store({
    modules: {
        // countAbout: countOptions,
        countAbout: count,
        // personAbout: personOptions
        personAbout: person
    }
})
