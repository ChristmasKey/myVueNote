<template>
    <div class="container">
        <Category title="美食">
            <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="food">
        </Category>
        <Category title="游戏">
            <ul>
                <li v-for="(game,index) in games" :key="index">{{game}}</li>
            </ul>
        </Category>
        <Category title="电影">
            <video controls src="http://clips.vorwaerts-gmbh.de/big_duck_bunny.mp4"></video>
        </Category>
    </div>
</template>

<script>
    import Category from "./components/Category";

    export default {
        name: "App",
        data() {
            return {
                foods: ['火锅', '烧烤', '小龙虾', '牛排'],
                games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
                films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《SpringStone》'],
            }
        },
        components: {Category}
    }
</script>

<style>
    .container {
        display: flex;
        justify-content: space-around;
    }

    img, video {
        width: 100%;
    }
</style>