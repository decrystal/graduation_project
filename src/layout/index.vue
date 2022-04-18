<template>

  <div class='layout'>
    <Header v-show="$route.meta.showHeader"></Header>
    <div class="container">
      <SiderBar></SiderBar>
      <div class="main">
        <AppMain></AppMain>
      </div>
    </div>
  </div>
</template>

<script lang='ts' scoped>
import { SiderBar, AppMain } from "./components/index";
import Header from "@/components/Header.vue";
import Product from "@/layout/pages/Product.vue";
export default {
  name: "layout",
  components: { SiderBar, AppMain, Product, Header },
};
</script>

<style lang='scss' scoped>
.layout {
  height: 100vh;
}
.container {
  height: calc(100% - 0.8rem);
  display: flex;
  flex-direction: row;
}
.main {
  flex-grow: 2;
  box-sizing: border-box;
  overflow: scroll;
  height: 100%;
}
</style>