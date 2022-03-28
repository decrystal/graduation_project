<template>
    <div class='layout'>
        <div class="container">
            <SiderBar :width="width"></SiderBar>
            <div class="main">
                <Product></Product>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
    import {SiderBar,AppMain} from './components/index'
    import Product from './pages/Product.vue'
    export default {
        name:'layout',
        components: {SiderBar, AppMain, Product},

    }
</script>

<style lang='scss' scoped>
    .layout {
        height:calc(100% - 65px);
    }
    .container {
        height: calc(100% - 40px);
        display: flex;
        flex-direction: row;
    }
    .main {
        flex-grow:2;
        overflow: scroll;
        height: calc(100vh - 75px);
    }
</style>