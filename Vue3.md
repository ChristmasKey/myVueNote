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



## 4.分析工程结构

分析以vue-cli创建的项目工程结构

