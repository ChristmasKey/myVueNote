<template>
    <div>
        <MyForm :disableForm="disableFirstForm" ref="myFirstForm"></MyForm>
        <OtherForm :show-form="showSecondForm"></OtherForm>
    </div>
</template>

<script>
    import MyForm from "./components/MyForm";
    import OtherForm from "./components/OtherForm";

    export default {
        name: "App",
        components: {OtherForm, MyForm},
        data() {
            return {
                disableFirstForm: false,
                showSecondForm: false,
            }
        },
        methods: {
            handleFirstFormSubmit() {
                this.disableFirstForm = true
                this.showSecondForm = true
            }
        },
        mounted() {
            this.$refs.myFirstForm.$on('handleSubmit', this.handleFirstFormSubmit)
        },
        beforeDestroy() {
            this.$refs.myFirstForm.$off('handleSubmit')
        }
    }
</script>
