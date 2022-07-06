/*
export const obj = {
    install() {
        console.log('@@@install')
    }
}

export default obj*/

export default {
    install(Vue, x, y, z) {
        // console.log('@@@install', Vue)
        console.log(x, y, z)

        //全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)
        })

        //定义全局指令
        Vue.directive('fbind', {
            bind(element, binding) {
                element.value = binding.value
            },
            inserted(element, binding) {
                element.focus()
            },
            update(element, binding) {
                element.value = binding.value
            }
        })

        //定义全局混入
        Vue.mixin({
            data() {
                return {
                    x: 200,
                    y: 100
                }
            }
        })

        //给Vue原型上添加一个方法（vm 和 vc都能用）
        Vue.prototype.hello = () => {
            alert('Hello There!')
        }
    }
}