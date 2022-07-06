<template>
    <div>
        <h2 @click="showName">学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    // import {hunhe, hunhe2} from "../hunhe";

    export default {
        name: "School",
        data() {
            return {
                name: 'Spring',
                address: 'CHINA',
                x: 666,
            }
        },
        /*methods: {
            showName() {
                alert(this.name)
            }
        },*/

        /*mounted() {
            console.log('Hello There!!!!!!!!!!!!!!')
        },*/
        // mixins: [hunhe, hunhe2]
    }
</script>
