<template>
    <div class="container">
        <Category title="游戏">
            <template slot-scope="spring">
                <ul>
                    <li v-for="(g,index) in spring.game" :key="index">{{g}}</li>
                </ul>
            </template>
        </Category>
        <Category>
            <!--es6解构赋值可以简化写法-->
            <template slot-scope="{game}">
                <ol>
                    <li style="color: red" v-for="(g,index) in game" :key="index">{{g}}</li>
                </ol>
            </template>
        </Category>
        <Category>
            <template slot-scope="{game}">
                <h4 v-for="(g,index) in game" :key="index">{{g}}</h4>
            </template>
        </Category>
    </div>
</template>

<script>
    import Category from "./components/Category";

    export default {
        name: "App",
        components: {Category}
    }
</script>

<style>
    .container, .footer {
        display: flex;
        justify-content: space-around;
    }

    img, video {
        width: 100%;
    }

    h4 {
        text-align: center;
    }
</style>
