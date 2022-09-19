# Vue3

<img src="https://user-images.githubusercontent.com/499550/93624428-53932780-f9ae-11ea-8d16-af949e16a09f.png"/>

## 1.Vue3简介

- 2020年9月18日，Vue.js发布3.0版本，代号：One Piece（海贼王）
- 耗时2年多
- GitHub上的tags地址：https://gibhub.com/vuejs/vue-next/releases/tag/v3.0.0



## 2.Vue3带来了什么

1.性能的提升

2.源码的升级

<span style="color:red;">3.拥抱TypeScript</span>

<span style="color:red;">4.新的特性</span>

- Composition API（组合API）
  - setup配置
  - ref与reactive
  - watch与watchEffect
  - provide与inject
  - ……
- 新的内置组件
  - Fragment
  - Teleport
  - Suspense
- 其他改变
  - 新的生命周期钩子
  - data选项应始终被声明为一个函数
  - 移除keyCode支持作为v-on的修饰符
  - ……



## 3.创建Vue3.0工程

### 1.使用vue-cli创建

官方文档：https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create

```shell
##查看@vue/cli版本，确保其在4.5.0以上
vue --version

##安装或者升级你的@vue/cli
npm install -g @vue/cli

##创建
vue create vue3_test

##启动
cd vue_test
npm run serve
```



### 2.使用vite创建

官方文档：https://v3.cn.vuejs.org/guide/installation.html#vite

viet官网：https://vitejs.cn

- 什么是vite？——新一代的前端构建工具（现在大多使用webpack）
- 优势：
  - 开发环境中，无需打包操作，可快速的冷启动
  - 轻量快速的热重载（HMR）Hot Module Replacement
  - 真正的按需编译，不再等待整个应用编译完成
- 传统构建与vite构建对比图

<center class="half">
    <img src="./images/传统构建模式.png" width="500" height="300"/>
    <img src="./images/vite构建模式.png" width="500" height="300"/>
</center>



```shell
##创建工程
npm init vite-app <project-name>
#进入工程目录
cd <project-name>
#安装依赖
npm install
#运行
npm run dev
```



### 3.分析工程结构

