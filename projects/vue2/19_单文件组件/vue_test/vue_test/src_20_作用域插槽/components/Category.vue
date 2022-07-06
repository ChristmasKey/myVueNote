<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <!--定义一个插槽（挖坑，等着组件的使用者填坑）-->
        <slot :game="game" msg="hello">我是默认的一些内容</slot>
    </div>
</template>

<script>
    export default {
        name: "Category",
        props: ['title'],
        data() {
            return {
                game: ['劲舞团', 'QQ飞车', 'DNF', 'LOL',],
            }
        }
    }
</script>

<style scoped>
    .category {
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }

    h3 {
        text-align: center;
        background-color: orange;
    }
</style>
