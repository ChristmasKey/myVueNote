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