[Vue3的开发者工具安装](https://blog.csdn.net/ashin8032/article/details/122600345)

以vue-cli创建的项目工程结构

分析入口文件main.js（==不再支持vue2的写法==）

```js
//引入的不再是Vue构造函数了，而是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')
//（对上一行的代码进行分解）

//创建应用实例对象——app（类似于之前Vue2中的vm，但是app比vm更轻）
const app = createApp(App)
// console.log('@@@', app)

//挂载
app.mount("#app")

//卸载
// setTimeout(() => {
//     app.unmount()
// }, 1000)

/*
Vue2中的写法：
const vm = new Vue({
    render: h => h(App)
})
vm.$mount("#app")
*/
```

分析根组件App.vue

```vue
<template>
  <!--Vue3组件中的模板结构，可以没有根标签-->
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>
```



## 4.常用的Composition API

官方文档：https://v3.cn.vuejs.org/guide/composition-api-introduction.html

### 拉开序幕的setup

1、理解：Vue3中一个新的配置项，值是一个函数

2、setup是所有Composition API（组合API）的“表演舞台”

3、==组件中所用到的：数据、方法等等，均要配置在setup中==

4、setup函数的两种返回值：

- 若返回一个对象，则对象中的属性、方法，在模板中均可以直接使用（**重点**）
- 若返回一个渲染函数：则可以自定义渲染内容（了解）

5、注意点：

①尽量不要与Vue2.x配置混用

- Vue2.x配置（data、methods、computed...）中<span style="color:red;">可以访问到</span>setup中的属性、方法
- 但在setup中<span style="color:red;">不能访问到</span>Vue2.x配置
- 如果有重名，setup优先

②setup不能是一个async函数，因为返回值不再是return的对象，而是promise，模板看不到return对象中的属性



### ref函数

1、作用：定义一个响应式的数据

2、语法：`const xxx = ref(initValue)`

- 创建一个包含响应式数据的<strong style="color:red;">引用对象（reference对象，简称ref对象）</strong>
- JS中操作数据：`xxx.value`
- 模板中读取数据：不需要.value，直接：`<div>{{xxx}}</div>`

3、备注：

- 接收的数据可以是：基本类型，也可以是对象类型
- 基本类型的数据：响应式依然是靠`Object.defineProperty()`的`get`与`set`完成的
- 对象类型的数据：内部**“求助”**了Vue3中的一个新函数——`reactive`函数



### reactive函数

1、作用：定义一个<strong style="color:red;">对象类型</strong>的响应式数据（基本类型不要用它，要用`ref`函数）

2、语法：`const 代理对象 = reactive(源对象)`接收一个对象（或数组），返回一个<strong style="color:red;">代理对象（proxy的实例对象，简称proxy对象）</strong>

3、reactive定义的响应式数据是“深层次的”

4、内部基于ES6的Proxy实现，通过代理对象操作源对象内部数据进行操作



### Vue3中的响应式原理

vue2的响应式：

- 实现原理：

  - 对象类型：通过`Object.defineProperty()`对属性的读取、修改进行拦截（数据劫持）
  - 数组类型：通过重写更新数组的一系列方法来实现拦截（对数组的变更方法进行了包裹）

  ```js
  Object.defineProperty(data, 'count', {
      get() {}
      set() {}
  })
  ```

- 存在问题：

  - 新增属性、删除属性、界面不会更新
  - 直接通过下表修改数组，界面不会自动更新



vue3的响应式

- 实现原理：

  - 通过Proxy（代理）：拦截对象中任意属性的变化，包括：属性值的读写、属性的添加、属性的删除等

  - 通过Reflect（反射）：对被代理对象（源对象）的属性进行操作

  - MDN文档中描述的Proxy与Reflect：

    - Proxy：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy

    - Reflect：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect

      ```js
      new Proxy(data, {
          //拦截读取属性值
          get(target, prop) {
              return Reflect.get(target, prop)
          },
          //拦截设置属性值或添加新属性
          set(target, prop, value) {
              return Reflect.set(target, prop, value)
          },
          //拦截删除属性
          deleteProperty(target, prop) {
              return Reflect.deleteProperty(target, prop)
          }
      })
      ```
      
      

### reactive对比ref

- 从定义数据角度对比
  - ref用来定义：基本数据类型
  - reactive用来定义：对象、数组类型数据
  - 备注：ref也可以用来定义对象（或数组）类型数据，它内部会自动通过`reactive`转为<strong style="color:red;">代理对象</strong>
- 从原理角度对比
  - ref通过`Object.defineProperty()`的`get`、`set`来实现响应式（数据劫持）
  - reactive通过使用<strong style="color:red;">Proxy</strong>来实现响应式（数据劫持），并通过<strong style="color:red;">Reflect</strong>操作<strong style="color:orange;">源对象</strong>内部的数据
- 从使用角度对比
  - ref定义的数据：操作对象需要`.value`，读取数据时模板中直接读取<strong style="color:red;">不需要</strong>`.value`
  - reactive定义的数据：操作数据与读取数据<strong style="color:red;">均不需要</strong>`.value`



### setup的两个注意点

- setup执行的时机
  - 在beforeCreate之前执行一次，this是undefined
- setup的参数
  - props：值为对象，包含：组件外部传递过来，且内部声明接收了的属性
  - context：上下文对象
    - attrs：值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性，相当于`this.$attrs`
    - slots：收到的插槽内容，相当于`this.$slots`
    - emit：分发自定义事件的函数，相当于`this.$emit`



### 计算属性与监视

#### 1.computed函数

- 与Vue2中computed配置功能一致

- 写法

  ```js
  import {computed} from 'vue'
  
  setup() {
      ...
      //计算属性--简写
      let fullName = computed(() => {
          return person.firstName + '-' + person.lastName;
      })
      //计算属性--完整
      let fullName = computed({
          get() {
              return person.firstName + '-' + person.lastName
          },
          set(value) {
              const nameArr = value.split('-')
              person.firstName = nameArr[0]
              person.lastName = nameArr[1]
          }
      })
  }
  ```



#### 2.watch函数

- 与Vue2中的watch配置功能一致
- 两个小”坑“
  - 监视reactive定义的响应式数据时：oldValue无法正确获取、强制开启了深度监视（deep配置失效）
  - 监视reactive定义的响应式数据中某个属性时：deep配置有效

```js
//情况一、监视ref定义的响应式数据
watch(sum, (newVal, oldVal) => {
    console.log('sum变化了', newVal, oldVal)
}, {immediate: true})

//情况二、监视多个ref定义的响应式数据
watch([sum, msg], (newVal, oldVal) => {
    console.log('sum或msg变化了', newVal, oldVal)
})

/*
情况三、监视reactive定义的响应式数据
	若watch监视的是reactive定义的响应式数据，则无法正确获取oldVal；
	若watch监视的是reactive定义的响应式数据，则强制开启了深度监视
*/
watch(person, (newVal, oldVal) => {
    console.log('person变化了', newVal, oldVal)
}, {immediate: true, deep: false}) //此处的deep配置不再奏效

//情况四、监视reactive定义的响应式数据中的某个属性
watch(() => person.job, (newVal, oldVal) => {
    console.log("person的job变化了", newVal, oldVal)
}, {immediate: true, deep: true})

//情况五、监视reactive定义的响应式数据中的某些属性
watch([()=>person.name, ()=>person.age], (newVal, oldVal) => {
    console.log("person的name或age变化了", newVal, oldVal)
}, {immediate: true, deep: true})

//特殊情况、监视reactive定义的响应式数据中的对象属性
//此时deep配置是生效的，但是oldVal仍然无法正确获取
watch(()=>person.job, (newVal, oldVal) => {
    console.log('person的job变化了', newVal, oldVal)
}, {immediate: true, deep: true})
```



==watch监视ref数据的说明==

```js
setup() {
    let person = ref({
        name: '张三',
        age: 18,
        job: {
            salary: 20
        }
    })


    /*
        如果使用ref去定义person对象，那么直接监视person其实是监视一个RefImpl对象
        真正的person对象是它的value
        所以我们要正确的监视person有两种方法：
            1、监视person.value
            2、开启深度监视
    */
    watch(person, (newVal, oldVal) => {
        console.log('person改变了', newVal, oldVal)
    }, {deep: true})
    
    return {
        person
    }
}
```



#### 3.watchEffect函数

- watch的套路是：既要指明监视的属性，也要指明监视的回调
- watchEffect的套路是：不用指明监视哪个属性，监视的回调中用哪个属性，那就监视哪个属性
- watchEffect有点像computed：
  - 但computed注重的是计算出来的值（回调函数的返回值），所以必须要写返回值
  - 而watchEffect更注重过程（回调函数的函数体），所以不是必须写返回值

```js
//watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调
watchEffect(() => {
    const x1 = sum.value
    const x2 = person.age
    console.log('watchEffect配置的回调执行了')
})
```



### 生命周期

<img src="./images/Vue3_lifecycle.png" alt="Vue3_lifecycle" style="zoom:50%;" />

Vue3.0中可以继续使用Vue2.x中的生命周期钩子，但有两个被更名了：

- `beforeDestroy`改名为`beforeUnmount`
- `destroy`改名为`unmounted`

Vue3.0也提供了Composition API形式的生命周期钩子，与Vue2.x中钩子对应关系如下：

- `beforeCreate`===>`setup()`
- `created`===>`setup()`
- `beforeMount`===>`onBeforeMount`
- `mounted`===>`onMounted`
- `beforeUpdate`===>`onBeforeUpdate`
