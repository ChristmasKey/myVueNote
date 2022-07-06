<template>
    <div>
        <h2 @click="showName">学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
    </div>
</template>

<script>
    //引入一个hunhe
    // import {hunhe, hunhe2} from "../hunhe";

    export default {
        name: "Student",
        data() {
            return {
                name: 'Tom',
                sex: 'male'
            }
        },
        /*methods: {
            showName() {
                alert(this.name)
            }
        },*/

        //配置局部混合
        // mixins: [hunhe, hunhe2]
    }
</script>
