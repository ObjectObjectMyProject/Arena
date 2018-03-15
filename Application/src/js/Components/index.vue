<style lang="scss">
    @import "../../../../Templates/source/scss/webpack-global-styles.scss";
</style>

<template>
        <div id="app">
                <Header></Header>
                <router-view></router-view>
                <Footer></Footer>

                <loginModal></loginModal>
                <registerModal></registerModal>
        </div>
</template>

<script>
    import Header from './header/header.vue';
    import Home from './home/home.vue';
    import Footer from './footer/footer.vue';
    import loginModal from './loginModal/modal.vue';
    import registerModal from './registerModal/registerModal.vue';



    export default {
        name: 'index',
        components: {
            Header,
            Home,
            Footer,
            loginModal,
            registerModal
        }
    }
</script>