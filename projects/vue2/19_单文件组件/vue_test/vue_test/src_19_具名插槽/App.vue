<template>
    <div class="container">
        <Category title="美食">
            <img slot="center" src="https://t7.baidu.com/it/u=760837404,2640971403&fm=193&f=GIF" alt="food">
            <a slot="footer" href="http://www.baidu.com">更多美食</a>
        </Category>
        <Category title="游戏">
            <ul slot="center">
                <li v-for="(g,index) in game" :key="index">{{g}}</li>
            </ul>
            <div class="footer" slot="footer">
                <a href="http://www.baidu.com">单机游戏</a>
                <a href="http://www.baidu.com">网络游戏</a>
            </div>
        </Category>
        <Category title="电影">
            <video controls
                   slot="center"
                   src="https://vd2.bdstatic.com/mda-jdbg1t1bcbam64ki/mda-jdbg1t1bcbam64ki.mp4"></video>
            <template v-slot:footer>
                <div class="footer">
                    <a href="http://www.baidu.com">经典</a>
                    <a href="http://www.baidu.com">热门</a>
                    <a href="http://www.baidu.com">推荐</a>
                </div>
                <h4>欢迎前来观影</h4>
            </template>
        </Category>
    </div>
</template>

<script>
    import Category from "./components/Category";

    export default {
        name: "App",
        data() {
            return {
                food: ['火锅', '冒菜', '麻辣烫', '饺子',],
                game: ['劲舞团', 'QQ飞车', 'DNF', 'LOL',],
                film: ['《让子弹飞》', '《天下无贼》', '《剑雨》', '《SpringStone》',],
            }
        },
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
